// libs
import yahooFinanceFetch from "./lib/yahooFinanceFetch.ts";
import moduleExec from "./lib/moduleExec.ts";
import options from "./lib/options.ts";
import errors from "./lib/errors.ts";
import setGlobalConfig from "./lib/setGlobalConfig.ts";
import { disallowAdditionalProps } from "./lib/validateAndCoerceTypes.ts";

// modules
import autoc from "./modules/autoc.ts";
import chart, { _chart } from "./modules/chart.ts";
import historical from "./modules/historical.ts";
import insights from "./modules/insights.ts";
import optionsModule from "./modules/options.ts";
import quote from "./modules/quote.ts";
import quoteSummary from "./modules/quoteSummary.ts";
import recommendationsBySymbol from "./modules/recommendationsBySymbol.ts";
import search from "./modules/search.ts";
import trendingSymbols from "./modules/trendingSymbols.ts";
import dailyGainers from "./modules/dailyGainers.ts";
import screener from "./modules/screener.ts";

// other
import quoteCombine from "./other/quoteCombine.ts";

export default {
  // internal
  _env: {},
  _fetch: yahooFinanceFetch,
  _moduleExec: moduleExec,
  _opts: options,
  _disallowAdditionalProps: disallowAdditionalProps,

  // common
  errors,
  setGlobalConfig,

  // modules,
  autoc,
  chart,
  _chart,
  historical,
  insights,
  options: optionsModule,
  quote,
  quoteSummary,
  recommendationsBySymbol,
  search,
  trendingSymbols,
  dailyGainers,
  screener,

  // other
  quoteCombine,
};
