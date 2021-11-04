import Mock from "mockjs";
Mock.mock(/^\/api\/project\/?$/,"get",{
    code:0,
    msg:"",
    "data|10-20":[
        {
            id:"@guid",
            name:"@ctitle(1,10)",
            "url|1":["@url",null],
            "github|1":["@url",null],
            "description|1-4":["@cparagraph(1,5)"],
            "thumb|1": [
                "http://photogz.photo.store.qq.com/psc?/V12suFvq1k8JnX/Tiy10*PRF5enyWrLfdcKz0VgqB49qkHmisGDHNAZqJehgm6FQlIb.nrLl7BJmNyYuC8iNV5OxhhiUy4QZwGZT4xBTa8zcTdhdfSMtxu7FAk!/b&bo=QAZdCUAGXQkRNwA!&rf=viewer_4",
                "https://photogz.photo.store.qq.com/psc?/V12suFvq1k8JnX/Q0hl7JtPp.HvfTovsHHuIumgTDDUOU0Oy9dkc01jMbO6cu37A*bqsPd*wIOgkWjHD1.UPFX51A3xsBFNryjx1w!!/mnull&bo=QAZdCUAGXQkRBzA!&rf=photolist&t=5",
                "http://photocq.photo.store.qq.com/psc?/V12suFvq1k8JnX/Tiy10*PRF5enyWrLfdcKz2LEb7x3u7pcsGekBLmSrU8BMru0fWExurKb4t4EajKsVUa1xIlKYRspUnyX8ZgBtHMNC.I5jRqrG8JuOo2GNC8!/b&bo=sgIaArICGgIRFyA!&rf=viewer_4",
                "http://photogz.photo.store.qq.com/psc?/V12suFvq1k8JnX/Tiy10*PRF5enyWrLfdcKz9meP2DRGRVezaT52O9NV6S5c0IQPad40RoruXxixDzt0.*ULoZZvRgFzvtjuHxxk18WSIhGN3hvUhJ7Uw40HzY!/b&bo=XQlABl0JQAYRNwA!&rf=viewer_4"
              ],
        }
    ]
})