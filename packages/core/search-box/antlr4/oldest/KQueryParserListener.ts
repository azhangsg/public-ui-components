// Generated from KQueryParser.g4 by ANTLR 4.13.1

import { ParseTreeListener } from 'antlr4'

import type { ResultContext, QueryContext, UnionContext, IntersectionContext, ClauseContext, ExclusionContext, EntityClauseContext, GroupingContext, FieldNameContext, FieldValueContext, QuotedValueContext } from './KQueryParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `KQueryParser`.
 */
export default class KQueryParserListener extends ParseTreeListener {
  /**
	 * Enter a parse tree produced by `KQueryParser.result`.
	 * @param ctx the parse tree
	 */
  enterResult?: (ctx: ResultContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.result`.
	 * @param ctx the parse tree
	 */
  exitResult?: (ctx: ResultContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.query`.
	 * @param ctx the parse tree
	 */
  enterQuery?: (ctx: QueryContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.query`.
	 * @param ctx the parse tree
	 */
  exitQuery?: (ctx: QueryContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.union`.
	 * @param ctx the parse tree
	 */
  enterUnion?: (ctx: UnionContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.union`.
	 * @param ctx the parse tree
	 */
  exitUnion?: (ctx: UnionContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.intersection`.
	 * @param ctx the parse tree
	 */
  enterIntersection?: (ctx: IntersectionContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.intersection`.
	 * @param ctx the parse tree
	 */
  exitIntersection?: (ctx: IntersectionContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.clause`.
	 * @param ctx the parse tree
	 */
  enterClause?: (ctx: ClauseContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.clause`.
	 * @param ctx the parse tree
	 */
  exitClause?: (ctx: ClauseContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.exclusion`.
	 * @param ctx the parse tree
	 */
  enterExclusion?: (ctx: ExclusionContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.exclusion`.
	 * @param ctx the parse tree
	 */
  exitExclusion?: (ctx: ExclusionContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.entityClause`.
	 * @param ctx the parse tree
	 */
  enterEntityClause?: (ctx: EntityClauseContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.entityClause`.
	 * @param ctx the parse tree
	 */
  exitEntityClause?: (ctx: EntityClauseContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.grouping`.
	 * @param ctx the parse tree
	 */
  enterGrouping?: (ctx: GroupingContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.grouping`.
	 * @param ctx the parse tree
	 */
  exitGrouping?: (ctx: GroupingContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.fieldName`.
	 * @param ctx the parse tree
	 */
  enterFieldName?: (ctx: FieldNameContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.fieldName`.
	 * @param ctx the parse tree
	 */
  exitFieldName?: (ctx: FieldNameContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.fieldValue`.
	 * @param ctx the parse tree
	 */
  enterFieldValue?: (ctx: FieldValueContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.fieldValue`.
	 * @param ctx the parse tree
	 */
  exitFieldValue?: (ctx: FieldValueContext) => void
  /**
	 * Enter a parse tree produced by `KQueryParser.quotedValue`.
	 * @param ctx the parse tree
	 */
  enterQuotedValue?: (ctx: QuotedValueContext) => void
  /**
	 * Exit a parse tree produced by `KQueryParser.quotedValue`.
	 * @param ctx the parse tree
	 */
  exitQuotedValue?: (ctx: QuotedValueContext) => void
}
