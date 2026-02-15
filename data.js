const edustreamixData = {
  website: "EDUSTREAMIX",
  semester: "B.Com Semester 6",
  programs: [

    /* =====================================================
       COMMON LANGUAGE SUBJECTS
    ===================================================== */

    constEnglish = {
      subjectName: "English",
      channels: [
        { name: "Part A - English by Nisa", links: ["https://youtube.com/playlist?list=PLUJXB7al70IB4mDWQIPyriRRylnwjPU2D&si=NgXY_XsPpZHsviKx"] },
        { name: "Part B - English by Nisa", links: ["https://youtube.com/playlist?list=PLUJXB7al70IBdkE4oiI4d40mycUq4JnQ8&si=8gIu1S9Ml-BOE3Mb"] },
        { name: "Whole Subject - Sara’s Learning Point", links: ["https://youtube.com/playlist?list=PLjNdhMBtsxpwAyVG7o59hqSCUYKKHvz-Y&si=4nppN-kBPS4i4ggZ"] },
        { name: "Whole Subject - Dandu Venkatramulu", links: ["https://youtube.com/playlist?list=PLyjVm5GfnmY6rkPqkpH7psUaOBb44ShwS&si=gHEpugOf2_r3-uyR"] },
        { name: "Whole Subject - Educare", links: ["https://youtube.com/playlist?list=PLbBCm7TkLCKJtzjewd_X4NrbTBd4eCy_M&si=sG_JJcC6FtYZw9wV"] },
        { name: "Whole Subject - PCV English", links: ["https://youtube.com/playlist?list=PLldWy7gu4R757w2-mkgFz7HDzDVhp-GkT&si=1pEjvjYOcOO_fWrI"] }
      ]
    };

    constTelugu = {
      subjectName: "Telugu",
      channels: [
        { name: "Dandu Venkatramulu", links: ["https://youtube.com/playlist?list=PLyjVm5GfnmY6UUa5iLn-GQNPkW7y1CeMh&si=JNIEnxLfUy4cmUMn"] },
        { name: "Matrubhasha", links: ["https://youtube.com/playlist?list=PL7noKDJp4ZRKVkWtOlT6edyqABvC-zjNI&si=bnzZqKzt76KTzWKv"] }
      ]
    };

    constHindi = {
      subjectName: "Hindi",
      channels: [
        { name: "Disha Hindi Classes", links: ["https://youtube.com/playlist?list=PLsTBUOfP6EhdnT2rEau2eaprGMdw6BZra&si=87-cfuN9qdUt3t4g"] }
      ]
    };

    constSanskrit = {
      subjectName: "Sanskrit",
      channels: [
        { name: "Dandu Venkatramulu", links: ["https://youtube.com/playlist?list=PLyjVm5GfnmY7ynZnZ0neH3LcGAi1oBzHh&si=aiwTZ6lgBl2ucwQP"] },
        { name: "My Teaching Talkies", links: ["https://youtube.com/playlist?list=PLc1Q__0qOGAoAuv-LLipyNqpatmyE_7KJ&si=GE83F5naAKXboTHH"] },
        { name: "Dr. Pusapati Ravikantha Reddy", links: ["https://youtube.com/playlist?list=PLiOV0508aWZti2c9x-V-WxJCmGLW2EN3e&si=WTlmZG-b1A40k60A"] }
      ]
    };

    constCostControl = {
      subjectName: "Cost Control and Management Accounting",
      channels: [
        { name: "Hasham Ali Khan - Part 1", links: ["https://youtube.com/playlist?list=PLWJDzVuPkXAllmGP19jfhneNUdgOy1g2v&si=pkcf7-2f7oMtcjea"] },
        { name: "Hasham Ali Khan - Part 2", links: ["https://youtube.com/playlist?list=PLWJDzVuPkXAlg4vnE3ZhB7UVp9JWl6Mog&si=GOWDsTvMeUzwo_Kp"] },
        { name: "Devika’s Commerce", links: ["https://youtube.com/playlist?list=PLLhSIFfDZcUVaBuGIMvQFx1OVGzfhbPeC&si=c9uFXjQW-n86U74D"] }
      ]
    };

    constGST = {
      subjectName: "Theory and Practice of GST",
      channels: [
        { name: "Hasham Ali Khan", links: ["https://youtube.com/playlist?list=PLWJDzVuPkXAkNpdAIqufc2JxDoxjENrsj&si=rvuehMWaRFFoh_Dg"] }
      ]
    };

    constAccounting = {
      subjectName: "Accounting Standards",
      channels: [
        { name: "Devika’s Commerce", links: ["https://youtube.com/playlist?list=PLLhSIFfDZcUXO81uWFy_F6O4ZX0JfTYkV&si=sveBQraIQh_mg749"] },
        { name: "Hasham Ali Khan", links: ["https://youtube.com/playlist?list=PLWJDzVuPkXAmAI6CfaLfYpQVvQFhXzxC6&si=THNBbXF7EUDDW2as"] }
      ]
    };

    constResearch = {
      subjectName: "Research Methodology & Project",
      channels: [
        { name: "Devika’s Commerce", links: ["https://youtube.com/playlist?list=PLLhSIFfDZcUWRlgiXMkd1rNeLSz1You4O&si=_mzwQMXgF8XYzeGd"] },
        { name: "Lakshya Commerce", links: ["https://youtube.com/playlist?list=PLjMjkIR4-dvIAvboLjtq6sSi_1_wk2VgD&si=ayWVlwaXQIu-HnbB"] },
        { name: "Pooja Singh", links: ["https://youtube.com/playlist?list=PLk3poRqYftlhDGto5oSxeNeFWHzajbVuA&si=23KiI6HKuGq6P0vO"] }
      ]
    };

    /* =====================================================
       PROGRAMS
    ===================================================== */

    {
      programName: "B.Com (General)",
      subjects: [constEnglish, constTelugu, constHindi, constSanskrit, constCostControl, constGST, constAccounting, constResearch]
    },

    {
      programName: "B.Com Honors",
      subjects: [
        constEnglish,
        { subjectName: "International Finance", channels: [{ name: "Hasham Ali Khan", links: ["https://youtube.com/playlist?list=PLWJDzVuPkXAnNpRjN6InK65R7ndvpYZUf&si=EDV35BDJUJIhuLgc"] }] },
        constCostControl,
        constGST,
        constAccounting,
        constResearch
      ]
    },

    {
      programName: "B.Com Computer Applications",
      subjects: [
        constEnglish,
        constTelugu,
        constHindi,
        constSanskrit,
        constCostControl,
        constGST,
        { subjectName: "Cybersecurity", channels: [{ name: "Whole Subject", links: ["https://youtube.com/playlist?list=PLtfg0YD2YYUQMZp4bRkeZI0JXWHGqh8vo&si=uQhVzmPNV1kv5LtJ"] }] },
        constResearch
      ]
    },

    {
      programName: "B.Com Business Analytics",
      subjects: [
        constEnglish,
        constTelugu,
        constHindi,
        constSanskrit,
        constCostControl,
        constGST,
        { subjectName: "Business Application of Emerging Technologies", channels: [] },
        constResearch
      ]
    }

  ]
};
