// Generated from KQueryLexer.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class KQueryLexer extends Lexer {
	public static readonly OR = 1;
	public static readonly AND = 2;
	public static readonly NOT = 3;
	public static readonly TILDE = 4;
	public static readonly MINUS = 5;
	public static readonly OP_COLON = 6;
	public static readonly GROUPING_LPAREN = 7;
	public static readonly GROUPING_RPAREN = 8;
	public static readonly RESERVED_AT = 9;
	public static readonly NUMBER = 10;
	public static readonly TERM = 11;
	public static readonly QUOTED = 12;
	public static readonly DEFAULT_SKIP = 13;
	public static readonly UNKNOWN = 14;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'~'", "'-'", 
                                                            "':'", "'('", 
                                                            "')'", "'@'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "OR", 
                                                             "AND", "NOT", 
                                                             "TILDE", "MINUS", 
                                                             "OP_COLON", 
                                                             "GROUPING_LPAREN", 
                                                             "GROUPING_RPAREN", 
                                                             "RESERVED_AT", 
                                                             "NUMBER", "TERM", 
                                                             "QUOTED", "DEFAULT_SKIP", 
                                                             "UNKNOWN" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"OR", "AND", "NOT", "TILDE", "MINUS", "OP_COLON", "GROUPING_LPAREN", "GROUPING_RPAREN", 
		"RESERVED_AT", "NUMBER", "NUM_CHAR", "TERM", "ESCAPED_CHAR", "TERM_CHAR", 
		"TERM_START_CHAR", "QUOTED", "QUOTED_CHAR", "DEFAULT_SKIP", "WHITESPACE", 
		"UNKNOWN",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, KQueryLexer._ATN, KQueryLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "KQueryLexer.g4"; }

	public get literalNames(): (string | null)[] { return KQueryLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return KQueryLexer.symbolicNames; }
	public get ruleNames(): string[] { return KQueryLexer.ruleNames; }

	public get serializedATN(): number[] { return KQueryLexer._serializedATN; }

	public get channelNames(): string[] { return KQueryLexer.channelNames; }

	public get modeNames(): string[] { return KQueryLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,14,127,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,1,0,3,0,46,8,0,1,1,1,1,1,1,
	1,1,1,1,3,1,53,8,1,1,2,1,2,1,2,1,2,3,2,59,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,
	6,1,6,1,7,1,7,1,8,1,8,1,9,4,9,74,8,9,11,9,12,9,75,1,9,1,9,4,9,80,8,9,11,
	9,12,9,81,3,9,84,8,9,1,10,1,10,1,11,1,11,5,11,90,8,11,10,11,12,11,93,9,
	11,1,12,1,12,1,12,1,13,1,13,1,13,3,13,101,8,13,1,14,1,14,3,14,105,8,14,
	1,15,1,15,5,15,109,8,15,10,15,12,15,112,9,15,1,15,1,15,1,16,1,16,3,16,118,
	8,16,1,17,1,17,1,17,1,17,1,18,1,18,1,19,1,19,0,0,20,1,1,3,2,5,3,7,4,9,5,
	11,6,13,7,15,8,17,9,19,10,21,0,23,11,25,0,27,0,29,0,31,12,33,0,35,13,37,
	0,39,14,1,0,5,1,0,48,57,2,0,43,43,45,45,14,0,9,10,13,13,32,34,40,41,43,
	43,45,45,47,47,58,58,60,62,64,64,91,94,123,123,125,126,12288,12288,2,0,
	34,34,92,92,4,0,9,10,13,13,32,32,12288,12288,132,0,1,1,0,0,0,0,3,1,0,0,
	0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
	0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,23,1,0,0,0,0,31,1,0,0,0,0,35,1,0,0,0,
	0,39,1,0,0,0,1,45,1,0,0,0,3,52,1,0,0,0,5,58,1,0,0,0,7,60,1,0,0,0,9,62,1,
	0,0,0,11,64,1,0,0,0,13,66,1,0,0,0,15,68,1,0,0,0,17,70,1,0,0,0,19,73,1,0,
	0,0,21,85,1,0,0,0,23,87,1,0,0,0,25,94,1,0,0,0,27,100,1,0,0,0,29,104,1,0,
	0,0,31,106,1,0,0,0,33,117,1,0,0,0,35,119,1,0,0,0,37,123,1,0,0,0,39,125,
	1,0,0,0,41,42,5,79,0,0,42,46,5,82,0,0,43,44,5,124,0,0,44,46,5,124,0,0,45,
	41,1,0,0,0,45,43,1,0,0,0,46,2,1,0,0,0,47,48,5,65,0,0,48,49,5,78,0,0,49,
	53,5,68,0,0,50,51,5,38,0,0,51,53,5,38,0,0,52,47,1,0,0,0,52,50,1,0,0,0,53,
	4,1,0,0,0,54,55,5,78,0,0,55,56,5,79,0,0,56,59,5,84,0,0,57,59,3,9,4,0,58,
	54,1,0,0,0,58,57,1,0,0,0,59,6,1,0,0,0,60,61,5,126,0,0,61,8,1,0,0,0,62,63,
	5,45,0,0,63,10,1,0,0,0,64,65,5,58,0,0,65,12,1,0,0,0,66,67,5,40,0,0,67,14,
	1,0,0,0,68,69,5,41,0,0,69,16,1,0,0,0,70,71,5,64,0,0,71,18,1,0,0,0,72,74,
	3,21,10,0,73,72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,83,
	1,0,0,0,77,79,5,46,0,0,78,80,3,21,10,0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,
	1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,77,1,0,0,0,83,84,1,0,0,0,84,20,1,
	0,0,0,85,86,7,0,0,0,86,22,1,0,0,0,87,91,3,29,14,0,88,90,3,27,13,0,89,88,
	1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,24,1,0,0,0,93,91,1,
	0,0,0,94,95,5,92,0,0,95,96,9,0,0,0,96,26,1,0,0,0,97,101,3,29,14,0,98,101,
	3,25,12,0,99,101,7,1,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,
	28,1,0,0,0,102,105,8,2,0,0,103,105,3,25,12,0,104,102,1,0,0,0,104,103,1,
	0,0,0,105,30,1,0,0,0,106,110,5,34,0,0,107,109,3,33,16,0,108,107,1,0,0,0,
	109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,113,1,0,0,0,112,110,
	1,0,0,0,113,114,5,34,0,0,114,32,1,0,0,0,115,118,8,3,0,0,116,118,3,25,12,
	0,117,115,1,0,0,0,117,116,1,0,0,0,118,34,1,0,0,0,119,120,3,37,18,0,120,
	121,1,0,0,0,121,122,6,17,0,0,122,36,1,0,0,0,123,124,7,4,0,0,124,38,1,0,
	0,0,125,126,9,0,0,0,126,40,1,0,0,0,12,0,45,52,58,75,81,83,91,100,104,110,
	117,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KQueryLexer.__ATN) {
			KQueryLexer.__ATN = new ATNDeserializer().deserialize(KQueryLexer._serializedATN);
		}

		return KQueryLexer.__ATN;
	}


	static DecisionsToDFA = KQueryLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}