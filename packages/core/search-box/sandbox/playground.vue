<template>
  <input
    list="queries"
    style="width:90%;height:30px"
    type="text"
    @change="onchange"
  >
  <datalist id="queries">
    <option v-for="item in items">
      {{ item }}
    </option>
  </datalist>

  <p />&nbsp;<p />
  lucene-query-parser (Antlr4):
  <KCodeBlock
    id="my-code-block"
    :code="antlr4Code"
    is-processing
    language="json"
    max
    max-height="400px"
  />

  <p />&nbsp;<p />
  lucene-query-parser (PEG):
  <KCodeBlock
    id="my-code-block"
    :code="luceneCode"
    is-processing
    language="json"
    max
    max-height="400px"
  />

  <p />&nbsp;<p />
  Wanny's kquery parser:
  <KCodeBlock
    id="my-code-block"
    :code="kqueryCode"
    is-processing
    language="json"
    max
    max-height="400px"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import luceneParser from 'lucene-query-parser'
import GrammarParser from './../src/antlr4/ElasticsearchGrammarParser'
import GrammarLexer from './../src/antlr4/ElasticsearchGrammarLexer'
import MyGrammarListener from './../src/antlr4/ElasticsearchGrammarListener'

import antlr4, { ParseTreeWalker, CharStream, CommonTokenStream } from 'antlr4'
import eL from './error-listener'

const luceneCode = ref<string>('')
const kqueryCode = ref<string>('')
const antlr4Code = ref<string>('')

const items = [
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
  try {
    luceneCode.value = JSON.stringify(luceneParser.parse(ev.target.value), null, 2)
  } catch (e) {
    luceneCode.value = e.message
  }
  try {
    kqueryCode.value = parsePEG(ev.target.value)
  } catch (e) {
    kqueryCode.value = e.message
  }
  try {
    const chars = new antlr4.InputStream(ev.target.value) // replace this with a FileStream as required
    console.log('chars', chars)
    const lexer = new GrammarLexer(chars)
    console.log('lexer', lexer)
    const tokens = new antlr4.CommonTokenStream(lexer)
    console.log('tokens', tokens)
    const parser = new GrammarParser(tokens)
    parser.removeErrorListeners()
    parser.addErrorListener(new eL())

    const tree = parser.mainQ()
    console.log('tree', tree)
    antlr4Code.value = tree.toStringTree(['mainQ'], parser)

    class MyTreeWalker extends MyGrammarListener {

      exitMyStartRule = (ctx: MyStartRuleContext) => {
        console.log('In MyStartRule')
      }

    }
    const walker = new MyTreeWalker()
    ParseTreeWalker.DEFAULT.walk(walker, tree)

  } catch (e) {
    console.log('!!!!!!!', e)
    antlr4Code.value = e.message
  }

}
</script>
