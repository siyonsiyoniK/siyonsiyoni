import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const cases = sqliteTable("cases", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),                         // 사건명         
  summary: text("summary", { mode: "json" }).$type<string[]>().notNull(),    // 변호인 주장 (배열)
  overview: text("overview", { mode: "json" }).$type<string[]>().notNull(),    // 변호인 주장 (배열)
  defenseArgument: text("defense_argument", { mode: "json" }).$type<string[]>().notNull(),    // 변호인 주장 (배열)
  prosecutionArgument: text("prosecution_argument", { mode: "json" }).$type<string[]>().notNull(), // 검찰 주장 (배열)
  evidence: text("evidence", { mode: "json" }).$type<string[]>().notNull(),                   // 증거 요약 (배열)
  requests: text("requests", { mode: "json" }).$type<string[]>().notNull(),                   // 증거 요약 (배열)
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  modifiedAt: text("modified_at").default("CURRENT_TIMESTAMP"),
});