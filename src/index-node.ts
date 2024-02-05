import yahooFinance from "./index-common.ts";
import nodeEnvironment from "./env-node.ts";

yahooFinance._env = nodeEnvironment;

export default yahooFinance;
