import D19_ATTT from "./ATTT.json";
import D19_CNDPT_PTUDDPT from "./CNDPT_PTUDDPT.json";
import D19_CNDPT_TKDHDPT from "./CNDPT_TKDHDPT.json";
import D19_CNKTDDT_KTDTMT from "./CNKTDDT_KTDTMT.json";
import D19_CNKTDDT_XLTHVTT from "./CNKTDDT_XLTHVTT.json";
import D19_CNTT_CNPM from "./CNTT_CNPM.json";
import D19_CNTT_HTTT from "./CNTT_HTTT.json";
import D19_KT from "./KT.json";
import D19_KTDTVT_HTI from "./KTDTVT_HTI.json";
import D19_KTDTVT_MVDVI from "./KTDTVT_MVDVI.json";
import D19_KTDTVT_TTVTVDD from "./KTDTVT_TTVTVDD.json";
import D19_M_IM from "./M_IM.json";
import D19_M_PTDLMS from "./M_PTDLMS.json";
import D19_QTKD_QTDN from "./QTKD_QTDN.json";
import D19_QTKD_TMDT from "./QTKD_TMDT.json";
import D19_TMDT from "./TMDT.json";
import D19_TTDPT from "./TTDPT.json";
import {
  ATTT,
  CNDPT_PTUDDPT,
  CNDPT_TKDHDPT,
  CNKTDDT_KTDTMT,
  CNKTDDT_XLTHVTT,
  CNTT_CNPM,
  CNTT_HTTT,
  KT,
  KTDTVT_HTI,
  KTDTVT_MVDVI,
  KTDTVT_TTVTVDD,
  M_IM,
  M_PTDLMS,
  QTKD_QTDN,
  QTKD_TMDT,
  TMDT,
  TTDPT,
} from "../masterConstrain";

export const D19_MASTER_DATA = new Map<string, any>([
  [ATTT, D19_ATTT],
  [CNDPT_PTUDDPT, D19_CNDPT_PTUDDPT],
  [CNDPT_TKDHDPT, D19_CNDPT_TKDHDPT],
  [CNKTDDT_KTDTMT, D19_CNKTDDT_KTDTMT],
  [CNKTDDT_XLTHVTT, D19_CNKTDDT_XLTHVTT],
  [CNTT_CNPM, D19_CNTT_CNPM],
  [CNTT_HTTT, D19_CNTT_HTTT],
  [KT, D19_KT],
  [KTDTVT_HTI, D19_KTDTVT_HTI],
  [KTDTVT_MVDVI, D19_KTDTVT_MVDVI],
  [KTDTVT_TTVTVDD, D19_KTDTVT_TTVTVDD],
  [M_IM, D19_M_IM],
  [M_PTDLMS, D19_M_PTDLMS],
  [QTKD_QTDN, D19_QTKD_QTDN],
  [QTKD_TMDT, D19_QTKD_TMDT],
  [TMDT, D19_TMDT],
  [TTDPT, D19_TTDPT],
]);
