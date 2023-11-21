// Generated from ElasticsearchGrammar.g4 by ANTLR 4.13.1
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
import ElasticsearchGrammarListener from "./ElasticsearchGrammarListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ElasticsearchGrammarParser extends Parser {
	public static readonly GT = 1;
	public static readonly GTE = 2;
	public static readonly LT = 3;
	public static readonly LTE = 4;
	public static readonly LPAREN = 5;
	public static readonly RPAREN = 6;
	public static readonly LBRACK = 7;
	public static readonly RBRACK = 8;
	public static readonly COLON = 9;
	public static readonly PLUS = 10;
	public static readonly MINUS = 11;
	public static readonly STAR = 12;
	public static readonly QMARK = 13;
	public static readonly LCURLY = 14;
	public static readonly RCURLY = 15;
	public static readonly CARAT = 16;
	public static readonly TILDE = 17;
	public static readonly DQUOTE = 18;
	public static readonly SQUOTE = 19;
	public static readonly TO = 20;
	public static readonly AND = 21;
	public static readonly OR = 22;
	public static readonly NOT = 23;
	public static readonly WS = 24;
	public static readonly NUMBER = 25;
	public static readonly DATE_TOKEN = 26;
	public static readonly TERM_NORMAL = 27;
	public static readonly TERM_TRUNCATED = 28;
	public static readonly PHRASE = 29;
	public static readonly PHRASE_ANYTHING = 30;
	public static readonly OPERATOR = 31;
	public static readonly ATOM = 32;
	public static readonly MODIFIER = 33;
	public static readonly TMODIFIER = 34;
	public static readonly CLAUSE = 35;
	public static readonly FIELD = 36;
	public static readonly FUZZY = 37;
	public static readonly BOOST = 38;
	public static readonly QNORMAL = 39;
	public static readonly QPHRASE = 40;
	public static readonly QPHRASETRUNC = 41;
	public static readonly QTRUNCATED = 42;
	public static readonly QRANGEIN = 43;
	public static readonly QRANGEEX = 44;
	public static readonly QANYTHING = 45;
	public static readonly QDATE = 46;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_range_term = 0;
	public static readonly RULE_one_sided_range_term = 1;
	public static readonly RULE_mainQ = 2;
	public static readonly RULE_clauseDefault = 3;
	public static readonly RULE_clauseOr = 4;
	public static readonly RULE_clauseAnd = 5;
	public static readonly RULE_clauseNot = 6;
	public static readonly RULE_clauseBasic = 7;
	public static readonly RULE_atom = 8;
	public static readonly RULE_field = 9;
	public static readonly RULE_value = 10;
	public static readonly RULE_anything = 11;
	public static readonly RULE_two_sided_range_term = 12;
	public static readonly RULE_range_value = 13;
	public static readonly RULE_multi_value = 14;
	public static readonly RULE_normal = 15;
	public static readonly RULE_truncated = 16;
	public static readonly RULE_quoted_truncated = 17;
	public static readonly RULE_quoted = 18;
	public static readonly RULE_modifier = 19;
	public static readonly RULE_term_modifier = 20;
	public static readonly RULE_boost = 21;
	public static readonly RULE_fuzzy = 22;
	public static readonly RULE_not_ = 23;
	public static readonly RULE_and_ = 24;
	public static readonly RULE_or_ = 25;
	public static readonly RULE_date = 26;
	public static readonly RULE_sep = 27;
	public static readonly literalNames: (string | null)[] = [ null, "'>'", 
                                                            "'>='", "'<'", 
                                                            "'<='", "'('", 
                                                            "')'", "'['", 
                                                            "']'", "':'", 
                                                            "'+'", null, 
                                                            "'*'", null, 
                                                            "'{'", "'}'", 
                                                            null, null, 
                                                            "'\"'", "'''", 
                                                            "'TO'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "GT", 
                                                             "GTE", "LT", 
                                                             "LTE", "LPAREN", 
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
		"range_term", "one_sided_range_term", "mainQ", "clauseDefault", "clauseOr", 
		"clauseAnd", "clauseNot", "clauseBasic", "atom", "field", "value", "anything", 
		"two_sided_range_term", "range_value", "multi_value", "normal", "truncated", 
		"quoted_truncated", "quoted", "modifier", "term_modifier", "boost", "fuzzy", 
		"not_", "and_", "or_", "date", "sep",
	];
	public get grammarFileName(): string { return "ElasticsearchGrammar.g4"; }
	public get literalNames(): (string | null)[] { return ElasticsearchGrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ElasticsearchGrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return ElasticsearchGrammarParser.ruleNames; }
	public get serializedATN(): number[] { return ElasticsearchGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ElasticsearchGrammarParser._ATN, ElasticsearchGrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public range_term(): Range_termContext {
		let localctx: Range_termContext = new Range_termContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ElasticsearchGrammarParser.RULE_range_term);
		try {
			this.state = 58;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 56;
				this.two_sided_range_term();
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 57;
				this.one_sided_range_term();
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
	public one_sided_range_term(): One_sided_range_termContext {
		let localctx: One_sided_range_termContext = new One_sided_range_termContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ElasticsearchGrammarParser.RULE_one_sided_range_term);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 30) !== 0))) {
			    localctx._op = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 61;
			localctx._val = this.range_value();
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
	public mainQ(): MainQContext {
		let localctx: MainQContext = new MainQContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ElasticsearchGrammarParser.RULE_mainQ);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 63;
				this.sep();
				}
				break;
			}
			this.state = 66;
			localctx._clause = this.clauseDefault();
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 67;
				this.sep();
				}
			}

			this.state = 70;
			this.match(ElasticsearchGrammarParser.EOF);
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
		this.enterRule(localctx, 6, ElasticsearchGrammarParser.RULE_clauseDefault);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			this.clauseOr();
			this.state = 79;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 74;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						this.state = 73;
						this.sep();
						}
						break;
					}
					this.state = 76;
					this.clauseOr();
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
	public clauseOr(): ClauseOrContext {
		let localctx: ClauseOrContext = new ClauseOrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ElasticsearchGrammarParser.RULE_clauseOr);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 82;
			this.clauseAnd();
			this.state = 88;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 83;
					this.or_();
					this.state = 84;
					this.clauseAnd();
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
	public clauseAnd(): ClauseAndContext {
		let localctx: ClauseAndContext = new ClauseAndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ElasticsearchGrammarParser.RULE_clauseAnd);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 91;
			this.clauseNot();
			this.state = 97;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 92;
					this.and_();
					this.state = 93;
					this.clauseNot();
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
	public clauseNot(): ClauseNotContext {
		let localctx: ClauseNotContext = new ClauseNotContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ElasticsearchGrammarParser.RULE_clauseNot);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 100;
			this.clauseBasic();
			this.state = 106;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 101;
					this.not_();
					this.state = 102;
					this.clauseBasic();
					}
					}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
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
		this.enterRule(localctx, 14, ElasticsearchGrammarParser.RULE_clauseBasic);
		let _la: number;
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 109;
					this.sep();
					}
				}

				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10 || _la===11) {
					{
					this.state = 112;
					this.modifier();
					}
				}

				this.state = 115;
				this.match(ElasticsearchGrammarParser.LPAREN);
				this.state = 116;
				this.clauseDefault();
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 117;
					this.sep();
					}
				}

				this.state = 120;
				this.match(ElasticsearchGrammarParser.RPAREN);
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===17) {
					{
					this.state = 121;
					this.term_modifier();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 124;
					this.sep();
					}
				}

				this.state = 127;
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
		this.enterRule(localctx, 16, ElasticsearchGrammarParser.RULE_atom);
		let _la: number;
		try {
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10 || _la===11) {
					{
					this.state = 130;
					this.modifier();
					}
				}

				this.state = 133;
				this.field();
				this.state = 134;
				this.multi_value();
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===17) {
					{
					this.state = 135;
					this.term_modifier();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10 || _la===11) {
					{
					this.state = 138;
					this.modifier();
					}
				}

				this.state = 142;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 141;
					this.field();
					}
					break;
				}
				this.state = 144;
				this.value();
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===17) {
					{
					this.state = 145;
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
		this.enterRule(localctx, 18, ElasticsearchGrammarParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.match(ElasticsearchGrammarParser.TERM_NORMAL);
			this.state = 151;
			this.match(ElasticsearchGrammarParser.COLON);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 152;
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
		this.enterRule(localctx, 20, ElasticsearchGrammarParser.RULE_value);
		try {
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 155;
				this.range_term();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 156;
				this.normal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 157;
				this.truncated();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 158;
				this.quoted();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 159;
				this.quoted_truncated();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 160;
				this.match(ElasticsearchGrammarParser.QMARK);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 161;
				this.anything();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 162;
				this.match(ElasticsearchGrammarParser.STAR);
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
		this.enterRule(localctx, 22, ElasticsearchGrammarParser.RULE_anything);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 165;
			this.match(ElasticsearchGrammarParser.STAR);
			this.state = 166;
			this.match(ElasticsearchGrammarParser.COLON);
			this.state = 167;
			this.match(ElasticsearchGrammarParser.STAR);
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
		this.enterRule(localctx, 24, ElasticsearchGrammarParser.RULE_two_sided_range_term);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 169;
			localctx._start_type = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===7 || _la===14)) {
			    localctx._start_type = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 170;
				this.sep();
				}
			}

			{
			this.state = 173;
			localctx._a = this.range_value();
			}
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 174;
				this.sep();
				}
				break;
			}
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2131759104) !== 0)) {
				{
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 177;
					this.match(ElasticsearchGrammarParser.TO);
					}
				}

				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 180;
					this.sep();
					}
				}

				this.state = 183;
				localctx._b = this.range_value();
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 184;
					this.sep();
					}
				}

				}
			}

			this.state = 189;
			localctx._end_type = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===8 || _la===15)) {
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
	public range_value(): Range_valueContext {
		let localctx: Range_valueContext = new Range_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, ElasticsearchGrammarParser.RULE_range_value);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 191;
				this.truncated();
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 192;
				this.quoted();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 193;
				this.quoted_truncated();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 194;
				this.date();
				}
				break;
			case 25:
			case 27:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 195;
				this.normal();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 196;
				this.match(ElasticsearchGrammarParser.STAR);
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
		this.enterRule(localctx, 28, ElasticsearchGrammarParser.RULE_multi_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this.match(ElasticsearchGrammarParser.LPAREN);
			this.state = 200;
			this.clauseDefault();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 201;
				this.sep();
				}
			}

			this.state = 204;
			this.match(ElasticsearchGrammarParser.RPAREN);
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
		this.enterRule(localctx, 30, ElasticsearchGrammarParser.RULE_normal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 206;
			_la = this._input.LA(1);
			if(!(_la===25 || _la===27)) {
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
		this.enterRule(localctx, 32, ElasticsearchGrammarParser.RULE_truncated);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 208;
			this.match(ElasticsearchGrammarParser.TERM_TRUNCATED);
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
		this.enterRule(localctx, 34, ElasticsearchGrammarParser.RULE_quoted_truncated);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.match(ElasticsearchGrammarParser.PHRASE_ANYTHING);
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
		this.enterRule(localctx, 36, ElasticsearchGrammarParser.RULE_quoted);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this.match(ElasticsearchGrammarParser.PHRASE);
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
		this.enterRule(localctx, 38, ElasticsearchGrammarParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 214;
			_la = this._input.LA(1);
			if(!(_la===10 || _la===11)) {
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
		this.enterRule(localctx, 40, ElasticsearchGrammarParser.RULE_term_modifier);
		let _la: number;
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 216;
				this.boost();
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 217;
					this.fuzzy();
					}
				}

				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 220;
				this.fuzzy();
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 221;
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
		this.enterRule(localctx, 42, ElasticsearchGrammarParser.RULE_boost);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 226;
			this.match(ElasticsearchGrammarParser.CARAT);
			}
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 227;
				this.match(ElasticsearchGrammarParser.NUMBER);
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
		this.enterRule(localctx, 44, ElasticsearchGrammarParser.RULE_fuzzy);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 230;
			this.match(ElasticsearchGrammarParser.TILDE);
			}
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 231;
				this.match(ElasticsearchGrammarParser.NUMBER);
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
		this.enterRule(localctx, 46, ElasticsearchGrammarParser.RULE_not_);
		let _la: number;
		try {
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 234;
					this.sep();
					}
				}

				this.state = 237;
				this.match(ElasticsearchGrammarParser.AND);
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 238;
					this.sep();
					}
				}

				this.state = 241;
				this.match(ElasticsearchGrammarParser.NOT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 242;
					this.sep();
					}
				}

				this.state = 245;
				this.match(ElasticsearchGrammarParser.NOT);
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
		this.enterRule(localctx, 48, ElasticsearchGrammarParser.RULE_and_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 248;
				this.sep();
				}
			}

			this.state = 251;
			this.match(ElasticsearchGrammarParser.AND);
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
		this.enterRule(localctx, 50, ElasticsearchGrammarParser.RULE_or_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 253;
				this.sep();
				}
			}

			this.state = 256;
			this.match(ElasticsearchGrammarParser.OR);
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
		this.enterRule(localctx, 52, ElasticsearchGrammarParser.RULE_date);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			this.match(ElasticsearchGrammarParser.DATE_TOKEN);
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
		this.enterRule(localctx, 54, ElasticsearchGrammarParser.RULE_sep);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 260;
					this.match(ElasticsearchGrammarParser.WS);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 263;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
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

	public static readonly _serializedATN: number[] = [4,1,46,266,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,1,0,1,0,3,0,59,8,0,1,1,1,1,1,1,1,2,3,2,
	65,8,2,1,2,1,2,3,2,69,8,2,1,2,1,2,1,3,1,3,3,3,75,8,3,1,3,5,3,78,8,3,10,
	3,12,3,81,9,3,1,4,1,4,1,4,1,4,5,4,87,8,4,10,4,12,4,90,9,4,1,5,1,5,1,5,1,
	5,5,5,96,8,5,10,5,12,5,99,9,5,1,6,1,6,1,6,1,6,5,6,105,8,6,10,6,12,6,108,
	9,6,1,7,3,7,111,8,7,1,7,3,7,114,8,7,1,7,1,7,1,7,3,7,119,8,7,1,7,1,7,3,7,
	123,8,7,1,7,3,7,126,8,7,1,7,3,7,129,8,7,1,8,3,8,132,8,8,1,8,1,8,1,8,3,8,
	137,8,8,1,8,3,8,140,8,8,1,8,3,8,143,8,8,1,8,1,8,3,8,147,8,8,3,8,149,8,8,
	1,9,1,9,1,9,3,9,154,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,164,
	8,10,1,11,1,11,1,11,1,11,1,12,1,12,3,12,172,8,12,1,12,1,12,3,12,176,8,12,
	1,12,3,12,179,8,12,1,12,3,12,182,8,12,1,12,1,12,3,12,186,8,12,3,12,188,
	8,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,198,8,13,1,14,1,14,1,
	14,3,14,203,8,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,
	1,19,1,20,1,20,3,20,219,8,20,1,20,1,20,3,20,223,8,20,3,20,225,8,20,1,21,
	1,21,3,21,229,8,21,1,22,1,22,3,22,233,8,22,1,23,3,23,236,8,23,1,23,1,23,
	3,23,240,8,23,1,23,1,23,3,23,244,8,23,1,23,3,23,247,8,23,1,24,3,24,250,
	8,24,1,24,1,24,1,25,3,25,255,8,25,1,25,1,25,1,26,1,26,1,27,4,27,262,8,27,
	11,27,12,27,263,1,27,0,0,28,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,40,42,44,46,48,50,52,54,0,5,1,0,1,4,2,0,7,7,14,14,2,0,8,8,15,
	15,2,0,25,25,27,27,1,0,10,11,289,0,58,1,0,0,0,2,60,1,0,0,0,4,64,1,0,0,0,
	6,72,1,0,0,0,8,82,1,0,0,0,10,91,1,0,0,0,12,100,1,0,0,0,14,128,1,0,0,0,16,
	148,1,0,0,0,18,150,1,0,0,0,20,163,1,0,0,0,22,165,1,0,0,0,24,169,1,0,0,0,
	26,197,1,0,0,0,28,199,1,0,0,0,30,206,1,0,0,0,32,208,1,0,0,0,34,210,1,0,
	0,0,36,212,1,0,0,0,38,214,1,0,0,0,40,224,1,0,0,0,42,226,1,0,0,0,44,230,
	1,0,0,0,46,246,1,0,0,0,48,249,1,0,0,0,50,254,1,0,0,0,52,258,1,0,0,0,54,
	261,1,0,0,0,56,59,3,24,12,0,57,59,3,2,1,0,58,56,1,0,0,0,58,57,1,0,0,0,59,
	1,1,0,0,0,60,61,7,0,0,0,61,62,3,26,13,0,62,3,1,0,0,0,63,65,3,54,27,0,64,
	63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,68,3,6,3,0,67,69,3,54,27,0,68,
	67,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,71,5,0,0,1,71,5,1,0,0,0,72,79,
	3,8,4,0,73,75,3,54,27,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,78,
	3,8,4,0,77,74,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,7,1,
	0,0,0,81,79,1,0,0,0,82,88,3,10,5,0,83,84,3,50,25,0,84,85,3,10,5,0,85,87,
	1,0,0,0,86,83,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,9,1,
	0,0,0,90,88,1,0,0,0,91,97,3,12,6,0,92,93,3,48,24,0,93,94,3,12,6,0,94,96,
	1,0,0,0,95,92,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,11,1,
	0,0,0,99,97,1,0,0,0,100,106,3,14,7,0,101,102,3,46,23,0,102,103,3,14,7,0,
	103,105,1,0,0,0,104,101,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,
	1,0,0,0,107,13,1,0,0,0,108,106,1,0,0,0,109,111,3,54,27,0,110,109,1,0,0,
	0,110,111,1,0,0,0,111,113,1,0,0,0,112,114,3,38,19,0,113,112,1,0,0,0,113,
	114,1,0,0,0,114,115,1,0,0,0,115,116,5,5,0,0,116,118,3,6,3,0,117,119,3,54,
	27,0,118,117,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,122,5,6,0,0,121,
	123,3,40,20,0,122,121,1,0,0,0,122,123,1,0,0,0,123,129,1,0,0,0,124,126,3,
	54,27,0,125,124,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,129,3,16,8,
	0,128,110,1,0,0,0,128,125,1,0,0,0,129,15,1,0,0,0,130,132,3,38,19,0,131,
	130,1,0,0,0,131,132,1,0,0,0,132,133,1,0,0,0,133,134,3,18,9,0,134,136,3,
	28,14,0,135,137,3,40,20,0,136,135,1,0,0,0,136,137,1,0,0,0,137,149,1,0,0,
	0,138,140,3,38,19,0,139,138,1,0,0,0,139,140,1,0,0,0,140,142,1,0,0,0,141,
	143,3,18,9,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,146,3,
	20,10,0,145,147,3,40,20,0,146,145,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,
	0,148,131,1,0,0,0,148,139,1,0,0,0,149,17,1,0,0,0,150,151,5,27,0,0,151,153,
	5,9,0,0,152,154,3,54,27,0,153,152,1,0,0,0,153,154,1,0,0,0,154,19,1,0,0,
	0,155,164,3,0,0,0,156,164,3,30,15,0,157,164,3,32,16,0,158,164,3,36,18,0,
	159,164,3,34,17,0,160,164,5,13,0,0,161,164,3,22,11,0,162,164,5,12,0,0,163,
	155,1,0,0,0,163,156,1,0,0,0,163,157,1,0,0,0,163,158,1,0,0,0,163,159,1,0,
	0,0,163,160,1,0,0,0,163,161,1,0,0,0,163,162,1,0,0,0,164,21,1,0,0,0,165,
	166,5,12,0,0,166,167,5,9,0,0,167,168,5,12,0,0,168,23,1,0,0,0,169,171,7,
	1,0,0,170,172,3,54,27,0,171,170,1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,
	173,175,3,26,13,0,174,176,3,54,27,0,175,174,1,0,0,0,175,176,1,0,0,0,176,
	187,1,0,0,0,177,179,5,20,0,0,178,177,1,0,0,0,178,179,1,0,0,0,179,181,1,
	0,0,0,180,182,3,54,27,0,181,180,1,0,0,0,181,182,1,0,0,0,182,183,1,0,0,0,
	183,185,3,26,13,0,184,186,3,54,27,0,185,184,1,0,0,0,185,186,1,0,0,0,186,
	188,1,0,0,0,187,178,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,7,2,
	0,0,190,25,1,0,0,0,191,198,3,32,16,0,192,198,3,36,18,0,193,198,3,34,17,
	0,194,198,3,52,26,0,195,198,3,30,15,0,196,198,5,12,0,0,197,191,1,0,0,0,
	197,192,1,0,0,0,197,193,1,0,0,0,197,194,1,0,0,0,197,195,1,0,0,0,197,196,
	1,0,0,0,198,27,1,0,0,0,199,200,5,5,0,0,200,202,3,6,3,0,201,203,3,54,27,
	0,202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,205,5,6,0,0,205,29,
	1,0,0,0,206,207,7,3,0,0,207,31,1,0,0,0,208,209,5,28,0,0,209,33,1,0,0,0,
	210,211,5,30,0,0,211,35,1,0,0,0,212,213,5,29,0,0,213,37,1,0,0,0,214,215,
	7,4,0,0,215,39,1,0,0,0,216,218,3,42,21,0,217,219,3,44,22,0,218,217,1,0,
	0,0,218,219,1,0,0,0,219,225,1,0,0,0,220,222,3,44,22,0,221,223,3,42,21,0,
	222,221,1,0,0,0,222,223,1,0,0,0,223,225,1,0,0,0,224,216,1,0,0,0,224,220,
	1,0,0,0,225,41,1,0,0,0,226,228,5,16,0,0,227,229,5,25,0,0,228,227,1,0,0,
	0,228,229,1,0,0,0,229,43,1,0,0,0,230,232,5,17,0,0,231,233,5,25,0,0,232,
	231,1,0,0,0,232,233,1,0,0,0,233,45,1,0,0,0,234,236,3,54,27,0,235,234,1,
	0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,239,5,21,0,0,238,240,3,54,27,
	0,239,238,1,0,0,0,239,240,1,0,0,0,240,241,1,0,0,0,241,247,5,23,0,0,242,
	244,3,54,27,0,243,242,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,247,5,
	23,0,0,246,235,1,0,0,0,246,243,1,0,0,0,247,47,1,0,0,0,248,250,3,54,27,0,
	249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,0,0,0,251,252,5,21,0,0,252,49,
	1,0,0,0,253,255,3,54,27,0,254,253,1,0,0,0,254,255,1,0,0,0,255,256,1,0,0,
	0,256,257,5,22,0,0,257,51,1,0,0,0,258,259,5,26,0,0,259,53,1,0,0,0,260,262,
	5,24,0,0,261,260,1,0,0,0,262,263,1,0,0,0,263,261,1,0,0,0,263,264,1,0,0,
	0,264,55,1,0,0,0,42,58,64,68,74,79,88,97,106,110,113,118,122,125,128,131,
	136,139,142,146,148,153,163,171,175,178,181,185,187,197,202,218,222,224,
	228,232,235,239,243,246,249,254,263];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ElasticsearchGrammarParser.__ATN) {
			ElasticsearchGrammarParser.__ATN = new ATNDeserializer().deserialize(ElasticsearchGrammarParser._serializedATN);
		}

		return ElasticsearchGrammarParser.__ATN;
	}


	static DecisionsToDFA = ElasticsearchGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Range_termContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public two_sided_range_term(): Two_sided_range_termContext {
		return this.getTypedRuleContext(Two_sided_range_termContext, 0) as Two_sided_range_termContext;
	}
	public one_sided_range_term(): One_sided_range_termContext {
		return this.getTypedRuleContext(One_sided_range_termContext, 0) as One_sided_range_termContext;
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_range_term;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterRange_term) {
	 		listener.enterRange_term(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitRange_term) {
	 		listener.exitRange_term(this);
		}
	}
}


export class One_sided_range_termContext extends ParserRuleContext {
	public _op!: Token;
	public _val!: Range_valueContext;
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public range_value(): Range_valueContext {
		return this.getTypedRuleContext(Range_valueContext, 0) as Range_valueContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.GT, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.GTE, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.LT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.LTE, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_one_sided_range_term;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterOne_sided_range_term) {
	 		listener.enterOne_sided_range_term(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitOne_sided_range_term) {
	 		listener.exitOne_sided_range_term(this);
		}
	}
}


export class MainQContext extends ParserRuleContext {
	public _clause!: ClauseDefaultContext;
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.EOF, 0);
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
    	return ElasticsearchGrammarParser.RULE_mainQ;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterMainQ) {
	 		listener.enterMainQ(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitMainQ) {
	 		listener.exitMainQ(this);
		}
	}
}


export class ClauseDefaultContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return ElasticsearchGrammarParser.RULE_clauseDefault;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterClauseDefault) {
	 		listener.enterClauseDefault(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitClauseDefault) {
	 		listener.exitClauseDefault(this);
		}
	}
}


export class ClauseOrContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return ElasticsearchGrammarParser.RULE_clauseOr;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterClauseOr) {
	 		listener.enterClauseOr(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitClauseOr) {
	 		listener.exitClauseOr(this);
		}
	}
}


export class ClauseAndContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return ElasticsearchGrammarParser.RULE_clauseAnd;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterClauseAnd) {
	 		listener.enterClauseAnd(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitClauseAnd) {
	 		listener.exitClauseAnd(this);
		}
	}
}


export class ClauseNotContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return ElasticsearchGrammarParser.RULE_clauseNot;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterClauseNot) {
	 		listener.enterClauseNot(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitClauseNot) {
	 		listener.exitClauseNot(this);
		}
	}
}


export class ClauseBasicContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.LPAREN, 0);
	}
	public clauseDefault(): ClauseDefaultContext {
		return this.getTypedRuleContext(ClauseDefaultContext, 0) as ClauseDefaultContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.RPAREN, 0);
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
    	return ElasticsearchGrammarParser.RULE_clauseBasic;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterClauseBasic) {
	 		listener.enterClauseBasic(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitClauseBasic) {
	 		listener.exitClauseBasic(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return ElasticsearchGrammarParser.RULE_atom;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TERM_NORMAL(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.TERM_NORMAL, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.COLON, 0);
	}
	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_field;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterField) {
	 		listener.enterField(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitField) {
	 		listener.exitField(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(ElasticsearchGrammarParser.QMARK, 0);
	}
	public anything(): AnythingContext {
		return this.getTypedRuleContext(AnythingContext, 0) as AnythingContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_value;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class AnythingContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR_list(): TerminalNode[] {
	    	return this.getTokens(ElasticsearchGrammarParser.STAR);
	}
	public STAR(i: number): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.STAR, i);
	}
	public COLON(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_anything;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterAnything) {
	 		listener.enterAnything(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
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
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.LBRACK, 0);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.LCURLY, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.RBRACK, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.RCURLY, 0);
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
		return this.getToken(ElasticsearchGrammarParser.TO, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_two_sided_range_term;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterTwo_sided_range_term) {
	 		listener.enterTwo_sided_range_term(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitTwo_sided_range_term) {
	 		listener.exitTwo_sided_range_term(this);
		}
	}
}


export class Range_valueContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(ElasticsearchGrammarParser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_range_value;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterRange_value) {
	 		listener.enterRange_value(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitRange_value) {
	 		listener.exitRange_value(this);
		}
	}
}


export class Multi_valueContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.LPAREN, 0);
	}
	public clauseDefault(): ClauseDefaultContext {
		return this.getTypedRuleContext(ClauseDefaultContext, 0) as ClauseDefaultContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.RPAREN, 0);
	}
	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_multi_value;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterMulti_value) {
	 		listener.enterMulti_value(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitMulti_value) {
	 		listener.exitMulti_value(this);
		}
	}
}


export class NormalContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TERM_NORMAL(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.TERM_NORMAL, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_normal;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterNormal) {
	 		listener.enterNormal(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitNormal) {
	 		listener.exitNormal(this);
		}
	}
}


export class TruncatedContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TERM_TRUNCATED(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.TERM_TRUNCATED, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_truncated;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterTruncated) {
	 		listener.enterTruncated(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitTruncated) {
	 		listener.exitTruncated(this);
		}
	}
}


export class Quoted_truncatedContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PHRASE_ANYTHING(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.PHRASE_ANYTHING, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_quoted_truncated;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterQuoted_truncated) {
	 		listener.enterQuoted_truncated(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitQuoted_truncated) {
	 		listener.exitQuoted_truncated(this);
		}
	}
}


export class QuotedContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PHRASE(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.PHRASE, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_quoted;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterQuoted) {
	 		listener.enterQuoted(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitQuoted) {
	 		listener.exitQuoted(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_modifier;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterModifier) {
	 		listener.enterModifier(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitModifier) {
	 		listener.exitModifier(this);
		}
	}
}


export class Term_modifierContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return ElasticsearchGrammarParser.RULE_term_modifier;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterTerm_modifier) {
	 		listener.enterTerm_modifier(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitTerm_modifier) {
	 		listener.exitTerm_modifier(this);
		}
	}
}


export class BoostContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CARAT(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.CARAT, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_boost;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterBoost) {
	 		listener.enterBoost(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitBoost) {
	 		listener.exitBoost(this);
		}
	}
}


export class FuzzyContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TILDE(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.TILDE, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_fuzzy;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterFuzzy) {
	 		listener.enterFuzzy(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitFuzzy) {
	 		listener.exitFuzzy(this);
		}
	}
}


export class Not_Context extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.AND, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.NOT, 0);
	}
	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}
	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_not_;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterNot_) {
	 		listener.enterNot_(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitNot_) {
	 		listener.exitNot_(this);
		}
	}
}


export class And_Context extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.AND, 0);
	}
	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_and_;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterAnd_) {
	 		listener.enterAnd_(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitAnd_) {
	 		listener.exitAnd_(this);
		}
	}
}


export class Or_Context extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OR(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.OR, 0);
	}
	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_or_;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterOr_) {
	 		listener.enterOr_(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitOr_) {
	 		listener.exitOr_(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DATE_TOKEN(): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.DATE_TOKEN, 0);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_date;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterDate) {
	 		listener.enterDate(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitDate) {
	 		listener.exitDate(this);
		}
	}
}


export class SepContext extends ParserRuleContext {
	constructor(parser?: ElasticsearchGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(ElasticsearchGrammarParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(ElasticsearchGrammarParser.WS, i);
	}
    public get ruleIndex(): number {
    	return ElasticsearchGrammarParser.RULE_sep;
	}
	public enterRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.enterSep) {
	 		listener.enterSep(this);
		}
	}
	public exitRule(listener: ElasticsearchGrammarListener): void {
	    if(listener.exitSep) {
	 		listener.exitSep(this);
		}
	}
}
