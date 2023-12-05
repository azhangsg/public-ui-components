// Generated from KQueryParser.g4 by ANTLR 4.13.1
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
import KQueryParserListener from "./KQueryParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class KQueryParser extends Parser {
	public static readonly OR = 1;
	public static readonly NOT = 2;
	public static readonly AND = 3;
	public static readonly TILDE = 4;
	public static readonly OP_COLON = 5;
	public static readonly GROUPING_LPAREN = 6;
	public static readonly GROUPING_RPAREN = 7;
	public static readonly RESERVED_AT = 8;
	public static readonly NUMBER = 9;
	public static readonly TERM = 10;
	public static readonly QUOTED = 11;
	public static readonly DEFAULT_SKIP = 12;
	public static readonly UNKNOWN = 13;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_result = 0;
	public static readonly RULE_query = 1;
	public static readonly RULE_union = 2;
	public static readonly RULE_intersection = 3;
	public static readonly RULE_clause = 4;
	public static readonly RULE_or = 5;
	public static readonly RULE_and = 6;
	public static readonly RULE_exclusion = 7;
	public static readonly RULE_entityClause = 8;
	public static readonly RULE_grouping = 9;
	public static readonly RULE_fieldName = 10;
	public static readonly RULE_fieldValue = 11;
	public static readonly RULE_quotedValue = 12;
	public static readonly literalNames: (string | null)[] = [ null, "'OR'", 
                                                            "'-'", "'AND'", 
                                                            "'~'", "':'", 
                                                            "'('", "')'", 
                                                            "'@'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "OR", 
                                                             "NOT", "AND", 
                                                             "TILDE", "OP_COLON", 
                                                             "GROUPING_LPAREN", 
                                                             "GROUPING_RPAREN", 
                                                             "RESERVED_AT", 
                                                             "NUMBER", "TERM", 
                                                             "QUOTED", "DEFAULT_SKIP", 
                                                             "UNKNOWN" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"result", "query", "union", "intersection", "clause", "or", "and", "exclusion", 
		"entityClause", "grouping", "fieldName", "fieldValue", "quotedValue",
	];
	public get grammarFileName(): string { return "KQueryParser.g4"; }
	public get literalNames(): (string | null)[] { return KQueryParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return KQueryParser.symbolicNames; }
	public get ruleNames(): string[] { return KQueryParser.ruleNames; }
	public get serializedATN(): number[] { return KQueryParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, KQueryParser._ATN, KQueryParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let localctx: ResultContext = new ResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, KQueryParser.RULE_result);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this.query();
			this.state = 27;
			this.match(KQueryParser.EOF);
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
	public query(): QueryContext {
		let localctx: QueryContext = new QueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, KQueryParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 29;
				this.intersection();
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3908) !== 0));
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
	public union(): UnionContext {
		let localctx: UnionContext = new UnionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, KQueryParser.RULE_union);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 34;
			this.clause();
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 35;
				this.or();
				this.state = 36;
				this.clause();
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public intersection(): IntersectionContext {
		let localctx: IntersectionContext = new IntersectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, KQueryParser.RULE_intersection);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.union();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 44;
				this.and();
				this.state = 45;
				this.union();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public clause(): ClauseContext {
		let localctx: ClauseContext = new ClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, KQueryParser.RULE_clause);
		let _la: number;
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 8:
			case 9:
			case 10:
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 52;
					this.exclusion();
					}
				}

				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 55;
					this.entityClause();
					}
				}

				this.state = 61;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 58;
					this.fieldName();
					{
					this.state = 59;
					this.match(KQueryParser.OP_COLON);
					}
					}
					break;
				}
				{
				this.state = 63;
				this.fieldValue();
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 64;
				this.grouping();
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
	public or(): OrContext {
		let localctx: OrContext = new OrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, KQueryParser.RULE_or);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(KQueryParser.OR);
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
	public and(): AndContext {
		let localctx: AndContext = new AndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, KQueryParser.RULE_and);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.match(KQueryParser.AND);
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
	public exclusion(): ExclusionContext {
		let localctx: ExclusionContext = new ExclusionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, KQueryParser.RULE_exclusion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.match(KQueryParser.NOT);
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
	public entityClause(): EntityClauseContext {
		let localctx: EntityClauseContext = new EntityClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, KQueryParser.RULE_entityClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this.match(KQueryParser.RESERVED_AT);
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
	public grouping(): GroupingContext {
		let localctx: GroupingContext = new GroupingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, KQueryParser.RULE_grouping);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(KQueryParser.GROUPING_LPAREN);
			this.state = 76;
			this.query();
			this.state = 77;
			this.match(KQueryParser.GROUPING_RPAREN);
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
	public fieldName(): FieldNameContext {
		let localctx: FieldNameContext = new FieldNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, KQueryParser.RULE_fieldName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(KQueryParser.TERM);
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
	public fieldValue(): FieldValueContext {
		let localctx: FieldValueContext = new FieldValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, KQueryParser.RULE_fieldValue);
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 81;
				this.quotedValue();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 82;
				this.match(KQueryParser.NUMBER);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 83;
				this.match(KQueryParser.TERM);
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
	public quotedValue(): QuotedValueContext {
		let localctx: QuotedValueContext = new QuotedValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, KQueryParser.RULE_quotedValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.match(KQueryParser.QUOTED);
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

	public static readonly _serializedATN: number[] = [4,1,13,89,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,1,0,1,0,1,1,4,1,31,8,1,11,1,12,1,32,1,2,
	1,2,1,2,1,2,5,2,39,8,2,10,2,12,2,42,9,2,1,3,1,3,1,3,1,3,5,3,48,8,3,10,3,
	12,3,51,9,3,1,4,3,4,54,8,4,1,4,3,4,57,8,4,1,4,1,4,1,4,3,4,62,8,4,1,4,1,
	4,3,4,66,8,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,
	1,11,1,11,1,11,3,11,85,8,11,1,12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,
	18,20,22,24,0,0,84,0,26,1,0,0,0,2,30,1,0,0,0,4,34,1,0,0,0,6,43,1,0,0,0,
	8,65,1,0,0,0,10,67,1,0,0,0,12,69,1,0,0,0,14,71,1,0,0,0,16,73,1,0,0,0,18,
	75,1,0,0,0,20,79,1,0,0,0,22,84,1,0,0,0,24,86,1,0,0,0,26,27,3,2,1,0,27,28,
	5,0,0,1,28,1,1,0,0,0,29,31,3,6,3,0,30,29,1,0,0,0,31,32,1,0,0,0,32,30,1,
	0,0,0,32,33,1,0,0,0,33,3,1,0,0,0,34,40,3,8,4,0,35,36,3,10,5,0,36,37,3,8,
	4,0,37,39,1,0,0,0,38,35,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,
	0,41,5,1,0,0,0,42,40,1,0,0,0,43,49,3,4,2,0,44,45,3,12,6,0,45,46,3,4,2,0,
	46,48,1,0,0,0,47,44,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,
	7,1,0,0,0,51,49,1,0,0,0,52,54,3,14,7,0,53,52,1,0,0,0,53,54,1,0,0,0,54,56,
	1,0,0,0,55,57,3,16,8,0,56,55,1,0,0,0,56,57,1,0,0,0,57,61,1,0,0,0,58,59,
	3,20,10,0,59,60,5,5,0,0,60,62,1,0,0,0,61,58,1,0,0,0,61,62,1,0,0,0,62,63,
	1,0,0,0,63,66,3,22,11,0,64,66,3,18,9,0,65,53,1,0,0,0,65,64,1,0,0,0,66,9,
	1,0,0,0,67,68,5,1,0,0,68,11,1,0,0,0,69,70,5,3,0,0,70,13,1,0,0,0,71,72,5,
	2,0,0,72,15,1,0,0,0,73,74,5,8,0,0,74,17,1,0,0,0,75,76,5,6,0,0,76,77,3,2,
	1,0,77,78,5,7,0,0,78,19,1,0,0,0,79,80,5,10,0,0,80,21,1,0,0,0,81,85,3,24,
	12,0,82,85,5,9,0,0,83,85,5,10,0,0,84,81,1,0,0,0,84,82,1,0,0,0,84,83,1,0,
	0,0,85,23,1,0,0,0,86,87,5,11,0,0,87,25,1,0,0,0,8,32,40,49,53,56,61,65,84];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KQueryParser.__ATN) {
			KQueryParser.__ATN = new ATNDeserializer().deserialize(KQueryParser._serializedATN);
		}

		return KQueryParser.__ATN;
	}


	static DecisionsToDFA = KQueryParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ResultContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(KQueryParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_result;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterResult) {
	 		listener.enterResult(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitResult) {
	 		listener.exitResult(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intersection_list(): IntersectionContext[] {
		return this.getTypedRuleContexts(IntersectionContext) as IntersectionContext[];
	}
	public intersection(i: number): IntersectionContext {
		return this.getTypedRuleContext(IntersectionContext, i) as IntersectionContext;
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_query;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterQuery) {
	 		listener.enterQuery(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitQuery) {
	 		listener.exitQuery(this);
		}
	}
}


export class UnionContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clause_list(): ClauseContext[] {
		return this.getTypedRuleContexts(ClauseContext) as ClauseContext[];
	}
	public clause(i: number): ClauseContext {
		return this.getTypedRuleContext(ClauseContext, i) as ClauseContext;
	}
	public or_list(): OrContext[] {
		return this.getTypedRuleContexts(OrContext) as OrContext[];
	}
	public or(i: number): OrContext {
		return this.getTypedRuleContext(OrContext, i) as OrContext;
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_union;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterUnion) {
	 		listener.enterUnion(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitUnion) {
	 		listener.exitUnion(this);
		}
	}
}


export class IntersectionContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public union_list(): UnionContext[] {
		return this.getTypedRuleContexts(UnionContext) as UnionContext[];
	}
	public union(i: number): UnionContext {
		return this.getTypedRuleContext(UnionContext, i) as UnionContext;
	}
	public and_list(): AndContext[] {
		return this.getTypedRuleContexts(AndContext) as AndContext[];
	}
	public and(i: number): AndContext {
		return this.getTypedRuleContext(AndContext, i) as AndContext;
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_intersection;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterIntersection) {
	 		listener.enterIntersection(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitIntersection) {
	 		listener.exitIntersection(this);
		}
	}
}


export class ClauseContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldValue(): FieldValueContext {
		return this.getTypedRuleContext(FieldValueContext, 0) as FieldValueContext;
	}
	public exclusion(): ExclusionContext {
		return this.getTypedRuleContext(ExclusionContext, 0) as ExclusionContext;
	}
	public entityClause(): EntityClauseContext {
		return this.getTypedRuleContext(EntityClauseContext, 0) as EntityClauseContext;
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public OP_COLON(): TerminalNode {
		return this.getToken(KQueryParser.OP_COLON, 0);
	}
	public grouping(): GroupingContext {
		return this.getTypedRuleContext(GroupingContext, 0) as GroupingContext;
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_clause;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterClause) {
	 		listener.enterClause(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitClause) {
	 		listener.exitClause(this);
		}
	}
}


export class OrContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OR(): TerminalNode {
		return this.getToken(KQueryParser.OR, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_or;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterOr) {
	 		listener.enterOr(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitOr) {
	 		listener.exitOr(this);
		}
	}
}


export class AndContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(KQueryParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_and;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterAnd) {
	 		listener.enterAnd(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitAnd) {
	 		listener.exitAnd(this);
		}
	}
}


export class ExclusionContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NOT(): TerminalNode {
		return this.getToken(KQueryParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_exclusion;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterExclusion) {
	 		listener.enterExclusion(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitExclusion) {
	 		listener.exitExclusion(this);
		}
	}
}


export class EntityClauseContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESERVED_AT(): TerminalNode {
		return this.getToken(KQueryParser.RESERVED_AT, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_entityClause;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterEntityClause) {
	 		listener.enterEntityClause(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitEntityClause) {
	 		listener.exitEntityClause(this);
		}
	}
}


export class GroupingContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GROUPING_LPAREN(): TerminalNode {
		return this.getToken(KQueryParser.GROUPING_LPAREN, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public GROUPING_RPAREN(): TerminalNode {
		return this.getToken(KQueryParser.GROUPING_RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_grouping;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterGrouping) {
	 		listener.enterGrouping(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitGrouping) {
	 		listener.exitGrouping(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TERM(): TerminalNode {
		return this.getToken(KQueryParser.TERM, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_fieldName;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterFieldName) {
	 		listener.enterFieldName(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitFieldName) {
	 		listener.exitFieldName(this);
		}
	}
}


export class FieldValueContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public quotedValue(): QuotedValueContext {
		return this.getTypedRuleContext(QuotedValueContext, 0) as QuotedValueContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(KQueryParser.NUMBER, 0);
	}
	public TERM(): TerminalNode {
		return this.getToken(KQueryParser.TERM, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_fieldValue;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterFieldValue) {
	 		listener.enterFieldValue(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitFieldValue) {
	 		listener.exitFieldValue(this);
		}
	}
}


export class QuotedValueContext extends ParserRuleContext {
	constructor(parser?: KQueryParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QUOTED(): TerminalNode {
		return this.getToken(KQueryParser.QUOTED, 0);
	}
    public get ruleIndex(): number {
    	return KQueryParser.RULE_quotedValue;
	}
	public enterRule(listener: KQueryParserListener): void {
	    if(listener.enterQuotedValue) {
	 		listener.enterQuotedValue(this);
		}
	}
	public exitRule(listener: KQueryParserListener): void {
	    if(listener.exitQuotedValue) {
	 		listener.exitQuotedValue(this);
		}
	}
}
