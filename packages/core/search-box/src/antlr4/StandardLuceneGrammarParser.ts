// Generated from StandardLuceneGrammar.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import StandardLuceneGrammarListener from "./StandardLuceneGrammarListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class StandardLuceneGrammarParser extends Parser {
	public static readonly LPAREN = 1;
	public static readonly RPAREN = 2;
	public static readonly LBRACK = 3;
	public static readonly RBRACK = 4;
	public static readonly COLON = 5;
	public static readonly PLUS = 6;
	public static readonly MINUS = 7;
	public static readonly STAR = 8;
	public static readonly QMARK = 9;
	public static readonly LCURLY = 10;
	public static readonly RCURLY = 11;
	public static readonly CARAT = 12;
	public static readonly TILDE = 13;
	public static readonly DQUOTE = 14;
	public static readonly SQUOTE = 15;
	public static readonly TO = 16;
	public static readonly AND = 17;
	public static readonly OR = 18;
	public static readonly NOT = 19;
	public static readonly WS = 20;
	public static readonly NUMBER = 21;
	public static readonly DATE_TOKEN = 22;
	public static readonly TERM_NORMAL = 23;
	public static readonly TERM_TRUNCATED = 24;
	public static readonly PHRASE = 25;
	public static readonly PHRASE_ANYTHING = 26;
	public static readonly OPERATOR = 27;
	public static readonly ATOM = 28;
	public static readonly MODIFIER = 29;
	public static readonly TMODIFIER = 30;
	public static readonly CLAUSE = 31;
	public static readonly FIELD = 32;
	public static readonly FUZZY = 33;
	public static readonly BOOST = 34;
	public static readonly QNORMAL = 35;
	public static readonly QPHRASE = 36;
	public static readonly QPHRASETRUNC = 37;
	public static readonly QTRUNCATED = 38;
	public static readonly QRANGEIN = 39;
	public static readonly QRANGEEX = 40;
	public static readonly QANYTHING = 41;
	public static readonly QDATE = 42;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_mainQ = 0;
	public static readonly RULE_clauseDefault = 1;
	public static readonly RULE_clauseOr = 2;
	public static readonly RULE_clauseAnd = 3;
	public static readonly RULE_clauseNot = 4;
	public static readonly RULE_clauseBasic = 5;
	public static readonly RULE_atom = 6;
	public static readonly RULE_field = 7;
	public static readonly RULE_value = 8;
	public static readonly RULE_anything = 9;
	public static readonly RULE_two_sided_range_term = 10;
	public static readonly RULE_range_term = 11;
	public static readonly RULE_range_value = 12;
	public static readonly RULE_multi_value = 13;
	public static readonly RULE_normal = 14;
	public static readonly RULE_truncated = 15;
	public static readonly RULE_quoted_truncated = 16;
	public static readonly RULE_quoted = 17;
	public static readonly RULE_modifier = 18;
	public static readonly RULE_term_modifier = 19;
	public static readonly RULE_boost = 20;
	public static readonly RULE_fuzzy = 21;
	public static readonly RULE_not_ = 22;
	public static readonly RULE_and_ = 23;
	public static readonly RULE_or_ = 24;
	public static readonly RULE_date = 25;
	public static readonly RULE_sep = 26;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "':'", 
                                                            "'+'", null, 
                                                            "'*'", null, 
                                                            "'{'", "'}'", 
                                                            null, null, 
                                                            "'\"'", "'''", 
                                                            "'TO'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "LPAREN", 
                                                             "RPAREN", "LBRACK", 
                                                             "RBRACK", "COLON", 
                                                             "PLUS", "MINUS", 
                                                             "STAR", "QMARK", 
                                                             "LCURLY", "RCURLY", 
                                                             "CARAT", "TILDE", 
                                                             "DQUOTE", "SQUOTE", 
                                                             "TO", "AND", 
                                                             "OR", "NOT", 
                                                             "WS", "NUMBER", 
                                                             "DATE_TOKEN", 
                                                             "TERM_NORMAL", 
                                                             "TERM_TRUNCATED", 
                                                             "PHRASE", "PHRASE_ANYTHING", 
                                                             "OPERATOR", 
                                                             "ATOM", "MODIFIER", 
                                                             "TMODIFIER", 
                                                             "CLAUSE", "FIELD", 
                                                             "FUZZY", "BOOST", 
                                                             "QNORMAL", 
                                                             "QPHRASE", 
                                                             "QPHRASETRUNC", 
                                                             "QTRUNCATED", 
                                                             "QRANGEIN", 
                                                             "QRANGEEX", 
                                                             "QANYTHING", 
                                                             "QDATE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mainQ", "clauseDefault", "clauseOr", "clauseAnd", "clauseNot", "clauseBasic", 
		"atom", "field", "value", "anything", "two_sided_range_term", "range_term", 
		"range_value", "multi_value", "normal", "truncated", "quoted_truncated", 
		"quoted", "modifier", "term_modifier", "boost", "fuzzy", "not_", "and_", 
		"or_", "date", "sep",
	];
	public get grammarFileName(): string { return "StandardLuceneGrammar.g4"; }
	public get literalNames(): (string | null)[] { return StandardLuceneGrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return StandardLuceneGrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return StandardLuceneGrammarParser.ruleNames; }
	public get serializedATN(): number[] { return StandardLuceneGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, StandardLuceneGrammarParser._ATN, StandardLuceneGrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public mainQ(): MainQContext {
		let localctx: MainQContext = new MainQContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, StandardLuceneGrammarParser.RULE_mainQ);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 54;
				this.sep();
				}
				break;
			}
			this.state = 57;
			localctx._clause = this.clauseDefault();
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 58;
				this.sep();
				}
			}

			this.state = 61;
			this.match(StandardLuceneGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clauseDefault(): ClauseDefaultContext {
		let localctx: ClauseDefaultContext = new ClauseDefaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, StandardLuceneGrammarParser.RULE_clauseDefault);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.clauseOr();
			this.state = 70;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 65;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						this.state = 64;
						this.sep();
						}
						break;
					}
					this.state = 67;
					this.clauseOr();
					}
					}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clauseOr(): ClauseOrContext {
		let localctx: ClauseOrContext = new ClauseOrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, StandardLuceneGrammarParser.RULE_clauseOr);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this.clauseAnd();
			this.state = 79;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 74;
					this.or_();
					this.state = 75;
					this.clauseAnd();
					}
					}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clauseAnd(): ClauseAndContext {
		let localctx: ClauseAndContext = new ClauseAndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, StandardLuceneGrammarParser.RULE_clauseAnd);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 82;
			this.clauseNot();
			this.state = 88;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 83;
					this.and_();
					this.state = 84;
					this.clauseNot();
					}
					}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clauseNot(): ClauseNotContext {
		let localctx: ClauseNotContext = new ClauseNotContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, StandardLuceneGrammarParser.RULE_clauseNot);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 91;
			this.clauseBasic();
			this.state = 97;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 92;
					this.not_();
					this.state = 93;
					this.clauseBasic();
					}
					}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clauseBasic(): ClauseBasicContext {
		let localctx: ClauseBasicContext = new ClauseBasicContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, StandardLuceneGrammarParser.RULE_clauseBasic);
		let _la: number;
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 100;
					this.sep();
					}
				}

				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6 || _la===7) {
					{
					this.state = 103;
					this.modifier();
					}
				}

				this.state = 106;
				this.match(StandardLuceneGrammarParser.LPAREN);
				this.state = 107;
				this.clauseDefault();
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 108;
					this.sep();
					}
				}

				this.state = 111;
				this.match(StandardLuceneGrammarParser.RPAREN);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12 || _la===13) {
					{
					this.state = 112;
					this.term_modifier();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 115;
					this.sep();
					}
				}

				this.state = 118;
				this.atom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, StandardLuceneGrammarParser.RULE_atom);
		let _la: number;
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6 || _la===7) {
					{
					this.state = 121;
					this.modifier();
					}
				}

				this.state = 124;
				this.field();
				this.state = 125;
				this.multi_value();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12 || _la===13) {
					{
					this.state = 126;
					this.term_modifier();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6 || _la===7) {
					{
					this.state = 129;
					this.modifier();
					}
				}

				this.state = 133;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this.field();
					}
					break;
				}
				this.state = 135;
				this.value();
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12 || _la===13) {
					{
					this.state = 136;
					this.term_modifier();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let localctx: FieldContext = new FieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, StandardLuceneGrammarParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 141;
			this.match(StandardLuceneGrammarParser.TERM_NORMAL);
			this.state = 142;
			this.match(StandardLuceneGrammarParser.COLON);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 143;
				this.sep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, StandardLuceneGrammarParser.RULE_value);
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 146;
				this.range_term();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 147;
				this.normal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 148;
				this.truncated();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 149;
				this.quoted();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 150;
				this.quoted_truncated();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 151;
				this.match(StandardLuceneGrammarParser.QMARK);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 152;
				this.anything();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 153;
				this.match(StandardLuceneGrammarParser.STAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anything(): AnythingContext {
		let localctx: AnythingContext = new AnythingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, StandardLuceneGrammarParser.RULE_anything);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			this.match(StandardLuceneGrammarParser.STAR);
			this.state = 157;
			this.match(StandardLuceneGrammarParser.COLON);
			this.state = 158;
			this.match(StandardLuceneGrammarParser.STAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public two_sided_range_term(): Two_sided_range_termContext {
		let localctx: Two_sided_range_termContext = new Two_sided_range_termContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, StandardLuceneGrammarParser.RULE_two_sided_range_term);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			localctx._start_type = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===3 || _la===10)) {
			    localctx._start_type = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 161;
				this.sep();
				}
			}

			{
			this.state = 164;
			localctx._a = this.range_value();
			}
			this.state = 166;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 165;
				this.sep();
				}
				break;
			}
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 133234944) !== 0)) {
				{
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 168;
					this.match(StandardLuceneGrammarParser.TO);
					}
				}

				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 171;
					this.sep();
					}
				}

				this.state = 174;
				localctx._b = this.range_value();
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 175;
					this.sep();
					}
				}

				}
			}

			this.state = 180;
			localctx._end_type = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===4 || _la===11)) {
			    localctx._end_type = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public range_term(): Range_termContext {
		let localctx: Range_termContext = new Range_termContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, StandardLuceneGrammarParser.RULE_range_term);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.two_sided_range_term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public range_value(): Range_valueContext {
		let localctx: Range_valueContext = new Range_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, StandardLuceneGrammarParser.RULE_range_value);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 184;
				this.truncated();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 185;
				this.quoted();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 186;
				this.quoted_truncated();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 187;
				this.date();
				}
				break;
			case 21:
			case 23:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 188;
				this.normal();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 189;
				this.match(StandardLuceneGrammarParser.STAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multi_value(): Multi_valueContext {
		let localctx: Multi_valueContext = new Multi_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, StandardLuceneGrammarParser.RULE_multi_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this.match(StandardLuceneGrammarParser.LPAREN);
			this.state = 193;
			this.clauseDefault();
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 194;
				this.sep();
				}
			}

			this.state = 197;
			this.match(StandardLuceneGrammarParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public normal(): NormalContext {
		let localctx: NormalContext = new NormalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, StandardLuceneGrammarParser.RULE_normal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			_la = this._input.LA(1);
			if(!(_la===21 || _la===23)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public truncated(): TruncatedContext {
		let localctx: TruncatedContext = new TruncatedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, StandardLuceneGrammarParser.RULE_truncated);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
			this.match(StandardLuceneGrammarParser.TERM_TRUNCATED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quoted_truncated(): Quoted_truncatedContext {
		let localctx: Quoted_truncatedContext = new Quoted_truncatedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, StandardLuceneGrammarParser.RULE_quoted_truncated);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.match(StandardLuceneGrammarParser.PHRASE_ANYTHING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quoted(): QuotedContext {
		let localctx: QuotedContext = new QuotedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, StandardLuceneGrammarParser.RULE_quoted);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this.match(StandardLuceneGrammarParser.PHRASE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let localctx: ModifierContext = new ModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, StandardLuceneGrammarParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===7)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public term_modifier(): Term_modifierContext {
		let localctx: Term_modifierContext = new Term_modifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, StandardLuceneGrammarParser.RULE_term_modifier);
		let _la: number;
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 209;
				this.boost();
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 210;
					this.fuzzy();
					}
				}

				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 213;
				this.fuzzy();
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 214;
					this.boost();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boost(): BoostContext {
		let localctx: BoostContext = new BoostContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, StandardLuceneGrammarParser.RULE_boost);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 219;
			this.match(StandardLuceneGrammarParser.CARAT);
			}
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 220;
				this.match(StandardLuceneGrammarParser.NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fuzzy(): FuzzyContext {
		let localctx: FuzzyContext = new FuzzyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, StandardLuceneGrammarParser.RULE_fuzzy);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 223;
			this.match(StandardLuceneGrammarParser.TILDE);
			}
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 224;
				this.match(StandardLuceneGrammarParser.NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public not_(): Not_Context {
		let localctx: Not_Context = new Not_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 44, StandardLuceneGrammarParser.RULE_not_);
		let _la: number;
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 227;
					this.sep();
					}
				}

				this.state = 230;
				this.match(StandardLuceneGrammarParser.AND);
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 231;
					this.sep();
					}
				}

				this.state = 234;
				this.match(StandardLuceneGrammarParser.NOT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 235;
					this.sep();
					}
				}

				this.state = 238;
				this.match(StandardLuceneGrammarParser.NOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public and_(): And_Context {
		let localctx: And_Context = new And_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 46, StandardLuceneGrammarParser.RULE_and_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 241;
				this.sep();
				}
			}

			this.state = 244;
			this.match(StandardLuceneGrammarParser.AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public or_(): Or_Context {
		let localctx: Or_Context = new Or_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 48, StandardLuceneGrammarParser.RULE_or_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 246;
				this.sep();
				}
			}

			this.state = 249;
			this.match(StandardLuceneGrammarParser.OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let localctx: DateContext = new DateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, StandardLuceneGrammarParser.RULE_date);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this.match(StandardLuceneGrammarParser.DATE_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sep(): SepContext {
		let localctx: SepContext = new SepContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, StandardLuceneGrammarParser.RULE_sep);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 253;
					this.match(StandardLuceneGrammarParser.WS);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 256;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,42,259,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,1,0,3,0,56,8,0,1,0,1,0,3,0,60,8,0,1,0,1,0,1,1,1,
	1,3,1,66,8,1,1,1,5,1,69,8,1,10,1,12,1,72,9,1,1,2,1,2,1,2,1,2,5,2,78,8,2,
	10,2,12,2,81,9,2,1,3,1,3,1,3,1,3,5,3,87,8,3,10,3,12,3,90,9,3,1,4,1,4,1,
	4,1,4,5,4,96,8,4,10,4,12,4,99,9,4,1,5,3,5,102,8,5,1,5,3,5,105,8,5,1,5,1,
	5,1,5,3,5,110,8,5,1,5,1,5,3,5,114,8,5,1,5,3,5,117,8,5,1,5,3,5,120,8,5,1,
	6,3,6,123,8,6,1,6,1,6,1,6,3,6,128,8,6,1,6,3,6,131,8,6,1,6,3,6,134,8,6,1,
	6,1,6,3,6,138,8,6,3,6,140,8,6,1,7,1,7,1,7,3,7,145,8,7,1,8,1,8,1,8,1,8,1,
	8,1,8,1,8,1,8,3,8,155,8,8,1,9,1,9,1,9,1,9,1,10,1,10,3,10,163,8,10,1,10,
	1,10,3,10,167,8,10,1,10,3,10,170,8,10,1,10,3,10,173,8,10,1,10,1,10,3,10,
	177,8,10,3,10,179,8,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
	3,12,191,8,12,1,13,1,13,1,13,3,13,196,8,13,1,13,1,13,1,14,1,14,1,15,1,15,
	1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,3,19,212,8,19,1,19,1,19,3,19,216,
	8,19,3,19,218,8,19,1,20,1,20,3,20,222,8,20,1,21,1,21,3,21,226,8,21,1,22,
	3,22,229,8,22,1,22,1,22,3,22,233,8,22,1,22,1,22,3,22,237,8,22,1,22,3,22,
	240,8,22,1,23,3,23,243,8,23,1,23,1,23,1,24,3,24,248,8,24,1,24,1,24,1,25,
	1,25,1,26,4,26,255,8,26,11,26,12,26,256,1,26,0,0,27,0,2,4,6,8,10,12,14,
	16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,0,4,2,0,3,3,10,
	10,2,0,4,4,11,11,2,0,21,21,23,23,1,0,6,7,282,0,55,1,0,0,0,2,63,1,0,0,0,
	4,73,1,0,0,0,6,82,1,0,0,0,8,91,1,0,0,0,10,119,1,0,0,0,12,139,1,0,0,0,14,
	141,1,0,0,0,16,154,1,0,0,0,18,156,1,0,0,0,20,160,1,0,0,0,22,182,1,0,0,0,
	24,190,1,0,0,0,26,192,1,0,0,0,28,199,1,0,0,0,30,201,1,0,0,0,32,203,1,0,
	0,0,34,205,1,0,0,0,36,207,1,0,0,0,38,217,1,0,0,0,40,219,1,0,0,0,42,223,
	1,0,0,0,44,239,1,0,0,0,46,242,1,0,0,0,48,247,1,0,0,0,50,251,1,0,0,0,52,
	254,1,0,0,0,54,56,3,52,26,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,
	59,3,2,1,0,58,60,3,52,26,0,59,58,1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,0,61,
	62,5,0,0,1,62,1,1,0,0,0,63,70,3,4,2,0,64,66,3,52,26,0,65,64,1,0,0,0,65,
	66,1,0,0,0,66,67,1,0,0,0,67,69,3,4,2,0,68,65,1,0,0,0,69,72,1,0,0,0,70,68,
	1,0,0,0,70,71,1,0,0,0,71,3,1,0,0,0,72,70,1,0,0,0,73,79,3,6,3,0,74,75,3,
	48,24,0,75,76,3,6,3,0,76,78,1,0,0,0,77,74,1,0,0,0,78,81,1,0,0,0,79,77,1,
	0,0,0,79,80,1,0,0,0,80,5,1,0,0,0,81,79,1,0,0,0,82,88,3,8,4,0,83,84,3,46,
	23,0,84,85,3,8,4,0,85,87,1,0,0,0,86,83,1,0,0,0,87,90,1,0,0,0,88,86,1,0,
	0,0,88,89,1,0,0,0,89,7,1,0,0,0,90,88,1,0,0,0,91,97,3,10,5,0,92,93,3,44,
	22,0,93,94,3,10,5,0,94,96,1,0,0,0,95,92,1,0,0,0,96,99,1,0,0,0,97,95,1,0,
	0,0,97,98,1,0,0,0,98,9,1,0,0,0,99,97,1,0,0,0,100,102,3,52,26,0,101,100,
	1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,103,105,3,36,18,0,104,103,1,0,0,
	0,104,105,1,0,0,0,105,106,1,0,0,0,106,107,5,1,0,0,107,109,3,2,1,0,108,110,
	3,52,26,0,109,108,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,113,5,2,0,
	0,112,114,3,38,19,0,113,112,1,0,0,0,113,114,1,0,0,0,114,120,1,0,0,0,115,
	117,3,52,26,0,116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,120,3,
	12,6,0,119,101,1,0,0,0,119,116,1,0,0,0,120,11,1,0,0,0,121,123,3,36,18,0,
	122,121,1,0,0,0,122,123,1,0,0,0,123,124,1,0,0,0,124,125,3,14,7,0,125,127,
	3,26,13,0,126,128,3,38,19,0,127,126,1,0,0,0,127,128,1,0,0,0,128,140,1,0,
	0,0,129,131,3,36,18,0,130,129,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,
	134,3,14,7,0,133,132,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,137,3,
	16,8,0,136,138,3,38,19,0,137,136,1,0,0,0,137,138,1,0,0,0,138,140,1,0,0,
	0,139,122,1,0,0,0,139,130,1,0,0,0,140,13,1,0,0,0,141,142,5,23,0,0,142,144,
	5,5,0,0,143,145,3,52,26,0,144,143,1,0,0,0,144,145,1,0,0,0,145,15,1,0,0,
	0,146,155,3,22,11,0,147,155,3,28,14,0,148,155,3,30,15,0,149,155,3,34,17,
	0,150,155,3,32,16,0,151,155,5,9,0,0,152,155,3,18,9,0,153,155,5,8,0,0,154,
	146,1,0,0,0,154,147,1,0,0,0,154,148,1,0,0,0,154,149,1,0,0,0,154,150,1,0,
	0,0,154,151,1,0,0,0,154,152,1,0,0,0,154,153,1,0,0,0,155,17,1,0,0,0,156,
	157,5,8,0,0,157,158,5,5,0,0,158,159,5,8,0,0,159,19,1,0,0,0,160,162,7,0,
	0,0,161,163,3,52,26,0,162,161,1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,
	166,3,24,12,0,165,167,3,52,26,0,166,165,1,0,0,0,166,167,1,0,0,0,167,178,
	1,0,0,0,168,170,5,16,0,0,169,168,1,0,0,0,169,170,1,0,0,0,170,172,1,0,0,
	0,171,173,3,52,26,0,172,171,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,
	176,3,24,12,0,175,177,3,52,26,0,176,175,1,0,0,0,176,177,1,0,0,0,177,179,
	1,0,0,0,178,169,1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,181,7,1,0,0,
	181,21,1,0,0,0,182,183,3,20,10,0,183,23,1,0,0,0,184,191,3,30,15,0,185,191,
	3,34,17,0,186,191,3,32,16,0,187,191,3,50,25,0,188,191,3,28,14,0,189,191,
	5,8,0,0,190,184,1,0,0,0,190,185,1,0,0,0,190,186,1,0,0,0,190,187,1,0,0,0,
	190,188,1,0,0,0,190,189,1,0,0,0,191,25,1,0,0,0,192,193,5,1,0,0,193,195,
	3,2,1,0,194,196,3,52,26,0,195,194,1,0,0,0,195,196,1,0,0,0,196,197,1,0,0,
	0,197,198,5,2,0,0,198,27,1,0,0,0,199,200,7,2,0,0,200,29,1,0,0,0,201,202,
	5,24,0,0,202,31,1,0,0,0,203,204,5,26,0,0,204,33,1,0,0,0,205,206,5,25,0,
	0,206,35,1,0,0,0,207,208,7,3,0,0,208,37,1,0,0,0,209,211,3,40,20,0,210,212,
	3,42,21,0,211,210,1,0,0,0,211,212,1,0,0,0,212,218,1,0,0,0,213,215,3,42,
	21,0,214,216,3,40,20,0,215,214,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,
	217,209,1,0,0,0,217,213,1,0,0,0,218,39,1,0,0,0,219,221,5,12,0,0,220,222,
	5,21,0,0,221,220,1,0,0,0,221,222,1,0,0,0,222,41,1,0,0,0,223,225,5,13,0,
	0,224,226,5,21,0,0,225,224,1,0,0,0,225,226,1,0,0,0,226,43,1,0,0,0,227,229,
	3,52,26,0,228,227,1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,232,5,17,
	0,0,231,233,3,52,26,0,232,231,1,0,0,0,232,233,1,0,0,0,233,234,1,0,0,0,234,
	240,5,19,0,0,235,237,3,52,26,0,236,235,1,0,0,0,236,237,1,0,0,0,237,238,
	1,0,0,0,238,240,5,19,0,0,239,228,1,0,0,0,239,236,1,0,0,0,240,45,1,0,0,0,
	241,243,3,52,26,0,242,241,1,0,0,0,242,243,1,0,0,0,243,244,1,0,0,0,244,245,
	5,17,0,0,245,47,1,0,0,0,246,248,3,52,26,0,247,246,1,0,0,0,247,248,1,0,0,
	0,248,249,1,0,0,0,249,250,5,18,0,0,250,49,1,0,0,0,251,252,5,22,0,0,252,
	51,1,0,0,0,253,255,5,20,0,0,254,253,1,0,0,0,255,256,1,0,0,0,256,254,1,0,
	0,0,256,257,1,0,0,0,257,53,1,0,0,0,41,55,59,65,70,79,88,97,101,104,109,
	113,116,119,122,127,130,133,137,139,144,154,162,166,169,172,176,178,190,
	195,211,215,217,221,225,228,232,236,239,242,247,256];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StandardLuceneGrammarParser.__ATN) {
			StandardLuceneGrammarParser.__ATN = new ATNDeserializer().deserialize(StandardLuceneGrammarParser._serializedATN);
		}

		return StandardLuceneGrammarParser.__ATN;
	}


	static DecisionsToDFA = StandardLuceneGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class MainQContext extends ParserRuleContext {
	public _clause!: ClauseDefaultContext;
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.EOF, 0);
	}
	public clauseDefault(): ClauseDefaultContext {
		return this.getTypedRuleContext(ClauseDefaultContext, 0) as ClauseDefaultContext;
	}
	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}
	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_mainQ;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterMainQ) {
	 		listener.enterMainQ(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitMainQ) {
	 		listener.exitMainQ(this);
		}
	}
}


export class ClauseDefaultContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clauseOr_list(): ClauseOrContext[] {
		return this.getTypedRuleContexts(ClauseOrContext) as ClauseOrContext[];
	}
	public clauseOr(i: number): ClauseOrContext {
		return this.getTypedRuleContext(ClauseOrContext, i) as ClauseOrContext;
	}
	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}
	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_clauseDefault;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterClauseDefault) {
	 		listener.enterClauseDefault(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitClauseDefault) {
	 		listener.exitClauseDefault(this);
		}
	}
}


export class ClauseOrContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clauseAnd_list(): ClauseAndContext[] {
		return this.getTypedRuleContexts(ClauseAndContext) as ClauseAndContext[];
	}
	public clauseAnd(i: number): ClauseAndContext {
		return this.getTypedRuleContext(ClauseAndContext, i) as ClauseAndContext;
	}
	public or__list(): Or_Context[] {
		return this.getTypedRuleContexts(Or_Context) as Or_Context[];
	}
	public or_(i: number): Or_Context {
		return this.getTypedRuleContext(Or_Context, i) as Or_Context;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_clauseOr;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterClauseOr) {
	 		listener.enterClauseOr(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitClauseOr) {
	 		listener.exitClauseOr(this);
		}
	}
}


export class ClauseAndContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clauseNot_list(): ClauseNotContext[] {
		return this.getTypedRuleContexts(ClauseNotContext) as ClauseNotContext[];
	}
	public clauseNot(i: number): ClauseNotContext {
		return this.getTypedRuleContext(ClauseNotContext, i) as ClauseNotContext;
	}
	public and__list(): And_Context[] {
		return this.getTypedRuleContexts(And_Context) as And_Context[];
	}
	public and_(i: number): And_Context {
		return this.getTypedRuleContext(And_Context, i) as And_Context;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_clauseAnd;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterClauseAnd) {
	 		listener.enterClauseAnd(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitClauseAnd) {
	 		listener.exitClauseAnd(this);
		}
	}
}


export class ClauseNotContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clauseBasic_list(): ClauseBasicContext[] {
		return this.getTypedRuleContexts(ClauseBasicContext) as ClauseBasicContext[];
	}
	public clauseBasic(i: number): ClauseBasicContext {
		return this.getTypedRuleContext(ClauseBasicContext, i) as ClauseBasicContext;
	}
	public not__list(): Not_Context[] {
		return this.getTypedRuleContexts(Not_Context) as Not_Context[];
	}
	public not_(i: number): Not_Context {
		return this.getTypedRuleContext(Not_Context, i) as Not_Context;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_clauseNot;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterClauseNot) {
	 		listener.enterClauseNot(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitClauseNot) {
	 		listener.exitClauseNot(this);
		}
	}
}


export class ClauseBasicContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.LPAREN, 0);
	}
	public clauseDefault(): ClauseDefaultContext {
		return this.getTypedRuleContext(ClauseDefaultContext, 0) as ClauseDefaultContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.RPAREN, 0);
	}
	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}
	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}
	public modifier(): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, 0) as ModifierContext;
	}
	public term_modifier(): Term_modifierContext {
		return this.getTypedRuleContext(Term_modifierContext, 0) as Term_modifierContext;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_clauseBasic;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterClauseBasic) {
	 		listener.enterClauseBasic(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitClauseBasic) {
	 		listener.exitClauseBasic(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public field(): FieldContext {
		return this.getTypedRuleContext(FieldContext, 0) as FieldContext;
	}
	public multi_value(): Multi_valueContext {
		return this.getTypedRuleContext(Multi_valueContext, 0) as Multi_valueContext;
	}
	public modifier(): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, 0) as ModifierContext;
	}
	public term_modifier(): Term_modifierContext {
		return this.getTypedRuleContext(Term_modifierContext, 0) as Term_modifierContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_atom;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TERM_NORMAL(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.TERM_NORMAL, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.COLON, 0);
	}
	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_field;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterField) {
	 		listener.enterField(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitField) {
	 		listener.exitField(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public range_term(): Range_termContext {
		return this.getTypedRuleContext(Range_termContext, 0) as Range_termContext;
	}
	public normal(): NormalContext {
		return this.getTypedRuleContext(NormalContext, 0) as NormalContext;
	}
	public truncated(): TruncatedContext {
		return this.getTypedRuleContext(TruncatedContext, 0) as TruncatedContext;
	}
	public quoted(): QuotedContext {
		return this.getTypedRuleContext(QuotedContext, 0) as QuotedContext;
	}
	public quoted_truncated(): Quoted_truncatedContext {
		return this.getTypedRuleContext(Quoted_truncatedContext, 0) as Quoted_truncatedContext;
	}
	public QMARK(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.QMARK, 0);
	}
	public anything(): AnythingContext {
		return this.getTypedRuleContext(AnythingContext, 0) as AnythingContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_value;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class AnythingContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR_list(): TerminalNode[] {
	    	return this.getTokens(StandardLuceneGrammarParser.STAR);
	}
	public STAR(i: number): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.STAR, i);
	}
	public COLON(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_anything;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterAnything) {
	 		listener.enterAnything(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitAnything) {
	 		listener.exitAnything(this);
		}
	}
}


export class Two_sided_range_termContext extends ParserRuleContext {
	public _start_type!: Token;
	public _a!: Range_valueContext;
	public _b!: Range_valueContext;
	public _end_type!: Token;
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.LBRACK, 0);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.LCURLY, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.RBRACK, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.RCURLY, 0);
	}
	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}
	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}
	public range_value_list(): Range_valueContext[] {
		return this.getTypedRuleContexts(Range_valueContext) as Range_valueContext[];
	}
	public range_value(i: number): Range_valueContext {
		return this.getTypedRuleContext(Range_valueContext, i) as Range_valueContext;
	}
	public TO(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.TO, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_two_sided_range_term;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterTwo_sided_range_term) {
	 		listener.enterTwo_sided_range_term(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitTwo_sided_range_term) {
	 		listener.exitTwo_sided_range_term(this);
		}
	}
}


export class Range_termContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public two_sided_range_term(): Two_sided_range_termContext {
		return this.getTypedRuleContext(Two_sided_range_termContext, 0) as Two_sided_range_termContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_range_term;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterRange_term) {
	 		listener.enterRange_term(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitRange_term) {
	 		listener.exitRange_term(this);
		}
	}
}


export class Range_valueContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public truncated(): TruncatedContext {
		return this.getTypedRuleContext(TruncatedContext, 0) as TruncatedContext;
	}
	public quoted(): QuotedContext {
		return this.getTypedRuleContext(QuotedContext, 0) as QuotedContext;
	}
	public quoted_truncated(): Quoted_truncatedContext {
		return this.getTypedRuleContext(Quoted_truncatedContext, 0) as Quoted_truncatedContext;
	}
	public date(): DateContext {
		return this.getTypedRuleContext(DateContext, 0) as DateContext;
	}
	public normal(): NormalContext {
		return this.getTypedRuleContext(NormalContext, 0) as NormalContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_range_value;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterRange_value) {
	 		listener.enterRange_value(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitRange_value) {
	 		listener.exitRange_value(this);
		}
	}
}


export class Multi_valueContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.LPAREN, 0);
	}
	public clauseDefault(): ClauseDefaultContext {
		return this.getTypedRuleContext(ClauseDefaultContext, 0) as ClauseDefaultContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.RPAREN, 0);
	}
	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_multi_value;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterMulti_value) {
	 		listener.enterMulti_value(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitMulti_value) {
	 		listener.exitMulti_value(this);
		}
	}
}


export class NormalContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TERM_NORMAL(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.TERM_NORMAL, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_normal;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterNormal) {
	 		listener.enterNormal(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitNormal) {
	 		listener.exitNormal(this);
		}
	}
}


export class TruncatedContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TERM_TRUNCATED(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.TERM_TRUNCATED, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_truncated;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterTruncated) {
	 		listener.enterTruncated(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitTruncated) {
	 		listener.exitTruncated(this);
		}
	}
}


export class Quoted_truncatedContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PHRASE_ANYTHING(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.PHRASE_ANYTHING, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_quoted_truncated;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterQuoted_truncated) {
	 		listener.enterQuoted_truncated(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitQuoted_truncated) {
	 		listener.exitQuoted_truncated(this);
		}
	}
}


export class QuotedContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PHRASE(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.PHRASE, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_quoted;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterQuoted) {
	 		listener.enterQuoted(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitQuoted) {
	 		listener.exitQuoted(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_modifier;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterModifier) {
	 		listener.enterModifier(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitModifier) {
	 		listener.exitModifier(this);
		}
	}
}


export class Term_modifierContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public boost(): BoostContext {
		return this.getTypedRuleContext(BoostContext, 0) as BoostContext;
	}
	public fuzzy(): FuzzyContext {
		return this.getTypedRuleContext(FuzzyContext, 0) as FuzzyContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_term_modifier;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterTerm_modifier) {
	 		listener.enterTerm_modifier(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitTerm_modifier) {
	 		listener.exitTerm_modifier(this);
		}
	}
}


export class BoostContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CARAT(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.CARAT, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_boost;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterBoost) {
	 		listener.enterBoost(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitBoost) {
	 		listener.exitBoost(this);
		}
	}
}


export class FuzzyContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TILDE(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.TILDE, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_fuzzy;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterFuzzy) {
	 		listener.enterFuzzy(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitFuzzy) {
	 		listener.exitFuzzy(this);
		}
	}
}


export class Not_Context extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.AND, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.NOT, 0);
	}
	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}
	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_not_;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterNot_) {
	 		listener.enterNot_(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitNot_) {
	 		listener.exitNot_(this);
		}
	}
}


export class And_Context extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.AND, 0);
	}
	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_and_;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterAnd_) {
	 		listener.enterAnd_(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitAnd_) {
	 		listener.exitAnd_(this);
		}
	}
}


export class Or_Context extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OR(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.OR, 0);
	}
	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_or_;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterOr_) {
	 		listener.enterOr_(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitOr_) {
	 		listener.exitOr_(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DATE_TOKEN(): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.DATE_TOKEN, 0);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_date;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterDate) {
	 		listener.enterDate(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitDate) {
	 		listener.exitDate(this);
		}
	}
}


export class SepContext extends ParserRuleContext {
	constructor(parser?: StandardLuceneGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(StandardLuceneGrammarParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(StandardLuceneGrammarParser.WS, i);
	}
    public get ruleIndex(): number {
    	return StandardLuceneGrammarParser.RULE_sep;
	}
	public enterRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.enterSep) {
	 		listener.enterSep(this);
		}
	}
	public exitRule(listener: StandardLuceneGrammarListener): void {
	    if(listener.exitSep) {
	 		listener.exitSep(this);
		}
	}
}
