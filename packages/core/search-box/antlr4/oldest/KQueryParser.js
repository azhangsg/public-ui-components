// Generated from KQueryParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import { ATN, ATNDeserializer, DecisionState, DFA, FailedPredicateException, RecognitionException, NoViableAltException, BailErrorStrategy, Parser, ParserATNSimulator, RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache, TerminalNode, RuleNode, Token, TokenStream, Interval, IntervalSet } from 'antlr4'
import KQueryParserListener from './KQueryParserListener.js'
export default class KQueryParser extends Parser {
  static OR = 1
  static AND = 2
  static NOT = 3
  static TILDE = 4
  static MINUS = 5
  static OP_COLON = 6
  static GROUPING_LPAREN = 7
  static GROUPING_RPAREN = 8
  static RESERVED_AT = 9
  static NUMBER = 10
  static TERM = 11
  static QUOTED = 12
  static DEFAULT_SKIP = 13
  static UNKNOWN = 14
  static EOF = Token.EOF
  static RULE_result = 0
  static RULE_query = 1
  static RULE_union = 2
  static RULE_intersection = 3
  static RULE_clause = 4
  static RULE_exclusion = 5
  static RULE_entityClause = 6
  static RULE_grouping = 7
  static RULE_fieldName = 8
  static RULE_fieldValue = 9
  static RULE_quotedValue = 10
  static literalNames = [null, null,
    null, null,
    "'~'", "'-'",
    "':'", "'('",
    "')'", "'@'"]

  static symbolicNames = [null, 'OR',
    'AND', 'NOT',
    'TILDE', 'MINUS',
    'OP_COLON',
    'GROUPING_LPAREN',
    'GROUPING_RPAREN',
    'RESERVED_AT',
    'NUMBER', 'TERM',
    'QUOTED', 'DEFAULT_SKIP',
    'UNKNOWN']

  // tslint:disable:no-trailing-whitespace
  static ruleNames = [
    'result', 'query', 'union', 'intersection', 'clause', 'exclusion', 'entityClause',
    'grouping', 'fieldName', 'fieldValue', 'quotedValue',
  ]

  get grammarFileName() { return 'KQueryParser.g4' }
  get literalNames() { return KQueryParser.literalNames }
  get symbolicNames() { return KQueryParser.symbolicNames }
  get ruleNames() { return KQueryParser.ruleNames }
  get serializedATN() { return KQueryParser._serializedATN }
  createFailedPredicateException(predicate, message) {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input) {
    super(input)
    this._interp = new ParserATNSimulator(this, KQueryParser._ATN, KQueryParser.DecisionsToDFA, new PredictionContextCache())
  }

  // @RuleVersion(0)
  result() {
    const localctx = new ResultContext(this, this._ctx, this.state)
    this.enterRule(localctx, 0, KQueryParser.RULE_result)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 22
        this.query()
        this.state = 23
        this.match(KQueryParser.EOF)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  query() {
    const localctx = new QueryContext(this, this._ctx, this.state)
    this.enterRule(localctx, 2, KQueryParser.RULE_query)
    let _la
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 26
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 25
              this.intersection()
            }
          }
          this.state = 28
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7848) !== 0))
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  union() {
    const localctx = new UnionContext(this, this._ctx, this.state)
    this.enterRule(localctx, 4, KQueryParser.RULE_union)
    let _la
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 30
        this.clause()
        this.state = 35
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === 1) {
          {
            {
              this.state = 31
              this.match(KQueryParser.OR)
              this.state = 32
              this.clause()
            }
          }
          this.state = 37
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  intersection() {
    const localctx = new IntersectionContext(this, this._ctx, this.state)
    this.enterRule(localctx, 6, KQueryParser.RULE_intersection)
    let _la
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 38
        this.union()
        this.state = 43
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === 2) {
          {
            {
              this.state = 39
              this.match(KQueryParser.AND)
              this.state = 40
              this.union()
            }
          }
          this.state = 45
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  clause() {
    const localctx = new ClauseContext(this, this._ctx, this.state)
    this.enterRule(localctx, 8, KQueryParser.RULE_clause)
    let _la
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 47
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === 3 || _la === 5) {
          {
            this.state = 46
            this.exclusion()
          }
        }
        this.state = 50
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === 9) {
          {
            this.state = 49
            this.entityClause()
          }
        }
        this.state = 55
        this._errHandler.sync(this)
        switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
          case 1:
            {
              this.state = 52
              this.fieldName()
              {
                this.state = 53
                this.match(KQueryParser.OP_COLON)
              }
            }
            break
        }
        this.state = 59
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case 10:
          case 11:
          case 12:
            {
              this.state = 57
              this.fieldValue()
            }
            break
          case 7:
            {
              this.state = 58
              this.grouping()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  exclusion() {
    const localctx = new ExclusionContext(this, this._ctx, this.state)
    this.enterRule(localctx, 10, KQueryParser.RULE_exclusion)
    let _la
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 61
        _la = this._input.LA(1)
        if (!(_la === 3 || _la === 5)) {
          this._errHandler.recoverInline(this)
        } else {
          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  entityClause() {
    const localctx = new EntityClauseContext(this, this._ctx, this.state)
    this.enterRule(localctx, 12, KQueryParser.RULE_entityClause)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 63
        this.match(KQueryParser.RESERVED_AT)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  grouping() {
    const localctx = new GroupingContext(this, this._ctx, this.state)
    this.enterRule(localctx, 14, KQueryParser.RULE_grouping)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 65
        this.match(KQueryParser.GROUPING_LPAREN)
        this.state = 66
        this.query()
        this.state = 67
        this.match(KQueryParser.GROUPING_RPAREN)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  fieldName() {
    const localctx = new FieldNameContext(this, this._ctx, this.state)
    this.enterRule(localctx, 16, KQueryParser.RULE_fieldName)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 69
        this.match(KQueryParser.TERM)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  fieldValue() {
    const localctx = new FieldValueContext(this, this._ctx, this.state)
    this.enterRule(localctx, 18, KQueryParser.RULE_fieldValue)
    try {
      this.state = 74
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case 12:
          this.enterOuterAlt(localctx, 1)
          {
            this.state = 71
            this.quotedValue()
          }
          break
        case 10:
          this.enterOuterAlt(localctx, 2)
          {
            this.state = 72
            this.match(KQueryParser.NUMBER)
          }
          break
        case 11:
          this.enterOuterAlt(localctx, 3)
          {
            this.state = 73
            this.match(KQueryParser.TERM)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  quotedValue() {
    const localctx = new QuotedValueContext(this, this._ctx, this.state)
    this.enterRule(localctx, 20, KQueryParser.RULE_quotedValue)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 76
        this.match(KQueryParser.QUOTED)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  static _serializedATN = [4, 1, 14, 79, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
    10, 7, 10, 1, 0, 1, 0, 1, 0, 1, 1, 4, 1, 27, 8, 1, 11, 1, 12, 1, 28, 1, 2, 1, 2, 1, 2, 5, 2, 34, 8, 2,
    10, 2, 12, 2, 37, 9, 2, 1, 3, 1, 3, 1, 3, 5, 3, 42, 8, 3, 10, 3, 12, 3, 45, 9, 3, 1, 4, 3, 4, 48, 8, 4,
    1, 4, 3, 4, 51, 8, 4, 1, 4, 1, 4, 1, 4, 3, 4, 56, 8, 4, 1, 4, 1, 4, 3, 4, 60, 8, 4, 1, 5, 1, 5, 1, 6, 1,
    6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 3, 9, 75, 8, 9, 1, 10, 1, 10, 1, 10, 0, 0, 11,
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 0, 1, 2, 0, 3, 3, 5, 5, 76, 0, 22, 1, 0, 0, 0, 2, 26, 1, 0, 0,
    0, 4, 30, 1, 0, 0, 0, 6, 38, 1, 0, 0, 0, 8, 47, 1, 0, 0, 0, 10, 61, 1, 0, 0, 0, 12, 63, 1, 0, 0, 0, 14,
    65, 1, 0, 0, 0, 16, 69, 1, 0, 0, 0, 18, 74, 1, 0, 0, 0, 20, 76, 1, 0, 0, 0, 22, 23, 3, 2, 1, 0, 23, 24,
    5, 0, 0, 1, 24, 1, 1, 0, 0, 0, 25, 27, 3, 6, 3, 0, 26, 25, 1, 0, 0, 0, 27, 28, 1, 0, 0, 0, 28, 26, 1,
    0, 0, 0, 28, 29, 1, 0, 0, 0, 29, 3, 1, 0, 0, 0, 30, 35, 3, 8, 4, 0, 31, 32, 5, 1, 0, 0, 32, 34, 3, 8,
    4, 0, 33, 31, 1, 0, 0, 0, 34, 37, 1, 0, 0, 0, 35, 33, 1, 0, 0, 0, 35, 36, 1, 0, 0, 0, 36, 5, 1, 0, 0,
    0, 37, 35, 1, 0, 0, 0, 38, 43, 3, 4, 2, 0, 39, 40, 5, 2, 0, 0, 40, 42, 3, 4, 2, 0, 41, 39, 1, 0, 0, 0,
    42, 45, 1, 0, 0, 0, 43, 41, 1, 0, 0, 0, 43, 44, 1, 0, 0, 0, 44, 7, 1, 0, 0, 0, 45, 43, 1, 0, 0, 0, 46,
    48, 3, 10, 5, 0, 47, 46, 1, 0, 0, 0, 47, 48, 1, 0, 0, 0, 48, 50, 1, 0, 0, 0, 49, 51, 3, 12, 6, 0, 50,
    49, 1, 0, 0, 0, 50, 51, 1, 0, 0, 0, 51, 55, 1, 0, 0, 0, 52, 53, 3, 16, 8, 0, 53, 54, 5, 6, 0, 0, 54,
    56, 1, 0, 0, 0, 55, 52, 1, 0, 0, 0, 55, 56, 1, 0, 0, 0, 56, 59, 1, 0, 0, 0, 57, 60, 3, 18, 9, 0, 58,
    60, 3, 14, 7, 0, 59, 57, 1, 0, 0, 0, 59, 58, 1, 0, 0, 0, 60, 9, 1, 0, 0, 0, 61, 62, 7, 0, 0, 0, 62, 11,
    1, 0, 0, 0, 63, 64, 5, 9, 0, 0, 64, 13, 1, 0, 0, 0, 65, 66, 5, 7, 0, 0, 66, 67, 3, 2, 1, 0, 67, 68, 5,
    8, 0, 0, 68, 15, 1, 0, 0, 0, 69, 70, 5, 11, 0, 0, 70, 17, 1, 0, 0, 0, 71, 75, 3, 20, 10, 0, 72, 75,
    5, 10, 0, 0, 73, 75, 5, 11, 0, 0, 74, 71, 1, 0, 0, 0, 74, 72, 1, 0, 0, 0, 74, 73, 1, 0, 0, 0, 75, 19,
    1, 0, 0, 0, 76, 77, 5, 12, 0, 0, 77, 21, 1, 0, 0, 0, 8, 28, 35, 43, 47, 50, 55, 59, 74]

  static __ATN
  static get _ATN() {
    if (!KQueryParser.__ATN) {
      KQueryParser.__ATN = new ATNDeserializer().deserialize(KQueryParser._serializedATN)
    }
    return KQueryParser.__ATN
  }

  static DecisionsToDFA = KQueryParser._ATN.decisionToState.map((ds, index) => new DFA(ds, index))
}
export class ResultContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  query() {
    return this.getTypedRuleContext(QueryContext, 0)
  }

  EOF() {
    return this.getToken(KQueryParser.EOF, 0)
  }

  get ruleIndex() {
    return KQueryParser.RULE_result
  }

  enterRule(listener) {
    if (listener.enterResult) {
      listener.enterResult(this)
    }
  }

  exitRule(listener) {
    if (listener.exitResult) {
      listener.exitResult(this)
    }
  }
}
export class QueryContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  intersection_list() {
    return this.getTypedRuleContexts(IntersectionContext)
  }

  intersection(i) {
    return this.getTypedRuleContext(IntersectionContext, i)
  }

  get ruleIndex() {
    return KQueryParser.RULE_query
  }

  enterRule(listener) {
    if (listener.enterQuery) {
      listener.enterQuery(this)
    }
  }

  exitRule(listener) {
    if (listener.exitQuery) {
      listener.exitQuery(this)
    }
  }
}
export class UnionContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  clause_list() {
    return this.getTypedRuleContexts(ClauseContext)
  }

  clause(i) {
    return this.getTypedRuleContext(ClauseContext, i)
  }

  OR_list() {
    return this.getTokens(KQueryParser.OR)
  }

  OR(i) {
    return this.getToken(KQueryParser.OR, i)
  }

  get ruleIndex() {
    return KQueryParser.RULE_union
  }

  enterRule(listener) {
    if (listener.enterUnion) {
      listener.enterUnion(this)
    }
  }

  exitRule(listener) {
    if (listener.exitUnion) {
      listener.exitUnion(this)
    }
  }
}
export class IntersectionContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  union_list() {
    return this.getTypedRuleContexts(UnionContext)
  }

  union(i) {
    return this.getTypedRuleContext(UnionContext, i)
  }

  AND_list() {
    return this.getTokens(KQueryParser.AND)
  }

  AND(i) {
    return this.getToken(KQueryParser.AND, i)
  }

  get ruleIndex() {
    return KQueryParser.RULE_intersection
  }

  enterRule(listener) {
    if (listener.enterIntersection) {
      listener.enterIntersection(this)
    }
  }

  exitRule(listener) {
    if (listener.exitIntersection) {
      listener.exitIntersection(this)
    }
  }
}
export class ClauseContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  fieldValue() {
    return this.getTypedRuleContext(FieldValueContext, 0)
  }

  grouping() {
    return this.getTypedRuleContext(GroupingContext, 0)
  }

  exclusion() {
    return this.getTypedRuleContext(ExclusionContext, 0)
  }

  entityClause() {
    return this.getTypedRuleContext(EntityClauseContext, 0)
  }

  fieldName() {
    return this.getTypedRuleContext(FieldNameContext, 0)
  }

  OP_COLON() {
    return this.getToken(KQueryParser.OP_COLON, 0)
  }

  get ruleIndex() {
    return KQueryParser.RULE_clause
  }

  enterRule(listener) {
    if (listener.enterClause) {
      listener.enterClause(this)
    }
  }

  exitRule(listener) {
    if (listener.exitClause) {
      listener.exitClause(this)
    }
  }
}
export class ExclusionContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  MINUS() {
    return this.getToken(KQueryParser.MINUS, 0)
  }

  NOT() {
    return this.getToken(KQueryParser.NOT, 0)
  }

  get ruleIndex() {
    return KQueryParser.RULE_exclusion
  }

  enterRule(listener) {
    if (listener.enterExclusion) {
      listener.enterExclusion(this)
    }
  }

  exitRule(listener) {
    if (listener.exitExclusion) {
      listener.exitExclusion(this)
    }
  }
}
export class EntityClauseContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  RESERVED_AT() {
    return this.getToken(KQueryParser.RESERVED_AT, 0)
  }

  get ruleIndex() {
    return KQueryParser.RULE_entityClause
  }

  enterRule(listener) {
    if (listener.enterEntityClause) {
      listener.enterEntityClause(this)
    }
  }

  exitRule(listener) {
    if (listener.exitEntityClause) {
      listener.exitEntityClause(this)
    }
  }
}
export class GroupingContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  GROUPING_LPAREN() {
    return this.getToken(KQueryParser.GROUPING_LPAREN, 0)
  }

  query() {
    return this.getTypedRuleContext(QueryContext, 0)
  }

  GROUPING_RPAREN() {
    return this.getToken(KQueryParser.GROUPING_RPAREN, 0)
  }

  get ruleIndex() {
    return KQueryParser.RULE_grouping
  }

  enterRule(listener) {
    if (listener.enterGrouping) {
      listener.enterGrouping(this)
    }
  }

  exitRule(listener) {
    if (listener.exitGrouping) {
      listener.exitGrouping(this)
    }
  }
}
export class FieldNameContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  TERM() {
    return this.getToken(KQueryParser.TERM, 0)
  }

  get ruleIndex() {
    return KQueryParser.RULE_fieldName
  }

  enterRule(listener) {
    if (listener.enterFieldName) {
      listener.enterFieldName(this)
    }
  }

  exitRule(listener) {
    if (listener.exitFieldName) {
      listener.exitFieldName(this)
    }
  }
}
export class FieldValueContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  quotedValue() {
    return this.getTypedRuleContext(QuotedValueContext, 0)
  }

  NUMBER() {
    return this.getToken(KQueryParser.NUMBER, 0)
  }

  TERM() {
    return this.getToken(KQueryParser.TERM, 0)
  }

  get ruleIndex() {
    return KQueryParser.RULE_fieldValue
  }

  enterRule(listener) {
    if (listener.enterFieldValue) {
      listener.enterFieldValue(this)
    }
  }

  exitRule(listener) {
    if (listener.exitFieldValue) {
      listener.exitFieldValue(this)
    }
  }
}
export class QuotedValueContext extends ParserRuleContext {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState)
    this.parser = parser
  }

  QUOTED() {
    return this.getToken(KQueryParser.QUOTED, 0)
  }

  get ruleIndex() {
    return KQueryParser.RULE_quotedValue
  }

  enterRule(listener) {
    if (listener.enterQuotedValue) {
      listener.enterQuotedValue(this)
    }
  }

  exitRule(listener) {
    if (listener.exitQuotedValue) {
      listener.exitQuotedValue(this)
    }
  }
}
