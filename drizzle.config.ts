import type { Config } from 'drizzle-kit';
import { resolve } from 'path';

// 타입 정의 오버라이드
interface CustomConfig extends Omit<Config, 'schema' | 'out'> {
  schema: string | string[];
  out: string;
  dialect: 'sqlite';
  dbCredentials: {
    url: string;
  };
}

const config: CustomConfig = {
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: resolve(process.cwd(), 'local.db')
  }
};

export default config as unknown as Config;
