<template>
  <input
    list="queries"
    style="width:90%;height:30px"
    type="text"
    @change="onchange"
    @keyup="onchange"
  >
  <datalist id="queries">
    <option v-for="item in items">
      {{ item }}
    </option>
  </datalist>

  <p />&nbsp;<p />

  <div
    id="fieldValues"
    v-html="fieldValues"
  />
  <p />
  <p />

  <div
    v-if="fieldValues"
    id="helper"
  >
    where:<p />
    <div class="field-value">
      field-value
    </div><br>
    <div class="field-name">
      field-name
    </div><br>
    <div class="or-list">
      or
    </div><br>
    <div class="and-list">
      and
    </div><br>
    <div class="exclusion">
      exclusion
    </div><br>
    <div class="grouping">
      grouping
    </div><br>
    <div class="clause">
      clause
    </div><br>
  </div>
  <p />
  <div v-if="kqueryCode">
    Kquery (Antlr4):
    <KCodeBlock
      id="my-code-block"
      :code="kqueryCode"
      is-processing
      language="json"
      max
      max-height="400px"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ParseTreeWalker, CharStream, CommonTokenStream } from 'antlr4'
import eL from './error-listener'

import { KQueryParser, KQueryLexer, KQueryParserListener } from '@kong/kquery-parser'

import type {
  UnionContext,
  FieldValueContext,
  FieldNameContext,
  ClauseContext,
  EntityClauseContext,
  IntersectionContext,
  ExclusionContext,
  GroupingContext,
} from '@kong/kquery-parser'

const kqueryCode = ref<string>('')
const fieldValues = ref<string>('')

const items = [
  '(geo.country: "United Kingdom" OR geo.country: Iceland) OR geo.city: London',
  '@geo.country:("United Kingdom" OR Iceland) @geo.city:LOndon - this pone doesn\'t work till TPS-1813 is resolved',
  'KAuth',
  'Kauth OR Kaudit',
  'Kauth AND Production',
  'tag:prod tag:new',
  'label.env:prod AND label.team:kauth',
  '(type: routes OR type: SNIs) AND label.team:kauth',
  'type:routes OR (type:SNIs AND label.team:kauth)',
  '(type:routes AND label.team::kauth) OR (type:" SNIs" AND label.team:"ksearch")',
  '@name:"KSearch Service"',
]

const onchange = (ev) => {
  console.log(ev.target.value)
  fieldValues.value = ''
  try {
    const chars = new CharStream(ev.target.value) // replace this with a FileStream as required
    console.log('chars', chars)
    const lexer = new KQueryLexer(chars)
    console.log('lexer', lexer)
    const tokens = new CommonTokenStream(lexer)
    console.log('tokens', tokens)
    const parser = new KQueryParser(tokens)
    parser.removeErrorListeners()
    parser.addErrorListener(new eL())

    const tree = parser.result()
    console.log('tree', tree)

    kqueryCode.value = tree.toStringTree(['result'], parser)

    const fieldValuesArray = []
    class MyTreeWalker extends KQueryParserListener {
      exitFieldValue = (ctx: FieldValueContext) => {
        console.log('exitFieldValue:', ctx)
        fieldValuesArray.push({
          idx: ctx.start.start,
          type: 'value',
          html: '<div class="field-value">' +
          ev.target.value.substring(ctx.start.start, ctx.start.stop + 1) +
          '</div>',
        })
      }

      exitFieldName = (ctx: FieldNameContext) => {
        console.log('exitFieldName:', ctx)
        fieldValuesArray.push({
          idx: ctx.start.start,
          type: 'name',
          html: '<div class="field-name">' +
          ev.target.value.substring(ctx.start.start, ctx.start.stop + 1) + ':' +
          '</div>',
        })
      }

      exitClause = (ctx: ClauseContext) => {
	      console.log('exitClause:', ctx)
        fieldValuesArray.push({
          idx: ctx.start.start,
          type: 'clause-start',
          html: '<div class="clause">',
        })
        fieldValuesArray.push({
          idx: ctx.stop?.stop,
          type: 'clause-end',
          html: '</div>',
        })

      }

      exitEntityClause = (ctx: EntityClauseContext) => {
        console.log('exitEntityClause:', ctx)
        fieldValuesArray.push({
          idx: ctx.stop?.stop,
          type: 'entry-clause',
          html: '<div class="field-name entity-clause">' +
            ev.target.value.substring(ctx.start.start, ctx.start.stop + 1) +
            '</div>',
        })
      }

      exitGrouping = (ctx: GroupingContext) => {
        console.log('exitGrouping:', ctx)
        fieldValuesArray.push({
          idx: ctx.start.start,
          type: 'group-start',
          html: '<div class="grouping">',
        })
        fieldValuesArray.push({
          idx: ctx.stop?.start,
          type: 'group-end',
          html: '</div>',
        })
      }

      exitIntersection = (ctx: IntersectionContext) => {
        console.log('exitIntersection:', ctx)
        ctx.and_list().map((oE) => {
          console.log('oE:', oE)
          fieldValuesArray.push({
            idx: oE.start.start,
            type: 'and',
            html: '<div class="and-list">' +
              ev.target.value.substring(oE.start.start, oE.start.stop + 1) +
              '</div>',
          })
        })
      }

      exitExclusion = (ctx: ExclusionContext) => {
        console.log('exitExclusion:', ctx)
        fieldValuesArray.push({
          idx: ctx.start.start,
          type: 'exclusion',
          html: '<div class="exclusion">-</div>',
        })
      }

      exitUnion = (ctx: UnionContext) => {
        console.log('exitUnion:', ctx)
        ctx.or_list().map((oE) => {
          fieldValuesArray.push({
            idx: oE.start.start,
            type: 'or',
            html: '<div class="or-list">' +
            ev.target.value.substring(oE.start.start, oE.start.stop + 1) +
            '</div>',
          })
        })
      }
    }
    const walker = new MyTreeWalker()
    ParseTreeWalker.DEFAULT.walk(walker, tree)

    fieldValuesArray.sort((a, b) => {

      if (a.idx === b.idx) {
        if (a.type === 'clause-start') {
          return -1
        }
      }
      return a.idx - b.idx
    })
    console.log('fieldValuesArray', fieldValuesArray)
    // fieldValues.value = fieldValuesArray.sort((a, b=> a[])).join('')
    // console.log(fieldValues.value)
    fieldValuesArray.map((a) => {
      fieldValues.value = fieldValues.value + a.html
    })
    console.log('here:', fieldValues.value)
  } catch (e) {
    console.error('!!!!!!!', e)
    kqueryCode.value = e.message
  }

}
</script>

<style lang="scss">

#fieldValues {
  padding: 10px;
  border: 1px solid gray;
  div {
    display: inline-block;
  }
}

#fieldValues, #helper {
  div {
    display: inline-block;

    &.field-value {
      background-color: green;
      margin:4px;
    }

    &.field-name {
      background-color: red;
      margin:0px;
    }

    &.or-list {
      background-color: yellow;
      margin:4px;
      color: red;
    }

    &.and-list {
      background-color: lightyellow;
      margin:4px;
      color: red;
    }

    &.exclusion {
      background-color: magenta;
      margin:4px;
    }

    &.grouping {
      background-color: lightgray;
      padding: 4px;
      margin: 0 4px 0 4px;
      display: inline-block;
      border: 1px solid gray;
    }
    &.clause {
      background-color: lightblue;
      padding: 4px;
      margin: 0 4px 0 4px;
      border: 1px solid blue;
    }
  }
}
</style>
../antlr4/new/KQueryParser../antlr4/new/KQueryLexer../antlr4/new/KQueryParserListener../antlr4/new/KQueryParser
