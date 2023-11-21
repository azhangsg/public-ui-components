// Generated from StandardLuceneGrammar.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { MainQContext } from "./StandardLuceneGrammarParser";
import { ClauseDefaultContext } from "./StandardLuceneGrammarParser";
import { ClauseOrContext } from "./StandardLuceneGrammarParser";
import { ClauseAndContext } from "./StandardLuceneGrammarParser";
import { ClauseNotContext } from "./StandardLuceneGrammarParser";
import { ClauseBasicContext } from "./StandardLuceneGrammarParser";
import { AtomContext } from "./StandardLuceneGrammarParser";
import { FieldContext } from "./StandardLuceneGrammarParser";
import { ValueContext } from "./StandardLuceneGrammarParser";
import { AnythingContext } from "./StandardLuceneGrammarParser";
import { Two_sided_range_termContext } from "./StandardLuceneGrammarParser";
import { Range_termContext } from "./StandardLuceneGrammarParser";
import { Range_valueContext } from "./StandardLuceneGrammarParser";
import { Multi_valueContext } from "./StandardLuceneGrammarParser";
import { NormalContext } from "./StandardLuceneGrammarParser";
import { TruncatedContext } from "./StandardLuceneGrammarParser";
import { Quoted_truncatedContext } from "./StandardLuceneGrammarParser";
import { QuotedContext } from "./StandardLuceneGrammarParser";
import { ModifierContext } from "./StandardLuceneGrammarParser";
import { Term_modifierContext } from "./StandardLuceneGrammarParser";
import { BoostContext } from "./StandardLuceneGrammarParser";
import { FuzzyContext } from "./StandardLuceneGrammarParser";
import { Not_Context } from "./StandardLuceneGrammarParser";
import { And_Context } from "./StandardLuceneGrammarParser";
import { Or_Context } from "./StandardLuceneGrammarParser";
import { DateContext } from "./StandardLuceneGrammarParser";
import { SepContext } from "./StandardLuceneGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `StandardLuceneGrammarParser`.
 */
export default class StandardLuceneGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.mainQ`.
	 * @param ctx the parse tree
	 */
	enterMainQ?: (ctx: MainQContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.mainQ`.
	 * @param ctx the parse tree
	 */
	exitMainQ?: (ctx: MainQContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.clauseDefault`.
	 * @param ctx the parse tree
	 */
	enterClauseDefault?: (ctx: ClauseDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.clauseDefault`.
	 * @param ctx the parse tree
	 */
	exitClauseDefault?: (ctx: ClauseDefaultContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.clauseOr`.
	 * @param ctx the parse tree
	 */
	enterClauseOr?: (ctx: ClauseOrContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.clauseOr`.
	 * @param ctx the parse tree
	 */
	exitClauseOr?: (ctx: ClauseOrContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.clauseAnd`.
	 * @param ctx the parse tree
	 */
	enterClauseAnd?: (ctx: ClauseAndContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.clauseAnd`.
	 * @param ctx the parse tree
	 */
	exitClauseAnd?: (ctx: ClauseAndContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.clauseNot`.
	 * @param ctx the parse tree
	 */
	enterClauseNot?: (ctx: ClauseNotContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.clauseNot`.
	 * @param ctx the parse tree
	 */
	exitClauseNot?: (ctx: ClauseNotContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.clauseBasic`.
	 * @param ctx the parse tree
	 */
	enterClauseBasic?: (ctx: ClauseBasicContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.clauseBasic`.
	 * @param ctx the parse tree
	 */
	exitClauseBasic?: (ctx: ClauseBasicContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.anything`.
	 * @param ctx the parse tree
	 */
	enterAnything?: (ctx: AnythingContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.anything`.
	 * @param ctx the parse tree
	 */
	exitAnything?: (ctx: AnythingContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.two_sided_range_term`.
	 * @param ctx the parse tree
	 */
	enterTwo_sided_range_term?: (ctx: Two_sided_range_termContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.two_sided_range_term`.
	 * @param ctx the parse tree
	 */
	exitTwo_sided_range_term?: (ctx: Two_sided_range_termContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.range_term`.
	 * @param ctx the parse tree
	 */
	enterRange_term?: (ctx: Range_termContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.range_term`.
	 * @param ctx the parse tree
	 */
	exitRange_term?: (ctx: Range_termContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.range_value`.
	 * @param ctx the parse tree
	 */
	enterRange_value?: (ctx: Range_valueContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.range_value`.
	 * @param ctx the parse tree
	 */
	exitRange_value?: (ctx: Range_valueContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.multi_value`.
	 * @param ctx the parse tree
	 */
	enterMulti_value?: (ctx: Multi_valueContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.multi_value`.
	 * @param ctx the parse tree
	 */
	exitMulti_value?: (ctx: Multi_valueContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.normal`.
	 * @param ctx the parse tree
	 */
	enterNormal?: (ctx: NormalContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.normal`.
	 * @param ctx the parse tree
	 */
	exitNormal?: (ctx: NormalContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.truncated`.
	 * @param ctx the parse tree
	 */
	enterTruncated?: (ctx: TruncatedContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.truncated`.
	 * @param ctx the parse tree
	 */
	exitTruncated?: (ctx: TruncatedContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.quoted_truncated`.
	 * @param ctx the parse tree
	 */
	enterQuoted_truncated?: (ctx: Quoted_truncatedContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.quoted_truncated`.
	 * @param ctx the parse tree
	 */
	exitQuoted_truncated?: (ctx: Quoted_truncatedContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.quoted`.
	 * @param ctx the parse tree
	 */
	enterQuoted?: (ctx: QuotedContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.quoted`.
	 * @param ctx the parse tree
	 */
	exitQuoted?: (ctx: QuotedContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.term_modifier`.
	 * @param ctx the parse tree
	 */
	enterTerm_modifier?: (ctx: Term_modifierContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.term_modifier`.
	 * @param ctx the parse tree
	 */
	exitTerm_modifier?: (ctx: Term_modifierContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.boost`.
	 * @param ctx the parse tree
	 */
	enterBoost?: (ctx: BoostContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.boost`.
	 * @param ctx the parse tree
	 */
	exitBoost?: (ctx: BoostContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.fuzzy`.
	 * @param ctx the parse tree
	 */
	enterFuzzy?: (ctx: FuzzyContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.fuzzy`.
	 * @param ctx the parse tree
	 */
	exitFuzzy?: (ctx: FuzzyContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.not_`.
	 * @param ctx the parse tree
	 */
	enterNot_?: (ctx: Not_Context) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.not_`.
	 * @param ctx the parse tree
	 */
	exitNot_?: (ctx: Not_Context) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.and_`.
	 * @param ctx the parse tree
	 */
	enterAnd_?: (ctx: And_Context) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.and_`.
	 * @param ctx the parse tree
	 */
	exitAnd_?: (ctx: And_Context) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.or_`.
	 * @param ctx the parse tree
	 */
	enterOr_?: (ctx: Or_Context) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.or_`.
	 * @param ctx the parse tree
	 */
	exitOr_?: (ctx: Or_Context) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;
	/**
	 * Enter a parse tree produced by `StandardLuceneGrammarParser.sep`.
	 * @param ctx the parse tree
	 */
	enterSep?: (ctx: SepContext) => void;
	/**
	 * Exit a parse tree produced by `StandardLuceneGrammarParser.sep`.
	 * @param ctx the parse tree
	 */
	exitSep?: (ctx: SepContext) => void;
}

