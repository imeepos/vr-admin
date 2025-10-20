(function() {
  "use strict";
  var MeshoptDecoder = (function() {
    var wasm_base = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb";
    var wasm_simd = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb";
    var detector = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]);
    var wasmpack = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
    if (typeof WebAssembly !== "object") {
      return {
        supported: false
      };
    }
    var wasm = WebAssembly.validate(detector) ? wasm_simd : wasm_base;
    var instance;
    var ready = WebAssembly.instantiate(unpack(wasm), {}).then(function(result) {
      instance = result.instance;
      instance.exports.__wasm_call_ctors();
    });
    function unpack(data) {
      var result = new Uint8Array(data.length);
      for (var i = 0; i < data.length; ++i) {
        var ch = data.charCodeAt(i);
        result[i] = ch > 96 ? ch - 97 : ch > 64 ? ch - 39 : ch + 4;
      }
      var write = 0;
      for (var i = 0; i < data.length; ++i) {
        result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
      }
      return result.buffer.slice(0, write);
    }
    function decode(fun, target, count, size, source, filter) {
      var sbrk = instance.exports.sbrk;
      var count4 = count + 3 & -4;
      var tp = sbrk(count4 * size);
      var sp = sbrk(source.length);
      var heap = new Uint8Array(instance.exports.memory.buffer);
      heap.set(source, sp);
      var res = fun(tp, count, size, sp, source.length);
      if (res == 0 && filter) {
        filter(tp, count4, size);
      }
      target.set(heap.subarray(tp, tp + count * size));
      sbrk(tp - sbrk(0));
      if (res != 0) {
        throw new Error("Malformed buffer data: " + res);
      }
    }
    var filters = {
      NONE: "",
      OCTAHEDRAL: "meshopt_decodeFilterOct",
      QUATERNION: "meshopt_decodeFilterQuat",
      EXPONENTIAL: "meshopt_decodeFilterExp"
    };
    var decoders = {
      ATTRIBUTES: "meshopt_decodeVertexBuffer",
      TRIANGLES: "meshopt_decodeIndexBuffer",
      INDICES: "meshopt_decodeIndexSequence"
    };
    var workers = [];
    var requestId = 0;
    function createWorker(url) {
      var worker = {
        object: new Worker(url),
        pending: 0,
        requests: {}
      };
      worker.object.onmessage = function(event) {
        var data = event.data;
        worker.pending -= data.count;
        worker.requests[data.id][data.action](data.value);
        delete worker.requests[data.id];
      };
      return worker;
    }
    function initWorkers(count) {
      var source = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(unpack(wasm)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + decode.toString() + workerProcess.toString();
      var blob = new Blob([source], { type: "text/javascript" });
      var url = URL.createObjectURL(blob);
      for (var i = 0; i < count; ++i) {
        workers[i] = createWorker(url);
      }
      URL.revokeObjectURL(url);
    }
    function decodeWorker(count, size, source, mode, filter) {
      var worker = workers[0];
      for (var i = 1; i < workers.length; ++i) {
        if (workers[i].pending < worker.pending) {
          worker = workers[i];
        }
      }
      return new Promise(function(resolve, reject) {
        var data = new Uint8Array(source);
        var id = requestId++;
        worker.pending += count;
        worker.requests[id] = { resolve, reject };
        worker.object.postMessage({ id, count, size, source: data, mode, filter }, [data.buffer]);
      });
    }
    function workerProcess(event) {
      ready.then(function() {
        var data = event.data;
        try {
          var target = new Uint8Array(data.count * data.size);
          decode(instance.exports[data.mode], target, data.count, data.size, data.source, instance.exports[data.filter]);
          self.postMessage({ id: data.id, count: data.count, action: "resolve", value: target }, [target.buffer]);
        } catch (error) {
          self.postMessage({ id: data.id, count: data.count, action: "reject", value: error });
        }
      });
    }
    return {
      ready,
      supported: true,
      useWorkers: function(count) {
        initWorkers(count);
      },
      decodeVertexBuffer: function(target, count, size, source, filter) {
        decode(instance.exports.meshopt_decodeVertexBuffer, target, count, size, source, instance.exports[filters[filter]]);
      },
      decodeIndexBuffer: function(target, count, size, source) {
        decode(instance.exports.meshopt_decodeIndexBuffer, target, count, size, source);
      },
      decodeIndexSequence: function(target, count, size, source) {
        decode(instance.exports.meshopt_decodeIndexSequence, target, count, size, source);
      },
      decodeGltfBuffer: function(target, count, size, source, mode, filter) {
        decode(instance.exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]);
      },
      decodeGltfBufferAsync: function(count, size, source, mode, filter) {
        if (workers.length > 0) {
          return decodeWorker(count, size, source, decoders[mode], filters[filter]);
        }
        return ready.then(function() {
          var target = new Uint8Array(count * size);
          decode(instance.exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]);
          return target;
        });
      }
    };
  })();
  /**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  const REVISION = "169";
  const FrontSide = 0;
  const BackSide = 1;
  const DoubleSide = 2;
  const NormalBlending = 1;
  const AddEquation = 100;
  const SrcAlphaFactor = 204;
  const OneMinusSrcAlphaFactor = 205;
  const LessEqualDepth = 3;
  const MultiplyOperation = 0;
  const NoToneMapping = 0;
  const AttachedBindMode = "attached";
  const DetachedBindMode = "detached";
  const UVMapping = 300;
  const CubeReflectionMapping = 301;
  const CubeRefractionMapping = 302;
  const RepeatWrapping = 1e3;
  const ClampToEdgeWrapping = 1001;
  const MirroredRepeatWrapping = 1002;
  const NearestFilter = 1003;
  const NearestMipmapNearestFilter = 1004;
  const NearestMipmapLinearFilter = 1005;
  const LinearFilter = 1006;
  const LinearMipmapNearestFilter = 1007;
  const LinearMipmapLinearFilter = 1008;
  const UnsignedByteType = 1009;
  const IntType = 1013;
  const UnsignedIntType = 1014;
  const FloatType = 1015;
  const HalfFloatType = 1016;
  const UnsignedInt248Type = 1020;
  const UnsignedInt5999Type = 35902;
  const UnsignedInt101111Type = 35899;
  const RGBFormat = 1022;
  const RGBAFormat = 1023;
  const DepthFormat = 1026;
  const DepthStencilFormat = 1027;
  const RedFormat = 1028;
  const RGFormat = 1030;
  const RGB_S3TC_DXT1_Format = 33776;
  const RGBA_S3TC_DXT1_Format = 33777;
  const RGBA_S3TC_DXT3_Format = 33778;
  const RGBA_S3TC_DXT5_Format = 33779;
  const RGB_PVRTC_4BPPV1_Format = 35840;
  const RGBA_PVRTC_4BPPV1_Format = 35842;
  const RGB_ETC1_Format = 36196;
  const RGB_ETC2_Format = 37492;
  const RGBA_ETC2_EAC_Format = 37496;
  const RGBA_ASTC_4x4_Format = 37808;
  const RGBA_ASTC_6x6_Format = 37812;
  const RGBA_BPTC_Format = 36492;
  const RGB_BPTC_UNSIGNED_Format = 36495;
  const InterpolateDiscrete = 2300;
  const InterpolateLinear = 2301;
  const InterpolateSmooth = 2302;
  const ZeroCurvatureEnding = 2400;
  const ZeroSlopeEnding = 2401;
  const WrapAroundEnding = 2402;
  const NormalAnimationBlendMode = 2500;
  const TrianglesDrawMode = 0;
  const TriangleStripDrawMode = 1;
  const TriangleFanDrawMode = 2;
  const TangentSpaceNormalMap = 0;
  const ObjectSpaceNormalMap = 1;
  const NoColorSpace = "";
  const SRGBColorSpace = "srgb";
  const LinearSRGBColorSpace = "srgb-linear";
  const DisplayP3ColorSpace$1 = "display-p3";
  const LinearDisplayP3ColorSpace$1 = "display-p3-linear";
  const LinearTransfer = "linear";
  const SRGBTransfer = "srgb";
  const Rec709Primaries = "rec709";
  const P3Primaries = "p3";
  const KeepStencilOp = 7680;
  const AlwaysStencilFunc = 519;
  const StaticDrawUsage = 35044;
  const WebGLCoordinateSystem = 2e3;
  const WebGPUCoordinateSystem = 2001;
  class EventDispatcher {
    addEventListener(type, listener) {
      if (this._listeners === void 0) this._listeners = {};
      const listeners = this._listeners;
      if (listeners[type] === void 0) {
        listeners[type] = [];
      }
      if (listeners[type].indexOf(listener) === -1) {
        listeners[type].push(listener);
      }
    }
    hasEventListener(type, listener) {
      if (this._listeners === void 0) return false;
      const listeners = this._listeners;
      return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
    }
    removeEventListener(type, listener) {
      if (this._listeners === void 0) return;
      const listeners = this._listeners;
      const listenerArray = listeners[type];
      if (listenerArray !== void 0) {
        const index = listenerArray.indexOf(listener);
        if (index !== -1) {
          listenerArray.splice(index, 1);
        }
      }
    }
    dispatchEvent(event) {
      if (this._listeners === void 0) return;
      const listeners = this._listeners;
      const listenerArray = listeners[event.type];
      if (listenerArray !== void 0) {
        event.target = this;
        const array = listenerArray.slice(0);
        for (let i = 0, l = array.length; i < l; i++) {
          array[i].call(this, event);
        }
        event.target = null;
      }
    }
  }
  const _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  let _seed = 1234567;
  const DEG2RAD = Math.PI / 180;
  const RAD2DEG = 180 / Math.PI;
  function generateUUID() {
    const d0 = Math.random() * 4294967295 | 0;
    const d1 = Math.random() * 4294967295 | 0;
    const d2 = Math.random() * 4294967295 | 0;
    const d3 = Math.random() * 4294967295 | 0;
    const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
    return uuid.toLowerCase();
  }
  function clamp$1(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function euclideanModulo(n2, m) {
    return (n2 % m + m) % m;
  }
  function mapLinear(x, a1, a2, b1, b2) {
    return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
  }
  function inverseLerp(x, y2, value) {
    if (x !== y2) {
      return (value - x) / (y2 - x);
    } else {
      return 0;
    }
  }
  function lerp(x, y2, t2) {
    return (1 - t2) * x + t2 * y2;
  }
  function damp(x, y2, lambda, dt2) {
    return lerp(x, y2, 1 - Math.exp(-lambda * dt2));
  }
  function pingpong(x, length2 = 1) {
    return length2 - Math.abs(euclideanModulo(x, length2 * 2) - length2);
  }
  function smoothstep$1(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * (3 - 2 * x);
  }
  function smootherstep(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10);
  }
  function randInt(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
  }
  function randFloat(low, high) {
    return low + Math.random() * (high - low);
  }
  function randFloatSpread(range) {
    return range * (0.5 - Math.random());
  }
  function seededRandom(s) {
    if (s !== void 0) _seed = s;
    let t2 = _seed += 1831565813;
    t2 = Math.imul(t2 ^ t2 >>> 15, t2 | 1);
    t2 ^= t2 + Math.imul(t2 ^ t2 >>> 7, t2 | 61);
    return ((t2 ^ t2 >>> 14) >>> 0) / 4294967296;
  }
  function degToRad(degrees2) {
    return degrees2 * DEG2RAD;
  }
  function radToDeg(radians2) {
    return radians2 * RAD2DEG;
  }
  function isPowerOfTwo(value) {
    return (value & value - 1) === 0 && value !== 0;
  }
  function ceilPowerOfTwo(value) {
    return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
  }
  function floorPowerOfTwo(value) {
    return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
  }
  function setQuaternionFromProperEuler(q, a, b, c, order) {
    const cos2 = Math.cos;
    const sin2 = Math.sin;
    const c2 = cos2(b / 2);
    const s2 = sin2(b / 2);
    const c13 = cos2((a + c) / 2);
    const s13 = sin2((a + c) / 2);
    const c1_3 = cos2((a - c) / 2);
    const s1_3 = sin2((a - c) / 2);
    const c3_1 = cos2((c - a) / 2);
    const s3_1 = sin2((c - a) / 2);
    switch (order) {
      case "XYX":
        q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
        break;
      case "YZY":
        q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
        break;
      case "ZXZ":
        q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
        break;
      case "XZX":
        q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
        break;
      case "YXY":
        q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
        break;
      case "ZYZ":
        q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + order);
    }
  }
  function denormalize(value, array) {
    switch (array.constructor) {
      case Float32Array:
        return value;
      case Uint32Array:
        return value / 4294967295;
      case Uint16Array:
        return value / 65535;
      case Uint8Array:
        return value / 255;
      case Int32Array:
        return Math.max(value / 2147483647, -1);
      case Int16Array:
        return Math.max(value / 32767, -1);
      case Int8Array:
        return Math.max(value / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function normalize$1(value, array) {
    switch (array.constructor) {
      case Float32Array:
        return value;
      case Uint32Array:
        return Math.round(value * 4294967295);
      case Uint16Array:
        return Math.round(value * 65535);
      case Uint8Array:
        return Math.round(value * 255);
      case Int32Array:
        return Math.round(value * 2147483647);
      case Int16Array:
        return Math.round(value * 32767);
      case Int8Array:
        return Math.round(value * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  const MathUtils = {
    DEG2RAD,
    RAD2DEG,
    generateUUID,
    clamp: clamp$1,
    euclideanModulo,
    mapLinear,
    inverseLerp,
    lerp,
    damp,
    pingpong,
    smoothstep: smoothstep$1,
    smootherstep,
    randInt,
    randFloat,
    randFloatSpread,
    seededRandom,
    degToRad,
    radToDeg,
    isPowerOfTwo,
    ceilPowerOfTwo,
    floorPowerOfTwo,
    setQuaternionFromProperEuler,
    normalize: normalize$1,
    denormalize
  };
  class Vector2 {
    constructor(x = 0, y2 = 0) {
      Vector2.prototype.isVector2 = true;
      this.x = x;
      this.y = y2;
    }
    get width() {
      return this.x;
    }
    set width(value) {
      this.x = value;
    }
    get height() {
      return this.y;
    }
    set height(value) {
      this.y = value;
    }
    set(x, y2) {
      this.x = x;
      this.y = y2;
      return this;
    }
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      return this;
    }
    setX(x) {
      this.x = x;
      return this;
    }
    setY(y2) {
      this.y = y2;
      return this;
    }
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }
    addScalar(s) {
      this.x += s;
      this.y += s;
      return this;
    }
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      return this;
    }
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      return this;
    }
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      return this;
    }
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      return this;
    }
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      return this;
    }
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    applyMatrix3(m) {
      const x = this.x, y2 = this.y;
      const e = m.elements;
      this.x = e[0] * x + e[3] * y2 + e[6];
      this.y = e[1] * x + e[4] * y2 + e[7];
      return this;
    }
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      return this;
    }
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      return this;
    }
    clamp(min, max) {
      this.x = Math.max(min.x, Math.min(max.x, this.x));
      this.y = Math.max(min.y, Math.min(max.y, this.y));
      return this;
    }
    clampScalar(minVal, maxVal) {
      this.x = Math.max(minVal, Math.min(maxVal, this.x));
      this.y = Math.max(minVal, Math.min(maxVal, this.y));
      return this;
    }
    clampLength(min, max) {
      const length2 = this.length();
      return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min, Math.min(max, length2)));
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    }
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      return this;
    }
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    cross(v) {
      return this.x * v.y - this.y * v.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      const angle = Math.atan2(-this.y, -this.x) + Math.PI;
      return angle;
    }
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp$1(theta, -1, 1));
    }
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y;
      return dx * dx + dy * dy;
    }
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }
    setLength(length2) {
      return this.normalize().multiplyScalar(length2);
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      return this;
    }
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      return this;
    }
    equals(v) {
      return v.x === this.x && v.y === this.y;
    }
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this.x = attribute2.getX(index);
      this.y = attribute2.getY(index);
      return this;
    }
    rotateAround(center, angle) {
      const c = Math.cos(angle), s = Math.sin(angle);
      const x = this.x - center.x;
      const y2 = this.y - center.y;
      this.x = x * c - y2 * s + center.x;
      this.y = x * s + y2 * c + center.y;
      return this;
    }
    random() {
      this.x = Math.random();
      this.y = Math.random();
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
    }
  }
  class Matrix3 {
    constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      Matrix3.prototype.isMatrix3 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ];
      if (n11 !== void 0) {
        this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
      }
    }
    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      const te2 = this.elements;
      te2[0] = n11;
      te2[1] = n21;
      te2[2] = n31;
      te2[3] = n12;
      te2[4] = n22;
      te2[5] = n32;
      te2[6] = n13;
      te2[7] = n23;
      te2[8] = n33;
      return this;
    }
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      );
      return this;
    }
    copy(m) {
      const te2 = this.elements;
      const me = m.elements;
      te2[0] = me[0];
      te2[1] = me[1];
      te2[2] = me[2];
      te2[3] = me[3];
      te2[4] = me[4];
      te2[5] = me[5];
      te2[6] = me[6];
      te2[7] = me[7];
      te2[8] = me[8];
      return this;
    }
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrix3Column(this, 0);
      yAxis.setFromMatrix3Column(this, 1);
      zAxis.setFromMatrix3Column(this, 2);
      return this;
    }
    setFromMatrix4(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[4],
        me[8],
        me[1],
        me[5],
        me[9],
        me[2],
        me[6],
        me[10]
      );
      return this;
    }
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    multiplyMatrices(a, b) {
      const ae2 = a.elements;
      const be = b.elements;
      const te2 = this.elements;
      const a11 = ae2[0], a12 = ae2[3], a13 = ae2[6];
      const a21 = ae2[1], a22 = ae2[4], a23 = ae2[7];
      const a31 = ae2[2], a32 = ae2[5], a33 = ae2[8];
      const b11 = be[0], b12 = be[3], b13 = be[6];
      const b21 = be[1], b22 = be[4], b23 = be[7];
      const b31 = be[2], b32 = be[5], b33 = be[8];
      te2[0] = a11 * b11 + a12 * b21 + a13 * b31;
      te2[3] = a11 * b12 + a12 * b22 + a13 * b32;
      te2[6] = a11 * b13 + a12 * b23 + a13 * b33;
      te2[1] = a21 * b11 + a22 * b21 + a23 * b31;
      te2[4] = a21 * b12 + a22 * b22 + a23 * b32;
      te2[7] = a21 * b13 + a22 * b23 + a23 * b33;
      te2[2] = a31 * b11 + a32 * b21 + a33 * b31;
      te2[5] = a31 * b12 + a32 * b22 + a33 * b32;
      te2[8] = a31 * b13 + a32 * b23 + a33 * b33;
      return this;
    }
    multiplyScalar(s) {
      const te2 = this.elements;
      te2[0] *= s;
      te2[3] *= s;
      te2[6] *= s;
      te2[1] *= s;
      te2[4] *= s;
      te2[7] *= s;
      te2[2] *= s;
      te2[5] *= s;
      te2[8] *= s;
      return this;
    }
    determinant() {
      const te2 = this.elements;
      const a = te2[0], b = te2[1], c = te2[2], d = te2[3], e = te2[4], f = te2[5], g2 = te2[6], h = te2[7], i = te2[8];
      return a * e * i - a * f * h - b * d * i + b * f * g2 + c * d * h - c * e * g2;
    }
    invert() {
      const te2 = this.elements, n11 = te2[0], n21 = te2[1], n31 = te2[2], n12 = te2[3], n22 = te2[4], n32 = te2[5], n13 = te2[6], n23 = te2[7], n33 = te2[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
      if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te2[0] = t11 * detInv;
      te2[1] = (n31 * n23 - n33 * n21) * detInv;
      te2[2] = (n32 * n21 - n31 * n22) * detInv;
      te2[3] = t12 * detInv;
      te2[4] = (n33 * n11 - n31 * n13) * detInv;
      te2[5] = (n31 * n12 - n32 * n11) * detInv;
      te2[6] = t13 * detInv;
      te2[7] = (n21 * n13 - n23 * n11) * detInv;
      te2[8] = (n22 * n11 - n21 * n12) * detInv;
      return this;
    }
    transpose() {
      let tmp;
      const m = this.elements;
      tmp = m[1];
      m[1] = m[3];
      m[3] = tmp;
      tmp = m[2];
      m[2] = m[6];
      m[6] = tmp;
      tmp = m[5];
      m[5] = m[7];
      m[7] = tmp;
      return this;
    }
    getNormalMatrix(matrix4) {
      return this.setFromMatrix4(matrix4).invert().transpose();
    }
    transposeIntoArray(r) {
      const m = this.elements;
      r[0] = m[0];
      r[1] = m[3];
      r[2] = m[6];
      r[3] = m[1];
      r[4] = m[4];
      r[5] = m[7];
      r[6] = m[2];
      r[7] = m[5];
      r[8] = m[8];
      return this;
    }
    setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
      const c = Math.cos(rotation);
      const s = Math.sin(rotation);
      this.set(
        sx * c,
        sx * s,
        -sx * (c * cx + s * cy) + cx + tx,
        -sy * s,
        sy * c,
        -sy * (-s * cx + c * cy) + cy + ty,
        0,
        0,
        1
      );
      return this;
    }
    //
    scale(sx, sy) {
      this.premultiply(_m3.makeScale(sx, sy));
      return this;
    }
    rotate(theta) {
      this.premultiply(_m3.makeRotation(-theta));
      return this;
    }
    translate(tx, ty) {
      this.premultiply(_m3.makeTranslation(tx, ty));
      return this;
    }
    // for 2D Transforms
    makeTranslation(x, y2) {
      if (x.isVector2) {
        this.set(
          1,
          0,
          x.x,
          0,
          1,
          x.y,
          0,
          0,
          1
        );
      } else {
        this.set(
          1,
          0,
          x,
          0,
          1,
          y2,
          0,
          0,
          1
        );
      }
      return this;
    }
    makeRotation(theta) {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        s,
        c,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeScale(x, y2) {
      this.set(
        x,
        0,
        0,
        0,
        y2,
        0,
        0,
        0,
        1
      );
      return this;
    }
    //
    equals(matrix) {
      const te2 = this.elements;
      const me = matrix.elements;
      for (let i = 0; i < 9; i++) {
        if (te2[i] !== me[i]) return false;
      }
      return true;
    }
    fromArray(array, offset = 0) {
      for (let i = 0; i < 9; i++) {
        this.elements[i] = array[i + offset];
      }
      return this;
    }
    toArray(array = [], offset = 0) {
      const te2 = this.elements;
      array[offset] = te2[0];
      array[offset + 1] = te2[1];
      array[offset + 2] = te2[2];
      array[offset + 3] = te2[3];
      array[offset + 4] = te2[4];
      array[offset + 5] = te2[5];
      array[offset + 6] = te2[6];
      array[offset + 7] = te2[7];
      array[offset + 8] = te2[8];
      return array;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const _m3 = /* @__PURE__ */ new Matrix3();
  function arrayNeedsUint32(array) {
    for (let i = array.length - 1; i >= 0; --i) {
      if (array[i] >= 65535) return true;
    }
    return false;
  }
  function createElementNS(name) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", name);
  }
  const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /* @__PURE__ */ new Matrix3().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  );
  const LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /* @__PURE__ */ new Matrix3().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  );
  const COLOR_SPACES = {
    [LinearSRGBColorSpace]: {
      transfer: LinearTransfer,
      primaries: Rec709Primaries,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (color2) => color2,
      fromReference: (color2) => color2
    },
    [SRGBColorSpace]: {
      transfer: SRGBTransfer,
      primaries: Rec709Primaries,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (color2) => color2.convertSRGBToLinear(),
      fromReference: (color2) => color2.convertLinearToSRGB()
    },
    [LinearDisplayP3ColorSpace$1]: {
      transfer: LinearTransfer,
      primaries: P3Primaries,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (color2) => color2.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),
      fromReference: (color2) => color2.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)
    },
    [DisplayP3ColorSpace$1]: {
      transfer: SRGBTransfer,
      primaries: P3Primaries,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (color2) => color2.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),
      fromReference: (color2) => color2.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()
    }
  };
  const SUPPORTED_WORKING_COLOR_SPACES = /* @__PURE__ */ new Set([LinearSRGBColorSpace, LinearDisplayP3ColorSpace$1]);
  const ColorManagement = {
    enabled: true,
    _workingColorSpace: LinearSRGBColorSpace,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(colorSpace) {
      if (!SUPPORTED_WORKING_COLOR_SPACES.has(colorSpace)) {
        throw new Error(`Unsupported working color space, "${colorSpace}".`);
      }
      this._workingColorSpace = colorSpace;
    },
    convert: function(color2, sourceColorSpace, targetColorSpace) {
      if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
        return color2;
      }
      const sourceToReference = COLOR_SPACES[sourceColorSpace].toReference;
      const targetFromReference = COLOR_SPACES[targetColorSpace].fromReference;
      return targetFromReference(sourceToReference(color2));
    },
    fromWorkingColorSpace: function(color2, targetColorSpace) {
      return this.convert(color2, this._workingColorSpace, targetColorSpace);
    },
    toWorkingColorSpace: function(color2, sourceColorSpace) {
      return this.convert(color2, sourceColorSpace, this._workingColorSpace);
    },
    getPrimaries: function(colorSpace) {
      return COLOR_SPACES[colorSpace].primaries;
    },
    getTransfer: function(colorSpace) {
      if (colorSpace === NoColorSpace) return LinearTransfer;
      return COLOR_SPACES[colorSpace].transfer;
    },
    getLuminanceCoefficients: function(target, colorSpace = this._workingColorSpace) {
      return target.fromArray(COLOR_SPACES[colorSpace].luminanceCoefficients);
    }
  };
  function SRGBToLinear(c) {
    return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
  }
  function LinearToSRGB(c) {
    return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  let _canvas;
  class ImageUtils {
    static getDataURL(image) {
      if (/^data:/i.test(image.src)) {
        return image.src;
      }
      if (typeof HTMLCanvasElement === "undefined") {
        return image.src;
      }
      let canvas;
      if (image instanceof HTMLCanvasElement) {
        canvas = image;
      } else {
        if (_canvas === void 0) _canvas = createElementNS("canvas");
        _canvas.width = image.width;
        _canvas.height = image.height;
        const context2 = _canvas.getContext("2d");
        if (image instanceof ImageData) {
          context2.putImageData(image, 0, 0);
        } else {
          context2.drawImage(image, 0, 0, image.width, image.height);
        }
        canvas = _canvas;
      }
      if (canvas.width > 2048 || canvas.height > 2048) {
        console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", image);
        return canvas.toDataURL("image/jpeg", 0.6);
      } else {
        return canvas.toDataURL("image/png");
      }
    }
    static sRGBToLinear(image) {
      if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
        const canvas = createElementNS("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const context2 = canvas.getContext("2d");
        context2.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context2.getImageData(0, 0, image.width, image.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i++) {
          data[i] = SRGBToLinear(data[i] / 255) * 255;
        }
        context2.putImageData(imageData, 0, 0);
        return canvas;
      } else if (image.data) {
        const data = image.data.slice(0);
        for (let i = 0; i < data.length; i++) {
          if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
            data[i] = Math.floor(SRGBToLinear(data[i] / 255) * 255);
          } else {
            data[i] = SRGBToLinear(data[i]);
          }
        }
        return {
          data,
          width: image.width,
          height: image.height
        };
      } else {
        console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
        return image;
      }
    }
  }
  let _sourceId = 0;
  class Source {
    constructor(data = null) {
      this.isSource = true;
      Object.defineProperty(this, "id", { value: _sourceId++ });
      this.uuid = generateUUID();
      this.data = data;
      this.dataReady = true;
      this.version = 0;
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (!isRootObject && meta.images[this.uuid] !== void 0) {
        return meta.images[this.uuid];
      }
      const output = {
        uuid: this.uuid,
        url: ""
      };
      const data = this.data;
      if (data !== null) {
        let url;
        if (Array.isArray(data)) {
          url = [];
          for (let i = 0, l = data.length; i < l; i++) {
            if (data[i].isDataTexture) {
              url.push(serializeImage(data[i].image));
            } else {
              url.push(serializeImage(data[i]));
            }
          }
        } else {
          url = serializeImage(data);
        }
        output.url = url;
      }
      if (!isRootObject) {
        meta.images[this.uuid] = output;
      }
      return output;
    }
  }
  function serializeImage(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      return ImageUtils.getDataURL(image);
    } else {
      if (image.data) {
        return {
          data: Array.from(image.data),
          width: image.width,
          height: image.height,
          type: image.data.constructor.name
        };
      } else {
        console.warn("THREE.Texture: Unable to serialize Texture.");
        return {};
      }
    }
  }
  let _textureId = 0;
  class Texture extends EventDispatcher {
    constructor(image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace) {
      super();
      this.isTexture = true;
      Object.defineProperty(this, "id", { value: _textureId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.source = new Source(image);
      this.mipmaps = [];
      this.mapping = mapping;
      this.channel = 0;
      this.wrapS = wrapS;
      this.wrapT = wrapT;
      this.magFilter = magFilter;
      this.minFilter = minFilter;
      this.anisotropy = anisotropy;
      this.format = format;
      this.internalFormat = null;
      this.type = type;
      this.offset = new Vector2(0, 0);
      this.repeat = new Vector2(1, 1);
      this.center = new Vector2(0, 0);
      this.rotation = 0;
      this.matrixAutoUpdate = true;
      this.matrix = new Matrix3();
      this.generateMipmaps = true;
      this.premultiplyAlpha = false;
      this.flipY = true;
      this.unpackAlignment = 4;
      this.colorSpace = colorSpace;
      this.userData = {};
      this.version = 0;
      this.onUpdate = null;
      this.isRenderTargetTexture = false;
      this.pmremVersion = 0;
    }
    get image() {
      return this.source.data;
    }
    set image(value = null) {
      this.source.data = value;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.name = source.name;
      this.source = source.source;
      this.mipmaps = source.mipmaps.slice(0);
      this.mapping = source.mapping;
      this.channel = source.channel;
      this.wrapS = source.wrapS;
      this.wrapT = source.wrapT;
      this.magFilter = source.magFilter;
      this.minFilter = source.minFilter;
      this.anisotropy = source.anisotropy;
      this.format = source.format;
      this.internalFormat = source.internalFormat;
      this.type = source.type;
      this.offset.copy(source.offset);
      this.repeat.copy(source.repeat);
      this.center.copy(source.center);
      this.rotation = source.rotation;
      this.matrixAutoUpdate = source.matrixAutoUpdate;
      this.matrix.copy(source.matrix);
      this.generateMipmaps = source.generateMipmaps;
      this.premultiplyAlpha = source.premultiplyAlpha;
      this.flipY = source.flipY;
      this.unpackAlignment = source.unpackAlignment;
      this.colorSpace = source.colorSpace;
      this.userData = JSON.parse(JSON.stringify(source.userData));
      this.needsUpdate = true;
      return this;
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (!isRootObject && meta.textures[this.uuid] !== void 0) {
        return meta.textures[this.uuid];
      }
      const output = {
        metadata: {
          version: 4.6,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(meta).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      if (Object.keys(this.userData).length > 0) output.userData = this.userData;
      if (!isRootObject) {
        meta.textures[this.uuid] = output;
      }
      return output;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(uv2) {
      if (this.mapping !== UVMapping) return uv2;
      uv2.applyMatrix3(this.matrix);
      if (uv2.x < 0 || uv2.x > 1) {
        switch (this.wrapS) {
          case RepeatWrapping:
            uv2.x = uv2.x - Math.floor(uv2.x);
            break;
          case ClampToEdgeWrapping:
            uv2.x = uv2.x < 0 ? 0 : 1;
            break;
          case MirroredRepeatWrapping:
            if (Math.abs(Math.floor(uv2.x) % 2) === 1) {
              uv2.x = Math.ceil(uv2.x) - uv2.x;
            } else {
              uv2.x = uv2.x - Math.floor(uv2.x);
            }
            break;
        }
      }
      if (uv2.y < 0 || uv2.y > 1) {
        switch (this.wrapT) {
          case RepeatWrapping:
            uv2.y = uv2.y - Math.floor(uv2.y);
            break;
          case ClampToEdgeWrapping:
            uv2.y = uv2.y < 0 ? 0 : 1;
            break;
          case MirroredRepeatWrapping:
            if (Math.abs(Math.floor(uv2.y) % 2) === 1) {
              uv2.y = Math.ceil(uv2.y) - uv2.y;
            } else {
              uv2.y = uv2.y - Math.floor(uv2.y);
            }
            break;
        }
      }
      if (this.flipY) {
        uv2.y = 1 - uv2.y;
      }
      return uv2;
    }
    set needsUpdate(value) {
      if (value === true) {
        this.version++;
        this.source.needsUpdate = true;
      }
    }
    set needsPMREMUpdate(value) {
      if (value === true) {
        this.pmremVersion++;
      }
    }
  }
  Texture.DEFAULT_IMAGE = null;
  Texture.DEFAULT_MAPPING = UVMapping;
  Texture.DEFAULT_ANISOTROPY = 4;
  class Vector4 {
    constructor(x = 0, y2 = 0, z = 0, w = 1) {
      Vector4.prototype.isVector4 = true;
      this.x = x;
      this.y = y2;
      this.z = z;
      this.w = w;
    }
    get width() {
      return this.z;
    }
    set width(value) {
      this.z = value;
    }
    get height() {
      return this.w;
    }
    set height(value) {
      this.w = value;
    }
    set(x, y2, z, w) {
      this.x = x;
      this.y = y2;
      this.z = z;
      this.w = w;
      return this;
    }
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      this.w = scalar;
      return this;
    }
    setX(x) {
      this.x = x;
      return this;
    }
    setY(y2) {
      this.y = y2;
      return this;
    }
    setZ(z) {
      this.z = z;
      return this;
    }
    setW(w) {
      this.w = w;
      return this;
    }
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        case 3:
          this.w = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      this.w = v.w !== void 0 ? v.w : 1;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      this.w += v.w;
      return this;
    }
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      this.w += s;
      return this;
    }
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      this.w = a.w + b.w;
      return this;
    }
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      this.w += v.w * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      this.w -= v.w;
      return this;
    }
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      this.w -= s;
      return this;
    }
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      this.w = a.w - b.w;
      return this;
    }
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      this.w *= v.w;
      return this;
    }
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      this.w *= scalar;
      return this;
    }
    applyMatrix4(m) {
      const x = this.x, y2 = this.y, z = this.z, w = this.w;
      const e = m.elements;
      this.x = e[0] * x + e[4] * y2 + e[8] * z + e[12] * w;
      this.y = e[1] * x + e[5] * y2 + e[9] * z + e[13] * w;
      this.z = e[2] * x + e[6] * y2 + e[10] * z + e[14] * w;
      this.w = e[3] * x + e[7] * y2 + e[11] * z + e[15] * w;
      return this;
    }
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    setAxisAngleFromQuaternion(q) {
      this.w = 2 * Math.acos(q.w);
      const s = Math.sqrt(1 - q.w * q.w);
      if (s < 1e-4) {
        this.x = 1;
        this.y = 0;
        this.z = 0;
      } else {
        this.x = q.x / s;
        this.y = q.y / s;
        this.z = q.z / s;
      }
      return this;
    }
    setAxisAngleFromRotationMatrix(m) {
      let angle, x, y2, z;
      const epsilon = 0.01, epsilon2 = 0.1, te2 = m.elements, m11 = te2[0], m12 = te2[4], m13 = te2[8], m21 = te2[1], m22 = te2[5], m23 = te2[9], m31 = te2[2], m32 = te2[6], m33 = te2[10];
      if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
        if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
          this.set(1, 0, 0, 0);
          return this;
        }
        angle = Math.PI;
        const xx = (m11 + 1) / 2;
        const yy = (m22 + 1) / 2;
        const zz = (m33 + 1) / 2;
        const xy = (m12 + m21) / 4;
        const xz = (m13 + m31) / 4;
        const yz = (m23 + m32) / 4;
        if (xx > yy && xx > zz) {
          if (xx < epsilon) {
            x = 0;
            y2 = 0.707106781;
            z = 0.707106781;
          } else {
            x = Math.sqrt(xx);
            y2 = xy / x;
            z = xz / x;
          }
        } else if (yy > zz) {
          if (yy < epsilon) {
            x = 0.707106781;
            y2 = 0;
            z = 0.707106781;
          } else {
            y2 = Math.sqrt(yy);
            x = xy / y2;
            z = yz / y2;
          }
        } else {
          if (zz < epsilon) {
            x = 0.707106781;
            y2 = 0.707106781;
            z = 0;
          } else {
            z = Math.sqrt(zz);
            x = xz / z;
            y2 = yz / z;
          }
        }
        this.set(x, y2, z, angle);
        return this;
      }
      let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
      if (Math.abs(s) < 1e-3) s = 1;
      this.x = (m32 - m23) / s;
      this.y = (m13 - m31) / s;
      this.z = (m21 - m12) / s;
      this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
      return this;
    }
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      this.w = e[15];
      return this;
    }
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      this.w = Math.min(this.w, v.w);
      return this;
    }
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      this.w = Math.max(this.w, v.w);
      return this;
    }
    clamp(min, max) {
      this.x = Math.max(min.x, Math.min(max.x, this.x));
      this.y = Math.max(min.y, Math.min(max.y, this.y));
      this.z = Math.max(min.z, Math.min(max.z, this.z));
      this.w = Math.max(min.w, Math.min(max.w, this.w));
      return this;
    }
    clampScalar(minVal, maxVal) {
      this.x = Math.max(minVal, Math.min(maxVal, this.x));
      this.y = Math.max(minVal, Math.min(maxVal, this.y));
      this.z = Math.max(minVal, Math.min(maxVal, this.z));
      this.w = Math.max(minVal, Math.min(maxVal, this.w));
      return this;
    }
    clampLength(min, max) {
      const length2 = this.length();
      return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min, Math.min(max, length2)));
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      this.w = Math.floor(this.w);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      this.w = Math.ceil(this.w);
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      this.w = Math.round(this.w);
      return this;
    }
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      this.w = Math.trunc(this.w);
      return this;
    }
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(length2) {
      return this.normalize().multiplyScalar(length2);
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      this.w += (v.w - this.w) * alpha;
      return this;
    }
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      this.w = v1.w + (v2.w - v1.w) * alpha;
      return this;
    }
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
    }
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      this.w = array[offset + 3];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      array[offset + 3] = this.w;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this.x = attribute2.getX(index);
      this.y = attribute2.getY(index);
      this.z = attribute2.getZ(index);
      this.w = attribute2.getW(index);
      return this;
    }
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      this.w = Math.random();
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
      yield this.w;
    }
  }
  class RenderTarget extends EventDispatcher {
    constructor(width = 1, height = 1, options = {}) {
      super();
      this.isRenderTarget = true;
      this.width = width;
      this.height = height;
      this.depth = 1;
      this.scissor = new Vector4(0, 0, width, height);
      this.scissorTest = false;
      this.viewport = new Vector4(0, 0, width, height);
      const image = { width, height, depth: 1 };
      options = Object.assign({
        generateMipmaps: false,
        internalFormat: null,
        minFilter: LinearFilter,
        depthBuffer: true,
        stencilBuffer: false,
        resolveDepthBuffer: true,
        resolveStencilBuffer: true,
        depthTexture: null,
        samples: 0,
        count: 1
      }, options);
      const texture2 = new Texture(image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace);
      texture2.flipY = false;
      texture2.generateMipmaps = options.generateMipmaps;
      texture2.internalFormat = options.internalFormat;
      this.textures = [];
      const count = options.count;
      for (let i = 0; i < count; i++) {
        this.textures[i] = texture2.clone();
        this.textures[i].isRenderTargetTexture = true;
      }
      this.depthBuffer = options.depthBuffer;
      this.stencilBuffer = options.stencilBuffer;
      this.resolveDepthBuffer = options.resolveDepthBuffer;
      this.resolveStencilBuffer = options.resolveStencilBuffer;
      this.depthTexture = options.depthTexture;
      this.samples = options.samples;
    }
    get texture() {
      return this.textures[0];
    }
    set texture(value) {
      this.textures[0] = value;
    }
    setSize(width, height, depth2 = 1) {
      if (this.width !== width || this.height !== height || this.depth !== depth2) {
        this.width = width;
        this.height = height;
        this.depth = depth2;
        for (let i = 0, il = this.textures.length; i < il; i++) {
          this.textures[i].image.width = width;
          this.textures[i].image.height = height;
          this.textures[i].image.depth = depth2;
        }
        this.dispose();
      }
      this.viewport.set(0, 0, width, height);
      this.scissor.set(0, 0, width, height);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.width = source.width;
      this.height = source.height;
      this.depth = source.depth;
      this.scissor.copy(source.scissor);
      this.scissorTest = source.scissorTest;
      this.viewport.copy(source.viewport);
      this.textures.length = 0;
      for (let i = 0, il = source.textures.length; i < il; i++) {
        this.textures[i] = source.textures[i].clone();
        this.textures[i].isRenderTargetTexture = true;
      }
      const image = Object.assign({}, source.texture.image);
      this.texture.source = new Source(image);
      this.depthBuffer = source.depthBuffer;
      this.stencilBuffer = source.stencilBuffer;
      this.resolveDepthBuffer = source.resolveDepthBuffer;
      this.resolveStencilBuffer = source.resolveStencilBuffer;
      if (source.depthTexture !== null) this.depthTexture = source.depthTexture.clone();
      this.samples = source.samples;
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class Data3DTexture extends Texture {
    constructor(data = null, width = 1, height = 1, depth2 = 1) {
      super(null);
      this.isData3DTexture = true;
      this.image = { data, width, height, depth: depth2 };
      this.magFilter = NearestFilter;
      this.minFilter = NearestFilter;
      this.wrapR = ClampToEdgeWrapping;
      this.generateMipmaps = false;
      this.flipY = false;
      this.unpackAlignment = 1;
    }
  }
  class Quaternion {
    constructor(x = 0, y2 = 0, z = 0, w = 1) {
      this.isQuaternion = true;
      this._x = x;
      this._y = y2;
      this._z = z;
      this._w = w;
    }
    static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t2) {
      let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
      if (t2 === 0) {
        dst[dstOffset + 0] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
        return;
      }
      if (t2 === 1) {
        dst[dstOffset + 0] = x1;
        dst[dstOffset + 1] = y1;
        dst[dstOffset + 2] = z1;
        dst[dstOffset + 3] = w1;
        return;
      }
      if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
        let s = 1 - t2;
        const cos2 = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos2 >= 0 ? 1 : -1, sqrSin = 1 - cos2 * cos2;
        if (sqrSin > Number.EPSILON) {
          const sin2 = Math.sqrt(sqrSin), len = Math.atan2(sin2, cos2 * dir);
          s = Math.sin(s * len) / sin2;
          t2 = Math.sin(t2 * len) / sin2;
        }
        const tDir = t2 * dir;
        x0 = x0 * s + x1 * tDir;
        y0 = y0 * s + y1 * tDir;
        z0 = z0 * s + z1 * tDir;
        w0 = w0 * s + w1 * tDir;
        if (s === 1 - t2) {
          const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
          x0 *= f;
          y0 *= f;
          z0 *= f;
          w0 *= f;
        }
      }
      dst[dstOffset] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
    }
    static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
      const x0 = src0[srcOffset0];
      const y0 = src0[srcOffset0 + 1];
      const z0 = src0[srcOffset0 + 2];
      const w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1];
      const y1 = src1[srcOffset1 + 1];
      const z1 = src1[srcOffset1 + 2];
      const w1 = src1[srcOffset1 + 3];
      dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
      dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
      dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
      dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
      return dst;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(value) {
      this._w = value;
      this._onChangeCallback();
    }
    set(x, y2, z, w) {
      this._x = x;
      this._y = y2;
      this._z = z;
      this._w = w;
      this._onChangeCallback();
      return this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(quaternion) {
      this._x = quaternion.x;
      this._y = quaternion.y;
      this._z = quaternion.z;
      this._w = quaternion.w;
      this._onChangeCallback();
      return this;
    }
    setFromEuler(euler, update = true) {
      const x = euler._x, y2 = euler._y, z = euler._z, order = euler._order;
      const cos2 = Math.cos;
      const sin2 = Math.sin;
      const c1 = cos2(x / 2);
      const c2 = cos2(y2 / 2);
      const c3 = cos2(z / 2);
      const s1 = sin2(x / 2);
      const s2 = sin2(y2 / 2);
      const s3 = sin2(z / 2);
      switch (order) {
        case "XYZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "YXZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "ZXY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "ZYX":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "YZX":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "XZY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
      }
      if (update === true) this._onChangeCallback();
      return this;
    }
    setFromAxisAngle(axis, angle) {
      const halfAngle = angle / 2, s = Math.sin(halfAngle);
      this._x = axis.x * s;
      this._y = axis.y * s;
      this._z = axis.z * s;
      this._w = Math.cos(halfAngle);
      this._onChangeCallback();
      return this;
    }
    setFromRotationMatrix(m) {
      const te2 = m.elements, m11 = te2[0], m12 = te2[4], m13 = te2[8], m21 = te2[1], m22 = te2[5], m23 = te2[9], m31 = te2[2], m32 = te2[6], m33 = te2[10], trace = m11 + m22 + m33;
      if (trace > 0) {
        const s = 0.5 / Math.sqrt(trace + 1);
        this._w = 0.25 / s;
        this._x = (m32 - m23) * s;
        this._y = (m13 - m31) * s;
        this._z = (m21 - m12) * s;
      } else if (m11 > m22 && m11 > m33) {
        const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
        this._w = (m32 - m23) / s;
        this._x = 0.25 * s;
        this._y = (m12 + m21) / s;
        this._z = (m13 + m31) / s;
      } else if (m22 > m33) {
        const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
        this._w = (m13 - m31) / s;
        this._x = (m12 + m21) / s;
        this._y = 0.25 * s;
        this._z = (m23 + m32) / s;
      } else {
        const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
        this._w = (m21 - m12) / s;
        this._x = (m13 + m31) / s;
        this._y = (m23 + m32) / s;
        this._z = 0.25 * s;
      }
      this._onChangeCallback();
      return this;
    }
    setFromUnitVectors(vFrom, vTo) {
      let r = vFrom.dot(vTo) + 1;
      if (r < Number.EPSILON) {
        r = 0;
        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
          this._x = -vFrom.y;
          this._y = vFrom.x;
          this._z = 0;
          this._w = r;
        } else {
          this._x = 0;
          this._y = -vFrom.z;
          this._z = vFrom.y;
          this._w = r;
        }
      } else {
        this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
        this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
        this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
        this._w = r;
      }
      return this.normalize();
    }
    angleTo(q) {
      return 2 * Math.acos(Math.abs(clamp$1(this.dot(q), -1, 1)));
    }
    rotateTowards(q, step2) {
      const angle = this.angleTo(q);
      if (angle === 0) return this;
      const t2 = Math.min(1, step2 / angle);
      this.slerp(q, t2);
      return this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    }
    dot(v) {
      return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let l = this.length();
      if (l === 0) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        l = 1 / l;
        this._x = this._x * l;
        this._y = this._y * l;
        this._z = this._z * l;
        this._w = this._w * l;
      }
      this._onChangeCallback();
      return this;
    }
    multiply(q) {
      return this.multiplyQuaternions(this, q);
    }
    premultiply(q) {
      return this.multiplyQuaternions(q, this);
    }
    multiplyQuaternions(a, b) {
      const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
      const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
      this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
      this._onChangeCallback();
      return this;
    }
    slerp(qb, t2) {
      if (t2 === 0) return this;
      if (t2 === 1) return this.copy(qb);
      const x = this._x, y2 = this._y, z = this._z, w = this._w;
      let cosHalfTheta = w * qb._w + x * qb._x + y2 * qb._y + z * qb._z;
      if (cosHalfTheta < 0) {
        this._w = -qb._w;
        this._x = -qb._x;
        this._y = -qb._y;
        this._z = -qb._z;
        cosHalfTheta = -cosHalfTheta;
      } else {
        this.copy(qb);
      }
      if (cosHalfTheta >= 1) {
        this._w = w;
        this._x = x;
        this._y = y2;
        this._z = z;
        return this;
      }
      const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
      if (sqrSinHalfTheta <= Number.EPSILON) {
        const s = 1 - t2;
        this._w = s * w + t2 * this._w;
        this._x = s * x + t2 * this._x;
        this._y = s * y2 + t2 * this._y;
        this._z = s * z + t2 * this._z;
        this.normalize();
        return this;
      }
      const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
      const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
      const ratioA = Math.sin((1 - t2) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t2 * halfTheta) / sinHalfTheta;
      this._w = w * ratioA + this._w * ratioB;
      this._x = x * ratioA + this._x * ratioB;
      this._y = y2 * ratioA + this._y * ratioB;
      this._z = z * ratioA + this._z * ratioB;
      this._onChangeCallback();
      return this;
    }
    slerpQuaternions(qa, qb, t2) {
      return this.copy(qa).slerp(qb, t2);
    }
    random() {
      const theta1 = 2 * Math.PI * Math.random();
      const theta2 = 2 * Math.PI * Math.random();
      const x0 = Math.random();
      const r1 = Math.sqrt(1 - x0);
      const r2 = Math.sqrt(x0);
      return this.set(
        r1 * Math.sin(theta1),
        r1 * Math.cos(theta1),
        r2 * Math.sin(theta2),
        r2 * Math.cos(theta2)
      );
    }
    equals(quaternion) {
      return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
    }
    fromArray(array, offset = 0) {
      this._x = array[offset];
      this._y = array[offset + 1];
      this._z = array[offset + 2];
      this._w = array[offset + 3];
      this._onChangeCallback();
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._w;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this._x = attribute2.getX(index);
      this._y = attribute2.getY(index);
      this._z = attribute2.getZ(index);
      this._w = attribute2.getW(index);
      this._onChangeCallback();
      return this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._w;
    }
  }
  class Vector3 {
    constructor(x = 0, y2 = 0, z = 0) {
      Vector3.prototype.isVector3 = true;
      this.x = x;
      this.y = y2;
      this.z = z;
    }
    set(x, y2, z) {
      if (z === void 0) z = this.z;
      this.x = x;
      this.y = y2;
      this.z = z;
      return this;
    }
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      return this;
    }
    setX(x) {
      this.x = x;
      return this;
    }
    setY(y2) {
      this.y = y2;
      return this;
    }
    setZ(z) {
      this.z = z;
      return this;
    }
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    }
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      return this;
    }
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    }
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    }
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      return this;
    }
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    }
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
    }
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
    multiplyVectors(a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    }
    applyEuler(euler) {
      return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
    }
    applyAxisAngle(axis, angle) {
      return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
    }
    applyMatrix3(m) {
      const x = this.x, y2 = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x + e[3] * y2 + e[6] * z;
      this.y = e[1] * x + e[4] * y2 + e[7] * z;
      this.z = e[2] * x + e[5] * y2 + e[8] * z;
      return this;
    }
    applyNormalMatrix(m) {
      return this.applyMatrix3(m).normalize();
    }
    applyMatrix4(m) {
      const x = this.x, y2 = this.y, z = this.z;
      const e = m.elements;
      const w = 1 / (e[3] * x + e[7] * y2 + e[11] * z + e[15]);
      this.x = (e[0] * x + e[4] * y2 + e[8] * z + e[12]) * w;
      this.y = (e[1] * x + e[5] * y2 + e[9] * z + e[13]) * w;
      this.z = (e[2] * x + e[6] * y2 + e[10] * z + e[14]) * w;
      return this;
    }
    applyQuaternion(q) {
      const vx = this.x, vy = this.y, vz = this.z;
      const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      const tx = 2 * (qy * vz - qz * vy);
      const ty = 2 * (qz * vx - qx * vz);
      const tz = 2 * (qx * vy - qy * vx);
      this.x = vx + qw * tx + qy * tz - qz * ty;
      this.y = vy + qw * ty + qz * tx - qx * tz;
      this.z = vz + qw * tz + qx * ty - qy * tx;
      return this;
    }
    project(camera) {
      return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
    }
    unproject(camera) {
      return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
    }
    transformDirection(m) {
      const x = this.x, y2 = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x + e[4] * y2 + e[8] * z;
      this.y = e[1] * x + e[5] * y2 + e[9] * z;
      this.z = e[2] * x + e[6] * y2 + e[10] * z;
      return this.normalize();
    }
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      return this;
    }
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      return this;
    }
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      return this;
    }
    clamp(min, max) {
      this.x = Math.max(min.x, Math.min(max.x, this.x));
      this.y = Math.max(min.y, Math.min(max.y, this.y));
      this.z = Math.max(min.z, Math.min(max.z, this.z));
      return this;
    }
    clampScalar(minVal, maxVal) {
      this.x = Math.max(minVal, Math.min(maxVal, this.x));
      this.y = Math.max(minVal, Math.min(maxVal, this.y));
      this.z = Math.max(minVal, Math.min(maxVal, this.z));
      return this;
    }
    clampLength(min, max) {
      const length2 = this.length();
      return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min, Math.min(max, length2)));
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      return this;
    }
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    // TODO lengthSquared?
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(length2) {
      return this.normalize().multiplyScalar(length2);
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      return this;
    }
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      return this;
    }
    cross(v) {
      return this.crossVectors(this, v);
    }
    crossVectors(a, b) {
      const ax = a.x, ay = a.y, az = a.z;
      const bx = b.x, by = b.y, bz = b.z;
      this.x = ay * bz - az * by;
      this.y = az * bx - ax * bz;
      this.z = ax * by - ay * bx;
      return this;
    }
    projectOnVector(v) {
      const denominator = v.lengthSq();
      if (denominator === 0) return this.set(0, 0, 0);
      const scalar = v.dot(this) / denominator;
      return this.copy(v).multiplyScalar(scalar);
    }
    projectOnPlane(planeNormal) {
      _vector$c.copy(this).projectOnVector(planeNormal);
      return this.sub(_vector$c);
    }
    reflect(normal) {
      return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
    }
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp$1(theta, -1, 1));
    }
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    }
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    setFromSpherical(s) {
      return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
    }
    setFromSphericalCoords(radius, phi, theta) {
      const sinPhiRadius = Math.sin(phi) * radius;
      this.x = sinPhiRadius * Math.sin(theta);
      this.y = Math.cos(phi) * radius;
      this.z = sinPhiRadius * Math.cos(theta);
      return this;
    }
    setFromCylindrical(c) {
      return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
    }
    setFromCylindricalCoords(radius, theta, y2) {
      this.x = radius * Math.sin(theta);
      this.y = y2;
      this.z = radius * Math.cos(theta);
      return this;
    }
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      return this;
    }
    setFromMatrixScale(m) {
      const sx = this.setFromMatrixColumn(m, 0).length();
      const sy = this.setFromMatrixColumn(m, 1).length();
      const sz = this.setFromMatrixColumn(m, 2).length();
      this.x = sx;
      this.y = sy;
      this.z = sz;
      return this;
    }
    setFromMatrixColumn(m, index) {
      return this.fromArray(m.elements, index * 4);
    }
    setFromMatrix3Column(m, index) {
      return this.fromArray(m.elements, index * 3);
    }
    setFromEuler(e) {
      this.x = e._x;
      this.y = e._y;
      this.z = e._z;
      return this;
    }
    setFromColor(c) {
      this.x = c.r;
      this.y = c.g;
      this.z = c.b;
      return this;
    }
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z;
    }
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this.x = attribute2.getX(index);
      this.y = attribute2.getY(index);
      this.z = attribute2.getZ(index);
      return this;
    }
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    }
    randomDirection() {
      const theta = Math.random() * Math.PI * 2;
      const u2 = Math.random() * 2 - 1;
      const c = Math.sqrt(1 - u2 * u2);
      this.x = c * Math.cos(theta);
      this.y = u2;
      this.z = c * Math.sin(theta);
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
    }
  }
  const _vector$c = /* @__PURE__ */ new Vector3();
  const _quaternion$4 = /* @__PURE__ */ new Quaternion();
  class Box3 {
    constructor(min = new Vector3(Infinity, Infinity, Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
      this.isBox3 = true;
      this.min = min;
      this.max = max;
    }
    set(min, max) {
      this.min.copy(min);
      this.max.copy(max);
      return this;
    }
    setFromArray(array) {
      this.makeEmpty();
      for (let i = 0, il = array.length; i < il; i += 3) {
        this.expandByPoint(_vector$b.fromArray(array, i));
      }
      return this;
    }
    setFromBufferAttribute(attribute2) {
      this.makeEmpty();
      for (let i = 0, il = attribute2.count; i < il; i++) {
        this.expandByPoint(_vector$b.fromBufferAttribute(attribute2, i));
      }
      return this;
    }
    setFromPoints(points) {
      this.makeEmpty();
      for (let i = 0, il = points.length; i < il; i++) {
        this.expandByPoint(points[i]);
      }
      return this;
    }
    setFromCenterAndSize(center, size) {
      const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
      this.min.copy(center).sub(halfSize);
      this.max.copy(center).add(halfSize);
      return this;
    }
    setFromObject(object, precise = false) {
      this.makeEmpty();
      return this.expandByObject(object, precise);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(box) {
      this.min.copy(box.min);
      this.max.copy(box.max);
      return this;
    }
    makeEmpty() {
      this.min.x = this.min.y = this.min.z = Infinity;
      this.max.x = this.max.y = this.max.z = -Infinity;
      return this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
    }
    expandByPoint(point) {
      this.min.min(point);
      this.max.max(point);
      return this;
    }
    expandByVector(vector) {
      this.min.sub(vector);
      this.max.add(vector);
      return this;
    }
    expandByScalar(scalar) {
      this.min.addScalar(-scalar);
      this.max.addScalar(scalar);
      return this;
    }
    expandByObject(object, precise = false) {
      object.updateWorldMatrix(false, false);
      const geometry = object.geometry;
      if (geometry !== void 0) {
        const positionAttribute = geometry.getAttribute("position");
        if (precise === true && positionAttribute !== void 0 && object.isInstancedMesh !== true) {
          for (let i = 0, l = positionAttribute.count; i < l; i++) {
            if (object.isMesh === true) {
              object.getVertexPosition(i, _vector$b);
            } else {
              _vector$b.fromBufferAttribute(positionAttribute, i);
            }
            _vector$b.applyMatrix4(object.matrixWorld);
            this.expandByPoint(_vector$b);
          }
        } else {
          if (object.boundingBox !== void 0) {
            if (object.boundingBox === null) {
              object.computeBoundingBox();
            }
            _box$4.copy(object.boundingBox);
          } else {
            if (geometry.boundingBox === null) {
              geometry.computeBoundingBox();
            }
            _box$4.copy(geometry.boundingBox);
          }
          _box$4.applyMatrix4(object.matrixWorld);
          this.union(_box$4);
        }
      }
      const children = object.children;
      for (let i = 0, l = children.length; i < l; i++) {
        this.expandByObject(children[i], precise);
      }
      return this;
    }
    containsPoint(point) {
      return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
    }
    containsBox(box) {
      return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
    }
    getParameter(point, target) {
      return target.set(
        (point.x - this.min.x) / (this.max.x - this.min.x),
        (point.y - this.min.y) / (this.max.y - this.min.y),
        (point.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(box) {
      return box.max.x >= this.min.x && box.min.x <= this.max.x && box.max.y >= this.min.y && box.min.y <= this.max.y && box.max.z >= this.min.z && box.min.z <= this.max.z;
    }
    intersectsSphere(sphere) {
      this.clampPoint(sphere.center, _vector$b);
      return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
    }
    intersectsPlane(plane) {
      let min, max;
      if (plane.normal.x > 0) {
        min = plane.normal.x * this.min.x;
        max = plane.normal.x * this.max.x;
      } else {
        min = plane.normal.x * this.max.x;
        max = plane.normal.x * this.min.x;
      }
      if (plane.normal.y > 0) {
        min += plane.normal.y * this.min.y;
        max += plane.normal.y * this.max.y;
      } else {
        min += plane.normal.y * this.max.y;
        max += plane.normal.y * this.min.y;
      }
      if (plane.normal.z > 0) {
        min += plane.normal.z * this.min.z;
        max += plane.normal.z * this.max.z;
      } else {
        min += plane.normal.z * this.max.z;
        max += plane.normal.z * this.min.z;
      }
      return min <= -plane.constant && max >= -plane.constant;
    }
    intersectsTriangle(triangle) {
      if (this.isEmpty()) {
        return false;
      }
      this.getCenter(_center);
      _extents.subVectors(this.max, _center);
      _v0$3.subVectors(triangle.a, _center);
      _v1$7.subVectors(triangle.b, _center);
      _v2$4.subVectors(triangle.c, _center);
      _f0.subVectors(_v1$7, _v0$3);
      _f1.subVectors(_v2$4, _v1$7);
      _f2.subVectors(_v0$3, _v2$4);
      let axes = [
        0,
        -_f0.z,
        _f0.y,
        0,
        -_f1.z,
        _f1.y,
        0,
        -_f2.z,
        _f2.y,
        _f0.z,
        0,
        -_f0.x,
        _f1.z,
        0,
        -_f1.x,
        _f2.z,
        0,
        -_f2.x,
        -_f0.y,
        _f0.x,
        0,
        -_f1.y,
        _f1.x,
        0,
        -_f2.y,
        _f2.x,
        0
      ];
      if (!satForAxes(axes, _v0$3, _v1$7, _v2$4, _extents)) {
        return false;
      }
      axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (!satForAxes(axes, _v0$3, _v1$7, _v2$4, _extents)) {
        return false;
      }
      _triangleNormal.crossVectors(_f0, _f1);
      axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
      return satForAxes(axes, _v0$3, _v1$7, _v2$4, _extents);
    }
    clampPoint(point, target) {
      return target.copy(point).clamp(this.min, this.max);
    }
    distanceToPoint(point) {
      return this.clampPoint(point, _vector$b).distanceTo(point);
    }
    getBoundingSphere(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
      } else {
        this.getCenter(target.center);
        target.radius = this.getSize(_vector$b).length() * 0.5;
      }
      return target;
    }
    intersect(box) {
      this.min.max(box.min);
      this.max.min(box.max);
      if (this.isEmpty()) this.makeEmpty();
      return this;
    }
    union(box) {
      this.min.min(box.min);
      this.max.max(box.max);
      return this;
    }
    applyMatrix4(matrix) {
      if (this.isEmpty()) return this;
      _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
      _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
      this.setFromPoints(_points);
      return this;
    }
    translate(offset) {
      this.min.add(offset);
      this.max.add(offset);
      return this;
    }
    equals(box) {
      return box.min.equals(this.min) && box.max.equals(this.max);
    }
  }
  const _points = [
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3()
  ];
  const _vector$b = /* @__PURE__ */ new Vector3();
  const _box$4 = /* @__PURE__ */ new Box3();
  const _v0$3 = /* @__PURE__ */ new Vector3();
  const _v1$7 = /* @__PURE__ */ new Vector3();
  const _v2$4 = /* @__PURE__ */ new Vector3();
  const _f0 = /* @__PURE__ */ new Vector3();
  const _f1 = /* @__PURE__ */ new Vector3();
  const _f2 = /* @__PURE__ */ new Vector3();
  const _center = /* @__PURE__ */ new Vector3();
  const _extents = /* @__PURE__ */ new Vector3();
  const _triangleNormal = /* @__PURE__ */ new Vector3();
  const _testAxis = /* @__PURE__ */ new Vector3();
  function satForAxes(axes, v0, v1, v2, extents) {
    for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
      _testAxis.fromArray(axes, i);
      const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
      const p0 = v0.dot(_testAxis);
      const p1 = v1.dot(_testAxis);
      const p2 = v2.dot(_testAxis);
      if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
        return false;
      }
    }
    return true;
  }
  const _box$3 = /* @__PURE__ */ new Box3();
  const _v1$6 = /* @__PURE__ */ new Vector3();
  const _v2$3 = /* @__PURE__ */ new Vector3();
  class Sphere {
    constructor(center = new Vector3(), radius = -1) {
      this.isSphere = true;
      this.center = center;
      this.radius = radius;
    }
    set(center, radius) {
      this.center.copy(center);
      this.radius = radius;
      return this;
    }
    setFromPoints(points, optionalCenter) {
      const center = this.center;
      if (optionalCenter !== void 0) {
        center.copy(optionalCenter);
      } else {
        _box$3.setFromPoints(points).getCenter(center);
      }
      let maxRadiusSq = 0;
      for (let i = 0, il = points.length; i < il; i++) {
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
      }
      this.radius = Math.sqrt(maxRadiusSq);
      return this;
    }
    copy(sphere) {
      this.center.copy(sphere.center);
      this.radius = sphere.radius;
      return this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      this.center.set(0, 0, 0);
      this.radius = -1;
      return this;
    }
    containsPoint(point) {
      return point.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(point) {
      return point.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(sphere) {
      const radiusSum = this.radius + sphere.radius;
      return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
    }
    intersectsBox(box) {
      return box.intersectsSphere(this);
    }
    intersectsPlane(plane) {
      return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(point, target) {
      const deltaLengthSq = this.center.distanceToSquared(point);
      target.copy(point);
      if (deltaLengthSq > this.radius * this.radius) {
        target.sub(this.center).normalize();
        target.multiplyScalar(this.radius).add(this.center);
      }
      return target;
    }
    getBoundingBox(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
        return target;
      }
      target.set(this.center, this.center);
      target.expandByScalar(this.radius);
      return target;
    }
    applyMatrix4(matrix) {
      this.center.applyMatrix4(matrix);
      this.radius = this.radius * matrix.getMaxScaleOnAxis();
      return this;
    }
    translate(offset) {
      this.center.add(offset);
      return this;
    }
    expandByPoint(point) {
      if (this.isEmpty()) {
        this.center.copy(point);
        this.radius = 0;
        return this;
      }
      _v1$6.subVectors(point, this.center);
      const lengthSq2 = _v1$6.lengthSq();
      if (lengthSq2 > this.radius * this.radius) {
        const length2 = Math.sqrt(lengthSq2);
        const delta = (length2 - this.radius) * 0.5;
        this.center.addScaledVector(_v1$6, delta / length2);
        this.radius += delta;
      }
      return this;
    }
    union(sphere) {
      if (sphere.isEmpty()) {
        return this;
      }
      if (this.isEmpty()) {
        this.copy(sphere);
        return this;
      }
      if (this.center.equals(sphere.center) === true) {
        this.radius = Math.max(this.radius, sphere.radius);
      } else {
        _v2$3.subVectors(sphere.center, this.center).setLength(sphere.radius);
        this.expandByPoint(_v1$6.copy(sphere.center).add(_v2$3));
        this.expandByPoint(_v1$6.copy(sphere.center).sub(_v2$3));
      }
      return this;
    }
    equals(sphere) {
      return sphere.center.equals(this.center) && sphere.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const _vector$a = /* @__PURE__ */ new Vector3();
  const _segCenter = /* @__PURE__ */ new Vector3();
  const _segDir = /* @__PURE__ */ new Vector3();
  const _diff = /* @__PURE__ */ new Vector3();
  const _edge1 = /* @__PURE__ */ new Vector3();
  const _edge2 = /* @__PURE__ */ new Vector3();
  const _normal$2 = /* @__PURE__ */ new Vector3();
  class Ray {
    constructor(origin = new Vector3(), direction2 = new Vector3(0, 0, -1)) {
      this.origin = origin;
      this.direction = direction2;
    }
    set(origin, direction2) {
      this.origin.copy(origin);
      this.direction.copy(direction2);
      return this;
    }
    copy(ray) {
      this.origin.copy(ray.origin);
      this.direction.copy(ray.direction);
      return this;
    }
    at(t2, target) {
      return target.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(v) {
      this.direction.copy(v).sub(this.origin).normalize();
      return this;
    }
    recast(t2) {
      this.origin.copy(this.at(t2, _vector$a));
      return this;
    }
    closestPointToPoint(point, target) {
      target.subVectors(point, this.origin);
      const directionDistance = target.dot(this.direction);
      if (directionDistance < 0) {
        return target.copy(this.origin);
      }
      return target.copy(this.origin).addScaledVector(this.direction, directionDistance);
    }
    distanceToPoint(point) {
      return Math.sqrt(this.distanceSqToPoint(point));
    }
    distanceSqToPoint(point) {
      const directionDistance = _vector$a.subVectors(point, this.origin).dot(this.direction);
      if (directionDistance < 0) {
        return this.origin.distanceToSquared(point);
      }
      _vector$a.copy(this.origin).addScaledVector(this.direction, directionDistance);
      return _vector$a.distanceToSquared(point);
    }
    distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
      _segCenter.copy(v0).add(v1).multiplyScalar(0.5);
      _segDir.copy(v1).sub(v0).normalize();
      _diff.copy(this.origin).sub(_segCenter);
      const segExtent = v0.distanceTo(v1) * 0.5;
      const a01 = -this.direction.dot(_segDir);
      const b0 = _diff.dot(this.direction);
      const b1 = -_diff.dot(_segDir);
      const c = _diff.lengthSq();
      const det = Math.abs(1 - a01 * a01);
      let s0, s1, sqrDist, extDet;
      if (det > 0) {
        s0 = a01 * b1 - b0;
        s1 = a01 * b0 - b1;
        extDet = segExtent * det;
        if (s0 >= 0) {
          if (s1 >= -extDet) {
            if (s1 <= extDet) {
              const invDet = 1 / det;
              s0 *= invDet;
              s1 *= invDet;
              sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
            } else {
              s1 = segExtent;
              s0 = Math.max(0, -(a01 * s1 + b0));
              sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
            }
          } else {
            s1 = -segExtent;
            s0 = Math.max(0, -(a01 * s1 + b0));
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        } else {
          if (s1 <= -extDet) {
            s0 = Math.max(0, -(-a01 * segExtent + b0));
            s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          } else if (s1 <= extDet) {
            s0 = 0;
            s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = s1 * (s1 + 2 * b1) + c;
          } else {
            s0 = Math.max(0, -(a01 * segExtent + b0));
            s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        }
      } else {
        s1 = a01 > 0 ? -segExtent : segExtent;
        s0 = Math.max(0, -(a01 * s1 + b0));
        sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
      }
      if (optionalPointOnRay) {
        optionalPointOnRay.copy(this.origin).addScaledVector(this.direction, s0);
      }
      if (optionalPointOnSegment) {
        optionalPointOnSegment.copy(_segCenter).addScaledVector(_segDir, s1);
      }
      return sqrDist;
    }
    intersectSphere(sphere, target) {
      _vector$a.subVectors(sphere.center, this.origin);
      const tca = _vector$a.dot(this.direction);
      const d2 = _vector$a.dot(_vector$a) - tca * tca;
      const radius2 = sphere.radius * sphere.radius;
      if (d2 > radius2) return null;
      const thc = Math.sqrt(radius2 - d2);
      const t0 = tca - thc;
      const t1 = tca + thc;
      if (t1 < 0) return null;
      if (t0 < 0) return this.at(t1, target);
      return this.at(t0, target);
    }
    intersectsSphere(sphere) {
      return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
    }
    distanceToPlane(plane) {
      const denominator = plane.normal.dot(this.direction);
      if (denominator === 0) {
        if (plane.distanceToPoint(this.origin) === 0) {
          return 0;
        }
        return null;
      }
      const t2 = -(this.origin.dot(plane.normal) + plane.constant) / denominator;
      return t2 >= 0 ? t2 : null;
    }
    intersectPlane(plane, target) {
      const t2 = this.distanceToPlane(plane);
      if (t2 === null) {
        return null;
      }
      return this.at(t2, target);
    }
    intersectsPlane(plane) {
      const distToPoint = plane.distanceToPoint(this.origin);
      if (distToPoint === 0) {
        return true;
      }
      const denominator = plane.normal.dot(this.direction);
      if (denominator * distToPoint < 0) {
        return true;
      }
      return false;
    }
    intersectBox(box, target) {
      let tmin, tmax, tymin, tymax, tzmin, tzmax;
      const invdirx = 1 / this.direction.x, invdiry = 1 / this.direction.y, invdirz = 1 / this.direction.z;
      const origin = this.origin;
      if (invdirx >= 0) {
        tmin = (box.min.x - origin.x) * invdirx;
        tmax = (box.max.x - origin.x) * invdirx;
      } else {
        tmin = (box.max.x - origin.x) * invdirx;
        tmax = (box.min.x - origin.x) * invdirx;
      }
      if (invdiry >= 0) {
        tymin = (box.min.y - origin.y) * invdiry;
        tymax = (box.max.y - origin.y) * invdiry;
      } else {
        tymin = (box.max.y - origin.y) * invdiry;
        tymax = (box.min.y - origin.y) * invdiry;
      }
      if (tmin > tymax || tymin > tmax) return null;
      if (tymin > tmin || isNaN(tmin)) tmin = tymin;
      if (tymax < tmax || isNaN(tmax)) tmax = tymax;
      if (invdirz >= 0) {
        tzmin = (box.min.z - origin.z) * invdirz;
        tzmax = (box.max.z - origin.z) * invdirz;
      } else {
        tzmin = (box.max.z - origin.z) * invdirz;
        tzmax = (box.min.z - origin.z) * invdirz;
      }
      if (tmin > tzmax || tzmin > tmax) return null;
      if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
      if (tzmax < tmax || tmax !== tmax) tmax = tzmax;
      if (tmax < 0) return null;
      return this.at(tmin >= 0 ? tmin : tmax, target);
    }
    intersectsBox(box) {
      return this.intersectBox(box, _vector$a) !== null;
    }
    intersectTriangle(a, b, c, backfaceCulling, target) {
      _edge1.subVectors(b, a);
      _edge2.subVectors(c, a);
      _normal$2.crossVectors(_edge1, _edge2);
      let DdN = this.direction.dot(_normal$2);
      let sign2;
      if (DdN > 0) {
        if (backfaceCulling) return null;
        sign2 = 1;
      } else if (DdN < 0) {
        sign2 = -1;
        DdN = -DdN;
      } else {
        return null;
      }
      _diff.subVectors(this.origin, a);
      const DdQxE2 = sign2 * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
      if (DdQxE2 < 0) {
        return null;
      }
      const DdE1xQ = sign2 * this.direction.dot(_edge1.cross(_diff));
      if (DdE1xQ < 0) {
        return null;
      }
      if (DdQxE2 + DdE1xQ > DdN) {
        return null;
      }
      const QdN = -sign2 * _diff.dot(_normal$2);
      if (QdN < 0) {
        return null;
      }
      return this.at(QdN / DdN, target);
    }
    applyMatrix4(matrix4) {
      this.origin.applyMatrix4(matrix4);
      this.direction.transformDirection(matrix4);
      return this;
    }
    equals(ray) {
      return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Matrix4 {
    constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
      Matrix4.prototype.isMatrix4 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ];
      if (n11 !== void 0) {
        this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
      }
    }
    set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
      const te2 = this.elements;
      te2[0] = n11;
      te2[4] = n12;
      te2[8] = n13;
      te2[12] = n14;
      te2[1] = n21;
      te2[5] = n22;
      te2[9] = n23;
      te2[13] = n24;
      te2[2] = n31;
      te2[6] = n32;
      te2[10] = n33;
      te2[14] = n34;
      te2[3] = n41;
      te2[7] = n42;
      te2[11] = n43;
      te2[15] = n44;
      return this;
    }
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    clone() {
      return new Matrix4().fromArray(this.elements);
    }
    copy(m) {
      const te2 = this.elements;
      const me = m.elements;
      te2[0] = me[0];
      te2[1] = me[1];
      te2[2] = me[2];
      te2[3] = me[3];
      te2[4] = me[4];
      te2[5] = me[5];
      te2[6] = me[6];
      te2[7] = me[7];
      te2[8] = me[8];
      te2[9] = me[9];
      te2[10] = me[10];
      te2[11] = me[11];
      te2[12] = me[12];
      te2[13] = me[13];
      te2[14] = me[14];
      te2[15] = me[15];
      return this;
    }
    copyPosition(m) {
      const te2 = this.elements, me = m.elements;
      te2[12] = me[12];
      te2[13] = me[13];
      te2[14] = me[14];
      return this;
    }
    setFromMatrix3(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[3],
        me[6],
        0,
        me[1],
        me[4],
        me[7],
        0,
        me[2],
        me[5],
        me[8],
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrixColumn(this, 0);
      yAxis.setFromMatrixColumn(this, 1);
      zAxis.setFromMatrixColumn(this, 2);
      return this;
    }
    makeBasis(xAxis, yAxis, zAxis) {
      this.set(
        xAxis.x,
        yAxis.x,
        zAxis.x,
        0,
        xAxis.y,
        yAxis.y,
        zAxis.y,
        0,
        xAxis.z,
        yAxis.z,
        zAxis.z,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    extractRotation(m) {
      const te2 = this.elements;
      const me = m.elements;
      const scaleX = 1 / _v1$5.setFromMatrixColumn(m, 0).length();
      const scaleY = 1 / _v1$5.setFromMatrixColumn(m, 1).length();
      const scaleZ = 1 / _v1$5.setFromMatrixColumn(m, 2).length();
      te2[0] = me[0] * scaleX;
      te2[1] = me[1] * scaleX;
      te2[2] = me[2] * scaleX;
      te2[3] = 0;
      te2[4] = me[4] * scaleY;
      te2[5] = me[5] * scaleY;
      te2[6] = me[6] * scaleY;
      te2[7] = 0;
      te2[8] = me[8] * scaleZ;
      te2[9] = me[9] * scaleZ;
      te2[10] = me[10] * scaleZ;
      te2[11] = 0;
      te2[12] = 0;
      te2[13] = 0;
      te2[14] = 0;
      te2[15] = 1;
      return this;
    }
    makeRotationFromEuler(euler) {
      const te2 = this.elements;
      const x = euler.x, y2 = euler.y, z = euler.z;
      const a = Math.cos(x), b = Math.sin(x);
      const c = Math.cos(y2), d = Math.sin(y2);
      const e = Math.cos(z), f = Math.sin(z);
      if (euler.order === "XYZ") {
        const ae2 = a * e, af = a * f, be = b * e, bf = b * f;
        te2[0] = c * e;
        te2[4] = -c * f;
        te2[8] = d;
        te2[1] = af + be * d;
        te2[5] = ae2 - bf * d;
        te2[9] = -b * c;
        te2[2] = bf - ae2 * d;
        te2[6] = be + af * d;
        te2[10] = a * c;
      } else if (euler.order === "YXZ") {
        const ce = c * e, cf = c * f, de2 = d * e, df = d * f;
        te2[0] = ce + df * b;
        te2[4] = de2 * b - cf;
        te2[8] = a * d;
        te2[1] = a * f;
        te2[5] = a * e;
        te2[9] = -b;
        te2[2] = cf * b - de2;
        te2[6] = df + ce * b;
        te2[10] = a * c;
      } else if (euler.order === "ZXY") {
        const ce = c * e, cf = c * f, de2 = d * e, df = d * f;
        te2[0] = ce - df * b;
        te2[4] = -a * f;
        te2[8] = de2 + cf * b;
        te2[1] = cf + de2 * b;
        te2[5] = a * e;
        te2[9] = df - ce * b;
        te2[2] = -a * d;
        te2[6] = b;
        te2[10] = a * c;
      } else if (euler.order === "ZYX") {
        const ae2 = a * e, af = a * f, be = b * e, bf = b * f;
        te2[0] = c * e;
        te2[4] = be * d - af;
        te2[8] = ae2 * d + bf;
        te2[1] = c * f;
        te2[5] = bf * d + ae2;
        te2[9] = af * d - be;
        te2[2] = -d;
        te2[6] = b * c;
        te2[10] = a * c;
      } else if (euler.order === "YZX") {
        const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
        te2[0] = c * e;
        te2[4] = bd - ac * f;
        te2[8] = bc * f + ad;
        te2[1] = f;
        te2[5] = a * e;
        te2[9] = -b * e;
        te2[2] = -d * e;
        te2[6] = ad * f + bc;
        te2[10] = ac - bd * f;
      } else if (euler.order === "XZY") {
        const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
        te2[0] = c * e;
        te2[4] = -f;
        te2[8] = d * e;
        te2[1] = ac * f + bd;
        te2[5] = a * e;
        te2[9] = ad * f - bc;
        te2[2] = bc * f - ad;
        te2[6] = b * e;
        te2[10] = bd * f + ac;
      }
      te2[3] = 0;
      te2[7] = 0;
      te2[11] = 0;
      te2[12] = 0;
      te2[13] = 0;
      te2[14] = 0;
      te2[15] = 1;
      return this;
    }
    makeRotationFromQuaternion(q) {
      return this.compose(_zero, q, _one);
    }
    lookAt(eye, target, up) {
      const te2 = this.elements;
      _z.subVectors(eye, target);
      if (_z.lengthSq() === 0) {
        _z.z = 1;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
      if (_x.lengthSq() === 0) {
        if (Math.abs(up.z) === 1) {
          _z.x += 1e-4;
        } else {
          _z.z += 1e-4;
        }
        _z.normalize();
        _x.crossVectors(up, _z);
      }
      _x.normalize();
      _y.crossVectors(_z, _x);
      te2[0] = _x.x;
      te2[4] = _y.x;
      te2[8] = _z.x;
      te2[1] = _x.y;
      te2[5] = _y.y;
      te2[9] = _z.y;
      te2[2] = _x.z;
      te2[6] = _y.z;
      te2[10] = _z.z;
      return this;
    }
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    multiplyMatrices(a, b) {
      const ae2 = a.elements;
      const be = b.elements;
      const te2 = this.elements;
      const a11 = ae2[0], a12 = ae2[4], a13 = ae2[8], a14 = ae2[12];
      const a21 = ae2[1], a22 = ae2[5], a23 = ae2[9], a24 = ae2[13];
      const a31 = ae2[2], a32 = ae2[6], a33 = ae2[10], a34 = ae2[14];
      const a41 = ae2[3], a42 = ae2[7], a43 = ae2[11], a44 = ae2[15];
      const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
      const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
      const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
      const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
      te2[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
      te2[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
      te2[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
      te2[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
      te2[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
      te2[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
      te2[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
      te2[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
      te2[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
      te2[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
      te2[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
      te2[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
      te2[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
      te2[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
      te2[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
      te2[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
      return this;
    }
    multiplyScalar(s) {
      const te2 = this.elements;
      te2[0] *= s;
      te2[4] *= s;
      te2[8] *= s;
      te2[12] *= s;
      te2[1] *= s;
      te2[5] *= s;
      te2[9] *= s;
      te2[13] *= s;
      te2[2] *= s;
      te2[6] *= s;
      te2[10] *= s;
      te2[14] *= s;
      te2[3] *= s;
      te2[7] *= s;
      te2[11] *= s;
      te2[15] *= s;
      return this;
    }
    determinant() {
      const te2 = this.elements;
      const n11 = te2[0], n12 = te2[4], n13 = te2[8], n14 = te2[12];
      const n21 = te2[1], n22 = te2[5], n23 = te2[9], n24 = te2[13];
      const n31 = te2[2], n32 = te2[6], n33 = te2[10], n34 = te2[14];
      const n41 = te2[3], n42 = te2[7], n43 = te2[11], n44 = te2[15];
      return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
    }
    transpose() {
      const te2 = this.elements;
      let tmp;
      tmp = te2[1];
      te2[1] = te2[4];
      te2[4] = tmp;
      tmp = te2[2];
      te2[2] = te2[8];
      te2[8] = tmp;
      tmp = te2[6];
      te2[6] = te2[9];
      te2[9] = tmp;
      tmp = te2[3];
      te2[3] = te2[12];
      te2[12] = tmp;
      tmp = te2[7];
      te2[7] = te2[13];
      te2[13] = tmp;
      tmp = te2[11];
      te2[11] = te2[14];
      te2[14] = tmp;
      return this;
    }
    setPosition(x, y2, z) {
      const te2 = this.elements;
      if (x.isVector3) {
        te2[12] = x.x;
        te2[13] = x.y;
        te2[14] = x.z;
      } else {
        te2[12] = x;
        te2[13] = y2;
        te2[14] = z;
      }
      return this;
    }
    invert() {
      const te2 = this.elements, n11 = te2[0], n21 = te2[1], n31 = te2[2], n41 = te2[3], n12 = te2[4], n22 = te2[5], n32 = te2[6], n42 = te2[7], n13 = te2[8], n23 = te2[9], n33 = te2[10], n43 = te2[11], n14 = te2[12], n24 = te2[13], n34 = te2[14], n44 = te2[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
      const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
      if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te2[0] = t11 * detInv;
      te2[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
      te2[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
      te2[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
      te2[4] = t12 * detInv;
      te2[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
      te2[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
      te2[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
      te2[8] = t13 * detInv;
      te2[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
      te2[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
      te2[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
      te2[12] = t14 * detInv;
      te2[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
      te2[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
      te2[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
      return this;
    }
    scale(v) {
      const te2 = this.elements;
      const x = v.x, y2 = v.y, z = v.z;
      te2[0] *= x;
      te2[4] *= y2;
      te2[8] *= z;
      te2[1] *= x;
      te2[5] *= y2;
      te2[9] *= z;
      te2[2] *= x;
      te2[6] *= y2;
      te2[10] *= z;
      te2[3] *= x;
      te2[7] *= y2;
      te2[11] *= z;
      return this;
    }
    getMaxScaleOnAxis() {
      const te2 = this.elements;
      const scaleXSq = te2[0] * te2[0] + te2[1] * te2[1] + te2[2] * te2[2];
      const scaleYSq = te2[4] * te2[4] + te2[5] * te2[5] + te2[6] * te2[6];
      const scaleZSq = te2[8] * te2[8] + te2[9] * te2[9] + te2[10] * te2[10];
      return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
    }
    makeTranslation(x, y2, z) {
      if (x.isVector3) {
        this.set(
          1,
          0,
          0,
          x.x,
          0,
          1,
          0,
          x.y,
          0,
          0,
          1,
          x.z,
          0,
          0,
          0,
          1
        );
      } else {
        this.set(
          1,
          0,
          0,
          x,
          0,
          1,
          0,
          y2,
          0,
          0,
          1,
          z,
          0,
          0,
          0,
          1
        );
      }
      return this;
    }
    makeRotationX(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        1,
        0,
        0,
        0,
        0,
        c,
        -s,
        0,
        0,
        s,
        c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationY(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        c,
        0,
        s,
        0,
        0,
        1,
        0,
        0,
        -s,
        0,
        c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationZ(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        0,
        s,
        c,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationAxis(axis, angle) {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const t2 = 1 - c;
      const x = axis.x, y2 = axis.y, z = axis.z;
      const tx = t2 * x, ty = t2 * y2;
      this.set(
        tx * x + c,
        tx * y2 - s * z,
        tx * z + s * y2,
        0,
        tx * y2 + s * z,
        ty * y2 + c,
        ty * z - s * x,
        0,
        tx * z - s * y2,
        ty * z + s * x,
        t2 * z * z + c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeScale(x, y2, z) {
      this.set(
        x,
        0,
        0,
        0,
        0,
        y2,
        0,
        0,
        0,
        0,
        z,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeShear(xy, xz, yx, yz, zx, zy) {
      this.set(
        1,
        yx,
        zx,
        0,
        xy,
        1,
        zy,
        0,
        xz,
        yz,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    compose(position, quaternion, scale) {
      const te2 = this.elements;
      const x = quaternion._x, y2 = quaternion._y, z = quaternion._z, w = quaternion._w;
      const x2 = x + x, y22 = y2 + y2, z2 = z + z;
      const xx = x * x2, xy = x * y22, xz = x * z2;
      const yy = y2 * y22, yz = y2 * z2, zz = z * z2;
      const wx = w * x2, wy = w * y22, wz = w * z2;
      const sx = scale.x, sy = scale.y, sz = scale.z;
      te2[0] = (1 - (yy + zz)) * sx;
      te2[1] = (xy + wz) * sx;
      te2[2] = (xz - wy) * sx;
      te2[3] = 0;
      te2[4] = (xy - wz) * sy;
      te2[5] = (1 - (xx + zz)) * sy;
      te2[6] = (yz + wx) * sy;
      te2[7] = 0;
      te2[8] = (xz + wy) * sz;
      te2[9] = (yz - wx) * sz;
      te2[10] = (1 - (xx + yy)) * sz;
      te2[11] = 0;
      te2[12] = position.x;
      te2[13] = position.y;
      te2[14] = position.z;
      te2[15] = 1;
      return this;
    }
    decompose(position, quaternion, scale) {
      const te2 = this.elements;
      let sx = _v1$5.set(te2[0], te2[1], te2[2]).length();
      const sy = _v1$5.set(te2[4], te2[5], te2[6]).length();
      const sz = _v1$5.set(te2[8], te2[9], te2[10]).length();
      const det = this.determinant();
      if (det < 0) sx = -sx;
      position.x = te2[12];
      position.y = te2[13];
      position.z = te2[14];
      _m1$4.copy(this);
      const invSX = 1 / sx;
      const invSY = 1 / sy;
      const invSZ = 1 / sz;
      _m1$4.elements[0] *= invSX;
      _m1$4.elements[1] *= invSX;
      _m1$4.elements[2] *= invSX;
      _m1$4.elements[4] *= invSY;
      _m1$4.elements[5] *= invSY;
      _m1$4.elements[6] *= invSY;
      _m1$4.elements[8] *= invSZ;
      _m1$4.elements[9] *= invSZ;
      _m1$4.elements[10] *= invSZ;
      quaternion.setFromRotationMatrix(_m1$4);
      scale.x = sx;
      scale.y = sy;
      scale.z = sz;
      return this;
    }
    makePerspective(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem) {
      const te2 = this.elements;
      const x = 2 * near / (right - left);
      const y2 = 2 * near / (top - bottom);
      const a = (right + left) / (right - left);
      const b = (top + bottom) / (top - bottom);
      let c, d;
      if (coordinateSystem === WebGLCoordinateSystem) {
        c = -(far + near) / (far - near);
        d = -2 * far * near / (far - near);
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        c = -far / (far - near);
        d = -far * near / (far - near);
      } else {
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + coordinateSystem);
      }
      te2[0] = x;
      te2[4] = 0;
      te2[8] = a;
      te2[12] = 0;
      te2[1] = 0;
      te2[5] = y2;
      te2[9] = b;
      te2[13] = 0;
      te2[2] = 0;
      te2[6] = 0;
      te2[10] = c;
      te2[14] = d;
      te2[3] = 0;
      te2[7] = 0;
      te2[11] = -1;
      te2[15] = 0;
      return this;
    }
    makeOrthographic(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem) {
      const te2 = this.elements;
      const w = 1 / (right - left);
      const h = 1 / (top - bottom);
      const p = 1 / (far - near);
      const x = (right + left) * w;
      const y2 = (top + bottom) * h;
      let z, zInv;
      if (coordinateSystem === WebGLCoordinateSystem) {
        z = (far + near) * p;
        zInv = -2 * p;
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        z = near * p;
        zInv = -1 * p;
      } else {
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + coordinateSystem);
      }
      te2[0] = 2 * w;
      te2[4] = 0;
      te2[8] = 0;
      te2[12] = -x;
      te2[1] = 0;
      te2[5] = 2 * h;
      te2[9] = 0;
      te2[13] = -y2;
      te2[2] = 0;
      te2[6] = 0;
      te2[10] = zInv;
      te2[14] = -z;
      te2[3] = 0;
      te2[7] = 0;
      te2[11] = 0;
      te2[15] = 1;
      return this;
    }
    equals(matrix) {
      const te2 = this.elements;
      const me = matrix.elements;
      for (let i = 0; i < 16; i++) {
        if (te2[i] !== me[i]) return false;
      }
      return true;
    }
    fromArray(array, offset = 0) {
      for (let i = 0; i < 16; i++) {
        this.elements[i] = array[i + offset];
      }
      return this;
    }
    toArray(array = [], offset = 0) {
      const te2 = this.elements;
      array[offset] = te2[0];
      array[offset + 1] = te2[1];
      array[offset + 2] = te2[2];
      array[offset + 3] = te2[3];
      array[offset + 4] = te2[4];
      array[offset + 5] = te2[5];
      array[offset + 6] = te2[6];
      array[offset + 7] = te2[7];
      array[offset + 8] = te2[8];
      array[offset + 9] = te2[9];
      array[offset + 10] = te2[10];
      array[offset + 11] = te2[11];
      array[offset + 12] = te2[12];
      array[offset + 13] = te2[13];
      array[offset + 14] = te2[14];
      array[offset + 15] = te2[15];
      return array;
    }
  }
  const _v1$5 = /* @__PURE__ */ new Vector3();
  const _m1$4 = /* @__PURE__ */ new Matrix4();
  const _zero = /* @__PURE__ */ new Vector3(0, 0, 0);
  const _one = /* @__PURE__ */ new Vector3(1, 1, 1);
  const _x = /* @__PURE__ */ new Vector3();
  const _y = /* @__PURE__ */ new Vector3();
  const _z = /* @__PURE__ */ new Vector3();
  const _matrix$2 = /* @__PURE__ */ new Matrix4();
  const _quaternion$3 = /* @__PURE__ */ new Quaternion();
  class Euler {
    constructor(x = 0, y2 = 0, z = 0, order = Euler.DEFAULT_ORDER) {
      this.isEuler = true;
      this._x = x;
      this._y = y2;
      this._z = z;
      this._order = order;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(value) {
      this._order = value;
      this._onChangeCallback();
    }
    set(x, y2, z, order = this._order) {
      this._x = x;
      this._y = y2;
      this._z = z;
      this._order = order;
      this._onChangeCallback();
      return this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(euler) {
      this._x = euler._x;
      this._y = euler._y;
      this._z = euler._z;
      this._order = euler._order;
      this._onChangeCallback();
      return this;
    }
    setFromRotationMatrix(m, order = this._order, update = true) {
      const te2 = m.elements;
      const m11 = te2[0], m12 = te2[4], m13 = te2[8];
      const m21 = te2[1], m22 = te2[5], m23 = te2[9];
      const m31 = te2[2], m32 = te2[6], m33 = te2[10];
      switch (order) {
        case "XYZ":
          this._y = Math.asin(clamp$1(m13, -1, 1));
          if (Math.abs(m13) < 0.9999999) {
            this._x = Math.atan2(-m23, m33);
            this._z = Math.atan2(-m12, m11);
          } else {
            this._x = Math.atan2(m32, m22);
            this._z = 0;
          }
          break;
        case "YXZ":
          this._x = Math.asin(-clamp$1(m23, -1, 1));
          if (Math.abs(m23) < 0.9999999) {
            this._y = Math.atan2(m13, m33);
            this._z = Math.atan2(m21, m22);
          } else {
            this._y = Math.atan2(-m31, m11);
            this._z = 0;
          }
          break;
        case "ZXY":
          this._x = Math.asin(clamp$1(m32, -1, 1));
          if (Math.abs(m32) < 0.9999999) {
            this._y = Math.atan2(-m31, m33);
            this._z = Math.atan2(-m12, m22);
          } else {
            this._y = 0;
            this._z = Math.atan2(m21, m11);
          }
          break;
        case "ZYX":
          this._y = Math.asin(-clamp$1(m31, -1, 1));
          if (Math.abs(m31) < 0.9999999) {
            this._x = Math.atan2(m32, m33);
            this._z = Math.atan2(m21, m11);
          } else {
            this._x = 0;
            this._z = Math.atan2(-m12, m22);
          }
          break;
        case "YZX":
          this._z = Math.asin(clamp$1(m21, -1, 1));
          if (Math.abs(m21) < 0.9999999) {
            this._x = Math.atan2(-m23, m22);
            this._y = Math.atan2(-m31, m11);
          } else {
            this._x = 0;
            this._y = Math.atan2(m13, m33);
          }
          break;
        case "XZY":
          this._z = Math.asin(-clamp$1(m12, -1, 1));
          if (Math.abs(m12) < 0.9999999) {
            this._x = Math.atan2(m32, m22);
            this._y = Math.atan2(m13, m11);
          } else {
            this._x = Math.atan2(-m23, m33);
            this._y = 0;
          }
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
      }
      this._order = order;
      if (update === true) this._onChangeCallback();
      return this;
    }
    setFromQuaternion(q, order, update) {
      _matrix$2.makeRotationFromQuaternion(q);
      return this.setFromRotationMatrix(_matrix$2, order, update);
    }
    setFromVector3(v, order = this._order) {
      return this.set(v.x, v.y, v.z, order);
    }
    reorder(newOrder) {
      _quaternion$3.setFromEuler(this);
      return this.setFromQuaternion(_quaternion$3, newOrder);
    }
    equals(euler) {
      return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
    }
    fromArray(array) {
      this._x = array[0];
      this._y = array[1];
      this._z = array[2];
      if (array[3] !== void 0) this._order = array[3];
      this._onChangeCallback();
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._order;
      return array;
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._order;
    }
  }
  Euler.DEFAULT_ORDER = "XYZ";
  class Layers {
    constructor() {
      this.mask = 1 | 0;
    }
    set(channel) {
      this.mask = (1 << channel | 0) >>> 0;
    }
    enable(channel) {
      this.mask |= 1 << channel | 0;
    }
    enableAll() {
      this.mask = 4294967295 | 0;
    }
    toggle(channel) {
      this.mask ^= 1 << channel | 0;
    }
    disable(channel) {
      this.mask &= ~(1 << channel | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(layers) {
      return (this.mask & layers.mask) !== 0;
    }
    isEnabled(channel) {
      return (this.mask & (1 << channel | 0)) !== 0;
    }
  }
  let _object3DId = 0;
  const _v1$4 = /* @__PURE__ */ new Vector3();
  const _q1 = /* @__PURE__ */ new Quaternion();
  const _m1$3 = /* @__PURE__ */ new Matrix4();
  const _target$1 = /* @__PURE__ */ new Vector3();
  const _position$3 = /* @__PURE__ */ new Vector3();
  const _scale$2 = /* @__PURE__ */ new Vector3();
  const _quaternion$2 = /* @__PURE__ */ new Quaternion();
  const _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0);
  const _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0);
  const _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1);
  const _addedEvent = { type: "added" };
  const _removedEvent = { type: "removed" };
  const _childaddedEvent = { type: "childadded", child: null };
  const _childremovedEvent = { type: "childremoved", child: null };
  class Object3D extends EventDispatcher {
    constructor() {
      super();
      this.isObject3D = true;
      Object.defineProperty(this, "id", { value: _object3DId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.type = "Object3D";
      this.parent = null;
      this.children = [];
      this.up = Object3D.DEFAULT_UP.clone();
      const position = new Vector3();
      const rotation = new Euler();
      const quaternion = new Quaternion();
      const scale = new Vector3(1, 1, 1);
      function onRotationChange() {
        quaternion.setFromEuler(rotation, false);
      }
      function onQuaternionChange() {
        rotation.setFromQuaternion(quaternion, void 0, false);
      }
      rotation._onChange(onRotationChange);
      quaternion._onChange(onQuaternionChange);
      Object.defineProperties(this, {
        position: {
          configurable: true,
          enumerable: true,
          value: position
        },
        rotation: {
          configurable: true,
          enumerable: true,
          value: rotation
        },
        quaternion: {
          configurable: true,
          enumerable: true,
          value: quaternion
        },
        scale: {
          configurable: true,
          enumerable: true,
          value: scale
        },
        modelViewMatrix: {
          value: new Matrix4()
        },
        normalMatrix: {
          value: new Matrix3()
        }
      });
      this.matrix = new Matrix4();
      this.matrixWorld = new Matrix4();
      this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
      this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
      this.matrixWorldNeedsUpdate = false;
      this.layers = new Layers();
      this.visible = true;
      this.castShadow = false;
      this.receiveShadow = false;
      this.frustumCulled = true;
      this.renderOrder = 0;
      this.animations = [];
      this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(matrix) {
      if (this.matrixAutoUpdate) this.updateMatrix();
      this.matrix.premultiply(matrix);
      this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(q) {
      this.quaternion.premultiply(q);
      return this;
    }
    setRotationFromAxisAngle(axis, angle) {
      this.quaternion.setFromAxisAngle(axis, angle);
    }
    setRotationFromEuler(euler) {
      this.quaternion.setFromEuler(euler, true);
    }
    setRotationFromMatrix(m) {
      this.quaternion.setFromRotationMatrix(m);
    }
    setRotationFromQuaternion(q) {
      this.quaternion.copy(q);
    }
    rotateOnAxis(axis, angle) {
      _q1.setFromAxisAngle(axis, angle);
      this.quaternion.multiply(_q1);
      return this;
    }
    rotateOnWorldAxis(axis, angle) {
      _q1.setFromAxisAngle(axis, angle);
      this.quaternion.premultiply(_q1);
      return this;
    }
    rotateX(angle) {
      return this.rotateOnAxis(_xAxis, angle);
    }
    rotateY(angle) {
      return this.rotateOnAxis(_yAxis, angle);
    }
    rotateZ(angle) {
      return this.rotateOnAxis(_zAxis, angle);
    }
    translateOnAxis(axis, distance2) {
      _v1$4.copy(axis).applyQuaternion(this.quaternion);
      this.position.add(_v1$4.multiplyScalar(distance2));
      return this;
    }
    translateX(distance2) {
      return this.translateOnAxis(_xAxis, distance2);
    }
    translateY(distance2) {
      return this.translateOnAxis(_yAxis, distance2);
    }
    translateZ(distance2) {
      return this.translateOnAxis(_zAxis, distance2);
    }
    localToWorld(vector) {
      this.updateWorldMatrix(true, false);
      return vector.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(vector) {
      this.updateWorldMatrix(true, false);
      return vector.applyMatrix4(_m1$3.copy(this.matrixWorld).invert());
    }
    lookAt(x, y2, z) {
      if (x.isVector3) {
        _target$1.copy(x);
      } else {
        _target$1.set(x, y2, z);
      }
      const parent = this.parent;
      this.updateWorldMatrix(true, false);
      _position$3.setFromMatrixPosition(this.matrixWorld);
      if (this.isCamera || this.isLight) {
        _m1$3.lookAt(_position$3, _target$1, this.up);
      } else {
        _m1$3.lookAt(_target$1, _position$3, this.up);
      }
      this.quaternion.setFromRotationMatrix(_m1$3);
      if (parent) {
        _m1$3.extractRotation(parent.matrixWorld);
        _q1.setFromRotationMatrix(_m1$3);
        this.quaternion.premultiply(_q1.invert());
      }
    }
    add(object) {
      if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
          this.add(arguments[i]);
        }
        return this;
      }
      if (object === this) {
        console.error("THREE.Object3D.add: object can't be added as a child of itself.", object);
        return this;
      }
      if (object && object.isObject3D) {
        object.removeFromParent();
        object.parent = this;
        this.children.push(object);
        object.dispatchEvent(_addedEvent);
        _childaddedEvent.child = object;
        this.dispatchEvent(_childaddedEvent);
        _childaddedEvent.child = null;
      } else {
        console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", object);
      }
      return this;
    }
    remove(object) {
      if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
          this.remove(arguments[i]);
        }
        return this;
      }
      const index = this.children.indexOf(object);
      if (index !== -1) {
        object.parent = null;
        this.children.splice(index, 1);
        object.dispatchEvent(_removedEvent);
        _childremovedEvent.child = object;
        this.dispatchEvent(_childremovedEvent);
        _childremovedEvent.child = null;
      }
      return this;
    }
    removeFromParent() {
      const parent = this.parent;
      if (parent !== null) {
        parent.remove(this);
      }
      return this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(object) {
      this.updateWorldMatrix(true, false);
      _m1$3.copy(this.matrixWorld).invert();
      if (object.parent !== null) {
        object.parent.updateWorldMatrix(true, false);
        _m1$3.multiply(object.parent.matrixWorld);
      }
      object.applyMatrix4(_m1$3);
      object.removeFromParent();
      object.parent = this;
      this.children.push(object);
      object.updateWorldMatrix(false, true);
      object.dispatchEvent(_addedEvent);
      _childaddedEvent.child = object;
      this.dispatchEvent(_childaddedEvent);
      _childaddedEvent.child = null;
      return this;
    }
    getObjectById(id) {
      return this.getObjectByProperty("id", id);
    }
    getObjectByName(name) {
      return this.getObjectByProperty("name", name);
    }
    getObjectByProperty(name, value) {
      if (this[name] === value) return this;
      for (let i = 0, l = this.children.length; i < l; i++) {
        const child = this.children[i];
        const object = child.getObjectByProperty(name, value);
        if (object !== void 0) {
          return object;
        }
      }
      return void 0;
    }
    getObjectsByProperty(name, value, result = []) {
      if (this[name] === value) result.push(this);
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].getObjectsByProperty(name, value, result);
      }
      return result;
    }
    getWorldPosition(target) {
      this.updateWorldMatrix(true, false);
      return target.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(target) {
      this.updateWorldMatrix(true, false);
      this.matrixWorld.decompose(_position$3, target, _scale$2);
      return target;
    }
    getWorldScale(target) {
      this.updateWorldMatrix(true, false);
      this.matrixWorld.decompose(_position$3, _quaternion$2, target);
      return target;
    }
    getWorldDirection(target) {
      this.updateWorldMatrix(true, false);
      const e = this.matrixWorld.elements;
      return target.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {
    }
    traverse(callback) {
      callback(this);
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].traverse(callback);
      }
    }
    traverseVisible(callback) {
      if (this.visible === false) return;
      callback(this);
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].traverseVisible(callback);
      }
    }
    traverseAncestors(callback) {
      const parent = this.parent;
      if (parent !== null) {
        callback(parent);
        parent.traverseAncestors(callback);
      }
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(force) {
      if (this.matrixAutoUpdate) this.updateMatrix();
      if (this.matrixWorldNeedsUpdate || force) {
        if (this.matrixWorldAutoUpdate === true) {
          if (this.parent === null) {
            this.matrixWorld.copy(this.matrix);
          } else {
            this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
          }
        }
        this.matrixWorldNeedsUpdate = false;
        force = true;
      }
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        const child = children[i];
        child.updateMatrixWorld(force);
      }
    }
    updateWorldMatrix(updateParents, updateChildren) {
      const parent = this.parent;
      if (updateParents === true && parent !== null) {
        parent.updateWorldMatrix(true, false);
      }
      if (this.matrixAutoUpdate) this.updateMatrix();
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      if (updateChildren === true) {
        const children = this.children;
        for (let i = 0, l = children.length; i < l; i++) {
          const child = children[i];
          child.updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      const output = {};
      if (isRootObject) {
        meta = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {}
        };
        output.metadata = {
          version: 4.6,
          type: "Object",
          generator: "Object3D.toJSON"
        };
      }
      const object = {};
      object.uuid = this.uuid;
      object.type = this.type;
      if (this.name !== "") object.name = this.name;
      if (this.castShadow === true) object.castShadow = true;
      if (this.receiveShadow === true) object.receiveShadow = true;
      if (this.visible === false) object.visible = false;
      if (this.frustumCulled === false) object.frustumCulled = false;
      if (this.renderOrder !== 0) object.renderOrder = this.renderOrder;
      if (Object.keys(this.userData).length > 0) object.userData = this.userData;
      object.layers = this.layers.mask;
      object.matrix = this.matrix.toArray();
      object.up = this.up.toArray();
      if (this.matrixAutoUpdate === false) object.matrixAutoUpdate = false;
      if (this.isInstancedMesh) {
        object.type = "InstancedMesh";
        object.count = this.count;
        object.instanceMatrix = this.instanceMatrix.toJSON();
        if (this.instanceColor !== null) object.instanceColor = this.instanceColor.toJSON();
      }
      if (this.isBatchedMesh) {
        object.type = "BatchedMesh";
        object.perObjectFrustumCulled = this.perObjectFrustumCulled;
        object.sortObjects = this.sortObjects;
        object.drawRanges = this._drawRanges;
        object.reservedRanges = this._reservedRanges;
        object.visibility = this._visibility;
        object.active = this._active;
        object.bounds = this._bounds.map((bound) => ({
          boxInitialized: bound.boxInitialized,
          boxMin: bound.box.min.toArray(),
          boxMax: bound.box.max.toArray(),
          sphereInitialized: bound.sphereInitialized,
          sphereRadius: bound.sphere.radius,
          sphereCenter: bound.sphere.center.toArray()
        }));
        object.maxInstanceCount = this._maxInstanceCount;
        object.maxVertexCount = this._maxVertexCount;
        object.maxIndexCount = this._maxIndexCount;
        object.geometryInitialized = this._geometryInitialized;
        object.geometryCount = this._geometryCount;
        object.matricesTexture = this._matricesTexture.toJSON(meta);
        if (this._colorsTexture !== null) object.colorsTexture = this._colorsTexture.toJSON(meta);
        if (this.boundingSphere !== null) {
          object.boundingSphere = {
            center: object.boundingSphere.center.toArray(),
            radius: object.boundingSphere.radius
          };
        }
        if (this.boundingBox !== null) {
          object.boundingBox = {
            min: object.boundingBox.min.toArray(),
            max: object.boundingBox.max.toArray()
          };
        }
      }
      function serialize(library, element2) {
        if (library[element2.uuid] === void 0) {
          library[element2.uuid] = element2.toJSON(meta);
        }
        return element2.uuid;
      }
      if (this.isScene) {
        if (this.background) {
          if (this.background.isColor) {
            object.background = this.background.toJSON();
          } else if (this.background.isTexture) {
            object.background = this.background.toJSON(meta).uuid;
          }
        }
        if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
          object.environment = this.environment.toJSON(meta).uuid;
        }
      } else if (this.isMesh || this.isLine || this.isPoints) {
        object.geometry = serialize(meta.geometries, this.geometry);
        const parameters = this.geometry.parameters;
        if (parameters !== void 0 && parameters.shapes !== void 0) {
          const shapes = parameters.shapes;
          if (Array.isArray(shapes)) {
            for (let i = 0, l = shapes.length; i < l; i++) {
              const shape = shapes[i];
              serialize(meta.shapes, shape);
            }
          } else {
            serialize(meta.shapes, shapes);
          }
        }
      }
      if (this.isSkinnedMesh) {
        object.bindMode = this.bindMode;
        object.bindMatrix = this.bindMatrix.toArray();
        if (this.skeleton !== void 0) {
          serialize(meta.skeletons, this.skeleton);
          object.skeleton = this.skeleton.uuid;
        }
      }
      if (this.material !== void 0) {
        if (Array.isArray(this.material)) {
          const uuids = [];
          for (let i = 0, l = this.material.length; i < l; i++) {
            uuids.push(serialize(meta.materials, this.material[i]));
          }
          object.material = uuids;
        } else {
          object.material = serialize(meta.materials, this.material);
        }
      }
      if (this.children.length > 0) {
        object.children = [];
        for (let i = 0; i < this.children.length; i++) {
          object.children.push(this.children[i].toJSON(meta).object);
        }
      }
      if (this.animations.length > 0) {
        object.animations = [];
        for (let i = 0; i < this.animations.length; i++) {
          const animation = this.animations[i];
          object.animations.push(serialize(meta.animations, animation));
        }
      }
      if (isRootObject) {
        const geometries = extractFromCache(meta.geometries);
        const materials = extractFromCache(meta.materials);
        const textures = extractFromCache(meta.textures);
        const images = extractFromCache(meta.images);
        const shapes = extractFromCache(meta.shapes);
        const skeletons = extractFromCache(meta.skeletons);
        const animations = extractFromCache(meta.animations);
        const nodes = extractFromCache(meta.nodes);
        if (geometries.length > 0) output.geometries = geometries;
        if (materials.length > 0) output.materials = materials;
        if (textures.length > 0) output.textures = textures;
        if (images.length > 0) output.images = images;
        if (shapes.length > 0) output.shapes = shapes;
        if (skeletons.length > 0) output.skeletons = skeletons;
        if (animations.length > 0) output.animations = animations;
        if (nodes.length > 0) output.nodes = nodes;
      }
      output.object = object;
      return output;
      function extractFromCache(cache2) {
        const values = [];
        for (const key in cache2) {
          const data = cache2[key];
          delete data.metadata;
          values.push(data);
        }
        return values;
      }
    }
    clone(recursive) {
      return new this.constructor().copy(this, recursive);
    }
    copy(source, recursive = true) {
      this.name = source.name;
      this.up.copy(source.up);
      this.position.copy(source.position);
      this.rotation.order = source.rotation.order;
      this.quaternion.copy(source.quaternion);
      this.scale.copy(source.scale);
      this.matrix.copy(source.matrix);
      this.matrixWorld.copy(source.matrixWorld);
      this.matrixAutoUpdate = source.matrixAutoUpdate;
      this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
      this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
      this.layers.mask = source.layers.mask;
      this.visible = source.visible;
      this.castShadow = source.castShadow;
      this.receiveShadow = source.receiveShadow;
      this.frustumCulled = source.frustumCulled;
      this.renderOrder = source.renderOrder;
      this.animations = source.animations.slice();
      this.userData = JSON.parse(JSON.stringify(source.userData));
      if (recursive === true) {
        for (let i = 0; i < source.children.length; i++) {
          const child = source.children[i];
          this.add(child.clone());
        }
      }
      return this;
    }
  }
  Object3D.DEFAULT_UP = /* @__PURE__ */ new Vector3(0, 1, 0);
  Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
  Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  const _v0$2 = /* @__PURE__ */ new Vector3();
  const _v1$3 = /* @__PURE__ */ new Vector3();
  const _v2$2 = /* @__PURE__ */ new Vector3();
  const _v3$2 = /* @__PURE__ */ new Vector3();
  const _vab = /* @__PURE__ */ new Vector3();
  const _vac = /* @__PURE__ */ new Vector3();
  const _vbc = /* @__PURE__ */ new Vector3();
  const _vap = /* @__PURE__ */ new Vector3();
  const _vbp = /* @__PURE__ */ new Vector3();
  const _vcp = /* @__PURE__ */ new Vector3();
  const _v40 = /* @__PURE__ */ new Vector4();
  const _v41 = /* @__PURE__ */ new Vector4();
  const _v42 = /* @__PURE__ */ new Vector4();
  class Triangle {
    constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
    static getNormal(a, b, c, target) {
      target.subVectors(c, b);
      _v0$2.subVectors(a, b);
      target.cross(_v0$2);
      const targetLengthSq = target.lengthSq();
      if (targetLengthSq > 0) {
        return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
      }
      return target.set(0, 0, 0);
    }
    // static/instance method to calculate barycentric coordinates
    // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
    static getBarycoord(point, a, b, c, target) {
      _v0$2.subVectors(c, a);
      _v1$3.subVectors(b, a);
      _v2$2.subVectors(point, a);
      const dot00 = _v0$2.dot(_v0$2);
      const dot01 = _v0$2.dot(_v1$3);
      const dot02 = _v0$2.dot(_v2$2);
      const dot11 = _v1$3.dot(_v1$3);
      const dot12 = _v1$3.dot(_v2$2);
      const denom = dot00 * dot11 - dot01 * dot01;
      if (denom === 0) {
        target.set(0, 0, 0);
        return null;
      }
      const invDenom = 1 / denom;
      const u2 = (dot11 * dot02 - dot01 * dot12) * invDenom;
      const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
      return target.set(1 - u2 - v, v, u2);
    }
    static containsPoint(point, a, b, c) {
      if (this.getBarycoord(point, a, b, c, _v3$2) === null) {
        return false;
      }
      return _v3$2.x >= 0 && _v3$2.y >= 0 && _v3$2.x + _v3$2.y <= 1;
    }
    static getInterpolation(point, p1, p2, p3, v1, v2, v3, target) {
      if (this.getBarycoord(point, p1, p2, p3, _v3$2) === null) {
        target.x = 0;
        target.y = 0;
        if ("z" in target) target.z = 0;
        if ("w" in target) target.w = 0;
        return null;
      }
      target.setScalar(0);
      target.addScaledVector(v1, _v3$2.x);
      target.addScaledVector(v2, _v3$2.y);
      target.addScaledVector(v3, _v3$2.z);
      return target;
    }
    static getInterpolatedAttribute(attr, i1, i2, i3, barycoord, target) {
      _v40.setScalar(0);
      _v41.setScalar(0);
      _v42.setScalar(0);
      _v40.fromBufferAttribute(attr, i1);
      _v41.fromBufferAttribute(attr, i2);
      _v42.fromBufferAttribute(attr, i3);
      target.setScalar(0);
      target.addScaledVector(_v40, barycoord.x);
      target.addScaledVector(_v41, barycoord.y);
      target.addScaledVector(_v42, barycoord.z);
      return target;
    }
    static isFrontFacing(a, b, c, direction2) {
      _v0$2.subVectors(c, b);
      _v1$3.subVectors(a, b);
      return _v0$2.cross(_v1$3).dot(direction2) < 0 ? true : false;
    }
    set(a, b, c) {
      this.a.copy(a);
      this.b.copy(b);
      this.c.copy(c);
      return this;
    }
    setFromPointsAndIndices(points, i0, i1, i2) {
      this.a.copy(points[i0]);
      this.b.copy(points[i1]);
      this.c.copy(points[i2]);
      return this;
    }
    setFromAttributeAndIndices(attribute2, i0, i1, i2) {
      this.a.fromBufferAttribute(attribute2, i0);
      this.b.fromBufferAttribute(attribute2, i1);
      this.c.fromBufferAttribute(attribute2, i2);
      return this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(triangle) {
      this.a.copy(triangle.a);
      this.b.copy(triangle.b);
      this.c.copy(triangle.c);
      return this;
    }
    getArea() {
      _v0$2.subVectors(this.c, this.b);
      _v1$3.subVectors(this.a, this.b);
      return _v0$2.cross(_v1$3).length() * 0.5;
    }
    getMidpoint(target) {
      return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(target) {
      return Triangle.getNormal(this.a, this.b, this.c, target);
    }
    getPlane(target) {
      return target.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(point, target) {
      return Triangle.getBarycoord(point, this.a, this.b, this.c, target);
    }
    getInterpolation(point, v1, v2, v3, target) {
      return Triangle.getInterpolation(point, this.a, this.b, this.c, v1, v2, v3, target);
    }
    containsPoint(point) {
      return Triangle.containsPoint(point, this.a, this.b, this.c);
    }
    isFrontFacing(direction2) {
      return Triangle.isFrontFacing(this.a, this.b, this.c, direction2);
    }
    intersectsBox(box) {
      return box.intersectsTriangle(this);
    }
    closestPointToPoint(p, target) {
      const a = this.a, b = this.b, c = this.c;
      let v, w;
      _vab.subVectors(b, a);
      _vac.subVectors(c, a);
      _vap.subVectors(p, a);
      const d1 = _vab.dot(_vap);
      const d2 = _vac.dot(_vap);
      if (d1 <= 0 && d2 <= 0) {
        return target.copy(a);
      }
      _vbp.subVectors(p, b);
      const d3 = _vab.dot(_vbp);
      const d4 = _vac.dot(_vbp);
      if (d3 >= 0 && d4 <= d3) {
        return target.copy(b);
      }
      const vc = d1 * d4 - d3 * d2;
      if (vc <= 0 && d1 >= 0 && d3 <= 0) {
        v = d1 / (d1 - d3);
        return target.copy(a).addScaledVector(_vab, v);
      }
      _vcp.subVectors(p, c);
      const d5 = _vab.dot(_vcp);
      const d6 = _vac.dot(_vcp);
      if (d6 >= 0 && d5 <= d6) {
        return target.copy(c);
      }
      const vb = d5 * d2 - d1 * d6;
      if (vb <= 0 && d2 >= 0 && d6 <= 0) {
        w = d2 / (d2 - d6);
        return target.copy(a).addScaledVector(_vac, w);
      }
      const va = d3 * d6 - d5 * d4;
      if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
        _vbc.subVectors(c, b);
        w = (d4 - d3) / (d4 - d3 + (d5 - d6));
        return target.copy(b).addScaledVector(_vbc, w);
      }
      const denom = 1 / (va + vb + vc);
      v = vb * denom;
      w = vc * denom;
      return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
    }
    equals(triangle) {
      return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
    }
  }
  const _colorKeywords = {
    "aliceblue": 15792383,
    "antiquewhite": 16444375,
    "aqua": 65535,
    "aquamarine": 8388564,
    "azure": 15794175,
    "beige": 16119260,
    "bisque": 16770244,
    "black": 0,
    "blanchedalmond": 16772045,
    "blue": 255,
    "blueviolet": 9055202,
    "brown": 10824234,
    "burlywood": 14596231,
    "cadetblue": 6266528,
    "chartreuse": 8388352,
    "chocolate": 13789470,
    "coral": 16744272,
    "cornflowerblue": 6591981,
    "cornsilk": 16775388,
    "crimson": 14423100,
    "cyan": 65535,
    "darkblue": 139,
    "darkcyan": 35723,
    "darkgoldenrod": 12092939,
    "darkgray": 11119017,
    "darkgreen": 25600,
    "darkgrey": 11119017,
    "darkkhaki": 12433259,
    "darkmagenta": 9109643,
    "darkolivegreen": 5597999,
    "darkorange": 16747520,
    "darkorchid": 10040012,
    "darkred": 9109504,
    "darksalmon": 15308410,
    "darkseagreen": 9419919,
    "darkslateblue": 4734347,
    "darkslategray": 3100495,
    "darkslategrey": 3100495,
    "darkturquoise": 52945,
    "darkviolet": 9699539,
    "deeppink": 16716947,
    "deepskyblue": 49151,
    "dimgray": 6908265,
    "dimgrey": 6908265,
    "dodgerblue": 2003199,
    "firebrick": 11674146,
    "floralwhite": 16775920,
    "forestgreen": 2263842,
    "fuchsia": 16711935,
    "gainsboro": 14474460,
    "ghostwhite": 16316671,
    "gold": 16766720,
    "goldenrod": 14329120,
    "gray": 8421504,
    "green": 32768,
    "greenyellow": 11403055,
    "grey": 8421504,
    "honeydew": 15794160,
    "hotpink": 16738740,
    "indianred": 13458524,
    "indigo": 4915330,
    "ivory": 16777200,
    "khaki": 15787660,
    "lavender": 15132410,
    "lavenderblush": 16773365,
    "lawngreen": 8190976,
    "lemonchiffon": 16775885,
    "lightblue": 11393254,
    "lightcoral": 15761536,
    "lightcyan": 14745599,
    "lightgoldenrodyellow": 16448210,
    "lightgray": 13882323,
    "lightgreen": 9498256,
    "lightgrey": 13882323,
    "lightpink": 16758465,
    "lightsalmon": 16752762,
    "lightseagreen": 2142890,
    "lightskyblue": 8900346,
    "lightslategray": 7833753,
    "lightslategrey": 7833753,
    "lightsteelblue": 11584734,
    "lightyellow": 16777184,
    "lime": 65280,
    "limegreen": 3329330,
    "linen": 16445670,
    "magenta": 16711935,
    "maroon": 8388608,
    "mediumaquamarine": 6737322,
    "mediumblue": 205,
    "mediumorchid": 12211667,
    "mediumpurple": 9662683,
    "mediumseagreen": 3978097,
    "mediumslateblue": 8087790,
    "mediumspringgreen": 64154,
    "mediumturquoise": 4772300,
    "mediumvioletred": 13047173,
    "midnightblue": 1644912,
    "mintcream": 16121850,
    "mistyrose": 16770273,
    "moccasin": 16770229,
    "navajowhite": 16768685,
    "navy": 128,
    "oldlace": 16643558,
    "olive": 8421376,
    "olivedrab": 7048739,
    "orange": 16753920,
    "orangered": 16729344,
    "orchid": 14315734,
    "palegoldenrod": 15657130,
    "palegreen": 10025880,
    "paleturquoise": 11529966,
    "palevioletred": 14381203,
    "papayawhip": 16773077,
    "peachpuff": 16767673,
    "peru": 13468991,
    "pink": 16761035,
    "plum": 14524637,
    "powderblue": 11591910,
    "purple": 8388736,
    "rebeccapurple": 6697881,
    "red": 16711680,
    "rosybrown": 12357519,
    "royalblue": 4286945,
    "saddlebrown": 9127187,
    "salmon": 16416882,
    "sandybrown": 16032864,
    "seagreen": 3050327,
    "seashell": 16774638,
    "sienna": 10506797,
    "silver": 12632256,
    "skyblue": 8900331,
    "slateblue": 6970061,
    "slategray": 7372944,
    "slategrey": 7372944,
    "snow": 16775930,
    "springgreen": 65407,
    "steelblue": 4620980,
    "tan": 13808780,
    "teal": 32896,
    "thistle": 14204888,
    "tomato": 16737095,
    "turquoise": 4251856,
    "violet": 15631086,
    "wheat": 16113331,
    "white": 16777215,
    "whitesmoke": 16119285,
    "yellow": 16776960,
    "yellowgreen": 10145074
  };
  const _hslA = { h: 0, s: 0, l: 0 };
  const _hslB = { h: 0, s: 0, l: 0 };
  function hue2rgb(p, q, t2) {
    if (t2 < 0) t2 += 1;
    if (t2 > 1) t2 -= 1;
    if (t2 < 1 / 6) return p + (q - p) * 6 * t2;
    if (t2 < 1 / 2) return q;
    if (t2 < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t2);
    return p;
  }
  class Color {
    constructor(r, g2, b) {
      this.isColor = true;
      this.r = 1;
      this.g = 1;
      this.b = 1;
      return this.set(r, g2, b);
    }
    set(r, g2, b) {
      if (g2 === void 0 && b === void 0) {
        const value = r;
        if (value && value.isColor) {
          this.copy(value);
        } else if (typeof value === "number") {
          this.setHex(value);
        } else if (typeof value === "string") {
          this.setStyle(value);
        }
      } else {
        this.setRGB(r, g2, b);
      }
      return this;
    }
    setScalar(scalar) {
      this.r = scalar;
      this.g = scalar;
      this.b = scalar;
      return this;
    }
    setHex(hex, colorSpace = SRGBColorSpace) {
      hex = Math.floor(hex);
      this.r = (hex >> 16 & 255) / 255;
      this.g = (hex >> 8 & 255) / 255;
      this.b = (hex & 255) / 255;
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setRGB(r, g2, b, colorSpace = ColorManagement.workingColorSpace) {
      this.r = r;
      this.g = g2;
      this.b = b;
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
      h = euclideanModulo(h, 1);
      s = clamp$1(s, 0, 1);
      l = clamp$1(l, 0, 1);
      if (s === 0) {
        this.r = this.g = this.b = l;
      } else {
        const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
        const q = 2 * l - p;
        this.r = hue2rgb(q, p, h + 1 / 3);
        this.g = hue2rgb(q, p, h);
        this.b = hue2rgb(q, p, h - 1 / 3);
      }
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setStyle(style, colorSpace = SRGBColorSpace) {
      function handleAlpha(string) {
        if (string === void 0) return;
        if (parseFloat(string) < 1) {
          console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
        }
      }
      let m;
      if (m = /^(\w+)\(([^\)]*)\)/.exec(style)) {
        let color2;
        const name = m[1];
        const components = m[2];
        switch (name) {
          case "rgb":
          case "rgba":
            if (color2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color2[4]);
              return this.setRGB(
                Math.min(255, parseInt(color2[1], 10)) / 255,
                Math.min(255, parseInt(color2[2], 10)) / 255,
                Math.min(255, parseInt(color2[3], 10)) / 255,
                colorSpace
              );
            }
            if (color2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color2[4]);
              return this.setRGB(
                Math.min(100, parseInt(color2[1], 10)) / 100,
                Math.min(100, parseInt(color2[2], 10)) / 100,
                Math.min(100, parseInt(color2[3], 10)) / 100,
                colorSpace
              );
            }
            break;
          case "hsl":
          case "hsla":
            if (color2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color2[4]);
              return this.setHSL(
                parseFloat(color2[1]) / 360,
                parseFloat(color2[2]) / 100,
                parseFloat(color2[3]) / 100,
                colorSpace
              );
            }
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + style);
        }
      } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
        const hex = m[1];
        const size = hex.length;
        if (size === 3) {
          return this.setRGB(
            parseInt(hex.charAt(0), 16) / 15,
            parseInt(hex.charAt(1), 16) / 15,
            parseInt(hex.charAt(2), 16) / 15,
            colorSpace
          );
        } else if (size === 6) {
          return this.setHex(parseInt(hex, 16), colorSpace);
        } else {
          console.warn("THREE.Color: Invalid hex color " + style);
        }
      } else if (style && style.length > 0) {
        return this.setColorName(style, colorSpace);
      }
      return this;
    }
    setColorName(style, colorSpace = SRGBColorSpace) {
      const hex = _colorKeywords[style.toLowerCase()];
      if (hex !== void 0) {
        this.setHex(hex, colorSpace);
      } else {
        console.warn("THREE.Color: Unknown color " + style);
      }
      return this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(color2) {
      this.r = color2.r;
      this.g = color2.g;
      this.b = color2.b;
      return this;
    }
    copySRGBToLinear(color2) {
      this.r = SRGBToLinear(color2.r);
      this.g = SRGBToLinear(color2.g);
      this.b = SRGBToLinear(color2.b);
      return this;
    }
    copyLinearToSRGB(color2) {
      this.r = LinearToSRGB(color2.r);
      this.g = LinearToSRGB(color2.g);
      this.b = LinearToSRGB(color2.b);
      return this;
    }
    convertSRGBToLinear() {
      this.copySRGBToLinear(this);
      return this;
    }
    convertLinearToSRGB() {
      this.copyLinearToSRGB(this);
      return this;
    }
    getHex(colorSpace = SRGBColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      return Math.round(clamp$1(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp$1(_color.g * 255, 0, 255)) * 256 + Math.round(clamp$1(_color.b * 255, 0, 255));
    }
    getHexString(colorSpace = SRGBColorSpace) {
      return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
    }
    getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g2 = _color.g, b = _color.b;
      const max = Math.max(r, g2, b);
      const min = Math.min(r, g2, b);
      let hue, saturation;
      const lightness = (min + max) / 2;
      if (min === max) {
        hue = 0;
        saturation = 0;
      } else {
        const delta = max - min;
        saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
        switch (max) {
          case r:
            hue = (g2 - b) / delta + (g2 < b ? 6 : 0);
            break;
          case g2:
            hue = (b - r) / delta + 2;
            break;
          case b:
            hue = (r - g2) / delta + 4;
            break;
        }
        hue /= 6;
      }
      target.h = hue;
      target.s = saturation;
      target.l = lightness;
      return target;
    }
    getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      target.r = _color.r;
      target.g = _color.g;
      target.b = _color.b;
      return target;
    }
    getStyle(colorSpace = SRGBColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g2 = _color.g, b = _color.b;
      if (colorSpace !== SRGBColorSpace) {
        return `color(${colorSpace} ${r.toFixed(3)} ${g2.toFixed(3)} ${b.toFixed(3)})`;
      }
      return `rgb(${Math.round(r * 255)},${Math.round(g2 * 255)},${Math.round(b * 255)})`;
    }
    offsetHSL(h, s, l) {
      this.getHSL(_hslA);
      return this.setHSL(_hslA.h + h, _hslA.s + s, _hslA.l + l);
    }
    add(color2) {
      this.r += color2.r;
      this.g += color2.g;
      this.b += color2.b;
      return this;
    }
    addColors(color1, color2) {
      this.r = color1.r + color2.r;
      this.g = color1.g + color2.g;
      this.b = color1.b + color2.b;
      return this;
    }
    addScalar(s) {
      this.r += s;
      this.g += s;
      this.b += s;
      return this;
    }
    sub(color2) {
      this.r = Math.max(0, this.r - color2.r);
      this.g = Math.max(0, this.g - color2.g);
      this.b = Math.max(0, this.b - color2.b);
      return this;
    }
    multiply(color2) {
      this.r *= color2.r;
      this.g *= color2.g;
      this.b *= color2.b;
      return this;
    }
    multiplyScalar(s) {
      this.r *= s;
      this.g *= s;
      this.b *= s;
      return this;
    }
    lerp(color2, alpha) {
      this.r += (color2.r - this.r) * alpha;
      this.g += (color2.g - this.g) * alpha;
      this.b += (color2.b - this.b) * alpha;
      return this;
    }
    lerpColors(color1, color2, alpha) {
      this.r = color1.r + (color2.r - color1.r) * alpha;
      this.g = color1.g + (color2.g - color1.g) * alpha;
      this.b = color1.b + (color2.b - color1.b) * alpha;
      return this;
    }
    lerpHSL(color2, alpha) {
      this.getHSL(_hslA);
      color2.getHSL(_hslB);
      const h = lerp(_hslA.h, _hslB.h, alpha);
      const s = lerp(_hslA.s, _hslB.s, alpha);
      const l = lerp(_hslA.l, _hslB.l, alpha);
      this.setHSL(h, s, l);
      return this;
    }
    setFromVector3(v) {
      this.r = v.x;
      this.g = v.y;
      this.b = v.z;
      return this;
    }
    applyMatrix3(m) {
      const r = this.r, g2 = this.g, b = this.b;
      const e = m.elements;
      this.r = e[0] * r + e[3] * g2 + e[6] * b;
      this.g = e[1] * r + e[4] * g2 + e[7] * b;
      this.b = e[2] * r + e[5] * g2 + e[8] * b;
      return this;
    }
    equals(c) {
      return c.r === this.r && c.g === this.g && c.b === this.b;
    }
    fromArray(array, offset = 0) {
      this.r = array[offset];
      this.g = array[offset + 1];
      this.b = array[offset + 2];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.r;
      array[offset + 1] = this.g;
      array[offset + 2] = this.b;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this.r = attribute2.getX(index);
      this.g = attribute2.getY(index);
      this.b = attribute2.getZ(index);
      return this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r;
      yield this.g;
      yield this.b;
    }
  }
  const _color = /* @__PURE__ */ new Color();
  Color.NAMES = _colorKeywords;
  let _materialId = 0;
  class Material extends EventDispatcher {
    constructor() {
      super();
      this.isMaterial = true;
      Object.defineProperty(this, "id", { value: _materialId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.type = "Material";
      this.blending = NormalBlending;
      this.side = FrontSide;
      this.vertexColors = false;
      this.opacity = 1;
      this.transparent = false;
      this.alphaHash = false;
      this.blendSrc = SrcAlphaFactor;
      this.blendDst = OneMinusSrcAlphaFactor;
      this.blendEquation = AddEquation;
      this.blendSrcAlpha = null;
      this.blendDstAlpha = null;
      this.blendEquationAlpha = null;
      this.blendColor = new Color(0, 0, 0);
      this.blendAlpha = 0;
      this.depthFunc = LessEqualDepth;
      this.depthTest = true;
      this.depthWrite = true;
      this.stencilWriteMask = 255;
      this.stencilFunc = AlwaysStencilFunc;
      this.stencilRef = 0;
      this.stencilFuncMask = 255;
      this.stencilFail = KeepStencilOp;
      this.stencilZFail = KeepStencilOp;
      this.stencilZPass = KeepStencilOp;
      this.stencilWrite = false;
      this.clippingPlanes = null;
      this.clipIntersection = false;
      this.clipShadows = false;
      this.shadowSide = null;
      this.colorWrite = true;
      this.precision = null;
      this.polygonOffset = false;
      this.polygonOffsetFactor = 0;
      this.polygonOffsetUnits = 0;
      this.dithering = false;
      this.alphaToCoverage = false;
      this.premultipliedAlpha = false;
      this.forceSinglePass = false;
      this.visible = true;
      this.toneMapped = true;
      this.userData = {};
      this.version = 0;
      this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(value) {
      if (this._alphaTest > 0 !== value > 0) {
        this.version++;
      }
      this._alphaTest = value;
    }
    onBuild() {
    }
    // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(values) {
      if (values === void 0) return;
      for (const key in values) {
        const newValue = values[key];
        if (newValue === void 0) {
          console.warn(`THREE.Material: parameter '${key}' has value of undefined.`);
          continue;
        }
        const currentValue = this[key];
        if (currentValue === void 0) {
          console.warn(`THREE.Material: '${key}' is not a property of THREE.${this.type}.`);
          continue;
        }
        if (currentValue && currentValue.isColor) {
          currentValue.set(newValue);
        } else if (currentValue && currentValue.isVector3 && (newValue && newValue.isVector3)) {
          currentValue.copy(newValue);
        } else {
          this[key] = newValue;
        }
      }
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (isRootObject) {
        meta = {
          textures: {},
          images: {}
        };
      }
      const data = {
        metadata: {
          version: 4.6,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      data.uuid = this.uuid;
      data.type = this.type;
      if (this.name !== "") data.name = this.name;
      if (this.color && this.color.isColor) data.color = this.color.getHex();
      if (this.roughness !== void 0) data.roughness = this.roughness;
      if (this.metalness !== void 0) data.metalness = this.metalness;
      if (this.sheen !== void 0) data.sheen = this.sheen;
      if (this.sheenColor && this.sheenColor.isColor) data.sheenColor = this.sheenColor.getHex();
      if (this.sheenRoughness !== void 0) data.sheenRoughness = this.sheenRoughness;
      if (this.emissive && this.emissive.isColor) data.emissive = this.emissive.getHex();
      if (this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1) data.emissiveIntensity = this.emissiveIntensity;
      if (this.specular && this.specular.isColor) data.specular = this.specular.getHex();
      if (this.specularIntensity !== void 0) data.specularIntensity = this.specularIntensity;
      if (this.specularColor && this.specularColor.isColor) data.specularColor = this.specularColor.getHex();
      if (this.shininess !== void 0) data.shininess = this.shininess;
      if (this.clearcoat !== void 0) data.clearcoat = this.clearcoat;
      if (this.clearcoatRoughness !== void 0) data.clearcoatRoughness = this.clearcoatRoughness;
      if (this.clearcoatMap && this.clearcoatMap.isTexture) {
        data.clearcoatMap = this.clearcoatMap.toJSON(meta).uuid;
      }
      if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
        data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(meta).uuid;
      }
      if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
        data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(meta).uuid;
        data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
      }
      if (this.dispersion !== void 0) data.dispersion = this.dispersion;
      if (this.iridescence !== void 0) data.iridescence = this.iridescence;
      if (this.iridescenceIOR !== void 0) data.iridescenceIOR = this.iridescenceIOR;
      if (this.iridescenceThicknessRange !== void 0) data.iridescenceThicknessRange = this.iridescenceThicknessRange;
      if (this.iridescenceMap && this.iridescenceMap.isTexture) {
        data.iridescenceMap = this.iridescenceMap.toJSON(meta).uuid;
      }
      if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
        data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(meta).uuid;
      }
      if (this.anisotropy !== void 0) data.anisotropy = this.anisotropy;
      if (this.anisotropyRotation !== void 0) data.anisotropyRotation = this.anisotropyRotation;
      if (this.anisotropyMap && this.anisotropyMap.isTexture) {
        data.anisotropyMap = this.anisotropyMap.toJSON(meta).uuid;
      }
      if (this.map && this.map.isTexture) data.map = this.map.toJSON(meta).uuid;
      if (this.matcap && this.matcap.isTexture) data.matcap = this.matcap.toJSON(meta).uuid;
      if (this.alphaMap && this.alphaMap.isTexture) data.alphaMap = this.alphaMap.toJSON(meta).uuid;
      if (this.lightMap && this.lightMap.isTexture) {
        data.lightMap = this.lightMap.toJSON(meta).uuid;
        data.lightMapIntensity = this.lightMapIntensity;
      }
      if (this.aoMap && this.aoMap.isTexture) {
        data.aoMap = this.aoMap.toJSON(meta).uuid;
        data.aoMapIntensity = this.aoMapIntensity;
      }
      if (this.bumpMap && this.bumpMap.isTexture) {
        data.bumpMap = this.bumpMap.toJSON(meta).uuid;
        data.bumpScale = this.bumpScale;
      }
      if (this.normalMap && this.normalMap.isTexture) {
        data.normalMap = this.normalMap.toJSON(meta).uuid;
        data.normalMapType = this.normalMapType;
        data.normalScale = this.normalScale.toArray();
      }
      if (this.displacementMap && this.displacementMap.isTexture) {
        data.displacementMap = this.displacementMap.toJSON(meta).uuid;
        data.displacementScale = this.displacementScale;
        data.displacementBias = this.displacementBias;
      }
      if (this.roughnessMap && this.roughnessMap.isTexture) data.roughnessMap = this.roughnessMap.toJSON(meta).uuid;
      if (this.metalnessMap && this.metalnessMap.isTexture) data.metalnessMap = this.metalnessMap.toJSON(meta).uuid;
      if (this.emissiveMap && this.emissiveMap.isTexture) data.emissiveMap = this.emissiveMap.toJSON(meta).uuid;
      if (this.specularMap && this.specularMap.isTexture) data.specularMap = this.specularMap.toJSON(meta).uuid;
      if (this.specularIntensityMap && this.specularIntensityMap.isTexture) data.specularIntensityMap = this.specularIntensityMap.toJSON(meta).uuid;
      if (this.specularColorMap && this.specularColorMap.isTexture) data.specularColorMap = this.specularColorMap.toJSON(meta).uuid;
      if (this.envMap && this.envMap.isTexture) {
        data.envMap = this.envMap.toJSON(meta).uuid;
        if (this.combine !== void 0) data.combine = this.combine;
      }
      if (this.envMapRotation !== void 0) data.envMapRotation = this.envMapRotation.toArray();
      if (this.envMapIntensity !== void 0) data.envMapIntensity = this.envMapIntensity;
      if (this.reflectivity !== void 0) data.reflectivity = this.reflectivity;
      if (this.refractionRatio !== void 0) data.refractionRatio = this.refractionRatio;
      if (this.gradientMap && this.gradientMap.isTexture) {
        data.gradientMap = this.gradientMap.toJSON(meta).uuid;
      }
      if (this.transmission !== void 0) data.transmission = this.transmission;
      if (this.transmissionMap && this.transmissionMap.isTexture) data.transmissionMap = this.transmissionMap.toJSON(meta).uuid;
      if (this.thickness !== void 0) data.thickness = this.thickness;
      if (this.thicknessMap && this.thicknessMap.isTexture) data.thicknessMap = this.thicknessMap.toJSON(meta).uuid;
      if (this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity) data.attenuationDistance = this.attenuationDistance;
      if (this.attenuationColor !== void 0) data.attenuationColor = this.attenuationColor.getHex();
      if (this.size !== void 0) data.size = this.size;
      if (this.shadowSide !== null) data.shadowSide = this.shadowSide;
      if (this.sizeAttenuation !== void 0) data.sizeAttenuation = this.sizeAttenuation;
      if (this.blending !== NormalBlending) data.blending = this.blending;
      if (this.side !== FrontSide) data.side = this.side;
      if (this.vertexColors === true) data.vertexColors = true;
      if (this.opacity < 1) data.opacity = this.opacity;
      if (this.transparent === true) data.transparent = true;
      if (this.blendSrc !== SrcAlphaFactor) data.blendSrc = this.blendSrc;
      if (this.blendDst !== OneMinusSrcAlphaFactor) data.blendDst = this.blendDst;
      if (this.blendEquation !== AddEquation) data.blendEquation = this.blendEquation;
      if (this.blendSrcAlpha !== null) data.blendSrcAlpha = this.blendSrcAlpha;
      if (this.blendDstAlpha !== null) data.blendDstAlpha = this.blendDstAlpha;
      if (this.blendEquationAlpha !== null) data.blendEquationAlpha = this.blendEquationAlpha;
      if (this.blendColor && this.blendColor.isColor) data.blendColor = this.blendColor.getHex();
      if (this.blendAlpha !== 0) data.blendAlpha = this.blendAlpha;
      if (this.depthFunc !== LessEqualDepth) data.depthFunc = this.depthFunc;
      if (this.depthTest === false) data.depthTest = this.depthTest;
      if (this.depthWrite === false) data.depthWrite = this.depthWrite;
      if (this.colorWrite === false) data.colorWrite = this.colorWrite;
      if (this.stencilWriteMask !== 255) data.stencilWriteMask = this.stencilWriteMask;
      if (this.stencilFunc !== AlwaysStencilFunc) data.stencilFunc = this.stencilFunc;
      if (this.stencilRef !== 0) data.stencilRef = this.stencilRef;
      if (this.stencilFuncMask !== 255) data.stencilFuncMask = this.stencilFuncMask;
      if (this.stencilFail !== KeepStencilOp) data.stencilFail = this.stencilFail;
      if (this.stencilZFail !== KeepStencilOp) data.stencilZFail = this.stencilZFail;
      if (this.stencilZPass !== KeepStencilOp) data.stencilZPass = this.stencilZPass;
      if (this.stencilWrite === true) data.stencilWrite = this.stencilWrite;
      if (this.rotation !== void 0 && this.rotation !== 0) data.rotation = this.rotation;
      if (this.polygonOffset === true) data.polygonOffset = true;
      if (this.polygonOffsetFactor !== 0) data.polygonOffsetFactor = this.polygonOffsetFactor;
      if (this.polygonOffsetUnits !== 0) data.polygonOffsetUnits = this.polygonOffsetUnits;
      if (this.linewidth !== void 0 && this.linewidth !== 1) data.linewidth = this.linewidth;
      if (this.dashSize !== void 0) data.dashSize = this.dashSize;
      if (this.gapSize !== void 0) data.gapSize = this.gapSize;
      if (this.scale !== void 0) data.scale = this.scale;
      if (this.dithering === true) data.dithering = true;
      if (this.alphaTest > 0) data.alphaTest = this.alphaTest;
      if (this.alphaHash === true) data.alphaHash = true;
      if (this.alphaToCoverage === true) data.alphaToCoverage = true;
      if (this.premultipliedAlpha === true) data.premultipliedAlpha = true;
      if (this.forceSinglePass === true) data.forceSinglePass = true;
      if (this.wireframe === true) data.wireframe = true;
      if (this.wireframeLinewidth > 1) data.wireframeLinewidth = this.wireframeLinewidth;
      if (this.wireframeLinecap !== "round") data.wireframeLinecap = this.wireframeLinecap;
      if (this.wireframeLinejoin !== "round") data.wireframeLinejoin = this.wireframeLinejoin;
      if (this.flatShading === true) data.flatShading = true;
      if (this.visible === false) data.visible = false;
      if (this.toneMapped === false) data.toneMapped = false;
      if (this.fog === false) data.fog = false;
      if (Object.keys(this.userData).length > 0) data.userData = this.userData;
      function extractFromCache(cache2) {
        const values = [];
        for (const key in cache2) {
          const data2 = cache2[key];
          delete data2.metadata;
          values.push(data2);
        }
        return values;
      }
      if (isRootObject) {
        const textures = extractFromCache(meta.textures);
        const images = extractFromCache(meta.images);
        if (textures.length > 0) data.textures = textures;
        if (images.length > 0) data.images = images;
      }
      return data;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.name = source.name;
      this.blending = source.blending;
      this.side = source.side;
      this.vertexColors = source.vertexColors;
      this.opacity = source.opacity;
      this.transparent = source.transparent;
      this.blendSrc = source.blendSrc;
      this.blendDst = source.blendDst;
      this.blendEquation = source.blendEquation;
      this.blendSrcAlpha = source.blendSrcAlpha;
      this.blendDstAlpha = source.blendDstAlpha;
      this.blendEquationAlpha = source.blendEquationAlpha;
      this.blendColor.copy(source.blendColor);
      this.blendAlpha = source.blendAlpha;
      this.depthFunc = source.depthFunc;
      this.depthTest = source.depthTest;
      this.depthWrite = source.depthWrite;
      this.stencilWriteMask = source.stencilWriteMask;
      this.stencilFunc = source.stencilFunc;
      this.stencilRef = source.stencilRef;
      this.stencilFuncMask = source.stencilFuncMask;
      this.stencilFail = source.stencilFail;
      this.stencilZFail = source.stencilZFail;
      this.stencilZPass = source.stencilZPass;
      this.stencilWrite = source.stencilWrite;
      const srcPlanes = source.clippingPlanes;
      let dstPlanes = null;
      if (srcPlanes !== null) {
        const n2 = srcPlanes.length;
        dstPlanes = new Array(n2);
        for (let i = 0; i !== n2; ++i) {
          dstPlanes[i] = srcPlanes[i].clone();
        }
      }
      this.clippingPlanes = dstPlanes;
      this.clipIntersection = source.clipIntersection;
      this.clipShadows = source.clipShadows;
      this.shadowSide = source.shadowSide;
      this.colorWrite = source.colorWrite;
      this.precision = source.precision;
      this.polygonOffset = source.polygonOffset;
      this.polygonOffsetFactor = source.polygonOffsetFactor;
      this.polygonOffsetUnits = source.polygonOffsetUnits;
      this.dithering = source.dithering;
      this.alphaTest = source.alphaTest;
      this.alphaHash = source.alphaHash;
      this.alphaToCoverage = source.alphaToCoverage;
      this.premultipliedAlpha = source.premultipliedAlpha;
      this.forceSinglePass = source.forceSinglePass;
      this.visible = source.visible;
      this.toneMapped = source.toneMapped;
      this.userData = JSON.parse(JSON.stringify(source.userData));
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
  }
  class MeshBasicMaterial extends Material {
    constructor(parameters) {
      super();
      this.isMeshBasicMaterial = true;
      this.type = "MeshBasicMaterial";
      this.color = new Color(16777215);
      this.map = null;
      this.lightMap = null;
      this.lightMapIntensity = 1;
      this.aoMap = null;
      this.aoMapIntensity = 1;
      this.specularMap = null;
      this.alphaMap = null;
      this.envMap = null;
      this.envMapRotation = new Euler();
      this.combine = MultiplyOperation;
      this.reflectivity = 1;
      this.refractionRatio = 0.98;
      this.wireframe = false;
      this.wireframeLinewidth = 1;
      this.wireframeLinecap = "round";
      this.wireframeLinejoin = "round";
      this.fog = true;
      this.setValues(parameters);
    }
    copy(source) {
      super.copy(source);
      this.color.copy(source.color);
      this.map = source.map;
      this.lightMap = source.lightMap;
      this.lightMapIntensity = source.lightMapIntensity;
      this.aoMap = source.aoMap;
      this.aoMapIntensity = source.aoMapIntensity;
      this.specularMap = source.specularMap;
      this.alphaMap = source.alphaMap;
      this.envMap = source.envMap;
      this.envMapRotation.copy(source.envMapRotation);
      this.combine = source.combine;
      this.reflectivity = source.reflectivity;
      this.refractionRatio = source.refractionRatio;
      this.wireframe = source.wireframe;
      this.wireframeLinewidth = source.wireframeLinewidth;
      this.wireframeLinecap = source.wireframeLinecap;
      this.wireframeLinejoin = source.wireframeLinejoin;
      this.fog = source.fog;
      return this;
    }
  }
  const _vector$9 = /* @__PURE__ */ new Vector3();
  const _vector2$1 = /* @__PURE__ */ new Vector2();
  class BufferAttribute {
    constructor(array, itemSize, normalized = false) {
      if (Array.isArray(array)) {
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      }
      this.isBufferAttribute = true;
      this.name = "";
      this.array = array;
      this.itemSize = itemSize;
      this.count = array !== void 0 ? array.length / itemSize : 0;
      this.normalized = normalized;
      this.usage = StaticDrawUsage;
      this.updateRanges = [];
      this.gpuType = FloatType;
      this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    setUsage(value) {
      this.usage = value;
      return this;
    }
    addUpdateRange(start, count) {
      this.updateRanges.push({ start, count });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(source) {
      this.name = source.name;
      this.array = new source.array.constructor(source.array);
      this.itemSize = source.itemSize;
      this.count = source.count;
      this.normalized = source.normalized;
      this.usage = source.usage;
      this.gpuType = source.gpuType;
      return this;
    }
    copyAt(index1, attribute2, index2) {
      index1 *= this.itemSize;
      index2 *= attribute2.itemSize;
      for (let i = 0, l = this.itemSize; i < l; i++) {
        this.array[index1 + i] = attribute2.array[index2 + i];
      }
      return this;
    }
    copyArray(array) {
      this.array.set(array);
      return this;
    }
    applyMatrix3(m) {
      if (this.itemSize === 2) {
        for (let i = 0, l = this.count; i < l; i++) {
          _vector2$1.fromBufferAttribute(this, i);
          _vector2$1.applyMatrix3(m);
          this.setXY(i, _vector2$1.x, _vector2$1.y);
        }
      } else if (this.itemSize === 3) {
        for (let i = 0, l = this.count; i < l; i++) {
          _vector$9.fromBufferAttribute(this, i);
          _vector$9.applyMatrix3(m);
          this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
        }
      }
      return this;
    }
    applyMatrix4(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$9.fromBufferAttribute(this, i);
        _vector$9.applyMatrix4(m);
        this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
      }
      return this;
    }
    applyNormalMatrix(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$9.fromBufferAttribute(this, i);
        _vector$9.applyNormalMatrix(m);
        this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
      }
      return this;
    }
    transformDirection(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$9.fromBufferAttribute(this, i);
        _vector$9.transformDirection(m);
        this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
      }
      return this;
    }
    set(value, offset = 0) {
      this.array.set(value, offset);
      return this;
    }
    getComponent(index, component) {
      let value = this.array[index * this.itemSize + component];
      if (this.normalized) value = denormalize(value, this.array);
      return value;
    }
    setComponent(index, component, value) {
      if (this.normalized) value = normalize$1(value, this.array);
      this.array[index * this.itemSize + component] = value;
      return this;
    }
    getX(index) {
      let x = this.array[index * this.itemSize];
      if (this.normalized) x = denormalize(x, this.array);
      return x;
    }
    setX(index, x) {
      if (this.normalized) x = normalize$1(x, this.array);
      this.array[index * this.itemSize] = x;
      return this;
    }
    getY(index) {
      let y2 = this.array[index * this.itemSize + 1];
      if (this.normalized) y2 = denormalize(y2, this.array);
      return y2;
    }
    setY(index, y2) {
      if (this.normalized) y2 = normalize$1(y2, this.array);
      this.array[index * this.itemSize + 1] = y2;
      return this;
    }
    getZ(index) {
      let z = this.array[index * this.itemSize + 2];
      if (this.normalized) z = denormalize(z, this.array);
      return z;
    }
    setZ(index, z) {
      if (this.normalized) z = normalize$1(z, this.array);
      this.array[index * this.itemSize + 2] = z;
      return this;
    }
    getW(index) {
      let w = this.array[index * this.itemSize + 3];
      if (this.normalized) w = denormalize(w, this.array);
      return w;
    }
    setW(index, w) {
      if (this.normalized) w = normalize$1(w, this.array);
      this.array[index * this.itemSize + 3] = w;
      return this;
    }
    setXY(index, x, y2) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y2 = normalize$1(y2, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y2;
      return this;
    }
    setXYZ(index, x, y2, z) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y2 = normalize$1(y2, this.array);
        z = normalize$1(z, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y2;
      this.array[index + 2] = z;
      return this;
    }
    setXYZW(index, x, y2, z, w) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y2 = normalize$1(y2, this.array);
        z = normalize$1(z, this.array);
        w = normalize$1(w, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y2;
      this.array[index + 2] = z;
      this.array[index + 3] = w;
      return this;
    }
    onUpload(callback) {
      this.onUploadCallback = callback;
      return this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const data = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      if (this.name !== "") data.name = this.name;
      if (this.usage !== StaticDrawUsage) data.usage = this.usage;
      return data;
    }
  }
  class Uint16BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Uint16Array(array), itemSize, normalized);
    }
  }
  class Uint32BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Uint32Array(array), itemSize, normalized);
    }
  }
  class Float32BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Float32Array(array), itemSize, normalized);
    }
  }
  let _id$3 = 0;
  const _m1$2 = /* @__PURE__ */ new Matrix4();
  const _obj = /* @__PURE__ */ new Object3D();
  const _offset = /* @__PURE__ */ new Vector3();
  const _box$2 = /* @__PURE__ */ new Box3();
  const _boxMorphTargets = /* @__PURE__ */ new Box3();
  const _vector$8 = /* @__PURE__ */ new Vector3();
  class BufferGeometry extends EventDispatcher {
    constructor() {
      super();
      this.isBufferGeometry = true;
      Object.defineProperty(this, "id", { value: _id$3++ });
      this.uuid = generateUUID();
      this.name = "";
      this.type = "BufferGeometry";
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.morphTargetsRelative = false;
      this.groups = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      this.drawRange = { start: 0, count: Infinity };
      this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(index) {
      if (Array.isArray(index)) {
        this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
      } else {
        this.index = index;
      }
      return this;
    }
    getAttribute(name) {
      return this.attributes[name];
    }
    setAttribute(name, attribute2) {
      this.attributes[name] = attribute2;
      return this;
    }
    deleteAttribute(name) {
      delete this.attributes[name];
      return this;
    }
    hasAttribute(name) {
      return this.attributes[name] !== void 0;
    }
    addGroup(start, count, materialIndex = 0) {
      this.groups.push({
        start,
        count,
        materialIndex
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(start, count) {
      this.drawRange.start = start;
      this.drawRange.count = count;
    }
    applyMatrix4(matrix) {
      const position = this.attributes.position;
      if (position !== void 0) {
        position.applyMatrix4(matrix);
        position.needsUpdate = true;
      }
      const normal = this.attributes.normal;
      if (normal !== void 0) {
        const normalMatrix = new Matrix3().getNormalMatrix(matrix);
        normal.applyNormalMatrix(normalMatrix);
        normal.needsUpdate = true;
      }
      const tangent = this.attributes.tangent;
      if (tangent !== void 0) {
        tangent.transformDirection(matrix);
        tangent.needsUpdate = true;
      }
      if (this.boundingBox !== null) {
        this.computeBoundingBox();
      }
      if (this.boundingSphere !== null) {
        this.computeBoundingSphere();
      }
      return this;
    }
    applyQuaternion(q) {
      _m1$2.makeRotationFromQuaternion(q);
      this.applyMatrix4(_m1$2);
      return this;
    }
    rotateX(angle) {
      _m1$2.makeRotationX(angle);
      this.applyMatrix4(_m1$2);
      return this;
    }
    rotateY(angle) {
      _m1$2.makeRotationY(angle);
      this.applyMatrix4(_m1$2);
      return this;
    }
    rotateZ(angle) {
      _m1$2.makeRotationZ(angle);
      this.applyMatrix4(_m1$2);
      return this;
    }
    translate(x, y2, z) {
      _m1$2.makeTranslation(x, y2, z);
      this.applyMatrix4(_m1$2);
      return this;
    }
    scale(x, y2, z) {
      _m1$2.makeScale(x, y2, z);
      this.applyMatrix4(_m1$2);
      return this;
    }
    lookAt(vector) {
      _obj.lookAt(vector);
      _obj.updateMatrix();
      this.applyMatrix4(_obj.matrix);
      return this;
    }
    center() {
      this.computeBoundingBox();
      this.boundingBox.getCenter(_offset).negate();
      this.translate(_offset.x, _offset.y, _offset.z);
      return this;
    }
    setFromPoints(points) {
      const position = [];
      for (let i = 0, l = points.length; i < l; i++) {
        const point = points[i];
        position.push(point.x, point.y, point.z || 0);
      }
      this.setAttribute("position", new Float32BufferAttribute(position, 3));
      return this;
    }
    computeBoundingBox() {
      if (this.boundingBox === null) {
        this.boundingBox = new Box3();
      }
      const position = this.attributes.position;
      const morphAttributesPosition = this.morphAttributes.position;
      if (position && position.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this);
        this.boundingBox.set(
          new Vector3(-Infinity, -Infinity, -Infinity),
          new Vector3(Infinity, Infinity, Infinity)
        );
        return;
      }
      if (position !== void 0) {
        this.boundingBox.setFromBufferAttribute(position);
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            _box$2.setFromBufferAttribute(morphAttribute);
            if (this.morphTargetsRelative) {
              _vector$8.addVectors(this.boundingBox.min, _box$2.min);
              this.boundingBox.expandByPoint(_vector$8);
              _vector$8.addVectors(this.boundingBox.max, _box$2.max);
              this.boundingBox.expandByPoint(_vector$8);
            } else {
              this.boundingBox.expandByPoint(_box$2.min);
              this.boundingBox.expandByPoint(_box$2.max);
            }
          }
        }
      } else {
        this.boundingBox.makeEmpty();
      }
      if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
        console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeBoundingSphere() {
      if (this.boundingSphere === null) {
        this.boundingSphere = new Sphere();
      }
      const position = this.attributes.position;
      const morphAttributesPosition = this.morphAttributes.position;
      if (position && position.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this);
        this.boundingSphere.set(new Vector3(), Infinity);
        return;
      }
      if (position) {
        const center = this.boundingSphere.center;
        _box$2.setFromBufferAttribute(position);
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            _boxMorphTargets.setFromBufferAttribute(morphAttribute);
            if (this.morphTargetsRelative) {
              _vector$8.addVectors(_box$2.min, _boxMorphTargets.min);
              _box$2.expandByPoint(_vector$8);
              _vector$8.addVectors(_box$2.max, _boxMorphTargets.max);
              _box$2.expandByPoint(_vector$8);
            } else {
              _box$2.expandByPoint(_boxMorphTargets.min);
              _box$2.expandByPoint(_boxMorphTargets.max);
            }
          }
        }
        _box$2.getCenter(center);
        let maxRadiusSq = 0;
        for (let i = 0, il = position.count; i < il; i++) {
          _vector$8.fromBufferAttribute(position, i);
          maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
        }
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            const morphTargetsRelative = this.morphTargetsRelative;
            for (let j = 0, jl = morphAttribute.count; j < jl; j++) {
              _vector$8.fromBufferAttribute(morphAttribute, j);
              if (morphTargetsRelative) {
                _offset.fromBufferAttribute(position, j);
                _vector$8.add(_offset);
              }
              maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
            }
          }
        }
        this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
        if (isNaN(this.boundingSphere.radius)) {
          console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
      }
    }
    computeTangents() {
      const index = this.index;
      const attributes = this.attributes;
      if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      const positionAttribute = attributes.position;
      const normalAttribute = attributes.normal;
      const uvAttribute = attributes.uv;
      if (this.hasAttribute("tangent") === false) {
        this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * positionAttribute.count), 4));
      }
      const tangentAttribute = this.getAttribute("tangent");
      const tan1 = [], tan2 = [];
      for (let i = 0; i < positionAttribute.count; i++) {
        tan1[i] = new Vector3();
        tan2[i] = new Vector3();
      }
      const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), uvA = new Vector2(), uvB = new Vector2(), uvC = new Vector2(), sdir = new Vector3(), tdir = new Vector3();
      function handleTriangle(a, b, c) {
        vA.fromBufferAttribute(positionAttribute, a);
        vB.fromBufferAttribute(positionAttribute, b);
        vC.fromBufferAttribute(positionAttribute, c);
        uvA.fromBufferAttribute(uvAttribute, a);
        uvB.fromBufferAttribute(uvAttribute, b);
        uvC.fromBufferAttribute(uvAttribute, c);
        vB.sub(vA);
        vC.sub(vA);
        uvB.sub(uvA);
        uvC.sub(uvA);
        const r = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
        if (!isFinite(r)) return;
        sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
        tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
        tan1[a].add(sdir);
        tan1[b].add(sdir);
        tan1[c].add(sdir);
        tan2[a].add(tdir);
        tan2[b].add(tdir);
        tan2[c].add(tdir);
      }
      let groups = this.groups;
      if (groups.length === 0) {
        groups = [{
          start: 0,
          count: index.count
        }];
      }
      for (let i = 0, il = groups.length; i < il; ++i) {
        const group = groups[i];
        const start = group.start;
        const count = group.count;
        for (let j = start, jl = start + count; j < jl; j += 3) {
          handleTriangle(
            index.getX(j + 0),
            index.getX(j + 1),
            index.getX(j + 2)
          );
        }
      }
      const tmp = new Vector3(), tmp2 = new Vector3();
      const n2 = new Vector3(), n22 = new Vector3();
      function handleVertex(v) {
        n2.fromBufferAttribute(normalAttribute, v);
        n22.copy(n2);
        const t2 = tan1[v];
        tmp.copy(t2);
        tmp.sub(n2.multiplyScalar(n2.dot(t2))).normalize();
        tmp2.crossVectors(n22, t2);
        const test = tmp2.dot(tan2[v]);
        const w = test < 0 ? -1 : 1;
        tangentAttribute.setXYZW(v, tmp.x, tmp.y, tmp.z, w);
      }
      for (let i = 0, il = groups.length; i < il; ++i) {
        const group = groups[i];
        const start = group.start;
        const count = group.count;
        for (let j = start, jl = start + count; j < jl; j += 3) {
          handleVertex(index.getX(j + 0));
          handleVertex(index.getX(j + 1));
          handleVertex(index.getX(j + 2));
        }
      }
    }
    computeVertexNormals() {
      const index = this.index;
      const positionAttribute = this.getAttribute("position");
      if (positionAttribute !== void 0) {
        let normalAttribute = this.getAttribute("normal");
        if (normalAttribute === void 0) {
          normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
          this.setAttribute("normal", normalAttribute);
        } else {
          for (let i = 0, il = normalAttribute.count; i < il; i++) {
            normalAttribute.setXYZ(i, 0, 0, 0);
          }
        }
        const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
        const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
        const cb = new Vector3(), ab = new Vector3();
        if (index) {
          for (let i = 0, il = index.count; i < il; i += 3) {
            const vA = index.getX(i + 0);
            const vB = index.getX(i + 1);
            const vC = index.getX(i + 2);
            pA.fromBufferAttribute(positionAttribute, vA);
            pB.fromBufferAttribute(positionAttribute, vB);
            pC.fromBufferAttribute(positionAttribute, vC);
            cb.subVectors(pC, pB);
            ab.subVectors(pA, pB);
            cb.cross(ab);
            nA.fromBufferAttribute(normalAttribute, vA);
            nB.fromBufferAttribute(normalAttribute, vB);
            nC.fromBufferAttribute(normalAttribute, vC);
            nA.add(cb);
            nB.add(cb);
            nC.add(cb);
            normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
            normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
            normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
          }
        } else {
          for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
            pA.fromBufferAttribute(positionAttribute, i + 0);
            pB.fromBufferAttribute(positionAttribute, i + 1);
            pC.fromBufferAttribute(positionAttribute, i + 2);
            cb.subVectors(pC, pB);
            ab.subVectors(pA, pB);
            cb.cross(ab);
            normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
            normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
            normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
          }
        }
        this.normalizeNormals();
        normalAttribute.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const normals = this.attributes.normal;
      for (let i = 0, il = normals.count; i < il; i++) {
        _vector$8.fromBufferAttribute(normals, i);
        _vector$8.normalize();
        normals.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
      }
    }
    toNonIndexed() {
      function convertBufferAttribute(attribute2, indices2) {
        const array = attribute2.array;
        const itemSize = attribute2.itemSize;
        const normalized = attribute2.normalized;
        const array2 = new array.constructor(indices2.length * itemSize);
        let index = 0, index2 = 0;
        for (let i = 0, l = indices2.length; i < l; i++) {
          if (attribute2.isInterleavedBufferAttribute) {
            index = indices2[i] * attribute2.data.stride + attribute2.offset;
          } else {
            index = indices2[i] * itemSize;
          }
          for (let j = 0; j < itemSize; j++) {
            array2[index2++] = array[index++];
          }
        }
        return new BufferAttribute(array2, itemSize, normalized);
      }
      if (this.index === null) {
        console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
        return this;
      }
      const geometry2 = new BufferGeometry();
      const indices = this.index.array;
      const attributes = this.attributes;
      for (const name in attributes) {
        const attribute2 = attributes[name];
        const newAttribute = convertBufferAttribute(attribute2, indices);
        geometry2.setAttribute(name, newAttribute);
      }
      const morphAttributes = this.morphAttributes;
      for (const name in morphAttributes) {
        const morphArray = [];
        const morphAttribute = morphAttributes[name];
        for (let i = 0, il = morphAttribute.length; i < il; i++) {
          const attribute2 = morphAttribute[i];
          const newAttribute = convertBufferAttribute(attribute2, indices);
          morphArray.push(newAttribute);
        }
        geometry2.morphAttributes[name] = morphArray;
      }
      geometry2.morphTargetsRelative = this.morphTargetsRelative;
      const groups = this.groups;
      for (let i = 0, l = groups.length; i < l; i++) {
        const group = groups[i];
        geometry2.addGroup(group.start, group.count, group.materialIndex);
      }
      return geometry2;
    }
    toJSON() {
      const data = {
        metadata: {
          version: 4.6,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      data.uuid = this.uuid;
      data.type = this.type;
      if (this.name !== "") data.name = this.name;
      if (Object.keys(this.userData).length > 0) data.userData = this.userData;
      if (this.parameters !== void 0) {
        const parameters = this.parameters;
        for (const key in parameters) {
          if (parameters[key] !== void 0) data[key] = parameters[key];
        }
        return data;
      }
      data.data = { attributes: {} };
      const index = this.index;
      if (index !== null) {
        data.data.index = {
          type: index.array.constructor.name,
          array: Array.prototype.slice.call(index.array)
        };
      }
      const attributes = this.attributes;
      for (const key in attributes) {
        const attribute2 = attributes[key];
        data.data.attributes[key] = attribute2.toJSON(data.data);
      }
      const morphAttributes = {};
      let hasMorphAttributes = false;
      for (const key in this.morphAttributes) {
        const attributeArray = this.morphAttributes[key];
        const array = [];
        for (let i = 0, il = attributeArray.length; i < il; i++) {
          const attribute2 = attributeArray[i];
          array.push(attribute2.toJSON(data.data));
        }
        if (array.length > 0) {
          morphAttributes[key] = array;
          hasMorphAttributes = true;
        }
      }
      if (hasMorphAttributes) {
        data.data.morphAttributes = morphAttributes;
        data.data.morphTargetsRelative = this.morphTargetsRelative;
      }
      const groups = this.groups;
      if (groups.length > 0) {
        data.data.groups = JSON.parse(JSON.stringify(groups));
      }
      const boundingSphere = this.boundingSphere;
      if (boundingSphere !== null) {
        data.data.boundingSphere = {
          center: boundingSphere.center.toArray(),
          radius: boundingSphere.radius
        };
      }
      return data;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.groups = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      const data = {};
      this.name = source.name;
      const index = source.index;
      if (index !== null) {
        this.setIndex(index.clone(data));
      }
      const attributes = source.attributes;
      for (const name in attributes) {
        const attribute2 = attributes[name];
        this.setAttribute(name, attribute2.clone(data));
      }
      const morphAttributes = source.morphAttributes;
      for (const name in morphAttributes) {
        const array = [];
        const morphAttribute = morphAttributes[name];
        for (let i = 0, l = morphAttribute.length; i < l; i++) {
          array.push(morphAttribute[i].clone(data));
        }
        this.morphAttributes[name] = array;
      }
      this.morphTargetsRelative = source.morphTargetsRelative;
      const groups = source.groups;
      for (let i = 0, l = groups.length; i < l; i++) {
        const group = groups[i];
        this.addGroup(group.start, group.count, group.materialIndex);
      }
      const boundingBox = source.boundingBox;
      if (boundingBox !== null) {
        this.boundingBox = boundingBox.clone();
      }
      const boundingSphere = source.boundingSphere;
      if (boundingSphere !== null) {
        this.boundingSphere = boundingSphere.clone();
      }
      this.drawRange.start = source.drawRange.start;
      this.drawRange.count = source.drawRange.count;
      this.userData = source.userData;
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const _inverseMatrix$3 = /* @__PURE__ */ new Matrix4();
  const _ray$3 = /* @__PURE__ */ new Ray();
  const _sphere$6 = /* @__PURE__ */ new Sphere();
  const _sphereHitAt = /* @__PURE__ */ new Vector3();
  const _vA$1 = /* @__PURE__ */ new Vector3();
  const _vB$1 = /* @__PURE__ */ new Vector3();
  const _vC$1 = /* @__PURE__ */ new Vector3();
  const _tempA = /* @__PURE__ */ new Vector3();
  const _morphA = /* @__PURE__ */ new Vector3();
  const _intersectionPoint = /* @__PURE__ */ new Vector3();
  const _intersectionPointWorld = /* @__PURE__ */ new Vector3();
  class Mesh extends Object3D {
    constructor(geometry = new BufferGeometry(), material = new MeshBasicMaterial()) {
      super();
      this.isMesh = true;
      this.type = "Mesh";
      this.geometry = geometry;
      this.material = material;
      this.updateMorphTargets();
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      if (source.morphTargetInfluences !== void 0) {
        this.morphTargetInfluences = source.morphTargetInfluences.slice();
      }
      if (source.morphTargetDictionary !== void 0) {
        this.morphTargetDictionary = Object.assign({}, source.morphTargetDictionary);
      }
      this.material = Array.isArray(source.material) ? source.material.slice() : source.material;
      this.geometry = source.geometry;
      return this;
    }
    updateMorphTargets() {
      const geometry = this.geometry;
      const morphAttributes = geometry.morphAttributes;
      const keys = Object.keys(morphAttributes);
      if (keys.length > 0) {
        const morphAttribute = morphAttributes[keys[0]];
        if (morphAttribute !== void 0) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
            const name = morphAttribute[m].name || String(m);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[name] = m;
          }
        }
      }
    }
    getVertexPosition(index, target) {
      const geometry = this.geometry;
      const position = geometry.attributes.position;
      const morphPosition = geometry.morphAttributes.position;
      const morphTargetsRelative = geometry.morphTargetsRelative;
      target.fromBufferAttribute(position, index);
      const morphInfluences = this.morphTargetInfluences;
      if (morphPosition && morphInfluences) {
        _morphA.set(0, 0, 0);
        for (let i = 0, il = morphPosition.length; i < il; i++) {
          const influence = morphInfluences[i];
          const morphAttribute = morphPosition[i];
          if (influence === 0) continue;
          _tempA.fromBufferAttribute(morphAttribute, index);
          if (morphTargetsRelative) {
            _morphA.addScaledVector(_tempA, influence);
          } else {
            _morphA.addScaledVector(_tempA.sub(target), influence);
          }
        }
        target.add(_morphA);
      }
      return target;
    }
    raycast(raycaster, intersects) {
      const geometry = this.geometry;
      const material = this.material;
      const matrixWorld = this.matrixWorld;
      if (material === void 0) return;
      if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
      _sphere$6.copy(geometry.boundingSphere);
      _sphere$6.applyMatrix4(matrixWorld);
      _ray$3.copy(raycaster.ray).recast(raycaster.near);
      if (_sphere$6.containsPoint(_ray$3.origin) === false) {
        if (_ray$3.intersectSphere(_sphere$6, _sphereHitAt) === null) return;
        if (_ray$3.origin.distanceToSquared(_sphereHitAt) > (raycaster.far - raycaster.near) ** 2) return;
      }
      _inverseMatrix$3.copy(matrixWorld).invert();
      _ray$3.copy(raycaster.ray).applyMatrix4(_inverseMatrix$3);
      if (geometry.boundingBox !== null) {
        if (_ray$3.intersectsBox(geometry.boundingBox) === false) return;
      }
      this._computeIntersections(raycaster, intersects, _ray$3);
    }
    _computeIntersections(raycaster, intersects, rayLocalSpace) {
      let intersection;
      const geometry = this.geometry;
      const material = this.material;
      const index = geometry.index;
      const position = geometry.attributes.position;
      const uv2 = geometry.attributes.uv;
      const uv1 = geometry.attributes.uv1;
      const normal = geometry.attributes.normal;
      const groups = geometry.groups;
      const drawRange = geometry.drawRange;
      if (index !== null) {
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = index.getX(j);
              const b = index.getX(j + 1);
              const c = index.getX(j + 2);
              intersection = checkGeometryIntersection(this, groupMaterial, raycaster, rayLocalSpace, uv2, uv1, normal, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3);
                intersection.face.materialIndex = group.materialIndex;
                intersects.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(index.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = index.getX(i);
            const b = index.getX(i + 1);
            const c = index.getX(i + 2);
            intersection = checkGeometryIntersection(this, material, raycaster, rayLocalSpace, uv2, uv1, normal, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3);
              intersects.push(intersection);
            }
          }
        }
      } else if (position !== void 0) {
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(position.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = j;
              const b = j + 1;
              const c = j + 2;
              intersection = checkGeometryIntersection(this, groupMaterial, raycaster, rayLocalSpace, uv2, uv1, normal, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3);
                intersection.face.materialIndex = group.materialIndex;
                intersects.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(position.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = i;
            const b = i + 1;
            const c = i + 2;
            intersection = checkGeometryIntersection(this, material, raycaster, rayLocalSpace, uv2, uv1, normal, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3);
              intersects.push(intersection);
            }
          }
        }
      }
    }
  }
  function checkIntersection$1(object, material, raycaster, ray, pA, pB, pC, point) {
    let intersect;
    if (material.side === BackSide) {
      intersect = ray.intersectTriangle(pC, pB, pA, true, point);
    } else {
      intersect = ray.intersectTriangle(pA, pB, pC, material.side === FrontSide, point);
    }
    if (intersect === null) return null;
    _intersectionPointWorld.copy(point);
    _intersectionPointWorld.applyMatrix4(object.matrixWorld);
    const distance2 = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
    if (distance2 < raycaster.near || distance2 > raycaster.far) return null;
    return {
      distance: distance2,
      point: _intersectionPointWorld.clone(),
      object
    };
  }
  function checkGeometryIntersection(object, material, raycaster, ray, uv2, uv1, normal, a, b, c) {
    object.getVertexPosition(a, _vA$1);
    object.getVertexPosition(b, _vB$1);
    object.getVertexPosition(c, _vC$1);
    const intersection = checkIntersection$1(object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint);
    if (intersection) {
      const barycoord = new Vector3();
      Triangle.getBarycoord(_intersectionPoint, _vA$1, _vB$1, _vC$1, barycoord);
      if (uv2) {
        intersection.uv = Triangle.getInterpolatedAttribute(uv2, a, b, c, barycoord, new Vector2());
      }
      if (uv1) {
        intersection.uv1 = Triangle.getInterpolatedAttribute(uv1, a, b, c, barycoord, new Vector2());
      }
      if (normal) {
        intersection.normal = Triangle.getInterpolatedAttribute(normal, a, b, c, barycoord, new Vector3());
        if (intersection.normal.dot(ray.direction) > 0) {
          intersection.normal.multiplyScalar(-1);
        }
      }
      const face = {
        a,
        b,
        c,
        normal: new Vector3(),
        materialIndex: 0
      };
      Triangle.getNormal(_vA$1, _vB$1, _vC$1, face.normal);
      intersection.face = face;
      intersection.barycoord = barycoord;
    }
    return intersection;
  }
  class Camera extends Object3D {
    constructor() {
      super();
      this.isCamera = true;
      this.type = "Camera";
      this.matrixWorldInverse = new Matrix4();
      this.projectionMatrix = new Matrix4();
      this.projectionMatrixInverse = new Matrix4();
      this.coordinateSystem = WebGLCoordinateSystem;
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.matrixWorldInverse.copy(source.matrixWorldInverse);
      this.projectionMatrix.copy(source.projectionMatrix);
      this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
      this.coordinateSystem = source.coordinateSystem;
      return this;
    }
    getWorldDirection(target) {
      return super.getWorldDirection(target).negate();
    }
    updateMatrixWorld(force) {
      super.updateMatrixWorld(force);
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(updateParents, updateChildren) {
      super.updateWorldMatrix(updateParents, updateChildren);
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const _v3$1 = /* @__PURE__ */ new Vector3();
  const _minTarget = /* @__PURE__ */ new Vector2();
  const _maxTarget = /* @__PURE__ */ new Vector2();
  class PerspectiveCamera extends Camera {
    constructor(fov = 50, aspect = 1, near = 0.1, far = 2e3) {
      super();
      this.isPerspectiveCamera = true;
      this.type = "PerspectiveCamera";
      this.fov = fov;
      this.zoom = 1;
      this.near = near;
      this.far = far;
      this.focus = 10;
      this.aspect = aspect;
      this.view = null;
      this.filmGauge = 35;
      this.filmOffset = 0;
      this.updateProjectionMatrix();
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.fov = source.fov;
      this.zoom = source.zoom;
      this.near = source.near;
      this.far = source.far;
      this.focus = source.focus;
      this.aspect = source.aspect;
      this.view = source.view === null ? null : Object.assign({}, source.view);
      this.filmGauge = source.filmGauge;
      this.filmOffset = source.filmOffset;
      return this;
    }
    /**
     * Sets the FOV by focal length in respect to the current .filmGauge.
     *
     * The default film gauge is 35, so that the focal length can be specified for
     * a 35mm (full frame) camera.
     *
     * Values for focal length and film gauge must have the same unit.
     */
    setFocalLength(focalLength) {
      const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;
      this.fov = RAD2DEG * 2 * Math.atan(vExtentSlope);
      this.updateProjectionMatrix();
    }
    /**
     * Calculates the focal length from the current .fov and .filmGauge.
     */
    getFocalLength() {
      const vExtentSlope = Math.tan(DEG2RAD * 0.5 * this.fov);
      return 0.5 * this.getFilmHeight() / vExtentSlope;
    }
    getEffectiveFOV() {
      return RAD2DEG * 2 * Math.atan(
        Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom
      );
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    /**
     * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
     * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
     */
    getViewBounds(distance2, minTarget, maxTarget) {
      _v3$1.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse);
      minTarget.set(_v3$1.x, _v3$1.y).multiplyScalar(-distance2 / _v3$1.z);
      _v3$1.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse);
      maxTarget.set(_v3$1.x, _v3$1.y).multiplyScalar(-distance2 / _v3$1.z);
    }
    /**
     * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
     * Copies the result into the target Vector2, where x is width and y is height.
     */
    getViewSize(distance2, target) {
      this.getViewBounds(distance2, _minTarget, _maxTarget);
      return target.subVectors(_maxTarget, _minTarget);
    }
    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or
     * multi-monitor/multi-machine setups.
     *
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
     * the monitors are in grid like this
     *
     *   +---+---+---+
     *   | A | B | C |
     *   +---+---+---+
     *   | D | E | F |
     *   +---+---+---+
     *
     * then for each monitor you would call it like this
     *
     *   const w = 1920;
     *   const h = 1080;
     *   const fullWidth = w * 3;
     *   const fullHeight = h * 2;
     *
     *   --A--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     *   --B--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     *   --C--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     *   --D--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     *   --E--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     *   --F--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
     *
     *   Note there is no reason monitors have to be the same size or in a grid.
     */
    setViewOffset(fullWidth, fullHeight, x, y2, width, height) {
      this.aspect = fullWidth / fullHeight;
      if (this.view === null) {
        this.view = {
          enabled: true,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        };
      }
      this.view.enabled = true;
      this.view.fullWidth = fullWidth;
      this.view.fullHeight = fullHeight;
      this.view.offsetX = x;
      this.view.offsetY = y2;
      this.view.width = width;
      this.view.height = height;
      this.updateProjectionMatrix();
    }
    clearViewOffset() {
      if (this.view !== null) {
        this.view.enabled = false;
      }
      this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const near = this.near;
      let top = near * Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom;
      let height = 2 * top;
      let width = this.aspect * height;
      let left = -0.5 * width;
      const view = this.view;
      if (this.view !== null && this.view.enabled) {
        const fullWidth = view.fullWidth, fullHeight = view.fullHeight;
        left += view.offsetX * width / fullWidth;
        top -= view.offsetY * height / fullHeight;
        width *= view.width / fullWidth;
        height *= view.height / fullHeight;
      }
      const skew = this.filmOffset;
      if (skew !== 0) left += near * skew / this.getFilmWidth();
      this.projectionMatrix.makePerspective(left, left + width, top, top - height, near, this.far, this.coordinateSystem);
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(meta) {
      const data = super.toJSON(meta);
      data.object.fov = this.fov;
      data.object.zoom = this.zoom;
      data.object.near = this.near;
      data.object.far = this.far;
      data.object.focus = this.focus;
      data.object.aspect = this.aspect;
      if (this.view !== null) data.object.view = Object.assign({}, this.view);
      data.object.filmGauge = this.filmGauge;
      data.object.filmOffset = this.filmOffset;
      return data;
    }
  }
  const _vector1 = /* @__PURE__ */ new Vector3();
  const _vector2 = /* @__PURE__ */ new Vector3();
  const _normalMatrix = /* @__PURE__ */ new Matrix3();
  class Plane {
    constructor(normal = new Vector3(1, 0, 0), constant = 0) {
      this.isPlane = true;
      this.normal = normal;
      this.constant = constant;
    }
    set(normal, constant) {
      this.normal.copy(normal);
      this.constant = constant;
      return this;
    }
    setComponents(x, y2, z, w) {
      this.normal.set(x, y2, z);
      this.constant = w;
      return this;
    }
    setFromNormalAndCoplanarPoint(normal, point) {
      this.normal.copy(normal);
      this.constant = -point.dot(this.normal);
      return this;
    }
    setFromCoplanarPoints(a, b, c) {
      const normal = _vector1.subVectors(c, b).cross(_vector2.subVectors(a, b)).normalize();
      this.setFromNormalAndCoplanarPoint(normal, a);
      return this;
    }
    copy(plane) {
      this.normal.copy(plane.normal);
      this.constant = plane.constant;
      return this;
    }
    normalize() {
      const inverseNormalLength = 1 / this.normal.length();
      this.normal.multiplyScalar(inverseNormalLength);
      this.constant *= inverseNormalLength;
      return this;
    }
    negate() {
      this.constant *= -1;
      this.normal.negate();
      return this;
    }
    distanceToPoint(point) {
      return this.normal.dot(point) + this.constant;
    }
    distanceToSphere(sphere) {
      return this.distanceToPoint(sphere.center) - sphere.radius;
    }
    projectPoint(point, target) {
      return target.copy(point).addScaledVector(this.normal, -this.distanceToPoint(point));
    }
    intersectLine(line, target) {
      const direction2 = line.delta(_vector1);
      const denominator = this.normal.dot(direction2);
      if (denominator === 0) {
        if (this.distanceToPoint(line.start) === 0) {
          return target.copy(line.start);
        }
        return null;
      }
      const t2 = -(line.start.dot(this.normal) + this.constant) / denominator;
      if (t2 < 0 || t2 > 1) {
        return null;
      }
      return target.copy(line.start).addScaledVector(direction2, t2);
    }
    intersectsLine(line) {
      const startSign = this.distanceToPoint(line.start);
      const endSign = this.distanceToPoint(line.end);
      return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
    }
    intersectsBox(box) {
      return box.intersectsPlane(this);
    }
    intersectsSphere(sphere) {
      return sphere.intersectsPlane(this);
    }
    coplanarPoint(target) {
      return target.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(matrix, optionalNormalMatrix) {
      const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix(matrix);
      const referencePoint = this.coplanarPoint(_vector1).applyMatrix4(matrix);
      const normal = this.normal.applyMatrix3(normalMatrix).normalize();
      this.constant = -referencePoint.dot(normal);
      return this;
    }
    translate(offset) {
      this.constant -= offset.dot(this.normal);
      return this;
    }
    equals(plane) {
      return plane.normal.equals(this.normal) && plane.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const _sphere$5 = /* @__PURE__ */ new Sphere();
  const _vector$7 = /* @__PURE__ */ new Vector3();
  class Frustum {
    constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
      this.planes = [p0, p1, p2, p3, p4, p5];
    }
    set(p0, p1, p2, p3, p4, p5) {
      const planes = this.planes;
      planes[0].copy(p0);
      planes[1].copy(p1);
      planes[2].copy(p2);
      planes[3].copy(p3);
      planes[4].copy(p4);
      planes[5].copy(p5);
      return this;
    }
    copy(frustum) {
      const planes = this.planes;
      for (let i = 0; i < 6; i++) {
        planes[i].copy(frustum.planes[i]);
      }
      return this;
    }
    setFromProjectionMatrix(m, coordinateSystem = WebGLCoordinateSystem) {
      const planes = this.planes;
      const me = m.elements;
      const me0 = me[0], me1 = me[1], me2 = me[2], me3 = me[3];
      const me4 = me[4], me5 = me[5], me6 = me[6], me7 = me[7];
      const me8 = me[8], me9 = me[9], me10 = me[10], me11 = me[11];
      const me12 = me[12], me13 = me[13], me14 = me[14], me15 = me[15];
      planes[0].setComponents(me3 - me0, me7 - me4, me11 - me8, me15 - me12).normalize();
      planes[1].setComponents(me3 + me0, me7 + me4, me11 + me8, me15 + me12).normalize();
      planes[2].setComponents(me3 + me1, me7 + me5, me11 + me9, me15 + me13).normalize();
      planes[3].setComponents(me3 - me1, me7 - me5, me11 - me9, me15 - me13).normalize();
      planes[4].setComponents(me3 - me2, me7 - me6, me11 - me10, me15 - me14).normalize();
      if (coordinateSystem === WebGLCoordinateSystem) {
        planes[5].setComponents(me3 + me2, me7 + me6, me11 + me10, me15 + me14).normalize();
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        planes[5].setComponents(me2, me6, me10, me14).normalize();
      } else {
        throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + coordinateSystem);
      }
      return this;
    }
    intersectsObject(object) {
      if (object.boundingSphere !== void 0) {
        if (object.boundingSphere === null) object.computeBoundingSphere();
        _sphere$5.copy(object.boundingSphere).applyMatrix4(object.matrixWorld);
      } else {
        const geometry = object.geometry;
        if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
        _sphere$5.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);
      }
      return this.intersectsSphere(_sphere$5);
    }
    intersectsSprite(sprite) {
      _sphere$5.center.set(0, 0, 0);
      _sphere$5.radius = 0.7071067811865476;
      _sphere$5.applyMatrix4(sprite.matrixWorld);
      return this.intersectsSphere(_sphere$5);
    }
    intersectsSphere(sphere) {
      const planes = this.planes;
      const center = sphere.center;
      const negRadius = -sphere.radius;
      for (let i = 0; i < 6; i++) {
        const distance2 = planes[i].distanceToPoint(center);
        if (distance2 < negRadius) {
          return false;
        }
      }
      return true;
    }
    intersectsBox(box) {
      const planes = this.planes;
      for (let i = 0; i < 6; i++) {
        const plane = planes[i];
        _vector$7.x = plane.normal.x > 0 ? box.max.x : box.min.x;
        _vector$7.y = plane.normal.y > 0 ? box.max.y : box.min.y;
        _vector$7.z = plane.normal.z > 0 ? box.max.z : box.min.z;
        if (plane.distanceToPoint(_vector$7) < 0) {
          return false;
        }
      }
      return true;
    }
    containsPoint(point) {
      const planes = this.planes;
      for (let i = 0; i < 6; i++) {
        if (planes[i].distanceToPoint(point) < 0) {
          return false;
        }
      }
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class OrthographicCamera extends Camera {
    constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2e3) {
      super();
      this.isOrthographicCamera = true;
      this.type = "OrthographicCamera";
      this.zoom = 1;
      this.view = null;
      this.left = left;
      this.right = right;
      this.top = top;
      this.bottom = bottom;
      this.near = near;
      this.far = far;
      this.updateProjectionMatrix();
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.left = source.left;
      this.right = source.right;
      this.top = source.top;
      this.bottom = source.bottom;
      this.near = source.near;
      this.far = source.far;
      this.zoom = source.zoom;
      this.view = source.view === null ? null : Object.assign({}, source.view);
      return this;
    }
    setViewOffset(fullWidth, fullHeight, x, y2, width, height) {
      if (this.view === null) {
        this.view = {
          enabled: true,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        };
      }
      this.view.enabled = true;
      this.view.fullWidth = fullWidth;
      this.view.fullHeight = fullHeight;
      this.view.offsetX = x;
      this.view.offsetY = y2;
      this.view.width = width;
      this.view.height = height;
      this.updateProjectionMatrix();
    }
    clearViewOffset() {
      if (this.view !== null) {
        this.view.enabled = false;
      }
      this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const dx = (this.right - this.left) / (2 * this.zoom);
      const dy = (this.top - this.bottom) / (2 * this.zoom);
      const cx = (this.right + this.left) / 2;
      const cy = (this.top + this.bottom) / 2;
      let left = cx - dx;
      let right = cx + dx;
      let top = cy + dy;
      let bottom = cy - dy;
      if (this.view !== null && this.view.enabled) {
        const scaleW = (this.right - this.left) / this.view.fullWidth / this.zoom;
        const scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        left += scaleW * this.view.offsetX;
        right = left + scaleW * this.view.width;
        top -= scaleH * this.view.offsetY;
        bottom = top - scaleH * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far, this.coordinateSystem);
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(meta) {
      const data = super.toJSON(meta);
      data.object.zoom = this.zoom;
      data.object.left = this.left;
      data.object.right = this.right;
      data.object.top = this.top;
      data.object.bottom = this.bottom;
      data.object.near = this.near;
      data.object.far = this.far;
      if (this.view !== null) data.object.view = Object.assign({}, this.view);
      return data;
    }
  }
  class DepthTexture extends Texture {
    constructor(width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format = DepthFormat) {
      if (format !== DepthFormat && format !== DepthStencilFormat) {
        throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      }
      if (type === void 0 && format === DepthFormat) type = UnsignedIntType;
      if (type === void 0 && format === DepthStencilFormat) type = UnsignedInt248Type;
      super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
      this.isDepthTexture = true;
      this.image = { width, height };
      this.magFilter = magFilter !== void 0 ? magFilter : NearestFilter;
      this.minFilter = minFilter !== void 0 ? minFilter : NearestFilter;
      this.flipY = false;
      this.generateMipmaps = false;
      this.compareFunction = null;
    }
    copy(source) {
      super.copy(source);
      this.compareFunction = source.compareFunction;
      return this;
    }
    toJSON(meta) {
      const data = super.toJSON(meta);
      if (this.compareFunction !== null) data.compareFunction = this.compareFunction;
      return data;
    }
  }
  class Group extends Object3D {
    constructor() {
      super();
      this.isGroup = true;
      this.type = "Group";
    }
  }
  class InterleavedBuffer {
    constructor(array, stride) {
      this.isInterleavedBuffer = true;
      this.array = array;
      this.stride = stride;
      this.count = array !== void 0 ? array.length / stride : 0;
      this.usage = StaticDrawUsage;
      this.updateRanges = [];
      this.version = 0;
      this.uuid = generateUUID();
    }
    onUploadCallback() {
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    setUsage(value) {
      this.usage = value;
      return this;
    }
    addUpdateRange(start, count) {
      this.updateRanges.push({ start, count });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(source) {
      this.array = new source.array.constructor(source.array);
      this.count = source.count;
      this.stride = source.stride;
      this.usage = source.usage;
      return this;
    }
    copyAt(index1, attribute2, index2) {
      index1 *= this.stride;
      index2 *= attribute2.stride;
      for (let i = 0, l = this.stride; i < l; i++) {
        this.array[index1 + i] = attribute2.array[index2 + i];
      }
      return this;
    }
    set(value, offset = 0) {
      this.array.set(value, offset);
      return this;
    }
    clone(data) {
      if (data.arrayBuffers === void 0) {
        data.arrayBuffers = {};
      }
      if (this.array.buffer._uuid === void 0) {
        this.array.buffer._uuid = generateUUID();
      }
      if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
        data.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
      }
      const array = new this.array.constructor(data.arrayBuffers[this.array.buffer._uuid]);
      const ib = new this.constructor(array, this.stride);
      ib.setUsage(this.usage);
      return ib;
    }
    onUpload(callback) {
      this.onUploadCallback = callback;
      return this;
    }
    toJSON(data) {
      if (data.arrayBuffers === void 0) {
        data.arrayBuffers = {};
      }
      if (this.array.buffer._uuid === void 0) {
        this.array.buffer._uuid = generateUUID();
      }
      if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
        data.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer));
      }
      return {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  }
  const _vector$6 = /* @__PURE__ */ new Vector3();
  class InterleavedBufferAttribute {
    constructor(interleavedBuffer, itemSize, offset, normalized = false) {
      this.isInterleavedBufferAttribute = true;
      this.name = "";
      this.data = interleavedBuffer;
      this.itemSize = itemSize;
      this.offset = offset;
      this.normalized = normalized;
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(value) {
      this.data.needsUpdate = value;
    }
    applyMatrix4(m) {
      for (let i = 0, l = this.data.count; i < l; i++) {
        _vector$6.fromBufferAttribute(this, i);
        _vector$6.applyMatrix4(m);
        this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
      }
      return this;
    }
    applyNormalMatrix(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$6.fromBufferAttribute(this, i);
        _vector$6.applyNormalMatrix(m);
        this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
      }
      return this;
    }
    transformDirection(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$6.fromBufferAttribute(this, i);
        _vector$6.transformDirection(m);
        this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
      }
      return this;
    }
    getComponent(index, component) {
      let value = this.array[index * this.data.stride + this.offset + component];
      if (this.normalized) value = denormalize(value, this.array);
      return value;
    }
    setComponent(index, component, value) {
      if (this.normalized) value = normalize$1(value, this.array);
      this.data.array[index * this.data.stride + this.offset + component] = value;
      return this;
    }
    setX(index, x) {
      if (this.normalized) x = normalize$1(x, this.array);
      this.data.array[index * this.data.stride + this.offset] = x;
      return this;
    }
    setY(index, y2) {
      if (this.normalized) y2 = normalize$1(y2, this.array);
      this.data.array[index * this.data.stride + this.offset + 1] = y2;
      return this;
    }
    setZ(index, z) {
      if (this.normalized) z = normalize$1(z, this.array);
      this.data.array[index * this.data.stride + this.offset + 2] = z;
      return this;
    }
    setW(index, w) {
      if (this.normalized) w = normalize$1(w, this.array);
      this.data.array[index * this.data.stride + this.offset + 3] = w;
      return this;
    }
    getX(index) {
      let x = this.data.array[index * this.data.stride + this.offset];
      if (this.normalized) x = denormalize(x, this.array);
      return x;
    }
    getY(index) {
      let y2 = this.data.array[index * this.data.stride + this.offset + 1];
      if (this.normalized) y2 = denormalize(y2, this.array);
      return y2;
    }
    getZ(index) {
      let z = this.data.array[index * this.data.stride + this.offset + 2];
      if (this.normalized) z = denormalize(z, this.array);
      return z;
    }
    getW(index) {
      let w = this.data.array[index * this.data.stride + this.offset + 3];
      if (this.normalized) w = denormalize(w, this.array);
      return w;
    }
    setXY(index, x, y2) {
      index = index * this.data.stride + this.offset;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y2 = normalize$1(y2, this.array);
      }
      this.data.array[index + 0] = x;
      this.data.array[index + 1] = y2;
      return this;
    }
    setXYZ(index, x, y2, z) {
      index = index * this.data.stride + this.offset;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y2 = normalize$1(y2, this.array);
        z = normalize$1(z, this.array);
      }
      this.data.array[index + 0] = x;
      this.data.array[index + 1] = y2;
      this.data.array[index + 2] = z;
      return this;
    }
    setXYZW(index, x, y2, z, w) {
      index = index * this.data.stride + this.offset;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y2 = normalize$1(y2, this.array);
        z = normalize$1(z, this.array);
        w = normalize$1(w, this.array);
      }
      this.data.array[index + 0] = x;
      this.data.array[index + 1] = y2;
      this.data.array[index + 2] = z;
      this.data.array[index + 3] = w;
      return this;
    }
    clone(data) {
      if (data === void 0) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const array = [];
        for (let i = 0; i < this.count; i++) {
          const index = i * this.data.stride + this.offset;
          for (let j = 0; j < this.itemSize; j++) {
            array.push(this.data.array[index + j]);
          }
        }
        return new BufferAttribute(new this.array.constructor(array), this.itemSize, this.normalized);
      } else {
        if (data.interleavedBuffers === void 0) {
          data.interleavedBuffers = {};
        }
        if (data.interleavedBuffers[this.data.uuid] === void 0) {
          data.interleavedBuffers[this.data.uuid] = this.data.clone(data);
        }
        return new InterleavedBufferAttribute(data.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
      }
    }
    toJSON(data) {
      if (data === void 0) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
        const array = [];
        for (let i = 0; i < this.count; i++) {
          const index = i * this.data.stride + this.offset;
          for (let j = 0; j < this.itemSize; j++) {
            array.push(this.data.array[index + j]);
          }
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array,
          normalized: this.normalized
        };
      } else {
        if (data.interleavedBuffers === void 0) {
          data.interleavedBuffers = {};
        }
        if (data.interleavedBuffers[this.data.uuid] === void 0) {
          data.interleavedBuffers[this.data.uuid] = this.data.toJSON(data);
        }
        return {
          isInterleavedBufferAttribute: true,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized
        };
      }
    }
  }
  const _basePosition = /* @__PURE__ */ new Vector3();
  const _skinIndex = /* @__PURE__ */ new Vector4();
  const _skinWeight = /* @__PURE__ */ new Vector4();
  const _vector3 = /* @__PURE__ */ new Vector3();
  const _matrix4 = /* @__PURE__ */ new Matrix4();
  const _vertex = /* @__PURE__ */ new Vector3();
  const _sphere$4 = /* @__PURE__ */ new Sphere();
  const _inverseMatrix$2 = /* @__PURE__ */ new Matrix4();
  const _ray$2 = /* @__PURE__ */ new Ray();
  class SkinnedMesh extends Mesh {
    constructor(geometry, material) {
      super(geometry, material);
      this.isSkinnedMesh = true;
      this.type = "SkinnedMesh";
      this.bindMode = AttachedBindMode;
      this.bindMatrix = new Matrix4();
      this.bindMatrixInverse = new Matrix4();
      this.boundingBox = null;
      this.boundingSphere = null;
    }
    computeBoundingBox() {
      const geometry = this.geometry;
      if (this.boundingBox === null) {
        this.boundingBox = new Box3();
      }
      this.boundingBox.makeEmpty();
      const positionAttribute = geometry.getAttribute("position");
      for (let i = 0; i < positionAttribute.count; i++) {
        this.getVertexPosition(i, _vertex);
        this.boundingBox.expandByPoint(_vertex);
      }
    }
    computeBoundingSphere() {
      const geometry = this.geometry;
      if (this.boundingSphere === null) {
        this.boundingSphere = new Sphere();
      }
      this.boundingSphere.makeEmpty();
      const positionAttribute = geometry.getAttribute("position");
      for (let i = 0; i < positionAttribute.count; i++) {
        this.getVertexPosition(i, _vertex);
        this.boundingSphere.expandByPoint(_vertex);
      }
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.bindMode = source.bindMode;
      this.bindMatrix.copy(source.bindMatrix);
      this.bindMatrixInverse.copy(source.bindMatrixInverse);
      this.skeleton = source.skeleton;
      if (source.boundingBox !== null) this.boundingBox = source.boundingBox.clone();
      if (source.boundingSphere !== null) this.boundingSphere = source.boundingSphere.clone();
      return this;
    }
    raycast(raycaster, intersects) {
      const material = this.material;
      const matrixWorld = this.matrixWorld;
      if (material === void 0) return;
      if (this.boundingSphere === null) this.computeBoundingSphere();
      _sphere$4.copy(this.boundingSphere);
      _sphere$4.applyMatrix4(matrixWorld);
      if (raycaster.ray.intersectsSphere(_sphere$4) === false) return;
      _inverseMatrix$2.copy(matrixWorld).invert();
      _ray$2.copy(raycaster.ray).applyMatrix4(_inverseMatrix$2);
      if (this.boundingBox !== null) {
        if (_ray$2.intersectsBox(this.boundingBox) === false) return;
      }
      this._computeIntersections(raycaster, intersects, _ray$2);
    }
    getVertexPosition(index, target) {
      super.getVertexPosition(index, target);
      this.applyBoneTransform(index, target);
      return target;
    }
    bind(skeleton, bindMatrix) {
      this.skeleton = skeleton;
      if (bindMatrix === void 0) {
        this.updateMatrixWorld(true);
        this.skeleton.calculateInverses();
        bindMatrix = this.matrixWorld;
      }
      this.bindMatrix.copy(bindMatrix);
      this.bindMatrixInverse.copy(bindMatrix).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const vector = new Vector4();
      const skinWeight = this.geometry.attributes.skinWeight;
      for (let i = 0, l = skinWeight.count; i < l; i++) {
        vector.fromBufferAttribute(skinWeight, i);
        const scale = 1 / vector.manhattanLength();
        if (scale !== Infinity) {
          vector.multiplyScalar(scale);
        } else {
          vector.set(1, 0, 0, 0);
        }
        skinWeight.setXYZW(i, vector.x, vector.y, vector.z, vector.w);
      }
    }
    updateMatrixWorld(force) {
      super.updateMatrixWorld(force);
      if (this.bindMode === AttachedBindMode) {
        this.bindMatrixInverse.copy(this.matrixWorld).invert();
      } else if (this.bindMode === DetachedBindMode) {
        this.bindMatrixInverse.copy(this.bindMatrix).invert();
      } else {
        console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
      }
    }
    applyBoneTransform(index, vector) {
      const skeleton = this.skeleton;
      const geometry = this.geometry;
      _skinIndex.fromBufferAttribute(geometry.attributes.skinIndex, index);
      _skinWeight.fromBufferAttribute(geometry.attributes.skinWeight, index);
      _basePosition.copy(vector).applyMatrix4(this.bindMatrix);
      vector.set(0, 0, 0);
      for (let i = 0; i < 4; i++) {
        const weight = _skinWeight.getComponent(i);
        if (weight !== 0) {
          const boneIndex = _skinIndex.getComponent(i);
          _matrix4.multiplyMatrices(skeleton.bones[boneIndex].matrixWorld, skeleton.boneInverses[boneIndex]);
          vector.addScaledVector(_vector3.copy(_basePosition).applyMatrix4(_matrix4), weight);
        }
      }
      return vector.applyMatrix4(this.bindMatrixInverse);
    }
  }
  class Bone extends Object3D {
    constructor() {
      super();
      this.isBone = true;
      this.type = "Bone";
    }
  }
  class DataTexture extends Texture {
    constructor(data = null, width = 1, height = 1, format, type, mapping, wrapS, wrapT, magFilter = NearestFilter, minFilter = NearestFilter, anisotropy, colorSpace) {
      super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace);
      this.isDataTexture = true;
      this.image = { data, width, height };
      this.generateMipmaps = false;
      this.flipY = false;
      this.unpackAlignment = 1;
    }
  }
  const _offsetMatrix = /* @__PURE__ */ new Matrix4();
  const _identityMatrix$1 = /* @__PURE__ */ new Matrix4();
  class Skeleton {
    constructor(bones = [], boneInverses = []) {
      this.uuid = generateUUID();
      this.bones = bones.slice(0);
      this.boneInverses = boneInverses;
      this.boneMatrices = null;
      this.boneTexture = null;
      this.init();
    }
    init() {
      const bones = this.bones;
      const boneInverses = this.boneInverses;
      this.boneMatrices = new Float32Array(bones.length * 16);
      if (boneInverses.length === 0) {
        this.calculateInverses();
      } else {
        if (bones.length !== boneInverses.length) {
          console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.");
          this.boneInverses = [];
          for (let i = 0, il = this.bones.length; i < il; i++) {
            this.boneInverses.push(new Matrix4());
          }
        }
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let i = 0, il = this.bones.length; i < il; i++) {
        const inverse = new Matrix4();
        if (this.bones[i]) {
          inverse.copy(this.bones[i].matrixWorld).invert();
        }
        this.boneInverses.push(inverse);
      }
    }
    pose() {
      for (let i = 0, il = this.bones.length; i < il; i++) {
        const bone = this.bones[i];
        if (bone) {
          bone.matrixWorld.copy(this.boneInverses[i]).invert();
        }
      }
      for (let i = 0, il = this.bones.length; i < il; i++) {
        const bone = this.bones[i];
        if (bone) {
          if (bone.parent && bone.parent.isBone) {
            bone.matrix.copy(bone.parent.matrixWorld).invert();
            bone.matrix.multiply(bone.matrixWorld);
          } else {
            bone.matrix.copy(bone.matrixWorld);
          }
          bone.matrix.decompose(bone.position, bone.quaternion, bone.scale);
        }
      }
    }
    update() {
      const bones = this.bones;
      const boneInverses = this.boneInverses;
      const boneMatrices = this.boneMatrices;
      const boneTexture = this.boneTexture;
      for (let i = 0, il = bones.length; i < il; i++) {
        const matrix = bones[i] ? bones[i].matrixWorld : _identityMatrix$1;
        _offsetMatrix.multiplyMatrices(matrix, boneInverses[i]);
        _offsetMatrix.toArray(boneMatrices, i * 16);
      }
      if (boneTexture !== null) {
        boneTexture.needsUpdate = true;
      }
    }
    clone() {
      return new Skeleton(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let size = Math.sqrt(this.bones.length * 4);
      size = Math.ceil(size / 4) * 4;
      size = Math.max(size, 4);
      const boneMatrices = new Float32Array(size * size * 4);
      boneMatrices.set(this.boneMatrices);
      const boneTexture = new DataTexture(boneMatrices, size, size, RGBAFormat, FloatType);
      boneTexture.needsUpdate = true;
      this.boneMatrices = boneMatrices;
      this.boneTexture = boneTexture;
      return this;
    }
    getBoneByName(name) {
      for (let i = 0, il = this.bones.length; i < il; i++) {
        const bone = this.bones[i];
        if (bone.name === name) {
          return bone;
        }
      }
      return void 0;
    }
    dispose() {
      if (this.boneTexture !== null) {
        this.boneTexture.dispose();
        this.boneTexture = null;
      }
    }
    fromJSON(json, bones) {
      this.uuid = json.uuid;
      for (let i = 0, l = json.bones.length; i < l; i++) {
        const uuid = json.bones[i];
        let bone = bones[uuid];
        if (bone === void 0) {
          console.warn("THREE.Skeleton: No bone found with UUID:", uuid);
          bone = new Bone();
        }
        this.bones.push(bone);
        this.boneInverses.push(new Matrix4().fromArray(json.boneInverses[i]));
      }
      this.init();
      return this;
    }
    toJSON() {
      const data = {
        metadata: {
          version: 4.6,
          type: "Skeleton",
          generator: "Skeleton.toJSON"
        },
        bones: [],
        boneInverses: []
      };
      data.uuid = this.uuid;
      const bones = this.bones;
      const boneInverses = this.boneInverses;
      for (let i = 0, l = bones.length; i < l; i++) {
        const bone = bones[i];
        data.bones.push(bone.uuid);
        const boneInverse = boneInverses[i];
        data.boneInverses.push(boneInverse.toArray());
      }
      return data;
    }
  }
  class InstancedBufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized, meshPerAttribute = 1) {
      super(array, itemSize, normalized);
      this.isInstancedBufferAttribute = true;
      this.meshPerAttribute = meshPerAttribute;
    }
    copy(source) {
      super.copy(source);
      this.meshPerAttribute = source.meshPerAttribute;
      return this;
    }
    toJSON() {
      const data = super.toJSON();
      data.meshPerAttribute = this.meshPerAttribute;
      data.isInstancedBufferAttribute = true;
      return data;
    }
  }
  const _instanceLocalMatrix = /* @__PURE__ */ new Matrix4();
  const _instanceWorldMatrix = /* @__PURE__ */ new Matrix4();
  const _instanceIntersects = [];
  const _box3 = /* @__PURE__ */ new Box3();
  const _identity = /* @__PURE__ */ new Matrix4();
  const _mesh$1 = /* @__PURE__ */ new Mesh();
  const _sphere$3 = /* @__PURE__ */ new Sphere();
  class InstancedMesh extends Mesh {
    constructor(geometry, material, count) {
      super(geometry, material);
      this.isInstancedMesh = true;
      this.instanceMatrix = new InstancedBufferAttribute(new Float32Array(count * 16), 16);
      this.instanceColor = null;
      this.morphTexture = null;
      this.count = count;
      this.boundingBox = null;
      this.boundingSphere = null;
      for (let i = 0; i < count; i++) {
        this.setMatrixAt(i, _identity);
      }
    }
    computeBoundingBox() {
      const geometry = this.geometry;
      const count = this.count;
      if (this.boundingBox === null) {
        this.boundingBox = new Box3();
      }
      if (geometry.boundingBox === null) {
        geometry.computeBoundingBox();
      }
      this.boundingBox.makeEmpty();
      for (let i = 0; i < count; i++) {
        this.getMatrixAt(i, _instanceLocalMatrix);
        _box3.copy(geometry.boundingBox).applyMatrix4(_instanceLocalMatrix);
        this.boundingBox.union(_box3);
      }
    }
    computeBoundingSphere() {
      const geometry = this.geometry;
      const count = this.count;
      if (this.boundingSphere === null) {
        this.boundingSphere = new Sphere();
      }
      if (geometry.boundingSphere === null) {
        geometry.computeBoundingSphere();
      }
      this.boundingSphere.makeEmpty();
      for (let i = 0; i < count; i++) {
        this.getMatrixAt(i, _instanceLocalMatrix);
        _sphere$3.copy(geometry.boundingSphere).applyMatrix4(_instanceLocalMatrix);
        this.boundingSphere.union(_sphere$3);
      }
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.instanceMatrix.copy(source.instanceMatrix);
      if (source.morphTexture !== null) this.morphTexture = source.morphTexture.clone();
      if (source.instanceColor !== null) this.instanceColor = source.instanceColor.clone();
      this.count = source.count;
      if (source.boundingBox !== null) this.boundingBox = source.boundingBox.clone();
      if (source.boundingSphere !== null) this.boundingSphere = source.boundingSphere.clone();
      return this;
    }
    getColorAt(index, color2) {
      color2.fromArray(this.instanceColor.array, index * 3);
    }
    getMatrixAt(index, matrix) {
      matrix.fromArray(this.instanceMatrix.array, index * 16);
    }
    getMorphAt(index, object) {
      const objectInfluences = object.morphTargetInfluences;
      const array = this.morphTexture.source.data.data;
      const len = objectInfluences.length + 1;
      const dataIndex = index * len + 1;
      for (let i = 0; i < objectInfluences.length; i++) {
        objectInfluences[i] = array[dataIndex + i];
      }
    }
    raycast(raycaster, intersects) {
      const matrixWorld = this.matrixWorld;
      const raycastTimes = this.count;
      _mesh$1.geometry = this.geometry;
      _mesh$1.material = this.material;
      if (_mesh$1.material === void 0) return;
      if (this.boundingSphere === null) this.computeBoundingSphere();
      _sphere$3.copy(this.boundingSphere);
      _sphere$3.applyMatrix4(matrixWorld);
      if (raycaster.ray.intersectsSphere(_sphere$3) === false) return;
      for (let instanceId = 0; instanceId < raycastTimes; instanceId++) {
        this.getMatrixAt(instanceId, _instanceLocalMatrix);
        _instanceWorldMatrix.multiplyMatrices(matrixWorld, _instanceLocalMatrix);
        _mesh$1.matrixWorld = _instanceWorldMatrix;
        _mesh$1.raycast(raycaster, _instanceIntersects);
        for (let i = 0, l = _instanceIntersects.length; i < l; i++) {
          const intersect = _instanceIntersects[i];
          intersect.instanceId = instanceId;
          intersect.object = this;
          intersects.push(intersect);
        }
        _instanceIntersects.length = 0;
      }
    }
    setColorAt(index, color2) {
      if (this.instanceColor === null) {
        this.instanceColor = new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3);
      }
      color2.toArray(this.instanceColor.array, index * 3);
    }
    setMatrixAt(index, matrix) {
      matrix.toArray(this.instanceMatrix.array, index * 16);
    }
    setMorphAt(index, object) {
      const objectInfluences = object.morphTargetInfluences;
      const len = objectInfluences.length + 1;
      if (this.morphTexture === null) {
        this.morphTexture = new DataTexture(new Float32Array(len * this.count), len, this.count, RedFormat, FloatType);
      }
      const array = this.morphTexture.source.data.data;
      let morphInfluencesSum = 0;
      for (let i = 0; i < objectInfluences.length; i++) {
        morphInfluencesSum += objectInfluences[i];
      }
      const morphBaseInfluence = this.geometry.morphTargetsRelative ? 1 : 1 - morphInfluencesSum;
      const dataIndex = len * index;
      array[dataIndex] = morphBaseInfluence;
      array.set(objectInfluences, dataIndex + 1);
    }
    updateMorphTargets() {
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
      if (this.morphTexture !== null) {
        this.morphTexture.dispose();
        this.morphTexture = null;
      }
      return this;
    }
  }
  class LineBasicMaterial extends Material {
    constructor(parameters) {
      super();
      this.isLineBasicMaterial = true;
      this.type = "LineBasicMaterial";
      this.color = new Color(16777215);
      this.map = null;
      this.linewidth = 1;
      this.linecap = "round";
      this.linejoin = "round";
      this.fog = true;
      this.setValues(parameters);
    }
    copy(source) {
      super.copy(source);
      this.color.copy(source.color);
      this.map = source.map;
      this.linewidth = source.linewidth;
      this.linecap = source.linecap;
      this.linejoin = source.linejoin;
      this.fog = source.fog;
      return this;
    }
  }
  const _vStart = /* @__PURE__ */ new Vector3();
  const _vEnd = /* @__PURE__ */ new Vector3();
  const _inverseMatrix$1 = /* @__PURE__ */ new Matrix4();
  const _ray$1 = /* @__PURE__ */ new Ray();
  const _sphere$1 = /* @__PURE__ */ new Sphere();
  const _intersectPointOnRay = /* @__PURE__ */ new Vector3();
  const _intersectPointOnSegment = /* @__PURE__ */ new Vector3();
  class Line extends Object3D {
    constructor(geometry = new BufferGeometry(), material = new LineBasicMaterial()) {
      super();
      this.isLine = true;
      this.type = "Line";
      this.geometry = geometry;
      this.material = material;
      this.updateMorphTargets();
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.material = Array.isArray(source.material) ? source.material.slice() : source.material;
      this.geometry = source.geometry;
      return this;
    }
    computeLineDistances() {
      const geometry = this.geometry;
      if (geometry.index === null) {
        const positionAttribute = geometry.attributes.position;
        const lineDistances = [0];
        for (let i = 1, l = positionAttribute.count; i < l; i++) {
          _vStart.fromBufferAttribute(positionAttribute, i - 1);
          _vEnd.fromBufferAttribute(positionAttribute, i);
          lineDistances[i] = lineDistances[i - 1];
          lineDistances[i] += _vStart.distanceTo(_vEnd);
        }
        geometry.setAttribute("lineDistance", new Float32BufferAttribute(lineDistances, 1));
      } else {
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      }
      return this;
    }
    raycast(raycaster, intersects) {
      const geometry = this.geometry;
      const matrixWorld = this.matrixWorld;
      const threshold = raycaster.params.Line.threshold;
      const drawRange = geometry.drawRange;
      if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
      _sphere$1.copy(geometry.boundingSphere);
      _sphere$1.applyMatrix4(matrixWorld);
      _sphere$1.radius += threshold;
      if (raycaster.ray.intersectsSphere(_sphere$1) === false) return;
      _inverseMatrix$1.copy(matrixWorld).invert();
      _ray$1.copy(raycaster.ray).applyMatrix4(_inverseMatrix$1);
      const localThreshold = threshold / ((this.scale.x + this.scale.y + this.scale.z) / 3);
      const localThresholdSq = localThreshold * localThreshold;
      const step2 = this.isLineSegments ? 2 : 1;
      const index = geometry.index;
      const attributes = geometry.attributes;
      const positionAttribute = attributes.position;
      if (index !== null) {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(index.count, drawRange.start + drawRange.count);
        for (let i = start, l = end - 1; i < l; i += step2) {
          const a = index.getX(i);
          const b = index.getX(i + 1);
          const intersect = checkIntersection(this, raycaster, _ray$1, localThresholdSq, a, b);
          if (intersect) {
            intersects.push(intersect);
          }
        }
        if (this.isLineLoop) {
          const a = index.getX(end - 1);
          const b = index.getX(start);
          const intersect = checkIntersection(this, raycaster, _ray$1, localThresholdSq, a, b);
          if (intersect) {
            intersects.push(intersect);
          }
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(positionAttribute.count, drawRange.start + drawRange.count);
        for (let i = start, l = end - 1; i < l; i += step2) {
          const intersect = checkIntersection(this, raycaster, _ray$1, localThresholdSq, i, i + 1);
          if (intersect) {
            intersects.push(intersect);
          }
        }
        if (this.isLineLoop) {
          const intersect = checkIntersection(this, raycaster, _ray$1, localThresholdSq, end - 1, start);
          if (intersect) {
            intersects.push(intersect);
          }
        }
      }
    }
    updateMorphTargets() {
      const geometry = this.geometry;
      const morphAttributes = geometry.morphAttributes;
      const keys = Object.keys(morphAttributes);
      if (keys.length > 0) {
        const morphAttribute = morphAttributes[keys[0]];
        if (morphAttribute !== void 0) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
            const name = morphAttribute[m].name || String(m);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[name] = m;
          }
        }
      }
    }
  }
  function checkIntersection(object, raycaster, ray, thresholdSq, a, b) {
    const positionAttribute = object.geometry.attributes.position;
    _vStart.fromBufferAttribute(positionAttribute, a);
    _vEnd.fromBufferAttribute(positionAttribute, b);
    const distSq = ray.distanceSqToSegment(_vStart, _vEnd, _intersectPointOnRay, _intersectPointOnSegment);
    if (distSq > thresholdSq) return;
    _intersectPointOnRay.applyMatrix4(object.matrixWorld);
    const distance2 = raycaster.ray.origin.distanceTo(_intersectPointOnRay);
    if (distance2 < raycaster.near || distance2 > raycaster.far) return;
    return {
      distance: distance2,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: _intersectPointOnSegment.clone().applyMatrix4(object.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object
    };
  }
  const _start = /* @__PURE__ */ new Vector3();
  const _end = /* @__PURE__ */ new Vector3();
  class LineSegments extends Line {
    constructor(geometry, material) {
      super(geometry, material);
      this.isLineSegments = true;
      this.type = "LineSegments";
    }
    computeLineDistances() {
      const geometry = this.geometry;
      if (geometry.index === null) {
        const positionAttribute = geometry.attributes.position;
        const lineDistances = [];
        for (let i = 0, l = positionAttribute.count; i < l; i += 2) {
          _start.fromBufferAttribute(positionAttribute, i);
          _end.fromBufferAttribute(positionAttribute, i + 1);
          lineDistances[i] = i === 0 ? 0 : lineDistances[i - 1];
          lineDistances[i + 1] = lineDistances[i] + _start.distanceTo(_end);
        }
        geometry.setAttribute("lineDistance", new Float32BufferAttribute(lineDistances, 1));
      } else {
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      }
      return this;
    }
  }
  class LineLoop extends Line {
    constructor(geometry, material) {
      super(geometry, material);
      this.isLineLoop = true;
      this.type = "LineLoop";
    }
  }
  class PointsMaterial extends Material {
    constructor(parameters) {
      super();
      this.isPointsMaterial = true;
      this.type = "PointsMaterial";
      this.color = new Color(16777215);
      this.map = null;
      this.alphaMap = null;
      this.size = 1;
      this.sizeAttenuation = true;
      this.fog = true;
      this.setValues(parameters);
    }
    copy(source) {
      super.copy(source);
      this.color.copy(source.color);
      this.map = source.map;
      this.alphaMap = source.alphaMap;
      this.size = source.size;
      this.sizeAttenuation = source.sizeAttenuation;
      this.fog = source.fog;
      return this;
    }
  }
  const _inverseMatrix = /* @__PURE__ */ new Matrix4();
  const _ray = /* @__PURE__ */ new Ray();
  const _sphere = /* @__PURE__ */ new Sphere();
  const _position$2 = /* @__PURE__ */ new Vector3();
  class Points extends Object3D {
    constructor(geometry = new BufferGeometry(), material = new PointsMaterial()) {
      super();
      this.isPoints = true;
      this.type = "Points";
      this.geometry = geometry;
      this.material = material;
      this.updateMorphTargets();
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.material = Array.isArray(source.material) ? source.material.slice() : source.material;
      this.geometry = source.geometry;
      return this;
    }
    raycast(raycaster, intersects) {
      const geometry = this.geometry;
      const matrixWorld = this.matrixWorld;
      const threshold = raycaster.params.Points.threshold;
      const drawRange = geometry.drawRange;
      if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
      _sphere.copy(geometry.boundingSphere);
      _sphere.applyMatrix4(matrixWorld);
      _sphere.radius += threshold;
      if (raycaster.ray.intersectsSphere(_sphere) === false) return;
      _inverseMatrix.copy(matrixWorld).invert();
      _ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix);
      const localThreshold = threshold / ((this.scale.x + this.scale.y + this.scale.z) / 3);
      const localThresholdSq = localThreshold * localThreshold;
      const index = geometry.index;
      const attributes = geometry.attributes;
      const positionAttribute = attributes.position;
      if (index !== null) {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(index.count, drawRange.start + drawRange.count);
        for (let i = start, il = end; i < il; i++) {
          const a = index.getX(i);
          _position$2.fromBufferAttribute(positionAttribute, a);
          testPoint(_position$2, a, localThresholdSq, matrixWorld, raycaster, intersects, this);
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(positionAttribute.count, drawRange.start + drawRange.count);
        for (let i = start, l = end; i < l; i++) {
          _position$2.fromBufferAttribute(positionAttribute, i);
          testPoint(_position$2, i, localThresholdSq, matrixWorld, raycaster, intersects, this);
        }
      }
    }
    updateMorphTargets() {
      const geometry = this.geometry;
      const morphAttributes = geometry.morphAttributes;
      const keys = Object.keys(morphAttributes);
      if (keys.length > 0) {
        const morphAttribute = morphAttributes[keys[0]];
        if (morphAttribute !== void 0) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
            const name = morphAttribute[m].name || String(m);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[name] = m;
          }
        }
      }
    }
  }
  function testPoint(point, index, localThresholdSq, matrixWorld, raycaster, intersects, object) {
    const rayPointDistanceSq = _ray.distanceSqToPoint(point);
    if (rayPointDistanceSq < localThresholdSq) {
      const intersectPoint = new Vector3();
      _ray.closestPointToPoint(point, intersectPoint);
      intersectPoint.applyMatrix4(matrixWorld);
      const distance2 = raycaster.ray.origin.distanceTo(intersectPoint);
      if (distance2 < raycaster.near || distance2 > raycaster.far) return;
      intersects.push({
        distance: distance2,
        distanceToRay: Math.sqrt(rayPointDistanceSq),
        point: intersectPoint,
        index,
        face: null,
        faceIndex: null,
        barycoord: null,
        object
      });
    }
  }
  class FramebufferTexture extends Texture {
    constructor(width, height) {
      super({ width, height });
      this.isFramebufferTexture = true;
      this.magFilter = NearestFilter;
      this.minFilter = NearestFilter;
      this.generateMipmaps = false;
      this.needsUpdate = true;
    }
  }
  class CompressedTexture extends Texture {
    constructor(mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, colorSpace) {
      super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace);
      this.isCompressedTexture = true;
      this.image = { width, height };
      this.mipmaps = mipmaps;
      this.flipY = false;
      this.generateMipmaps = false;
    }
  }
  class CompressedArrayTexture extends CompressedTexture {
    constructor(mipmaps, width, height, depth2, format, type) {
      super(mipmaps, width, height, format, type);
      this.isCompressedArrayTexture = true;
      this.image.depth = depth2;
      this.wrapR = ClampToEdgeWrapping;
      this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(layerIndex) {
      this.layerUpdates.add(layerIndex);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  }
  class CompressedCubeTexture extends CompressedTexture {
    constructor(images, format, type) {
      super(void 0, images[0].width, images[0].height, format, type, CubeReflectionMapping);
      this.isCompressedCubeTexture = true;
      this.isCubeTexture = true;
      this.image = images;
    }
  }
  class MeshStandardMaterial extends Material {
    constructor(parameters) {
      super();
      this.isMeshStandardMaterial = true;
      this.defines = { "STANDARD": "" };
      this.type = "MeshStandardMaterial";
      this.color = new Color(16777215);
      this.roughness = 1;
      this.metalness = 0;
      this.map = null;
      this.lightMap = null;
      this.lightMapIntensity = 1;
      this.aoMap = null;
      this.aoMapIntensity = 1;
      this.emissive = new Color(0);
      this.emissiveIntensity = 1;
      this.emissiveMap = null;
      this.bumpMap = null;
      this.bumpScale = 1;
      this.normalMap = null;
      this.normalMapType = TangentSpaceNormalMap;
      this.normalScale = new Vector2(1, 1);
      this.displacementMap = null;
      this.displacementScale = 1;
      this.displacementBias = 0;
      this.roughnessMap = null;
      this.metalnessMap = null;
      this.alphaMap = null;
      this.envMap = null;
      this.envMapRotation = new Euler();
      this.envMapIntensity = 1;
      this.wireframe = false;
      this.wireframeLinewidth = 1;
      this.wireframeLinecap = "round";
      this.wireframeLinejoin = "round";
      this.flatShading = false;
      this.fog = true;
      this.setValues(parameters);
    }
    copy(source) {
      super.copy(source);
      this.defines = { "STANDARD": "" };
      this.color.copy(source.color);
      this.roughness = source.roughness;
      this.metalness = source.metalness;
      this.map = source.map;
      this.lightMap = source.lightMap;
      this.lightMapIntensity = source.lightMapIntensity;
      this.aoMap = source.aoMap;
      this.aoMapIntensity = source.aoMapIntensity;
      this.emissive.copy(source.emissive);
      this.emissiveMap = source.emissiveMap;
      this.emissiveIntensity = source.emissiveIntensity;
      this.bumpMap = source.bumpMap;
      this.bumpScale = source.bumpScale;
      this.normalMap = source.normalMap;
      this.normalMapType = source.normalMapType;
      this.normalScale.copy(source.normalScale);
      this.displacementMap = source.displacementMap;
      this.displacementScale = source.displacementScale;
      this.displacementBias = source.displacementBias;
      this.roughnessMap = source.roughnessMap;
      this.metalnessMap = source.metalnessMap;
      this.alphaMap = source.alphaMap;
      this.envMap = source.envMap;
      this.envMapRotation.copy(source.envMapRotation);
      this.envMapIntensity = source.envMapIntensity;
      this.wireframe = source.wireframe;
      this.wireframeLinewidth = source.wireframeLinewidth;
      this.wireframeLinecap = source.wireframeLinecap;
      this.wireframeLinejoin = source.wireframeLinejoin;
      this.flatShading = source.flatShading;
      this.fog = source.fog;
      return this;
    }
  }
  class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(parameters) {
      super();
      this.isMeshPhysicalMaterial = true;
      this.defines = {
        "STANDARD": "",
        "PHYSICAL": ""
      };
      this.type = "MeshPhysicalMaterial";
      this.anisotropyRotation = 0;
      this.anisotropyMap = null;
      this.clearcoatMap = null;
      this.clearcoatRoughness = 0;
      this.clearcoatRoughnessMap = null;
      this.clearcoatNormalScale = new Vector2(1, 1);
      this.clearcoatNormalMap = null;
      this.ior = 1.5;
      Object.defineProperty(this, "reflectivity", {
        get: function() {
          return clamp$1(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
        },
        set: function(reflectivity) {
          this.ior = (1 + 0.4 * reflectivity) / (1 - 0.4 * reflectivity);
        }
      });
      this.iridescenceMap = null;
      this.iridescenceIOR = 1.3;
      this.iridescenceThicknessRange = [100, 400];
      this.iridescenceThicknessMap = null;
      this.sheenColor = new Color(0);
      this.sheenColorMap = null;
      this.sheenRoughness = 1;
      this.sheenRoughnessMap = null;
      this.transmissionMap = null;
      this.thickness = 0;
      this.thicknessMap = null;
      this.attenuationDistance = Infinity;
      this.attenuationColor = new Color(1, 1, 1);
      this.specularIntensity = 1;
      this.specularIntensityMap = null;
      this.specularColor = new Color(1, 1, 1);
      this.specularColorMap = null;
      this._anisotropy = 0;
      this._clearcoat = 0;
      this._dispersion = 0;
      this._iridescence = 0;
      this._sheen = 0;
      this._transmission = 0;
      this.setValues(parameters);
    }
    get anisotropy() {
      return this._anisotropy;
    }
    set anisotropy(value) {
      if (this._anisotropy > 0 !== value > 0) {
        this.version++;
      }
      this._anisotropy = value;
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(value) {
      if (this._clearcoat > 0 !== value > 0) {
        this.version++;
      }
      this._clearcoat = value;
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(value) {
      if (this._iridescence > 0 !== value > 0) {
        this.version++;
      }
      this._iridescence = value;
    }
    get dispersion() {
      return this._dispersion;
    }
    set dispersion(value) {
      if (this._dispersion > 0 !== value > 0) {
        this.version++;
      }
      this._dispersion = value;
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(value) {
      if (this._sheen > 0 !== value > 0) {
        this.version++;
      }
      this._sheen = value;
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(value) {
      if (this._transmission > 0 !== value > 0) {
        this.version++;
      }
      this._transmission = value;
    }
    copy(source) {
      super.copy(source);
      this.defines = {
        "STANDARD": "",
        "PHYSICAL": ""
      };
      this.anisotropy = source.anisotropy;
      this.anisotropyRotation = source.anisotropyRotation;
      this.anisotropyMap = source.anisotropyMap;
      this.clearcoat = source.clearcoat;
      this.clearcoatMap = source.clearcoatMap;
      this.clearcoatRoughness = source.clearcoatRoughness;
      this.clearcoatRoughnessMap = source.clearcoatRoughnessMap;
      this.clearcoatNormalMap = source.clearcoatNormalMap;
      this.clearcoatNormalScale.copy(source.clearcoatNormalScale);
      this.dispersion = source.dispersion;
      this.ior = source.ior;
      this.iridescence = source.iridescence;
      this.iridescenceMap = source.iridescenceMap;
      this.iridescenceIOR = source.iridescenceIOR;
      this.iridescenceThicknessRange = [...source.iridescenceThicknessRange];
      this.iridescenceThicknessMap = source.iridescenceThicknessMap;
      this.sheen = source.sheen;
      this.sheenColor.copy(source.sheenColor);
      this.sheenColorMap = source.sheenColorMap;
      this.sheenRoughness = source.sheenRoughness;
      this.sheenRoughnessMap = source.sheenRoughnessMap;
      this.transmission = source.transmission;
      this.transmissionMap = source.transmissionMap;
      this.thickness = source.thickness;
      this.thicknessMap = source.thicknessMap;
      this.attenuationDistance = source.attenuationDistance;
      this.attenuationColor.copy(source.attenuationColor);
      this.specularIntensity = source.specularIntensity;
      this.specularIntensityMap = source.specularIntensityMap;
      this.specularColor.copy(source.specularColor);
      this.specularColorMap = source.specularColorMap;
      return this;
    }
  }
  function convertArray(array, type, forceClone) {
    if (!array || // let 'undefined' and 'null' pass
    !forceClone && array.constructor === type) return array;
    if (typeof type.BYTES_PER_ELEMENT === "number") {
      return new type(array);
    }
    return Array.prototype.slice.call(array);
  }
  function isTypedArray(object) {
    return ArrayBuffer.isView(object) && !(object instanceof DataView);
  }
  function getKeyframeOrder(times) {
    function compareTime(i, j) {
      return times[i] - times[j];
    }
    const n2 = times.length;
    const result = new Array(n2);
    for (let i = 0; i !== n2; ++i) result[i] = i;
    result.sort(compareTime);
    return result;
  }
  function sortedArray(values, stride, order) {
    const nValues = values.length;
    const result = new values.constructor(nValues);
    for (let i = 0, dstOffset = 0; dstOffset !== nValues; ++i) {
      const srcOffset = order[i] * stride;
      for (let j = 0; j !== stride; ++j) {
        result[dstOffset++] = values[srcOffset + j];
      }
    }
    return result;
  }
  function flattenJSON(jsonKeys, times, values, valuePropertyName) {
    let i = 1, key = jsonKeys[0];
    while (key !== void 0 && key[valuePropertyName] === void 0) {
      key = jsonKeys[i++];
    }
    if (key === void 0) return;
    let value = key[valuePropertyName];
    if (value === void 0) return;
    if (Array.isArray(value)) {
      do {
        value = key[valuePropertyName];
        if (value !== void 0) {
          times.push(key.time);
          values.push.apply(values, value);
        }
        key = jsonKeys[i++];
      } while (key !== void 0);
    } else if (value.toArray !== void 0) {
      do {
        value = key[valuePropertyName];
        if (value !== void 0) {
          times.push(key.time);
          value.toArray(values, values.length);
        }
        key = jsonKeys[i++];
      } while (key !== void 0);
    } else {
      do {
        value = key[valuePropertyName];
        if (value !== void 0) {
          times.push(key.time);
          values.push(value);
        }
        key = jsonKeys[i++];
      } while (key !== void 0);
    }
  }
  class Interpolant {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
      this.parameterPositions = parameterPositions;
      this._cachedIndex = 0;
      this.resultBuffer = resultBuffer !== void 0 ? resultBuffer : new sampleValues.constructor(sampleSize);
      this.sampleValues = sampleValues;
      this.valueSize = sampleSize;
      this.settings = null;
      this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const pp = this.parameterPositions;
      let i1 = this._cachedIndex, t1 = pp[i1], t0 = pp[i1 - 1];
      validate_interval: {
        seek: {
          let right;
          linear_scan: {
            forward_scan: if (!(t2 < t1)) {
              for (let giveUpAt = i1 + 2; ; ) {
                if (t1 === void 0) {
                  if (t2 < t0) break forward_scan;
                  i1 = pp.length;
                  this._cachedIndex = i1;
                  return this.copySampleValue_(i1 - 1);
                }
                if (i1 === giveUpAt) break;
                t0 = t1;
                t1 = pp[++i1];
                if (t2 < t1) {
                  break seek;
                }
              }
              right = pp.length;
              break linear_scan;
            }
            if (!(t2 >= t0)) {
              const t1global = pp[1];
              if (t2 < t1global) {
                i1 = 2;
                t0 = t1global;
              }
              for (let giveUpAt = i1 - 2; ; ) {
                if (t0 === void 0) {
                  this._cachedIndex = 0;
                  return this.copySampleValue_(0);
                }
                if (i1 === giveUpAt) break;
                t1 = t0;
                t0 = pp[--i1 - 1];
                if (t2 >= t0) {
                  break seek;
                }
              }
              right = i1;
              i1 = 0;
              break linear_scan;
            }
            break validate_interval;
          }
          while (i1 < right) {
            const mid = i1 + right >>> 1;
            if (t2 < pp[mid]) {
              right = mid;
            } else {
              i1 = mid + 1;
            }
          }
          t1 = pp[i1];
          t0 = pp[i1 - 1];
          if (t0 === void 0) {
            this._cachedIndex = 0;
            return this.copySampleValue_(0);
          }
          if (t1 === void 0) {
            i1 = pp.length;
            this._cachedIndex = i1;
            return this.copySampleValue_(i1 - 1);
          }
        }
        this._cachedIndex = i1;
        this.intervalChanged_(i1, t0, t1);
      }
      return this.interpolate_(i1, t0, t2, t1);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(index) {
      const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset = index * stride;
      for (let i = 0; i !== stride; ++i) {
        result[i] = values[offset + i];
      }
      return result;
    }
    // Template methods for derived classes:
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  }
  class CubicInterpolant extends Interpolant {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
      super(parameterPositions, sampleValues, sampleSize, resultBuffer);
      this._weightPrev = -0;
      this._offsetPrev = -0;
      this._weightNext = -0;
      this._offsetNext = -0;
      this.DefaultSettings_ = {
        endingStart: ZeroCurvatureEnding,
        endingEnd: ZeroCurvatureEnding
      };
    }
    intervalChanged_(i1, t0, t1) {
      const pp = this.parameterPositions;
      let iPrev = i1 - 2, iNext = i1 + 1, tPrev = pp[iPrev], tNext = pp[iNext];
      if (tPrev === void 0) {
        switch (this.getSettings_().endingStart) {
          case ZeroSlopeEnding:
            iPrev = i1;
            tPrev = 2 * t0 - t1;
            break;
          case WrapAroundEnding:
            iPrev = pp.length - 2;
            tPrev = t0 + pp[iPrev] - pp[iPrev + 1];
            break;
          default:
            iPrev = i1;
            tPrev = t1;
        }
      }
      if (tNext === void 0) {
        switch (this.getSettings_().endingEnd) {
          case ZeroSlopeEnding:
            iNext = i1;
            tNext = 2 * t1 - t0;
            break;
          case WrapAroundEnding:
            iNext = 1;
            tNext = t1 + pp[1] - pp[0];
            break;
          default:
            iNext = i1 - 1;
            tNext = t0;
        }
      }
      const halfDt = (t1 - t0) * 0.5, stride = this.valueSize;
      this._weightPrev = halfDt / (t0 - tPrev);
      this._weightNext = halfDt / (tNext - t1);
      this._offsetPrev = iPrev * stride;
      this._offsetNext = iNext * stride;
    }
    interpolate_(i1, t0, t2, t1) {
      const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, o1 = i1 * stride, o0 = o1 - stride, oP = this._offsetPrev, oN = this._offsetNext, wP = this._weightPrev, wN = this._weightNext, p = (t2 - t0) / (t1 - t0), pp = p * p, ppp = pp * p;
      const sP = -wP * ppp + 2 * wP * pp - wP * p;
      const s0 = (1 + wP) * ppp + (-1.5 - 2 * wP) * pp + (-0.5 + wP) * p + 1;
      const s1 = (-1 - wN) * ppp + (1.5 + wN) * pp + 0.5 * p;
      const sN = wN * ppp - wN * pp;
      for (let i = 0; i !== stride; ++i) {
        result[i] = sP * values[oP + i] + s0 * values[o0 + i] + s1 * values[o1 + i] + sN * values[oN + i];
      }
      return result;
    }
  }
  class LinearInterpolant extends Interpolant {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
      super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    interpolate_(i1, t0, t2, t1) {
      const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset1 = i1 * stride, offset0 = offset1 - stride, weight1 = (t2 - t0) / (t1 - t0), weight0 = 1 - weight1;
      for (let i = 0; i !== stride; ++i) {
        result[i] = values[offset0 + i] * weight0 + values[offset1 + i] * weight1;
      }
      return result;
    }
  }
  class DiscreteInterpolant extends Interpolant {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
      super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    interpolate_(i1) {
      return this.copySampleValue_(i1 - 1);
    }
  }
  class KeyframeTrack {
    constructor(name, times, values, interpolation) {
      if (name === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (times === void 0 || times.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + name);
      this.name = name;
      this.times = convertArray(times, this.TimeBufferType);
      this.values = convertArray(values, this.ValueBufferType);
      this.setInterpolation(interpolation || this.DefaultInterpolation);
    }
    // Serialization (in static context, because of constructor invocation
    // and automatic invocation of .toJSON):
    static toJSON(track) {
      const trackType = track.constructor;
      let json;
      if (trackType.toJSON !== this.toJSON) {
        json = trackType.toJSON(track);
      } else {
        json = {
          "name": track.name,
          "times": convertArray(track.times, Array),
          "values": convertArray(track.values, Array)
        };
        const interpolation = track.getInterpolation();
        if (interpolation !== track.DefaultInterpolation) {
          json.interpolation = interpolation;
        }
      }
      json.type = track.ValueTypeName;
      return json;
    }
    InterpolantFactoryMethodDiscrete(result) {
      return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), result);
    }
    InterpolantFactoryMethodLinear(result) {
      return new LinearInterpolant(this.times, this.values, this.getValueSize(), result);
    }
    InterpolantFactoryMethodSmooth(result) {
      return new CubicInterpolant(this.times, this.values, this.getValueSize(), result);
    }
    setInterpolation(interpolation) {
      let factoryMethod;
      switch (interpolation) {
        case InterpolateDiscrete:
          factoryMethod = this.InterpolantFactoryMethodDiscrete;
          break;
        case InterpolateLinear:
          factoryMethod = this.InterpolantFactoryMethodLinear;
          break;
        case InterpolateSmooth:
          factoryMethod = this.InterpolantFactoryMethodSmooth;
          break;
      }
      if (factoryMethod === void 0) {
        const message = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (this.createInterpolant === void 0) {
          if (interpolation !== this.DefaultInterpolation) {
            this.setInterpolation(this.DefaultInterpolation);
          } else {
            throw new Error(message);
          }
        }
        console.warn("THREE.KeyframeTrack:", message);
        return this;
      }
      this.createInterpolant = factoryMethod;
      return this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return InterpolateDiscrete;
        case this.InterpolantFactoryMethodLinear:
          return InterpolateLinear;
        case this.InterpolantFactoryMethodSmooth:
          return InterpolateSmooth;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    // move all keyframes either forwards or backwards in time
    shift(timeOffset) {
      if (timeOffset !== 0) {
        const times = this.times;
        for (let i = 0, n2 = times.length; i !== n2; ++i) {
          times[i] += timeOffset;
        }
      }
      return this;
    }
    // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
    scale(timeScale) {
      if (timeScale !== 1) {
        const times = this.times;
        for (let i = 0, n2 = times.length; i !== n2; ++i) {
          times[i] *= timeScale;
        }
      }
      return this;
    }
    // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
    // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
    trim(startTime, endTime) {
      const times = this.times, nKeys = times.length;
      let from = 0, to = nKeys - 1;
      while (from !== nKeys && times[from] < startTime) {
        ++from;
      }
      while (to !== -1 && times[to] > endTime) {
        --to;
      }
      ++to;
      if (from !== 0 || to !== nKeys) {
        if (from >= to) {
          to = Math.max(to, 1);
          from = to - 1;
        }
        const stride = this.getValueSize();
        this.times = times.slice(from, to);
        this.values = this.values.slice(from * stride, to * stride);
      }
      return this;
    }
    // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
    validate() {
      let valid = true;
      const valueSize = this.getValueSize();
      if (valueSize - Math.floor(valueSize) !== 0) {
        console.error("THREE.KeyframeTrack: Invalid value size in track.", this);
        valid = false;
      }
      const times = this.times, values = this.values, nKeys = times.length;
      if (nKeys === 0) {
        console.error("THREE.KeyframeTrack: Track is empty.", this);
        valid = false;
      }
      let prevTime = null;
      for (let i = 0; i !== nKeys; i++) {
        const currTime = times[i];
        if (typeof currTime === "number" && isNaN(currTime)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, i, currTime);
          valid = false;
          break;
        }
        if (prevTime !== null && prevTime > currTime) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, i, currTime, prevTime);
          valid = false;
          break;
        }
        prevTime = currTime;
      }
      if (values !== void 0) {
        if (isTypedArray(values)) {
          for (let i = 0, n2 = values.length; i !== n2; ++i) {
            const value = values[i];
            if (isNaN(value)) {
              console.error("THREE.KeyframeTrack: Value is not a valid number.", this, i, value);
              valid = false;
              break;
            }
          }
        }
      }
      return valid;
    }
    // removes equivalent sequential keys as common in morph target sequences
    // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
    optimize() {
      const times = this.times.slice(), values = this.values.slice(), stride = this.getValueSize(), smoothInterpolation = this.getInterpolation() === InterpolateSmooth, lastIndex = times.length - 1;
      let writeIndex = 1;
      for (let i = 1; i < lastIndex; ++i) {
        let keep = false;
        const time = times[i];
        const timeNext = times[i + 1];
        if (time !== timeNext && (i !== 1 || time !== times[0])) {
          if (!smoothInterpolation) {
            const offset = i * stride, offsetP = offset - stride, offsetN = offset + stride;
            for (let j = 0; j !== stride; ++j) {
              const value = values[offset + j];
              if (value !== values[offsetP + j] || value !== values[offsetN + j]) {
                keep = true;
                break;
              }
            }
          } else {
            keep = true;
          }
        }
        if (keep) {
          if (i !== writeIndex) {
            times[writeIndex] = times[i];
            const readOffset = i * stride, writeOffset = writeIndex * stride;
            for (let j = 0; j !== stride; ++j) {
              values[writeOffset + j] = values[readOffset + j];
            }
          }
          ++writeIndex;
        }
      }
      if (lastIndex > 0) {
        times[writeIndex] = times[lastIndex];
        for (let readOffset = lastIndex * stride, writeOffset = writeIndex * stride, j = 0; j !== stride; ++j) {
          values[writeOffset + j] = values[readOffset + j];
        }
        ++writeIndex;
      }
      if (writeIndex !== times.length) {
        this.times = times.slice(0, writeIndex);
        this.values = values.slice(0, writeIndex * stride);
      } else {
        this.times = times;
        this.values = values;
      }
      return this;
    }
    clone() {
      const times = this.times.slice();
      const values = this.values.slice();
      const TypedKeyframeTrack = this.constructor;
      const track = new TypedKeyframeTrack(this.name, times, values);
      track.createInterpolant = this.createInterpolant;
      return track;
    }
  }
  KeyframeTrack.prototype.TimeBufferType = Float32Array;
  KeyframeTrack.prototype.ValueBufferType = Float32Array;
  KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear;
  class BooleanKeyframeTrack extends KeyframeTrack {
    // No interpolation parameter because only InterpolateDiscrete is valid.
    constructor(name, times, values) {
      super(name, times, values);
    }
  }
  BooleanKeyframeTrack.prototype.ValueTypeName = "bool";
  BooleanKeyframeTrack.prototype.ValueBufferType = Array;
  BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
  BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
  BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
  class ColorKeyframeTrack extends KeyframeTrack {
  }
  ColorKeyframeTrack.prototype.ValueTypeName = "color";
  class NumberKeyframeTrack extends KeyframeTrack {
  }
  NumberKeyframeTrack.prototype.ValueTypeName = "number";
  class QuaternionLinearInterpolant extends Interpolant {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
      super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    interpolate_(i1, t0, t2, t1) {
      const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, alpha = (t2 - t0) / (t1 - t0);
      let offset = i1 * stride;
      for (let end = offset + stride; offset !== end; offset += 4) {
        Quaternion.slerpFlat(result, 0, values, offset - stride, values, offset, alpha);
      }
      return result;
    }
  }
  class QuaternionKeyframeTrack extends KeyframeTrack {
    InterpolantFactoryMethodLinear(result) {
      return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), result);
    }
  }
  QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion";
  QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
  class StringKeyframeTrack extends KeyframeTrack {
    // No interpolation parameter because only InterpolateDiscrete is valid.
    constructor(name, times, values) {
      super(name, times, values);
    }
  }
  StringKeyframeTrack.prototype.ValueTypeName = "string";
  StringKeyframeTrack.prototype.ValueBufferType = Array;
  StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
  StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
  StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
  class VectorKeyframeTrack extends KeyframeTrack {
  }
  VectorKeyframeTrack.prototype.ValueTypeName = "vector";
  class AnimationClip {
    constructor(name = "", duration = -1, tracks = [], blendMode = NormalAnimationBlendMode) {
      this.name = name;
      this.tracks = tracks;
      this.duration = duration;
      this.blendMode = blendMode;
      this.uuid = generateUUID();
      if (this.duration < 0) {
        this.resetDuration();
      }
    }
    static parse(json) {
      const tracks = [], jsonTracks = json.tracks, frameTime = 1 / (json.fps || 1);
      for (let i = 0, n2 = jsonTracks.length; i !== n2; ++i) {
        tracks.push(parseKeyframeTrack(jsonTracks[i]).scale(frameTime));
      }
      const clip = new this(json.name, json.duration, tracks, json.blendMode);
      clip.uuid = json.uuid;
      return clip;
    }
    static toJSON(clip) {
      const tracks = [], clipTracks = clip.tracks;
      const json = {
        "name": clip.name,
        "duration": clip.duration,
        "tracks": tracks,
        "uuid": clip.uuid,
        "blendMode": clip.blendMode
      };
      for (let i = 0, n2 = clipTracks.length; i !== n2; ++i) {
        tracks.push(KeyframeTrack.toJSON(clipTracks[i]));
      }
      return json;
    }
    static CreateFromMorphTargetSequence(name, morphTargetSequence, fps, noLoop) {
      const numMorphTargets = morphTargetSequence.length;
      const tracks = [];
      for (let i = 0; i < numMorphTargets; i++) {
        let times = [];
        let values = [];
        times.push(
          (i + numMorphTargets - 1) % numMorphTargets,
          i,
          (i + 1) % numMorphTargets
        );
        values.push(0, 1, 0);
        const order = getKeyframeOrder(times);
        times = sortedArray(times, 1, order);
        values = sortedArray(values, 1, order);
        if (!noLoop && times[0] === 0) {
          times.push(numMorphTargets);
          values.push(values[0]);
        }
        tracks.push(
          new NumberKeyframeTrack(
            ".morphTargetInfluences[" + morphTargetSequence[i].name + "]",
            times,
            values
          ).scale(1 / fps)
        );
      }
      return new this(name, -1, tracks);
    }
    static findByName(objectOrClipArray, name) {
      let clipArray = objectOrClipArray;
      if (!Array.isArray(objectOrClipArray)) {
        const o = objectOrClipArray;
        clipArray = o.geometry && o.geometry.animations || o.animations;
      }
      for (let i = 0; i < clipArray.length; i++) {
        if (clipArray[i].name === name) {
          return clipArray[i];
        }
      }
      return null;
    }
    static CreateClipsFromMorphTargetSequences(morphTargets, fps, noLoop) {
      const animationToMorphTargets = {};
      const pattern = /^([\w-]*?)([\d]+)$/;
      for (let i = 0, il = morphTargets.length; i < il; i++) {
        const morphTarget = morphTargets[i];
        const parts = morphTarget.name.match(pattern);
        if (parts && parts.length > 1) {
          const name = parts[1];
          let animationMorphTargets = animationToMorphTargets[name];
          if (!animationMorphTargets) {
            animationToMorphTargets[name] = animationMorphTargets = [];
          }
          animationMorphTargets.push(morphTarget);
        }
      }
      const clips = [];
      for (const name in animationToMorphTargets) {
        clips.push(this.CreateFromMorphTargetSequence(name, animationToMorphTargets[name], fps, noLoop));
      }
      return clips;
    }
    // parse the animation.hierarchy format
    static parseAnimation(animation, bones) {
      if (!animation) {
        console.error("THREE.AnimationClip: No animation in JSONLoader data.");
        return null;
      }
      const addNonemptyTrack = function(trackType, trackName, animationKeys, propertyName, destTracks) {
        if (animationKeys.length !== 0) {
          const times = [];
          const values = [];
          flattenJSON(animationKeys, times, values, propertyName);
          if (times.length !== 0) {
            destTracks.push(new trackType(trackName, times, values));
          }
        }
      };
      const tracks = [];
      const clipName = animation.name || "default";
      const fps = animation.fps || 30;
      const blendMode = animation.blendMode;
      let duration = animation.length || -1;
      const hierarchyTracks = animation.hierarchy || [];
      for (let h = 0; h < hierarchyTracks.length; h++) {
        const animationKeys = hierarchyTracks[h].keys;
        if (!animationKeys || animationKeys.length === 0) continue;
        if (animationKeys[0].morphTargets) {
          const morphTargetNames = {};
          let k;
          for (k = 0; k < animationKeys.length; k++) {
            if (animationKeys[k].morphTargets) {
              for (let m = 0; m < animationKeys[k].morphTargets.length; m++) {
                morphTargetNames[animationKeys[k].morphTargets[m]] = -1;
              }
            }
          }
          for (const morphTargetName in morphTargetNames) {
            const times = [];
            const values = [];
            for (let m = 0; m !== animationKeys[k].morphTargets.length; ++m) {
              const animationKey = animationKeys[k];
              times.push(animationKey.time);
              values.push(animationKey.morphTarget === morphTargetName ? 1 : 0);
            }
            tracks.push(new NumberKeyframeTrack(".morphTargetInfluence[" + morphTargetName + "]", times, values));
          }
          duration = morphTargetNames.length * fps;
        } else {
          const boneName = ".bones[" + bones[h].name + "]";
          addNonemptyTrack(
            VectorKeyframeTrack,
            boneName + ".position",
            animationKeys,
            "pos",
            tracks
          );
          addNonemptyTrack(
            QuaternionKeyframeTrack,
            boneName + ".quaternion",
            animationKeys,
            "rot",
            tracks
          );
          addNonemptyTrack(
            VectorKeyframeTrack,
            boneName + ".scale",
            animationKeys,
            "scl",
            tracks
          );
        }
      }
      if (tracks.length === 0) {
        return null;
      }
      const clip = new this(clipName, duration, tracks, blendMode);
      return clip;
    }
    resetDuration() {
      const tracks = this.tracks;
      let duration = 0;
      for (let i = 0, n2 = tracks.length; i !== n2; ++i) {
        const track = this.tracks[i];
        duration = Math.max(duration, track.times[track.times.length - 1]);
      }
      this.duration = duration;
      return this;
    }
    trim() {
      for (let i = 0; i < this.tracks.length; i++) {
        this.tracks[i].trim(0, this.duration);
      }
      return this;
    }
    validate() {
      let valid = true;
      for (let i = 0; i < this.tracks.length; i++) {
        valid = valid && this.tracks[i].validate();
      }
      return valid;
    }
    optimize() {
      for (let i = 0; i < this.tracks.length; i++) {
        this.tracks[i].optimize();
      }
      return this;
    }
    clone() {
      const tracks = [];
      for (let i = 0; i < this.tracks.length; i++) {
        tracks.push(this.tracks[i].clone());
      }
      return new this.constructor(this.name, this.duration, tracks, this.blendMode);
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  }
  function getTrackTypeForValueTypeName(typeName) {
    switch (typeName.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return NumberKeyframeTrack;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return VectorKeyframeTrack;
      case "color":
        return ColorKeyframeTrack;
      case "quaternion":
        return QuaternionKeyframeTrack;
      case "bool":
      case "boolean":
        return BooleanKeyframeTrack;
      case "string":
        return StringKeyframeTrack;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + typeName);
  }
  function parseKeyframeTrack(json) {
    if (json.type === void 0) {
      throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    }
    const trackType = getTrackTypeForValueTypeName(json.type);
    if (json.times === void 0) {
      const times = [], values = [];
      flattenJSON(json.keys, times, values, "value");
      json.times = times;
      json.values = values;
    }
    if (trackType.parse !== void 0) {
      return trackType.parse(json);
    } else {
      return new trackType(json.name, json.times, json.values, json.interpolation);
    }
  }
  const Cache = {
    enabled: false,
    files: {},
    add: function(key, file) {
      if (this.enabled === false) return;
      this.files[key] = file;
    },
    get: function(key) {
      if (this.enabled === false) return;
      return this.files[key];
    },
    remove: function(key) {
      delete this.files[key];
    },
    clear: function() {
      this.files = {};
    }
  };
  class LoadingManager {
    constructor(onLoad, onProgress, onError) {
      const scope = this;
      let isLoading = false;
      let itemsLoaded = 0;
      let itemsTotal = 0;
      let urlModifier = void 0;
      const handlers = [];
      this.onStart = void 0;
      this.onLoad = onLoad;
      this.onProgress = onProgress;
      this.onError = onError;
      this.itemStart = function(url) {
        itemsTotal++;
        if (isLoading === false) {
          if (scope.onStart !== void 0) {
            scope.onStart(url, itemsLoaded, itemsTotal);
          }
        }
        isLoading = true;
      };
      this.itemEnd = function(url) {
        itemsLoaded++;
        if (scope.onProgress !== void 0) {
          scope.onProgress(url, itemsLoaded, itemsTotal);
        }
        if (itemsLoaded === itemsTotal) {
          isLoading = false;
          if (scope.onLoad !== void 0) {
            scope.onLoad();
          }
        }
      };
      this.itemError = function(url) {
        if (scope.onError !== void 0) {
          scope.onError(url);
        }
      };
      this.resolveURL = function(url) {
        if (urlModifier) {
          return urlModifier(url);
        }
        return url;
      };
      this.setURLModifier = function(transform) {
        urlModifier = transform;
        return this;
      };
      this.addHandler = function(regex, loader2) {
        handlers.push(regex, loader2);
        return this;
      };
      this.removeHandler = function(regex) {
        const index = handlers.indexOf(regex);
        if (index !== -1) {
          handlers.splice(index, 2);
        }
        return this;
      };
      this.getHandler = function(file) {
        for (let i = 0, l = handlers.length; i < l; i += 2) {
          const regex = handlers[i];
          const loader2 = handlers[i + 1];
          if (regex.global) regex.lastIndex = 0;
          if (regex.test(file)) {
            return loader2;
          }
        }
        return null;
      };
    }
  }
  const DefaultLoadingManager = /* @__PURE__ */ new LoadingManager();
  class Loader {
    constructor(manager) {
      this.manager = manager !== void 0 ? manager : DefaultLoadingManager;
      this.crossOrigin = "anonymous";
      this.withCredentials = false;
      this.path = "";
      this.resourcePath = "";
      this.requestHeader = {};
    }
    load() {
    }
    loadAsync(url, onProgress) {
      const scope = this;
      return new Promise(function(resolve, reject) {
        scope.load(url, resolve, onProgress, reject);
      });
    }
    parse() {
    }
    setCrossOrigin(crossOrigin) {
      this.crossOrigin = crossOrigin;
      return this;
    }
    setWithCredentials(value) {
      this.withCredentials = value;
      return this;
    }
    setPath(path) {
      this.path = path;
      return this;
    }
    setResourcePath(resourcePath) {
      this.resourcePath = resourcePath;
      return this;
    }
    setRequestHeader(requestHeader) {
      this.requestHeader = requestHeader;
      return this;
    }
  }
  Loader.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  const loading = {};
  class HttpError extends Error {
    constructor(message, response) {
      super(message);
      this.response = response;
    }
  }
  class FileLoader extends Loader {
    constructor(manager) {
      super(manager);
    }
    load(url, onLoad, onProgress, onError) {
      if (url === void 0) url = "";
      if (this.path !== void 0) url = this.path + url;
      url = this.manager.resolveURL(url);
      const cached = Cache.get(url);
      if (cached !== void 0) {
        this.manager.itemStart(url);
        setTimeout(() => {
          if (onLoad) onLoad(cached);
          this.manager.itemEnd(url);
        }, 0);
        return cached;
      }
      if (loading[url] !== void 0) {
        loading[url].push({
          onLoad,
          onProgress,
          onError
        });
        return;
      }
      loading[url] = [];
      loading[url].push({
        onLoad,
        onProgress,
        onError
      });
      const req = new Request(url, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin"
        // An abort controller could be added within a future PR
      });
      const mimeType = this.mimeType;
      const responseType = this.responseType;
      fetch(req).then((response) => {
        if (response.status === 200 || response.status === 0) {
          if (response.status === 0) {
            console.warn("THREE.FileLoader: HTTP Status 0 received.");
          }
          if (typeof ReadableStream === "undefined" || response.body === void 0 || response.body.getReader === void 0) {
            return response;
          }
          const callbacks = loading[url];
          const reader = response.body.getReader();
          const contentLength = response.headers.get("X-File-Size") || response.headers.get("Content-Length");
          const total = contentLength ? parseInt(contentLength) : 0;
          const lengthComputable = total !== 0;
          let loaded = 0;
          const stream = new ReadableStream({
            start(controller) {
              readData();
              function readData() {
                reader.read().then(({ done, value }) => {
                  if (done) {
                    controller.close();
                  } else {
                    loaded += value.byteLength;
                    const event = new ProgressEvent("progress", { lengthComputable, loaded, total });
                    for (let i = 0, il = callbacks.length; i < il; i++) {
                      const callback = callbacks[i];
                      if (callback.onProgress) callback.onProgress(event);
                    }
                    controller.enqueue(value);
                    readData();
                  }
                }, (e) => {
                  controller.error(e);
                });
              }
            }
          });
          return new Response(stream);
        } else {
          throw new HttpError(`fetch for "${response.url}" responded with ${response.status}: ${response.statusText}`, response);
        }
      }).then((response) => {
        switch (responseType) {
          case "arraybuffer":
            return response.arrayBuffer();
          case "blob":
            return response.blob();
          case "document":
            return response.text().then((text) => {
              const parser = new DOMParser();
              return parser.parseFromString(text, mimeType);
            });
          case "json":
            return response.json();
          default:
            if (mimeType === void 0) {
              return response.text();
            } else {
              const re = /charset="?([^;"\s]*)"?/i;
              const exec = re.exec(mimeType);
              const label2 = exec && exec[1] ? exec[1].toLowerCase() : void 0;
              const decoder = new TextDecoder(label2);
              return response.arrayBuffer().then((ab) => decoder.decode(ab));
            }
        }
      }).then((data) => {
        Cache.add(url, data);
        const callbacks = loading[url];
        delete loading[url];
        for (let i = 0, il = callbacks.length; i < il; i++) {
          const callback = callbacks[i];
          if (callback.onLoad) callback.onLoad(data);
        }
      }).catch((err) => {
        const callbacks = loading[url];
        if (callbacks === void 0) {
          this.manager.itemError(url);
          throw err;
        }
        delete loading[url];
        for (let i = 0, il = callbacks.length; i < il; i++) {
          const callback = callbacks[i];
          if (callback.onError) callback.onError(err);
        }
        this.manager.itemError(url);
      }).finally(() => {
        this.manager.itemEnd(url);
      });
      this.manager.itemStart(url);
    }
    setResponseType(value) {
      this.responseType = value;
      return this;
    }
    setMimeType(value) {
      this.mimeType = value;
      return this;
    }
  }
  class ImageLoader extends Loader {
    constructor(manager) {
      super(manager);
    }
    load(url, onLoad, onProgress, onError) {
      if (this.path !== void 0) url = this.path + url;
      url = this.manager.resolveURL(url);
      const scope = this;
      const cached = Cache.get(url);
      if (cached !== void 0) {
        scope.manager.itemStart(url);
        setTimeout(function() {
          if (onLoad) onLoad(cached);
          scope.manager.itemEnd(url);
        }, 0);
        return cached;
      }
      const image = createElementNS("img");
      function onImageLoad() {
        removeEventListeners();
        Cache.add(url, this);
        if (onLoad) onLoad(this);
        scope.manager.itemEnd(url);
      }
      function onImageError(event) {
        removeEventListeners();
        if (onError) onError(event);
        scope.manager.itemError(url);
        scope.manager.itemEnd(url);
      }
      function removeEventListeners() {
        image.removeEventListener("load", onImageLoad, false);
        image.removeEventListener("error", onImageError, false);
      }
      image.addEventListener("load", onImageLoad, false);
      image.addEventListener("error", onImageError, false);
      if (url.slice(0, 5) !== "data:") {
        if (this.crossOrigin !== void 0) image.crossOrigin = this.crossOrigin;
      }
      scope.manager.itemStart(url);
      image.src = url;
      return image;
    }
  }
  class TextureLoader extends Loader {
    constructor(manager) {
      super(manager);
    }
    load(url, onLoad, onProgress, onError) {
      const texture2 = new Texture();
      const loader2 = new ImageLoader(this.manager);
      loader2.setCrossOrigin(this.crossOrigin);
      loader2.setPath(this.path);
      loader2.load(url, function(image) {
        texture2.image = image;
        texture2.needsUpdate = true;
        if (onLoad !== void 0) {
          onLoad(texture2);
        }
      }, onProgress, onError);
      return texture2;
    }
  }
  class Light extends Object3D {
    constructor(color2, intensity = 1) {
      super();
      this.isLight = true;
      this.type = "Light";
      this.color = new Color(color2);
      this.intensity = intensity;
    }
    dispose() {
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.color.copy(source.color);
      this.intensity = source.intensity;
      return this;
    }
    toJSON(meta) {
      const data = super.toJSON(meta);
      data.object.color = this.color.getHex();
      data.object.intensity = this.intensity;
      if (this.groundColor !== void 0) data.object.groundColor = this.groundColor.getHex();
      if (this.distance !== void 0) data.object.distance = this.distance;
      if (this.angle !== void 0) data.object.angle = this.angle;
      if (this.decay !== void 0) data.object.decay = this.decay;
      if (this.penumbra !== void 0) data.object.penumbra = this.penumbra;
      if (this.shadow !== void 0) data.object.shadow = this.shadow.toJSON();
      if (this.target !== void 0) data.object.target = this.target.uuid;
      return data;
    }
  }
  const _projScreenMatrix$1 = /* @__PURE__ */ new Matrix4();
  const _lightPositionWorld$1 = /* @__PURE__ */ new Vector3();
  const _lookTarget$1 = /* @__PURE__ */ new Vector3();
  class LightShadow {
    constructor(camera) {
      this.camera = camera;
      this.intensity = 1;
      this.bias = 0;
      this.normalBias = 0;
      this.radius = 1;
      this.blurSamples = 8;
      this.mapSize = new Vector2(512, 512);
      this.map = null;
      this.mapPass = null;
      this.matrix = new Matrix4();
      this.autoUpdate = true;
      this.needsUpdate = false;
      this._frustum = new Frustum();
      this._frameExtents = new Vector2(1, 1);
      this._viewportCount = 1;
      this._viewports = [
        new Vector4(0, 0, 1, 1)
      ];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(light) {
      const shadowCamera = this.camera;
      const shadowMatrix = this.matrix;
      _lightPositionWorld$1.setFromMatrixPosition(light.matrixWorld);
      shadowCamera.position.copy(_lightPositionWorld$1);
      _lookTarget$1.setFromMatrixPosition(light.target.matrixWorld);
      shadowCamera.lookAt(_lookTarget$1);
      shadowCamera.updateMatrixWorld();
      _projScreenMatrix$1.multiplyMatrices(shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse);
      this._frustum.setFromProjectionMatrix(_projScreenMatrix$1);
      shadowMatrix.set(
        0.5,
        0,
        0,
        0.5,
        0,
        0.5,
        0,
        0.5,
        0,
        0,
        0.5,
        0.5,
        0,
        0,
        0,
        1
      );
      shadowMatrix.multiply(_projScreenMatrix$1);
    }
    getViewport(viewportIndex) {
      return this._viewports[viewportIndex];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      if (this.map) {
        this.map.dispose();
      }
      if (this.mapPass) {
        this.mapPass.dispose();
      }
    }
    copy(source) {
      this.camera = source.camera.clone();
      this.intensity = source.intensity;
      this.bias = source.bias;
      this.radius = source.radius;
      this.mapSize.copy(source.mapSize);
      return this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const object = {};
      if (this.intensity !== 1) object.intensity = this.intensity;
      if (this.bias !== 0) object.bias = this.bias;
      if (this.normalBias !== 0) object.normalBias = this.normalBias;
      if (this.radius !== 1) object.radius = this.radius;
      if (this.mapSize.x !== 512 || this.mapSize.y !== 512) object.mapSize = this.mapSize.toArray();
      object.camera = this.camera.toJSON(false).object;
      delete object.camera.matrix;
      return object;
    }
  }
  class SpotLightShadow extends LightShadow {
    constructor() {
      super(new PerspectiveCamera(50, 1, 0.5, 500));
      this.isSpotLightShadow = true;
      this.focus = 1;
    }
    updateMatrices(light) {
      const camera = this.camera;
      const fov = RAD2DEG * 2 * light.angle * this.focus;
      const aspect = this.mapSize.width / this.mapSize.height;
      const far = light.distance || camera.far;
      if (fov !== camera.fov || aspect !== camera.aspect || far !== camera.far) {
        camera.fov = fov;
        camera.aspect = aspect;
        camera.far = far;
        camera.updateProjectionMatrix();
      }
      super.updateMatrices(light);
    }
    copy(source) {
      super.copy(source);
      this.focus = source.focus;
      return this;
    }
  }
  class SpotLight extends Light {
    constructor(color2, intensity, distance2 = 0, angle = Math.PI / 3, penumbra = 0, decay = 2) {
      super(color2, intensity);
      this.isSpotLight = true;
      this.type = "SpotLight";
      this.position.copy(Object3D.DEFAULT_UP);
      this.updateMatrix();
      this.target = new Object3D();
      this.distance = distance2;
      this.angle = angle;
      this.penumbra = penumbra;
      this.decay = decay;
      this.map = null;
      this.shadow = new SpotLightShadow();
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(power) {
      this.intensity = power / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.distance = source.distance;
      this.angle = source.angle;
      this.penumbra = source.penumbra;
      this.decay = source.decay;
      this.target = source.target.clone();
      this.shadow = source.shadow.clone();
      return this;
    }
  }
  const _projScreenMatrix = /* @__PURE__ */ new Matrix4();
  const _lightPositionWorld = /* @__PURE__ */ new Vector3();
  const _lookTarget = /* @__PURE__ */ new Vector3();
  class PointLightShadow extends LightShadow {
    constructor() {
      super(new PerspectiveCamera(90, 1, 0.5, 500));
      this.isPointLightShadow = true;
      this._frameExtents = new Vector2(4, 2);
      this._viewportCount = 6;
      this._viewports = [
        // These viewports map a cube-map onto a 2D texture with the
        // following orientation:
        //
        //  xzXZ
        //   y Y
        //
        // X - Positive x direction
        // x - Negative x direction
        // Y - Positive y direction
        // y - Negative y direction
        // Z - Positive z direction
        // z - Negative z direction
        // positive X
        new Vector4(2, 1, 1, 1),
        // negative X
        new Vector4(0, 1, 1, 1),
        // positive Z
        new Vector4(3, 1, 1, 1),
        // negative Z
        new Vector4(1, 1, 1, 1),
        // positive Y
        new Vector4(3, 0, 1, 1),
        // negative Y
        new Vector4(1, 0, 1, 1)
      ];
      this._cubeDirections = [
        new Vector3(1, 0, 0),
        new Vector3(-1, 0, 0),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, -1),
        new Vector3(0, 1, 0),
        new Vector3(0, -1, 0)
      ];
      this._cubeUps = [
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, -1)
      ];
    }
    updateMatrices(light, viewportIndex = 0) {
      const camera = this.camera;
      const shadowMatrix = this.matrix;
      const far = light.distance || camera.far;
      if (far !== camera.far) {
        camera.far = far;
        camera.updateProjectionMatrix();
      }
      _lightPositionWorld.setFromMatrixPosition(light.matrixWorld);
      camera.position.copy(_lightPositionWorld);
      _lookTarget.copy(camera.position);
      _lookTarget.add(this._cubeDirections[viewportIndex]);
      camera.up.copy(this._cubeUps[viewportIndex]);
      camera.lookAt(_lookTarget);
      camera.updateMatrixWorld();
      shadowMatrix.makeTranslation(-_lightPositionWorld.x, -_lightPositionWorld.y, -_lightPositionWorld.z);
      _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      this._frustum.setFromProjectionMatrix(_projScreenMatrix);
    }
  }
  class PointLight extends Light {
    constructor(color2, intensity, distance2 = 0, decay = 2) {
      super(color2, intensity);
      this.isPointLight = true;
      this.type = "PointLight";
      this.distance = distance2;
      this.decay = decay;
      this.shadow = new PointLightShadow();
    }
    get power() {
      return this.intensity * 4 * Math.PI;
    }
    set power(power) {
      this.intensity = power / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      this.distance = source.distance;
      this.decay = source.decay;
      this.shadow = source.shadow.clone();
      return this;
    }
  }
  class DirectionalLightShadow extends LightShadow {
    constructor() {
      super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
      this.isDirectionalLightShadow = true;
    }
  }
  class DirectionalLight extends Light {
    constructor(color2, intensity) {
      super(color2, intensity);
      this.isDirectionalLight = true;
      this.type = "DirectionalLight";
      this.position.copy(Object3D.DEFAULT_UP);
      this.updateMatrix();
      this.target = new Object3D();
      this.shadow = new DirectionalLightShadow();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(source) {
      super.copy(source);
      this.target = source.target.clone();
      this.shadow = source.shadow.clone();
      return this;
    }
  }
  class LoaderUtils {
    static decodeText(array) {
      console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead.");
      if (typeof TextDecoder !== "undefined") {
        return new TextDecoder().decode(array);
      }
      let s = "";
      for (let i = 0, il = array.length; i < il; i++) {
        s += String.fromCharCode(array[i]);
      }
      try {
        return decodeURIComponent(escape(s));
      } catch (e) {
        return s;
      }
    }
    static extractUrlBase(url) {
      const index = url.lastIndexOf("/");
      if (index === -1) return "./";
      return url.slice(0, index + 1);
    }
    static resolveURL(url, path) {
      if (typeof url !== "string" || url === "") return "";
      if (/^https?:\/\//i.test(path) && /^\//.test(url)) {
        path = path.replace(/(^https?:\/\/[^\/]+).*/i, "$1");
      }
      if (/^(https?:)?\/\//i.test(url)) return url;
      if (/^data:.*,.*$/i.test(url)) return url;
      if (/^blob:.*$/i.test(url)) return url;
      return path + url;
    }
  }
  class ImageBitmapLoader extends Loader {
    constructor(manager) {
      super(manager);
      this.isImageBitmapLoader = true;
      if (typeof createImageBitmap === "undefined") {
        console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
      }
      if (typeof fetch === "undefined") {
        console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
      }
      this.options = { premultiplyAlpha: "none" };
    }
    setOptions(options) {
      this.options = options;
      return this;
    }
    load(url, onLoad, onProgress, onError) {
      if (url === void 0) url = "";
      if (this.path !== void 0) url = this.path + url;
      url = this.manager.resolveURL(url);
      const scope = this;
      const cached = Cache.get(url);
      if (cached !== void 0) {
        scope.manager.itemStart(url);
        if (cached.then) {
          cached.then((imageBitmap) => {
            if (onLoad) onLoad(imageBitmap);
            scope.manager.itemEnd(url);
          }).catch((e) => {
            if (onError) onError(e);
          });
          return;
        }
        setTimeout(function() {
          if (onLoad) onLoad(cached);
          scope.manager.itemEnd(url);
        }, 0);
        return cached;
      }
      const fetchOptions = {};
      fetchOptions.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include";
      fetchOptions.headers = this.requestHeader;
      const promise = fetch(url, fetchOptions).then(function(res) {
        return res.blob();
      }).then(function(blob) {
        return createImageBitmap(blob, Object.assign(scope.options, { colorSpaceConversion: "none" }));
      }).then(function(imageBitmap) {
        Cache.add(url, imageBitmap);
        if (onLoad) onLoad(imageBitmap);
        scope.manager.itemEnd(url);
        return imageBitmap;
      }).catch(function(e) {
        if (onError) onError(e);
        Cache.remove(url);
        scope.manager.itemError(url);
        scope.manager.itemEnd(url);
      });
      Cache.add(url, promise);
      scope.manager.itemStart(url);
    }
  }
  const _RESERVED_CHARS_RE = "\\[\\]\\.:\\/";
  const _reservedRe = new RegExp("[" + _RESERVED_CHARS_RE + "]", "g");
  const _wordChar = "[^" + _RESERVED_CHARS_RE + "]";
  const _wordCharOrDot = "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]";
  const _directoryRe = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", _wordChar);
  const _nodeRe = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot);
  const _objectRe = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar);
  const _propertyRe = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar);
  const _trackRe = new RegExp(
    "^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"
  );
  const _supportedObjectNames = ["material", "materials", "bones", "map"];
  class Composite {
    constructor(targetGroup, path, optionalParsedPath) {
      const parsedPath = optionalParsedPath || PropertyBinding.parseTrackName(path);
      this._targetGroup = targetGroup;
      this._bindings = targetGroup.subscribe_(path, parsedPath);
    }
    getValue(array, offset) {
      this.bind();
      const firstValidIndex = this._targetGroup.nCachedObjects_, binding = this._bindings[firstValidIndex];
      if (binding !== void 0) binding.getValue(array, offset);
    }
    setValue(array, offset) {
      const bindings = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, n2 = bindings.length; i !== n2; ++i) {
        bindings[i].setValue(array, offset);
      }
    }
    bind() {
      const bindings = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, n2 = bindings.length; i !== n2; ++i) {
        bindings[i].bind();
      }
    }
    unbind() {
      const bindings = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, n2 = bindings.length; i !== n2; ++i) {
        bindings[i].unbind();
      }
    }
  }
  class PropertyBinding {
    constructor(rootNode, path, parsedPath) {
      this.path = path;
      this.parsedPath = parsedPath || PropertyBinding.parseTrackName(path);
      this.node = PropertyBinding.findNode(rootNode, this.parsedPath.nodeName);
      this.rootNode = rootNode;
      this.getValue = this._getValue_unbound;
      this.setValue = this._setValue_unbound;
    }
    static create(root, path, parsedPath) {
      if (!(root && root.isAnimationObjectGroup)) {
        return new PropertyBinding(root, path, parsedPath);
      } else {
        return new PropertyBinding.Composite(root, path, parsedPath);
      }
    }
    /**
     * Replaces spaces with underscores and removes unsupported characters from
     * node names, to ensure compatibility with parseTrackName().
     *
     * @param {string} name Node name to be sanitized.
     * @return {string}
     */
    static sanitizeNodeName(name) {
      return name.replace(/\s/g, "_").replace(_reservedRe, "");
    }
    static parseTrackName(trackName) {
      const matches = _trackRe.exec(trackName);
      if (matches === null) {
        throw new Error("PropertyBinding: Cannot parse trackName: " + trackName);
      }
      const results = {
        // directoryName: matches[ 1 ], // (tschw) currently unused
        nodeName: matches[2],
        objectName: matches[3],
        objectIndex: matches[4],
        propertyName: matches[5],
        // required
        propertyIndex: matches[6]
      };
      const lastDot = results.nodeName && results.nodeName.lastIndexOf(".");
      if (lastDot !== void 0 && lastDot !== -1) {
        const objectName = results.nodeName.substring(lastDot + 1);
        if (_supportedObjectNames.indexOf(objectName) !== -1) {
          results.nodeName = results.nodeName.substring(0, lastDot);
          results.objectName = objectName;
        }
      }
      if (results.propertyName === null || results.propertyName.length === 0) {
        throw new Error("PropertyBinding: can not parse propertyName from trackName: " + trackName);
      }
      return results;
    }
    static findNode(root, nodeName) {
      if (nodeName === void 0 || nodeName === "" || nodeName === "." || nodeName === -1 || nodeName === root.name || nodeName === root.uuid) {
        return root;
      }
      if (root.skeleton) {
        const bone = root.skeleton.getBoneByName(nodeName);
        if (bone !== void 0) {
          return bone;
        }
      }
      if (root.children) {
        const searchNodeSubtree = function(children, checkByUserDataName) {
          for (let i = 0; i < children.length; i++) {
            const childNode = children[i];
            if (!checkByUserDataName && (childNode.name === nodeName || childNode.uuid === nodeName)) {
              return childNode;
            } else if (checkByUserDataName && childNode.userData && childNode.userData.name === nodeName) {
              return childNode;
            }
            const result = searchNodeSubtree(childNode.children, checkByUserDataName);
            if (result) return result;
          }
          return null;
        };
        const subTreeNode = searchNodeSubtree(root.children);
        if (subTreeNode) {
          return subTreeNode;
        } else {
          const subTreeNode2 = searchNodeSubtree(root.children, true);
          if (subTreeNode2) {
            return subTreeNode2;
          }
        }
      }
      return null;
    }
    // these are used to "bind" a nonexistent property
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    // Getters
    _getValue_direct(buffer2, offset) {
      buffer2[offset] = this.targetObject[this.propertyName];
    }
    _getValue_array(buffer2, offset) {
      const source = this.resolvedProperty;
      for (let i = 0, n2 = source.length; i !== n2; ++i) {
        buffer2[offset++] = source[i];
      }
    }
    _getValue_arrayElement(buffer2, offset) {
      buffer2[offset] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(buffer2, offset) {
      this.resolvedProperty.toArray(buffer2, offset);
    }
    // Direct
    _setValue_direct(buffer2, offset) {
      this.targetObject[this.propertyName] = buffer2[offset];
    }
    _setValue_direct_setNeedsUpdate(buffer2, offset) {
      this.targetObject[this.propertyName] = buffer2[offset];
      this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(buffer2, offset) {
      this.targetObject[this.propertyName] = buffer2[offset];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    // EntireArray
    _setValue_array(buffer2, offset) {
      const dest = this.resolvedProperty;
      for (let i = 0, n2 = dest.length; i !== n2; ++i) {
        dest[i] = buffer2[offset++];
      }
    }
    _setValue_array_setNeedsUpdate(buffer2, offset) {
      const dest = this.resolvedProperty;
      for (let i = 0, n2 = dest.length; i !== n2; ++i) {
        dest[i] = buffer2[offset++];
      }
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(buffer2, offset) {
      const dest = this.resolvedProperty;
      for (let i = 0, n2 = dest.length; i !== n2; ++i) {
        dest[i] = buffer2[offset++];
      }
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    // ArrayElement
    _setValue_arrayElement(buffer2, offset) {
      this.resolvedProperty[this.propertyIndex] = buffer2[offset];
    }
    _setValue_arrayElement_setNeedsUpdate(buffer2, offset) {
      this.resolvedProperty[this.propertyIndex] = buffer2[offset];
      this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(buffer2, offset) {
      this.resolvedProperty[this.propertyIndex] = buffer2[offset];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    // HasToFromArray
    _setValue_fromArray(buffer2, offset) {
      this.resolvedProperty.fromArray(buffer2, offset);
    }
    _setValue_fromArray_setNeedsUpdate(buffer2, offset) {
      this.resolvedProperty.fromArray(buffer2, offset);
      this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(buffer2, offset) {
      this.resolvedProperty.fromArray(buffer2, offset);
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(targetArray, offset) {
      this.bind();
      this.getValue(targetArray, offset);
    }
    _setValue_unbound(sourceArray, offset) {
      this.bind();
      this.setValue(sourceArray, offset);
    }
    // create getter / setter pair for a property in the scene graph
    bind() {
      let targetObject = this.node;
      const parsedPath = this.parsedPath;
      const objectName = parsedPath.objectName;
      const propertyName = parsedPath.propertyName;
      let propertyIndex = parsedPath.propertyIndex;
      if (!targetObject) {
        targetObject = PropertyBinding.findNode(this.rootNode, parsedPath.nodeName);
        this.node = targetObject;
      }
      this.getValue = this._getValue_unavailable;
      this.setValue = this._setValue_unavailable;
      if (!targetObject) {
        console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
        return;
      }
      if (objectName) {
        let objectIndex = parsedPath.objectIndex;
        switch (objectName) {
          case "materials":
            if (!targetObject.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!targetObject.material.materials) {
              console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              return;
            }
            targetObject = targetObject.material.materials;
            break;
          case "bones":
            if (!targetObject.skeleton) {
              console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              return;
            }
            targetObject = targetObject.skeleton.bones;
            for (let i = 0; i < targetObject.length; i++) {
              if (targetObject[i].name === objectIndex) {
                objectIndex = i;
                break;
              }
            }
            break;
          case "map":
            if ("map" in targetObject) {
              targetObject = targetObject.map;
              break;
            }
            if (!targetObject.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!targetObject.material.map) {
              console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
              return;
            }
            targetObject = targetObject.material.map;
            break;
          default:
            if (targetObject[objectName] === void 0) {
              console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              return;
            }
            targetObject = targetObject[objectName];
        }
        if (objectIndex !== void 0) {
          if (targetObject[objectIndex] === void 0) {
            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, targetObject);
            return;
          }
          targetObject = targetObject[objectIndex];
        }
      }
      const nodeProperty = targetObject[propertyName];
      if (nodeProperty === void 0) {
        const nodeName = parsedPath.nodeName;
        console.error("THREE.PropertyBinding: Trying to update property for track: " + nodeName + "." + propertyName + " but it wasn't found.", targetObject);
        return;
      }
      let versioning = this.Versioning.None;
      this.targetObject = targetObject;
      if (targetObject.needsUpdate !== void 0) {
        versioning = this.Versioning.NeedsUpdate;
      } else if (targetObject.matrixWorldNeedsUpdate !== void 0) {
        versioning = this.Versioning.MatrixWorldNeedsUpdate;
      }
      let bindingType = this.BindingType.Direct;
      if (propertyIndex !== void 0) {
        if (propertyName === "morphTargetInfluences") {
          if (!targetObject.geometry) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
            return;
          }
          if (!targetObject.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          if (targetObject.morphTargetDictionary[propertyIndex] !== void 0) {
            propertyIndex = targetObject.morphTargetDictionary[propertyIndex];
          }
        }
        bindingType = this.BindingType.ArrayElement;
        this.resolvedProperty = nodeProperty;
        this.propertyIndex = propertyIndex;
      } else if (nodeProperty.fromArray !== void 0 && nodeProperty.toArray !== void 0) {
        bindingType = this.BindingType.HasFromToArray;
        this.resolvedProperty = nodeProperty;
      } else if (Array.isArray(nodeProperty)) {
        bindingType = this.BindingType.EntireArray;
        this.resolvedProperty = nodeProperty;
      } else {
        this.propertyName = propertyName;
      }
      this.getValue = this.GetterByBindingType[bindingType];
      this.setValue = this.SetterByBindingTypeAndVersioning[bindingType][versioning];
    }
    unbind() {
      this.node = null;
      this.getValue = this._getValue_unbound;
      this.setValue = this._setValue_unbound;
    }
  }
  PropertyBinding.Composite = Composite;
  PropertyBinding.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  };
  PropertyBinding.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  };
  PropertyBinding.prototype.GetterByBindingType = [
    PropertyBinding.prototype._getValue_direct,
    PropertyBinding.prototype._getValue_array,
    PropertyBinding.prototype._getValue_arrayElement,
    PropertyBinding.prototype._getValue_toArray
  ];
  PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
    [
      // Direct
      PropertyBinding.prototype._setValue_direct,
      PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
      PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
      // EntireArray
      PropertyBinding.prototype._setValue_array,
      PropertyBinding.prototype._setValue_array_setNeedsUpdate,
      PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
      // ArrayElement
      PropertyBinding.prototype._setValue_arrayElement,
      PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
      PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
      // HasToFromArray
      PropertyBinding.prototype._setValue_fromArray,
      PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
      PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
  ];
  function cyrb53(value, seed = 0) {
    let h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
    if (value instanceof Array) {
      for (let i = 0, val; i < value.length; i++) {
        val = value[i];
        h1 = Math.imul(h1 ^ val, 2654435761);
        h2 = Math.imul(h2 ^ val, 1597334677);
      }
    } else {
      for (let i = 0, ch; i < value.length; i++) {
        ch = value.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
    h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
    h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }
  const hash$1 = (...params) => cyrb53(params);
  function getCacheKey(object, force = false) {
    const values = [];
    if (object.isNode === true) {
      values.push(object.id);
      object = object.getSelf();
    }
    for (const { property: property2, childNode } of getNodeChildren(object)) {
      values.push(values, cyrb53(property2.slice(0, -4)), childNode.getCacheKey(force));
    }
    return cyrb53(values);
  }
  function* getNodeChildren(node, toJSON = false) {
    for (const property2 in node) {
      if (property2.startsWith("_") === true) continue;
      const object = node[property2];
      if (Array.isArray(object) === true) {
        for (let i = 0; i < object.length; i++) {
          const child = object[i];
          if (child && (child.isNode === true || toJSON && typeof child.toJSON === "function")) {
            yield { property: property2, index: i, childNode: child };
          }
        }
      } else if (object && object.isNode === true) {
        yield { property: property2, childNode: object };
      } else if (typeof object === "object") {
        for (const subProperty in object) {
          const child = object[subProperty];
          if (child && (child.isNode === true || toJSON && typeof child.toJSON === "function")) {
            yield { property: property2, index: subProperty, childNode: child };
          }
        }
      }
    }
  }
  function getValueType(value) {
    if (value === void 0 || value === null) return null;
    const typeOf = typeof value;
    if (value.isNode === true) {
      return "node";
    } else if (typeOf === "number") {
      return "float";
    } else if (typeOf === "boolean") {
      return "bool";
    } else if (typeOf === "string") {
      return "string";
    } else if (typeOf === "function") {
      return "shader";
    } else if (value.isVector2 === true) {
      return "vec2";
    } else if (value.isVector3 === true) {
      return "vec3";
    } else if (value.isVector4 === true) {
      return "vec4";
    } else if (value.isMatrix3 === true) {
      return "mat3";
    } else if (value.isMatrix4 === true) {
      return "mat4";
    } else if (value.isColor === true) {
      return "color";
    } else if (value instanceof ArrayBuffer) {
      return "ArrayBuffer";
    }
    return null;
  }
  function getValueFromType(type, ...params) {
    const last4 = type ? type.slice(-4) : void 0;
    if (params.length === 1) {
      if (last4 === "vec2") params = [params[0], params[0]];
      else if (last4 === "vec3") params = [params[0], params[0], params[0]];
      else if (last4 === "vec4") params = [params[0], params[0], params[0], params[0]];
    }
    if (type === "color") {
      return new Color(...params);
    } else if (last4 === "vec2") {
      return new Vector2(...params);
    } else if (last4 === "vec3") {
      return new Vector3(...params);
    } else if (last4 === "vec4") {
      return new Vector4(...params);
    } else if (last4 === "mat3") {
      return new Matrix3(...params);
    } else if (last4 === "mat4") {
      return new Matrix4(...params);
    } else if (type === "bool") {
      return params[0] || false;
    } else if (type === "float" || type === "int" || type === "uint") {
      return params[0] || 0;
    } else if (type === "string") {
      return params[0] || "";
    } else if (type === "ArrayBuffer") {
      return base64ToArrayBuffer(params[0]);
    }
    return null;
  }
  function arrayBufferToBase64(arrayBuffer) {
    let chars = "";
    const array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < array.length; i++) {
      chars += String.fromCharCode(array[i]);
    }
    return btoa(chars);
  }
  function base64ToArrayBuffer(base64) {
    return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)).buffer;
  }
  const NodeShaderStage = {
    VERTEX: "vertex"
  };
  const NodeUpdateType = {
    NONE: "none",
    FRAME: "frame",
    RENDER: "render",
    OBJECT: "object"
  };
  const vectorComponents = ["x", "y", "z", "w"];
  let _nodeId = 0;
  class Node extends EventDispatcher {
    static get type() {
      return "Node";
    }
    constructor(nodeType = null) {
      super();
      this.nodeType = nodeType;
      this.updateType = NodeUpdateType.NONE;
      this.updateBeforeType = NodeUpdateType.NONE;
      this.updateAfterType = NodeUpdateType.NONE;
      this.uuid = MathUtils.generateUUID();
      this.version = 0;
      this._cacheKey = null;
      this._cacheKeyVersion = 0;
      this.global = false;
      this.isNode = true;
      Object.defineProperty(this, "id", { value: _nodeId++ });
    }
    set needsUpdate(value) {
      if (value === true) {
        this.version++;
      }
    }
    get type() {
      return this.constructor.type;
    }
    onUpdate(callback, updateType) {
      this.updateType = updateType;
      this.update = callback.bind(this.getSelf());
      return this;
    }
    onFrameUpdate(callback) {
      return this.onUpdate(callback, NodeUpdateType.FRAME);
    }
    onRenderUpdate(callback) {
      return this.onUpdate(callback, NodeUpdateType.RENDER);
    }
    onObjectUpdate(callback) {
      return this.onUpdate(callback, NodeUpdateType.OBJECT);
    }
    onReference(callback) {
      this.updateReference = callback.bind(this.getSelf());
      return this;
    }
    getSelf() {
      return this.self || this;
    }
    updateReference() {
      return this;
    }
    isGlobal() {
      return this.global;
    }
    *getChildren() {
      for (const { childNode } of getNodeChildren(this)) {
        yield childNode;
      }
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    traverse(callback) {
      callback(this);
      for (const childNode of this.getChildren()) {
        childNode.traverse(callback);
      }
    }
    getCacheKey(force = false) {
      force = force || this.version !== this._cacheKeyVersion;
      if (force === true || this._cacheKey === null) {
        this._cacheKey = getCacheKey(this, force);
        this._cacheKeyVersion = this.version;
      }
      return this._cacheKey;
    }
    getScope() {
      return this;
    }
    getHash() {
      return this.uuid;
    }
    getUpdateType() {
      return this.updateType;
    }
    getUpdateBeforeType() {
      return this.updateBeforeType;
    }
    getUpdateAfterType() {
      return this.updateAfterType;
    }
    getElementType(builder) {
      const type = this.getNodeType(builder);
      const elementType = builder.getElementType(type);
      return elementType;
    }
    getNodeType(builder) {
      const nodeProperties = builder.getNodeProperties(this);
      if (nodeProperties.outputNode) {
        return nodeProperties.outputNode.getNodeType(builder);
      }
      return this.nodeType;
    }
    getShared(builder) {
      const hash = this.getHash(builder);
      const nodeFromHash = builder.getNodeFromHash(hash);
      return nodeFromHash || this;
    }
    setup(builder) {
      const nodeProperties = builder.getNodeProperties(this);
      let index = 0;
      for (const childNode of this.getChildren()) {
        nodeProperties["node" + index++] = childNode;
      }
      return null;
    }
    analyze(builder) {
      const usageCount = builder.increaseUsage(this);
      if (usageCount === 1) {
        const nodeProperties = builder.getNodeProperties(this);
        for (const childNode of Object.values(nodeProperties)) {
          if (childNode && childNode.isNode === true) {
            childNode.build(builder);
          }
        }
      }
    }
    generate(builder, output) {
      const { outputNode } = builder.getNodeProperties(this);
      if (outputNode && outputNode.isNode === true) {
        return outputNode.build(builder, output);
      }
    }
    updateBefore() {
      console.warn("Abstract function.");
    }
    updateAfter() {
      console.warn("Abstract function.");
    }
    update() {
      console.warn("Abstract function.");
    }
    build(builder, output = null) {
      const refNode = this.getShared(builder);
      if (this !== refNode) {
        return refNode.build(builder, output);
      }
      builder.addNode(this);
      builder.addChain(this);
      let result = null;
      const buildStage = builder.getBuildStage();
      if (buildStage === "setup") {
        this.updateReference(builder);
        const properties = builder.getNodeProperties(this);
        if (properties.initialized !== true) {
          const stackNodesBeforeSetup = builder.stack.nodes.length;
          properties.initialized = true;
          properties.outputNode = this.setup(builder);
          if (properties.outputNode !== null && builder.stack.nodes.length !== stackNodesBeforeSetup) ;
          for (const childNode of Object.values(properties)) {
            if (childNode && childNode.isNode === true) {
              childNode.build(builder);
            }
          }
        }
      } else if (buildStage === "analyze") {
        this.analyze(builder);
      } else if (buildStage === "generate") {
        const isGenerateOnce = this.generate.length === 1;
        if (isGenerateOnce) {
          const type = this.getNodeType(builder);
          const nodeData = builder.getDataFromNode(this);
          result = nodeData.snippet;
          if (result === void 0) {
            result = this.generate(builder) || "";
            nodeData.snippet = result;
          } else if (nodeData.flowCodes !== void 0 && builder.context.nodeBlock !== void 0) {
            builder.addFlowCodeHierarchy(this, builder.context.nodeBlock);
          }
          result = builder.format(result, type, output);
        } else {
          result = this.generate(builder, output) || "";
        }
      }
      builder.removeChain(this);
      return result;
    }
    getSerializeChildren() {
      return getNodeChildren(this);
    }
    serialize(json) {
      const nodeChildren = this.getSerializeChildren();
      const inputNodes = {};
      for (const { property: property2, index, childNode } of nodeChildren) {
        if (index !== void 0) {
          if (inputNodes[property2] === void 0) {
            inputNodes[property2] = Number.isInteger(index) ? [] : {};
          }
          inputNodes[property2][index] = childNode.toJSON(json.meta).uuid;
        } else {
          inputNodes[property2] = childNode.toJSON(json.meta).uuid;
        }
      }
      if (Object.keys(inputNodes).length > 0) {
        json.inputNodes = inputNodes;
      }
    }
    deserialize(json) {
      if (json.inputNodes !== void 0) {
        const nodes = json.meta.nodes;
        for (const property2 in json.inputNodes) {
          if (Array.isArray(json.inputNodes[property2])) {
            const inputArray = [];
            for (const uuid of json.inputNodes[property2]) {
              inputArray.push(nodes[uuid]);
            }
            this[property2] = inputArray;
          } else if (typeof json.inputNodes[property2] === "object") {
            const inputObject = {};
            for (const subProperty in json.inputNodes[property2]) {
              const uuid = json.inputNodes[property2][subProperty];
              inputObject[subProperty] = nodes[uuid];
            }
            this[property2] = inputObject;
          } else {
            const uuid = json.inputNodes[property2];
            this[property2] = nodes[uuid];
          }
        }
      }
    }
    toJSON(meta) {
      const { uuid, type } = this;
      const isRoot = meta === void 0 || typeof meta === "string";
      if (isRoot) {
        meta = {
          textures: {},
          images: {},
          nodes: {}
        };
      }
      let data = meta.nodes[uuid];
      if (data === void 0) {
        data = {
          uuid,
          type,
          meta,
          metadata: {
            version: 4.6,
            type: "Node",
            generator: "Node.toJSON"
          }
        };
        if (isRoot !== true) meta.nodes[data.uuid] = data;
        this.serialize(data);
        delete data.meta;
      }
      function extractFromCache(cache2) {
        const values = [];
        for (const key in cache2) {
          const data2 = cache2[key];
          delete data2.metadata;
          values.push(data2);
        }
        return values;
      }
      if (isRoot) {
        const textures = extractFromCache(meta.textures);
        const images = extractFromCache(meta.images);
        const nodes = extractFromCache(meta.nodes);
        if (textures.length > 0) data.textures = textures;
        if (images.length > 0) data.images = images;
        if (nodes.length > 0) data.nodes = nodes;
      }
      return data;
    }
  }
  class ArrayElementNode extends Node {
    static get type() {
      return "ArrayElementNode";
    }
    // @TODO: If extending from TempNode it breaks webgpu_compute
    constructor(node, indexNode) {
      super();
      this.node = node;
      this.indexNode = indexNode;
      this.isArrayElementNode = true;
    }
    getNodeType(builder) {
      return this.node.getElementType(builder);
    }
    generate(builder) {
      const nodeSnippet = this.node.build(builder);
      const indexSnippet = this.indexNode.build(builder, "uint");
      return `${nodeSnippet}[ ${indexSnippet} ]`;
    }
  }
  class ConvertNode extends Node {
    static get type() {
      return "ConvertNode";
    }
    constructor(node, convertTo) {
      super();
      this.node = node;
      this.convertTo = convertTo;
    }
    getNodeType(builder) {
      const requestType = this.node.getNodeType(builder);
      let convertTo = null;
      for (const overloadingType of this.convertTo.split("|")) {
        if (convertTo === null || builder.getTypeLength(requestType) === builder.getTypeLength(overloadingType)) {
          convertTo = overloadingType;
        }
      }
      return convertTo;
    }
    serialize(data) {
      super.serialize(data);
      data.convertTo = this.convertTo;
    }
    deserialize(data) {
      super.deserialize(data);
      this.convertTo = data.convertTo;
    }
    generate(builder, output) {
      const node = this.node;
      const type = this.getNodeType(builder);
      const snippet = node.build(builder, type);
      return builder.format(snippet, type, output);
    }
  }
  class TempNode extends Node {
    static get type() {
      return "TempNode";
    }
    constructor(type) {
      super(type);
      this.isTempNode = true;
    }
    hasDependencies(builder) {
      return builder.getDataFromNode(this).usageCount > 1;
    }
    build(builder, output) {
      const buildStage = builder.getBuildStage();
      if (buildStage === "generate") {
        const type = builder.getVectorType(this.getNodeType(builder, output));
        const nodeData = builder.getDataFromNode(this);
        if (nodeData.propertyName !== void 0) {
          return builder.format(nodeData.propertyName, type, output);
        } else if (type !== "void" && output !== "void" && this.hasDependencies(builder)) {
          const snippet = super.build(builder, type);
          const nodeVar = builder.getVarFromNode(this, null, type);
          const propertyName = builder.getPropertyName(nodeVar);
          builder.addLineFlowCode(`${propertyName} = ${snippet}`, this);
          nodeData.snippet = snippet;
          nodeData.propertyName = propertyName;
          return builder.format(nodeData.propertyName, type, output);
        }
      }
      return super.build(builder, output);
    }
  }
  class JoinNode extends TempNode {
    static get type() {
      return "JoinNode";
    }
    constructor(nodes = [], nodeType = null) {
      super(nodeType);
      this.nodes = nodes;
    }
    getNodeType(builder) {
      if (this.nodeType !== null) {
        return builder.getVectorType(this.nodeType);
      }
      return builder.getTypeFromLength(this.nodes.reduce((count, cur) => count + builder.getTypeLength(cur.getNodeType(builder)), 0));
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      const nodes = this.nodes;
      const primitiveType = builder.getComponentType(type);
      const snippetValues = [];
      for (const input of nodes) {
        let inputSnippet = input.build(builder);
        const inputPrimitiveType = builder.getComponentType(input.getNodeType(builder));
        if (inputPrimitiveType !== primitiveType) {
          inputSnippet = builder.format(inputSnippet, inputPrimitiveType, primitiveType);
        }
        snippetValues.push(inputSnippet);
      }
      const snippet = `${builder.getType(type)}( ${snippetValues.join(", ")} )`;
      return builder.format(snippet, type, output);
    }
  }
  const stringVectorComponents = vectorComponents.join("");
  class SplitNode extends Node {
    static get type() {
      return "SplitNode";
    }
    constructor(node, components = "x") {
      super();
      this.node = node;
      this.components = components;
      this.isSplitNode = true;
    }
    getVectorLength() {
      let vectorLength = this.components.length;
      for (const c of this.components) {
        vectorLength = Math.max(vectorComponents.indexOf(c) + 1, vectorLength);
      }
      return vectorLength;
    }
    getComponentType(builder) {
      return builder.getComponentType(this.node.getNodeType(builder));
    }
    getNodeType(builder) {
      return builder.getTypeFromLength(this.components.length, this.getComponentType(builder));
    }
    generate(builder, output) {
      const node = this.node;
      const nodeTypeLength = builder.getTypeLength(node.getNodeType(builder));
      let snippet = null;
      if (nodeTypeLength > 1) {
        let type = null;
        const componentsLength = this.getVectorLength();
        if (componentsLength >= nodeTypeLength) {
          type = builder.getTypeFromLength(this.getVectorLength(), this.getComponentType(builder));
        }
        const nodeSnippet = node.build(builder, type);
        if (this.components.length === nodeTypeLength && this.components === stringVectorComponents.slice(0, this.components.length)) {
          snippet = builder.format(nodeSnippet, type, output);
        } else {
          snippet = builder.format(`${nodeSnippet}.${this.components}`, this.getNodeType(builder), output);
        }
      } else {
        snippet = node.build(builder, output);
      }
      return snippet;
    }
    serialize(data) {
      super.serialize(data);
      data.components = this.components;
    }
    deserialize(data) {
      super.deserialize(data);
      this.components = data.components;
    }
  }
  class SetNode extends TempNode {
    static get type() {
      return "SetNode";
    }
    constructor(sourceNode, components, targetNode) {
      super();
      this.sourceNode = sourceNode;
      this.components = components;
      this.targetNode = targetNode;
    }
    getNodeType(builder) {
      return this.sourceNode.getNodeType(builder);
    }
    generate(builder) {
      const { sourceNode, components, targetNode } = this;
      const sourceType = this.getNodeType(builder);
      const targetType = builder.getTypeFromLength(components.length, targetNode.getNodeType(builder));
      const targetSnippet = targetNode.build(builder, targetType);
      const sourceSnippet = sourceNode.build(builder, sourceType);
      const length2 = builder.getTypeLength(sourceType);
      const snippetValues = [];
      for (let i = 0; i < length2; i++) {
        const component = vectorComponents[i];
        if (component === components[0]) {
          snippetValues.push(targetSnippet);
          i += components.length - 1;
        } else {
          snippetValues.push(sourceSnippet + "." + component);
        }
      }
      return `${builder.getType(sourceType)}( ${snippetValues.join(", ")} )`;
    }
  }
  class FlipNode extends TempNode {
    static get type() {
      return "FlipNode";
    }
    constructor(sourceNode, components) {
      super();
      this.sourceNode = sourceNode;
      this.components = components;
    }
    getNodeType(builder) {
      return this.sourceNode.getNodeType(builder);
    }
    generate(builder) {
      const { components, sourceNode } = this;
      const sourceType = this.getNodeType(builder);
      const sourceSnippet = sourceNode.build(builder);
      const sourceCache = builder.getVarFromNode(this);
      const sourceProperty = builder.getPropertyName(sourceCache);
      builder.addLineFlowCode(sourceProperty + " = " + sourceSnippet, this);
      const length2 = builder.getTypeLength(sourceType);
      const snippetValues = [];
      let componentIndex = 0;
      for (let i = 0; i < length2; i++) {
        const component = vectorComponents[i];
        if (component === components[componentIndex]) {
          snippetValues.push("1.0 - " + (sourceProperty + "." + component));
          componentIndex++;
        } else {
          snippetValues.push(sourceProperty + "." + component);
        }
      }
      return `${builder.getType(sourceType)}( ${snippetValues.join(", ")} )`;
    }
  }
  class InputNode extends Node {
    static get type() {
      return "InputNode";
    }
    constructor(value, nodeType = null) {
      super(nodeType);
      this.isInputNode = true;
      this.value = value;
      this.precision = null;
    }
    getNodeType() {
      if (this.nodeType === null) {
        return getValueType(this.value);
      }
      return this.nodeType;
    }
    getInputType(builder) {
      return this.getNodeType(builder);
    }
    setPrecision(precision) {
      this.precision = precision;
      return this;
    }
    serialize(data) {
      super.serialize(data);
      data.value = this.value;
      if (this.value && this.value.toArray) data.value = this.value.toArray();
      data.valueType = getValueType(this.value);
      data.nodeType = this.nodeType;
      if (data.valueType === "ArrayBuffer") data.value = arrayBufferToBase64(data.value);
      data.precision = this.precision;
    }
    deserialize(data) {
      super.deserialize(data);
      this.nodeType = data.nodeType;
      this.value = Array.isArray(data.value) ? getValueFromType(data.valueType, ...data.value) : data.value;
      this.precision = data.precision || null;
      if (this.value && this.value.fromArray) this.value = this.value.fromArray(data.value);
    }
    generate() {
      console.warn("Abstract function.");
    }
  }
  class ConstNode extends InputNode {
    static get type() {
      return "ConstNode";
    }
    constructor(value, nodeType = null) {
      super(value, nodeType);
      this.isConstNode = true;
    }
    generateConst(builder) {
      return builder.generateConst(this.getNodeType(builder), this.value);
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      return builder.format(this.generateConst(builder), type, output);
    }
  }
  let currentStack = null;
  const NodeElements = /* @__PURE__ */ new Map();
  function addMethodChaining(name, nodeElement) {
    if (NodeElements.has(name)) {
      console.warn(`Redefinition of method chaining ${name}`);
      return;
    }
    if (typeof nodeElement !== "function") throw new Error(`Node element ${name} is not a function`);
    NodeElements.set(name, nodeElement);
  }
  const parseSwizzle = (props) => props.replace(/r|s/g, "x").replace(/g|t/g, "y").replace(/b|p/g, "z").replace(/a|q/g, "w");
  const parseSwizzleAndSort = (props) => parseSwizzle(props).split("").sort().join("");
  const shaderNodeHandler = {
    setup(NodeClosure, params) {
      const inputs = params.shift();
      return NodeClosure(nodeObjects(inputs), ...params);
    },
    get(node, prop, nodeObj) {
      if (typeof prop === "string" && node[prop] === void 0) {
        if (node.isStackNode !== true && prop === "assign") {
          return (...params) => {
            currentStack.assign(nodeObj, ...params);
            return nodeObj;
          };
        } else if (NodeElements.has(prop)) {
          const nodeElement = NodeElements.get(prop);
          return node.isStackNode ? (...params) => nodeObj.add(nodeElement(...params)) : (...params) => nodeElement(nodeObj, ...params);
        } else if (prop === "self") {
          return node;
        } else if (prop.endsWith("Assign") && NodeElements.has(prop.slice(0, prop.length - "Assign".length))) {
          const nodeElement = NodeElements.get(prop.slice(0, prop.length - "Assign".length));
          return node.isStackNode ? (...params) => nodeObj.assign(params[0], nodeElement(...params)) : (...params) => nodeObj.assign(nodeElement(nodeObj, ...params));
        } else if (/^[xyzwrgbastpq]{1,4}$/.test(prop) === true) {
          prop = parseSwizzle(prop);
          return nodeObject(new SplitNode(nodeObj, prop));
        } else if (/^set[XYZWRGBASTPQ]{1,4}$/.test(prop) === true) {
          prop = parseSwizzleAndSort(prop.slice(3).toLowerCase());
          return (value) => nodeObject(new SetNode(node, prop, value));
        } else if (/^flip[XYZWRGBASTPQ]{1,4}$/.test(prop) === true) {
          prop = parseSwizzleAndSort(prop.slice(4).toLowerCase());
          return () => nodeObject(new FlipNode(nodeObject(node), prop));
        } else if (prop === "width" || prop === "height" || prop === "depth") {
          if (prop === "width") prop = "x";
          else if (prop === "height") prop = "y";
          else if (prop === "depth") prop = "z";
          return nodeObject(new SplitNode(node, prop));
        } else if (/^\d+$/.test(prop) === true) {
          return nodeObject(new ArrayElementNode(nodeObj, new ConstNode(Number(prop), "uint")));
        }
      }
      return Reflect.get(node, prop, nodeObj);
    },
    set(node, prop, value, nodeObj) {
      if (typeof prop === "string" && node[prop] === void 0) {
        if (/^[xyzwrgbastpq]{1,4}$/.test(prop) === true || prop === "width" || prop === "height" || prop === "depth" || /^\d+$/.test(prop) === true) {
          nodeObj[prop].assign(value);
          return true;
        }
      }
      return Reflect.set(node, prop, value, nodeObj);
    }
  };
  const nodeObjectsCacheMap = /* @__PURE__ */ new WeakMap();
  const nodeBuilderFunctionsCacheMap = /* @__PURE__ */ new WeakMap();
  const ShaderNodeObject = function(obj, altType = null) {
    const type = getValueType(obj);
    if (type === "node") {
      let nodeObject2 = nodeObjectsCacheMap.get(obj);
      if (nodeObject2 === void 0) {
        nodeObject2 = new Proxy(obj, shaderNodeHandler);
        nodeObjectsCacheMap.set(obj, nodeObject2);
        nodeObjectsCacheMap.set(nodeObject2, nodeObject2);
      }
      return nodeObject2;
    } else if (altType === null && (type === "float" || type === "boolean") || type && type !== "shader" && type !== "string") {
      return nodeObject(getConstNode(obj, altType));
    } else if (type === "shader") {
      return Fn(obj);
    }
    return obj;
  };
  const ShaderNodeObjects = function(objects, altType = null) {
    for (const name in objects) {
      objects[name] = nodeObject(objects[name], altType);
    }
    return objects;
  };
  const ShaderNodeArray = function(array, altType = null) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      array[i] = nodeObject(array[i], altType);
    }
    return array;
  };
  const ShaderNodeProxy = function(NodeClass, scope = null, factor = null, settings = null) {
    const assignNode = (node) => nodeObject(settings !== null ? Object.assign(node, settings) : node);
    if (scope === null) {
      return (...params) => {
        return assignNode(new NodeClass(...nodeArray(params)));
      };
    } else if (factor !== null) {
      factor = nodeObject(factor);
      return (...params) => {
        return assignNode(new NodeClass(scope, ...nodeArray(params), factor));
      };
    } else {
      return (...params) => {
        return assignNode(new NodeClass(scope, ...nodeArray(params)));
      };
    }
  };
  const ShaderNodeImmutable = function(NodeClass, ...params) {
    return nodeObject(new NodeClass(...nodeArray(params)));
  };
  class ShaderCallNodeInternal extends Node {
    constructor(shaderNode, inputNodes) {
      super();
      this.shaderNode = shaderNode;
      this.inputNodes = inputNodes;
    }
    getNodeType(builder) {
      return this.shaderNode.nodeType || this.getOutputNode(builder).getNodeType(builder);
    }
    call(builder) {
      const { shaderNode, inputNodes } = this;
      const properties = builder.getNodeProperties(shaderNode);
      if (properties.onceOutput) return properties.onceOutput;
      let result = null;
      if (shaderNode.layout) {
        let functionNodesCacheMap = nodeBuilderFunctionsCacheMap.get(builder.constructor);
        if (functionNodesCacheMap === void 0) {
          functionNodesCacheMap = /* @__PURE__ */ new WeakMap();
          nodeBuilderFunctionsCacheMap.set(builder.constructor, functionNodesCacheMap);
        }
        let functionNode = functionNodesCacheMap.get(shaderNode);
        if (functionNode === void 0) {
          functionNode = nodeObject(builder.buildFunctionNode(shaderNode));
          functionNodesCacheMap.set(shaderNode, functionNode);
        }
        if (builder.currentFunctionNode !== null) {
          builder.currentFunctionNode.includes.push(functionNode);
        }
        result = nodeObject(functionNode.call(inputNodes));
      } else {
        const jsFunc = shaderNode.jsFunc;
        const outputNode = inputNodes !== null ? jsFunc(inputNodes, builder) : jsFunc(builder);
        result = nodeObject(outputNode);
      }
      if (shaderNode.once) {
        properties.onceOutput = result;
      }
      return result;
    }
    getOutputNode(builder) {
      const properties = builder.getNodeProperties(this);
      if (properties.outputNode === null) {
        properties.outputNode = this.setupOutput(builder);
      }
      return properties.outputNode;
    }
    setup(builder) {
      return this.getOutputNode(builder);
    }
    setupOutput(builder) {
      builder.addStack();
      builder.stack.outputNode = this.call(builder);
      return builder.removeStack();
    }
    generate(builder, output) {
      const outputNode = this.getOutputNode(builder);
      return outputNode.build(builder, output);
    }
  }
  class ShaderNodeInternal extends Node {
    constructor(jsFunc, nodeType) {
      super(nodeType);
      this.jsFunc = jsFunc;
      this.layout = null;
      this.global = true;
      this.once = false;
    }
    setLayout(layout) {
      this.layout = layout;
      return this;
    }
    call(inputs = null) {
      nodeObjects(inputs);
      return nodeObject(new ShaderCallNodeInternal(this, inputs));
    }
    setup() {
      return this.call();
    }
  }
  const bools = [false, true];
  const uints = [0, 1, 2, 3];
  const ints = [-1, -2];
  const floats = [0.5, 1.5, 1 / 3, 1e-6, 1e6, Math.PI, Math.PI * 2, 1 / Math.PI, 2 / Math.PI, 1 / (Math.PI * 2), Math.PI / 2];
  const boolsCacheMap = /* @__PURE__ */ new Map();
  for (const bool2 of bools) boolsCacheMap.set(bool2, new ConstNode(bool2));
  const uintsCacheMap = /* @__PURE__ */ new Map();
  for (const uint2 of uints) uintsCacheMap.set(uint2, new ConstNode(uint2, "uint"));
  const intsCacheMap = new Map([...uintsCacheMap].map((el) => new ConstNode(el.value, "int")));
  for (const int2 of ints) intsCacheMap.set(int2, new ConstNode(int2, "int"));
  const floatsCacheMap = new Map([...intsCacheMap].map((el) => new ConstNode(el.value)));
  for (const float2 of floats) floatsCacheMap.set(float2, new ConstNode(float2));
  for (const float2 of floats) floatsCacheMap.set(-float2, new ConstNode(-float2));
  const cacheMaps = { bool: boolsCacheMap, uint: uintsCacheMap, ints: intsCacheMap, float: floatsCacheMap };
  const constNodesCacheMap = new Map([...boolsCacheMap, ...floatsCacheMap]);
  const getConstNode = (value, type) => {
    if (constNodesCacheMap.has(value)) {
      return constNodesCacheMap.get(value);
    } else if (value.isNode === true) {
      return value;
    } else {
      return new ConstNode(value, type);
    }
  };
  const safeGetNodeType = (node) => {
    try {
      return node.getNodeType();
    } catch (_) {
      return void 0;
    }
  };
  const ConvertType = function(type, cacheMap = null) {
    return (...params) => {
      if (params.length === 0 || !["bool", "float", "int", "uint"].includes(type) && params.every((param) => typeof param !== "object")) {
        params = [getValueFromType(type, ...params)];
      }
      if (params.length === 1 && cacheMap !== null && cacheMap.has(params[0])) {
        return nodeObject(cacheMap.get(params[0]));
      }
      if (params.length === 1) {
        const node = getConstNode(params[0], type);
        if (safeGetNodeType(node) === type) return nodeObject(node);
        return nodeObject(new ConvertNode(node, type));
      }
      const nodes = params.map((param) => getConstNode(param));
      return nodeObject(new JoinNode(nodes, type));
    };
  };
  const getConstNodeType = (value) => value !== void 0 && value !== null ? value.nodeType || value.convertTo || (typeof value === "string" ? value : null) : null;
  function ShaderNode(jsFunc, nodeType) {
    return new Proxy(new ShaderNodeInternal(jsFunc, nodeType), shaderNodeHandler);
  }
  const nodeObject = (val, altType = null) => (
    /* new */
    ShaderNodeObject(val, altType)
  );
  const nodeObjects = (val, altType = null) => new ShaderNodeObjects(val, altType);
  const nodeArray = (val, altType = null) => new ShaderNodeArray(val, altType);
  const nodeProxy = (...params) => new ShaderNodeProxy(...params);
  const nodeImmutable = (...params) => new ShaderNodeImmutable(...params);
  const Fn = (jsFunc, nodeType) => {
    const shaderNode = new ShaderNode(jsFunc, nodeType);
    const fn = (...params) => {
      let inputs;
      nodeObjects(params);
      if (params[0] && params[0].isNode) {
        inputs = [...params];
      } else {
        inputs = params[0];
      }
      return shaderNode.call(inputs);
    };
    fn.shaderNode = shaderNode;
    fn.setLayout = (layout) => {
      shaderNode.setLayout(layout);
      return fn;
    };
    fn.once = () => {
      shaderNode.once = true;
      return fn;
    };
    return fn;
  };
  addMethodChaining("toGlobal", (node) => {
    node.global = true;
    return node;
  });
  const If = (...params) => currentStack.If(...params);
  function append(node) {
    return node;
  }
  addMethodChaining("append", append);
  const color = new ConvertType("color");
  const float = new ConvertType("float", cacheMaps.float);
  const int = new ConvertType("int", cacheMaps.ints);
  const uint = new ConvertType("uint", cacheMaps.uint);
  const bool = new ConvertType("bool", cacheMaps.bool);
  const vec2 = new ConvertType("vec2");
  const ivec2 = new ConvertType("ivec2");
  const uvec2 = new ConvertType("uvec2");
  const bvec2 = new ConvertType("bvec2");
  const vec3 = new ConvertType("vec3");
  const ivec3 = new ConvertType("ivec3");
  const uvec3 = new ConvertType("uvec3");
  const bvec3 = new ConvertType("bvec3");
  const vec4 = new ConvertType("vec4");
  const ivec4 = new ConvertType("ivec4");
  const uvec4 = new ConvertType("uvec4");
  const bvec4 = new ConvertType("bvec4");
  const mat2 = new ConvertType("mat2");
  const mat3 = new ConvertType("mat3");
  const mat4 = new ConvertType("mat4");
  addMethodChaining("toColor", color);
  addMethodChaining("toFloat", float);
  addMethodChaining("toInt", int);
  addMethodChaining("toUint", uint);
  addMethodChaining("toBool", bool);
  addMethodChaining("toVec2", vec2);
  addMethodChaining("toIVec2", ivec2);
  addMethodChaining("toUVec2", uvec2);
  addMethodChaining("toBVec2", bvec2);
  addMethodChaining("toVec3", vec3);
  addMethodChaining("toIVec3", ivec3);
  addMethodChaining("toUVec3", uvec3);
  addMethodChaining("toBVec3", bvec3);
  addMethodChaining("toVec4", vec4);
  addMethodChaining("toIVec4", ivec4);
  addMethodChaining("toUVec4", uvec4);
  addMethodChaining("toBVec4", bvec4);
  addMethodChaining("toMat2", mat2);
  addMethodChaining("toMat3", mat3);
  addMethodChaining("toMat4", mat4);
  const element = /* @__PURE__ */ nodeProxy(ArrayElementNode);
  const convert = (node, types) => nodeObject(new ConvertNode(nodeObject(node), types));
  addMethodChaining("element", element);
  addMethodChaining("convert", convert);
  class UniformGroupNode extends Node {
    static get type() {
      return "UniformGroupNode";
    }
    constructor(name, shared = false, order = 1) {
      super("string");
      this.name = name;
      this.version = 0;
      this.shared = shared;
      this.order = order;
      this.isUniformGroup = true;
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    serialize(data) {
      super.serialize(data);
      data.name = this.name;
      data.version = this.version;
      data.shared = this.shared;
    }
    deserialize(data) {
      super.deserialize(data);
      this.name = data.name;
      this.version = data.version;
      this.shared = data.shared;
    }
  }
  const uniformGroup = (name) => new UniformGroupNode(name);
  const sharedUniformGroup = (name, order = 0) => new UniformGroupNode(name, true, order);
  const renderGroup = /* @__PURE__ */ sharedUniformGroup("render");
  const objectGroup = /* @__PURE__ */ uniformGroup("object");
  class UniformNode extends InputNode {
    static get type() {
      return "UniformNode";
    }
    constructor(value, nodeType = null) {
      super(value, nodeType);
      this.isUniformNode = true;
      this.name = "";
      this.groupNode = objectGroup;
    }
    label(name) {
      this.name = name;
      return this;
    }
    setGroup(group) {
      this.groupNode = group;
      return this;
    }
    getGroup() {
      return this.groupNode;
    }
    getUniformHash(builder) {
      return this.getHash(builder);
    }
    onUpdate(callback, updateType) {
      const self2 = this.getSelf();
      callback = callback.bind(self2);
      return super.onUpdate((frame) => {
        const value = callback(frame, self2);
        if (value !== void 0) {
          this.value = value;
        }
      }, updateType);
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      const hash = this.getUniformHash(builder);
      let sharedNode = builder.getNodeFromHash(hash);
      if (sharedNode === void 0) {
        builder.setHashNode(this, hash);
        sharedNode = this;
      }
      const sharedNodeType = sharedNode.getInputType(builder);
      const nodeUniform = builder.getUniformFromNode(sharedNode, sharedNodeType, builder.shaderStage, this.name || builder.context.label);
      const propertyName = builder.getPropertyName(nodeUniform);
      if (builder.context.label !== void 0) delete builder.context.label;
      return builder.format(propertyName, type, output);
    }
  }
  const uniform = (arg1, arg2) => {
    const nodeType = getConstNodeType(arg2 || arg1);
    const value = arg1 && arg1.isNode === true ? arg1.node && arg1.node.value || arg1.value : arg1;
    return nodeObject(new UniformNode(value, nodeType));
  };
  class PropertyNode extends Node {
    static get type() {
      return "PropertyNode";
    }
    constructor(nodeType, name = null, varying2 = false) {
      super(nodeType);
      this.name = name;
      this.varying = varying2;
      this.isPropertyNode = true;
    }
    getHash(builder) {
      return this.name || super.getHash(builder);
    }
    isGlobal() {
      return true;
    }
    generate(builder) {
      let nodeVar;
      if (this.varying === true) {
        nodeVar = builder.getVaryingFromNode(this, this.name);
        nodeVar.needsInterpolation = true;
      } else {
        nodeVar = builder.getVarFromNode(this, this.name);
      }
      return builder.getPropertyName(nodeVar);
    }
  }
  const property = (type, name) => nodeObject(new PropertyNode(type, name));
  const diffuseColor = /* @__PURE__ */ nodeImmutable(PropertyNode, "vec4", "DiffuseColor");
  class AssignNode extends TempNode {
    static get type() {
      return "AssignNode";
    }
    constructor(targetNode, sourceNode) {
      super();
      this.targetNode = targetNode;
      this.sourceNode = sourceNode;
    }
    hasDependencies() {
      return false;
    }
    getNodeType(builder, output) {
      return output !== "void" ? this.targetNode.getNodeType(builder) : "void";
    }
    needsSplitAssign(builder) {
      const { targetNode } = this;
      if (builder.isAvailable("swizzleAssign") === false && targetNode.isSplitNode && targetNode.components.length > 1) {
        const targetLength = builder.getTypeLength(targetNode.node.getNodeType(builder));
        const assignDiferentVector = vectorComponents.join("").slice(0, targetLength) !== targetNode.components;
        return assignDiferentVector;
      }
      return false;
    }
    generate(builder, output) {
      const { targetNode, sourceNode } = this;
      const needsSplitAssign = this.needsSplitAssign(builder);
      const targetType = targetNode.getNodeType(builder);
      const target = targetNode.context({ assign: true }).build(builder);
      const source = sourceNode.build(builder, targetType);
      const sourceType = sourceNode.getNodeType(builder);
      const nodeData = builder.getDataFromNode(this);
      let snippet;
      if (nodeData.initialized === true) {
        if (output !== "void") {
          snippet = target;
        }
      } else if (needsSplitAssign) {
        const sourceVar = builder.getVarFromNode(this, null, targetType);
        const sourceProperty = builder.getPropertyName(sourceVar);
        builder.addLineFlowCode(`${sourceProperty} = ${source}`, this);
        const targetRoot = targetNode.node.context({ assign: true }).build(builder);
        for (let i = 0; i < targetNode.components.length; i++) {
          const component = targetNode.components[i];
          builder.addLineFlowCode(`${targetRoot}.${component} = ${sourceProperty}[ ${i} ]`, this);
        }
        if (output !== "void") {
          snippet = target;
        }
      } else {
        snippet = `${target} = ${source}`;
        if (output === "void" || sourceType === "void") {
          builder.addLineFlowCode(snippet, this);
          if (output !== "void") {
            snippet = target;
          }
        }
      }
      nodeData.initialized = true;
      return builder.format(snippet, targetType, output);
    }
  }
  const assign = /* @__PURE__ */ nodeProxy(AssignNode);
  addMethodChaining("assign", assign);
  class FunctionCallNode extends TempNode {
    static get type() {
      return "FunctionCallNode";
    }
    constructor(functionNode = null, parameters = {}) {
      super();
      this.functionNode = functionNode;
      this.parameters = parameters;
    }
    setParameters(parameters) {
      this.parameters = parameters;
      return this;
    }
    getParameters() {
      return this.parameters;
    }
    getNodeType(builder) {
      return this.functionNode.getNodeType(builder);
    }
    generate(builder) {
      const params = [];
      const functionNode = this.functionNode;
      const inputs = functionNode.getInputs(builder);
      const parameters = this.parameters;
      if (Array.isArray(parameters)) {
        for (let i = 0; i < parameters.length; i++) {
          const inputNode = inputs[i];
          const node = parameters[i];
          params.push(node.build(builder, inputNode.type));
        }
      } else {
        for (const inputNode of inputs) {
          const node = parameters[inputNode.name];
          if (node !== void 0) {
            params.push(node.build(builder, inputNode.type));
          } else {
            throw new Error(`FunctionCallNode: Input '${inputNode.name}' not found in FunctionNode.`);
          }
        }
      }
      const functionName = functionNode.build(builder, "property");
      return `${functionName}( ${params.join(", ")} )`;
    }
  }
  const call = (func, ...params) => {
    params = params.length > 1 || params[0] && params[0].isNode === true ? nodeArray(params) : nodeObjects(params[0]);
    return nodeObject(new FunctionCallNode(nodeObject(func), params));
  };
  addMethodChaining("call", call);
  class OperatorNode extends TempNode {
    static get type() {
      return "OperatorNode";
    }
    constructor(op, aNode, bNode, ...params) {
      super();
      if (params.length > 0) {
        let finalOp = new OperatorNode(op, aNode, bNode);
        for (let i = 0; i < params.length - 1; i++) {
          finalOp = new OperatorNode(op, finalOp, params[i]);
        }
        aNode = finalOp;
        bNode = params[params.length - 1];
      }
      this.op = op;
      this.aNode = aNode;
      this.bNode = bNode;
    }
    getNodeType(builder, output) {
      const op = this.op;
      const aNode = this.aNode;
      const bNode = this.bNode;
      const typeA = aNode.getNodeType(builder);
      const typeB = typeof bNode !== "undefined" ? bNode.getNodeType(builder) : null;
      if (typeA === "void" || typeB === "void") {
        return "void";
      } else if (op === "%") {
        return typeA;
      } else if (op === "~" || op === "&" || op === "|" || op === "^" || op === ">>" || op === "<<") {
        return builder.getIntegerType(typeA);
      } else if (op === "!" || op === "==" || op === "&&" || op === "||" || op === "^^") {
        return "bool";
      } else if (op === "<" || op === ">" || op === "<=" || op === ">=") {
        const typeLength = output ? builder.getTypeLength(output) : Math.max(builder.getTypeLength(typeA), builder.getTypeLength(typeB));
        return typeLength > 1 ? `bvec${typeLength}` : "bool";
      } else {
        if (typeA === "float" && builder.isMatrix(typeB)) {
          return typeB;
        } else if (builder.isMatrix(typeA) && builder.isVector(typeB)) {
          return builder.getVectorFromMatrix(typeA);
        } else if (builder.isVector(typeA) && builder.isMatrix(typeB)) {
          return builder.getVectorFromMatrix(typeB);
        } else if (builder.getTypeLength(typeB) > builder.getTypeLength(typeA)) {
          return typeB;
        }
        return typeA;
      }
    }
    generate(builder, output) {
      const op = this.op;
      const aNode = this.aNode;
      const bNode = this.bNode;
      const type = this.getNodeType(builder, output);
      let typeA = null;
      let typeB = null;
      if (type !== "void") {
        typeA = aNode.getNodeType(builder);
        typeB = typeof bNode !== "undefined" ? bNode.getNodeType(builder) : null;
        if (op === "<" || op === ">" || op === "<=" || op === ">=" || op === "==") {
          if (builder.isVector(typeA)) {
            typeB = typeA;
          } else if (typeA !== typeB) {
            typeA = typeB = "float";
          }
        } else if (op === ">>" || op === "<<") {
          typeA = type;
          typeB = builder.changeComponentType(typeB, "uint");
        } else if (builder.isMatrix(typeA) && builder.isVector(typeB)) {
          typeB = builder.getVectorFromMatrix(typeA);
        } else if (builder.isVector(typeA) && builder.isMatrix(typeB)) {
          typeA = builder.getVectorFromMatrix(typeB);
        } else {
          typeA = typeB = type;
        }
      } else {
        typeA = typeB = type;
      }
      const a = aNode.build(builder, typeA);
      const b = typeof bNode !== "undefined" ? bNode.build(builder, typeB) : null;
      const outputLength = builder.getTypeLength(output);
      const fnOpSnippet = builder.getFunctionOperator(op);
      if (output !== "void") {
        if (op === "<" && outputLength > 1) {
          if (builder.useComparisonMethod) {
            return builder.format(`${builder.getMethod("lessThan", output)}( ${a}, ${b} )`, type, output);
          } else {
            return builder.format(`( ${a} < ${b} )`, type, output);
          }
        } else if (op === "<=" && outputLength > 1) {
          if (builder.useComparisonMethod) {
            return builder.format(`${builder.getMethod("lessThanEqual", output)}( ${a}, ${b} )`, type, output);
          } else {
            return builder.format(`( ${a} <= ${b} )`, type, output);
          }
        } else if (op === ">" && outputLength > 1) {
          if (builder.useComparisonMethod) {
            return builder.format(`${builder.getMethod("greaterThan", output)}( ${a}, ${b} )`, type, output);
          } else {
            return builder.format(`( ${a} > ${b} )`, type, output);
          }
        } else if (op === ">=" && outputLength > 1) {
          if (builder.useComparisonMethod) {
            return builder.format(`${builder.getMethod("greaterThanEqual", output)}( ${a}, ${b} )`, type, output);
          } else {
            return builder.format(`( ${a} >= ${b} )`, type, output);
          }
        } else if (op === "!" || op === "~") {
          return builder.format(`(${op}${a})`, typeA, output);
        } else if (fnOpSnippet) {
          return builder.format(`${fnOpSnippet}( ${a}, ${b} )`, type, output);
        } else {
          return builder.format(`( ${a} ${op} ${b} )`, type, output);
        }
      } else if (typeA !== "void") {
        if (fnOpSnippet) {
          return builder.format(`${fnOpSnippet}( ${a}, ${b} )`, type, output);
        } else {
          return builder.format(`${a} ${op} ${b}`, type, output);
        }
      }
    }
    serialize(data) {
      super.serialize(data);
      data.op = this.op;
    }
    deserialize(data) {
      super.deserialize(data);
      this.op = data.op;
    }
  }
  const add = /* @__PURE__ */ nodeProxy(OperatorNode, "+");
  const sub = /* @__PURE__ */ nodeProxy(OperatorNode, "-");
  const mul = /* @__PURE__ */ nodeProxy(OperatorNode, "*");
  const div = /* @__PURE__ */ nodeProxy(OperatorNode, "/");
  const modInt = /* @__PURE__ */ nodeProxy(OperatorNode, "%");
  const equal = /* @__PURE__ */ nodeProxy(OperatorNode, "==");
  const notEqual = /* @__PURE__ */ nodeProxy(OperatorNode, "!=");
  const lessThan = /* @__PURE__ */ nodeProxy(OperatorNode, "<");
  const greaterThan = /* @__PURE__ */ nodeProxy(OperatorNode, ">");
  const lessThanEqual = /* @__PURE__ */ nodeProxy(OperatorNode, "<=");
  const greaterThanEqual = /* @__PURE__ */ nodeProxy(OperatorNode, ">=");
  const and = /* @__PURE__ */ nodeProxy(OperatorNode, "&&");
  const or = /* @__PURE__ */ nodeProxy(OperatorNode, "||");
  const not = /* @__PURE__ */ nodeProxy(OperatorNode, "!");
  const xor = /* @__PURE__ */ nodeProxy(OperatorNode, "^^");
  const bitAnd = /* @__PURE__ */ nodeProxy(OperatorNode, "&");
  const bitNot = /* @__PURE__ */ nodeProxy(OperatorNode, "~");
  const bitOr = /* @__PURE__ */ nodeProxy(OperatorNode, "|");
  const bitXor = /* @__PURE__ */ nodeProxy(OperatorNode, "^");
  const shiftLeft = /* @__PURE__ */ nodeProxy(OperatorNode, "<<");
  const shiftRight = /* @__PURE__ */ nodeProxy(OperatorNode, ">>");
  addMethodChaining("add", add);
  addMethodChaining("sub", sub);
  addMethodChaining("mul", mul);
  addMethodChaining("div", div);
  addMethodChaining("modInt", modInt);
  addMethodChaining("equal", equal);
  addMethodChaining("notEqual", notEqual);
  addMethodChaining("lessThan", lessThan);
  addMethodChaining("greaterThan", greaterThan);
  addMethodChaining("lessThanEqual", lessThanEqual);
  addMethodChaining("greaterThanEqual", greaterThanEqual);
  addMethodChaining("and", and);
  addMethodChaining("or", or);
  addMethodChaining("not", not);
  addMethodChaining("xor", xor);
  addMethodChaining("bitAnd", bitAnd);
  addMethodChaining("bitNot", bitNot);
  addMethodChaining("bitOr", bitOr);
  addMethodChaining("bitXor", bitXor);
  addMethodChaining("shiftLeft", shiftLeft);
  addMethodChaining("shiftRight", shiftRight);
  const remainder = (...params) => {
    console.warn("TSL.OperatorNode: .remainder() has been renamed to .modInt().");
    return modInt(...params);
  };
  addMethodChaining("remainder", remainder);
  class MathNode extends TempNode {
    static get type() {
      return "MathNode";
    }
    constructor(method, aNode, bNode = null, cNode = null) {
      super();
      this.method = method;
      this.aNode = aNode;
      this.bNode = bNode;
      this.cNode = cNode;
    }
    getInputType(builder) {
      const aType = this.aNode.getNodeType(builder);
      const bType = this.bNode ? this.bNode.getNodeType(builder) : null;
      const cType = this.cNode ? this.cNode.getNodeType(builder) : null;
      const aLen = builder.isMatrix(aType) ? 0 : builder.getTypeLength(aType);
      const bLen = builder.isMatrix(bType) ? 0 : builder.getTypeLength(bType);
      const cLen = builder.isMatrix(cType) ? 0 : builder.getTypeLength(cType);
      if (aLen > bLen && aLen > cLen) {
        return aType;
      } else if (bLen > cLen) {
        return bType;
      } else if (cLen > aLen) {
        return cType;
      }
      return aType;
    }
    getNodeType(builder) {
      const method = this.method;
      if (method === MathNode.LENGTH || method === MathNode.DISTANCE || method === MathNode.DOT) {
        return "float";
      } else if (method === MathNode.CROSS) {
        return "vec3";
      } else if (method === MathNode.ALL) {
        return "bool";
      } else if (method === MathNode.EQUALS) {
        return builder.changeComponentType(this.aNode.getNodeType(builder), "bool");
      } else if (method === MathNode.MOD) {
        return this.aNode.getNodeType(builder);
      } else {
        return this.getInputType(builder);
      }
    }
    generate(builder, output) {
      const method = this.method;
      const type = this.getNodeType(builder);
      const inputType = this.getInputType(builder);
      const a = this.aNode;
      const b = this.bNode;
      const c = this.cNode;
      const isWebGL = builder.renderer.isWebGLRenderer === true;
      if (method === MathNode.TRANSFORM_DIRECTION) {
        let tA = a;
        let tB = b;
        if (builder.isMatrix(tA.getNodeType(builder))) {
          tB = vec4(vec3(tB), 0);
        } else {
          tA = vec4(vec3(tA), 0);
        }
        const mulNode = mul(tA, tB).xyz;
        return normalize(mulNode).build(builder, output);
      } else if (method === MathNode.NEGATE) {
        return builder.format("( - " + a.build(builder, inputType) + " )", type, output);
      } else if (method === MathNode.ONE_MINUS) {
        return sub(1, a).build(builder, output);
      } else if (method === MathNode.RECIPROCAL) {
        return div(1, a).build(builder, output);
      } else if (method === MathNode.DIFFERENCE) {
        return abs(sub(a, b)).build(builder, output);
      } else {
        const params = [];
        if (method === MathNode.CROSS || method === MathNode.MOD) {
          params.push(
            a.build(builder, type),
            b.build(builder, type)
          );
        } else if (isWebGL && method === MathNode.STEP) {
          params.push(
            a.build(builder, builder.getTypeLength(a.getNodeType(builder)) === 1 ? "float" : inputType),
            b.build(builder, inputType)
          );
        } else if (isWebGL && (method === MathNode.MIN || method === MathNode.MAX) || method === MathNode.MOD) {
          params.push(
            a.build(builder, inputType),
            b.build(builder, builder.getTypeLength(b.getNodeType(builder)) === 1 ? "float" : inputType)
          );
        } else if (method === MathNode.REFRACT) {
          params.push(
            a.build(builder, inputType),
            b.build(builder, inputType),
            c.build(builder, "float")
          );
        } else if (method === MathNode.MIX) {
          params.push(
            a.build(builder, inputType),
            b.build(builder, inputType),
            c.build(builder, builder.getTypeLength(c.getNodeType(builder)) === 1 ? "float" : inputType)
          );
        } else {
          params.push(a.build(builder, inputType));
          if (b !== null) params.push(b.build(builder, inputType));
          if (c !== null) params.push(c.build(builder, inputType));
        }
        return builder.format(`${builder.getMethod(method, type)}( ${params.join(", ")} )`, type, output);
      }
    }
    serialize(data) {
      super.serialize(data);
      data.method = this.method;
    }
    deserialize(data) {
      super.deserialize(data);
      this.method = data.method;
    }
  }
  MathNode.ALL = "all";
  MathNode.ANY = "any";
  MathNode.EQUALS = "equals";
  MathNode.RADIANS = "radians";
  MathNode.DEGREES = "degrees";
  MathNode.EXP = "exp";
  MathNode.EXP2 = "exp2";
  MathNode.LOG = "log";
  MathNode.LOG2 = "log2";
  MathNode.SQRT = "sqrt";
  MathNode.INVERSE_SQRT = "inversesqrt";
  MathNode.FLOOR = "floor";
  MathNode.CEIL = "ceil";
  MathNode.NORMALIZE = "normalize";
  MathNode.FRACT = "fract";
  MathNode.SIN = "sin";
  MathNode.COS = "cos";
  MathNode.TAN = "tan";
  MathNode.ASIN = "asin";
  MathNode.ACOS = "acos";
  MathNode.ATAN = "atan";
  MathNode.ABS = "abs";
  MathNode.SIGN = "sign";
  MathNode.LENGTH = "length";
  MathNode.NEGATE = "negate";
  MathNode.ONE_MINUS = "oneMinus";
  MathNode.DFDX = "dFdx";
  MathNode.DFDY = "dFdy";
  MathNode.ROUND = "round";
  MathNode.RECIPROCAL = "reciprocal";
  MathNode.TRUNC = "trunc";
  MathNode.FWIDTH = "fwidth";
  MathNode.BITCAST = "bitcast";
  MathNode.TRANSPOSE = "transpose";
  MathNode.ATAN2 = "atan2";
  MathNode.MIN = "min";
  MathNode.MAX = "max";
  MathNode.MOD = "mod";
  MathNode.STEP = "step";
  MathNode.REFLECT = "reflect";
  MathNode.DISTANCE = "distance";
  MathNode.DIFFERENCE = "difference";
  MathNode.DOT = "dot";
  MathNode.CROSS = "cross";
  MathNode.POW = "pow";
  MathNode.TRANSFORM_DIRECTION = "transformDirection";
  MathNode.MIX = "mix";
  MathNode.CLAMP = "clamp";
  MathNode.REFRACT = "refract";
  MathNode.SMOOTHSTEP = "smoothstep";
  MathNode.FACEFORWARD = "faceforward";
  const PI = /* @__PURE__ */ float(Math.PI);
  const all = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ALL);
  const any = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ANY);
  const equals = /* @__PURE__ */ nodeProxy(MathNode, MathNode.EQUALS);
  const radians = /* @__PURE__ */ nodeProxy(MathNode, MathNode.RADIANS);
  const degrees = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DEGREES);
  const exp = /* @__PURE__ */ nodeProxy(MathNode, MathNode.EXP);
  const exp2 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.EXP2);
  const log = /* @__PURE__ */ nodeProxy(MathNode, MathNode.LOG);
  const log2 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.LOG2);
  const sqrt = /* @__PURE__ */ nodeProxy(MathNode, MathNode.SQRT);
  const inverseSqrt = /* @__PURE__ */ nodeProxy(MathNode, MathNode.INVERSE_SQRT);
  const floor = /* @__PURE__ */ nodeProxy(MathNode, MathNode.FLOOR);
  const ceil = /* @__PURE__ */ nodeProxy(MathNode, MathNode.CEIL);
  const normalize = /* @__PURE__ */ nodeProxy(MathNode, MathNode.NORMALIZE);
  const fract = /* @__PURE__ */ nodeProxy(MathNode, MathNode.FRACT);
  const sin = /* @__PURE__ */ nodeProxy(MathNode, MathNode.SIN);
  const cos = /* @__PURE__ */ nodeProxy(MathNode, MathNode.COS);
  const tan = /* @__PURE__ */ nodeProxy(MathNode, MathNode.TAN);
  const asin = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ASIN);
  const acos = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ACOS);
  const atan = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ATAN);
  const abs = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ABS);
  const sign = /* @__PURE__ */ nodeProxy(MathNode, MathNode.SIGN);
  const length = /* @__PURE__ */ nodeProxy(MathNode, MathNode.LENGTH);
  const negate = /* @__PURE__ */ nodeProxy(MathNode, MathNode.NEGATE);
  const oneMinus = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ONE_MINUS);
  const dFdx = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DFDX);
  const dFdy = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DFDY);
  const round = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ROUND);
  const reciprocal = /* @__PURE__ */ nodeProxy(MathNode, MathNode.RECIPROCAL);
  const trunc = /* @__PURE__ */ nodeProxy(MathNode, MathNode.TRUNC);
  const fwidth = /* @__PURE__ */ nodeProxy(MathNode, MathNode.FWIDTH);
  /* @__PURE__ */ nodeProxy(MathNode, MathNode.BITCAST);
  const transpose = /* @__PURE__ */ nodeProxy(MathNode, MathNode.TRANSPOSE);
  const atan2 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ATAN2);
  const min$1 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.MIN);
  const max$1 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.MAX);
  const mod = /* @__PURE__ */ nodeProxy(MathNode, MathNode.MOD);
  const step = /* @__PURE__ */ nodeProxy(MathNode, MathNode.STEP);
  const reflect = /* @__PURE__ */ nodeProxy(MathNode, MathNode.REFLECT);
  const distance = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DISTANCE);
  const difference = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DIFFERENCE);
  const dot = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DOT);
  const cross = /* @__PURE__ */ nodeProxy(MathNode, MathNode.CROSS);
  const pow = /* @__PURE__ */ nodeProxy(MathNode, MathNode.POW);
  const pow2 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.POW, 2);
  const pow3 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.POW, 3);
  const pow4 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.POW, 4);
  const transformDirection = /* @__PURE__ */ nodeProxy(MathNode, MathNode.TRANSFORM_DIRECTION);
  const cbrt = (a) => mul(sign(a), pow(abs(a), 1 / 3));
  const lengthSq = (a) => dot(a, a);
  const mix = /* @__PURE__ */ nodeProxy(MathNode, MathNode.MIX);
  const clamp = (value, low = 0, high = 1) => nodeObject(new MathNode(MathNode.CLAMP, nodeObject(value), nodeObject(low), nodeObject(high)));
  const saturate = (value) => clamp(value);
  const refract = /* @__PURE__ */ nodeProxy(MathNode, MathNode.REFRACT);
  const smoothstep = /* @__PURE__ */ nodeProxy(MathNode, MathNode.SMOOTHSTEP);
  const faceForward = /* @__PURE__ */ nodeProxy(MathNode, MathNode.FACEFORWARD);
  const rand = /* @__PURE__ */ Fn(([uv2]) => {
    const a = 12.9898, b = 78.233, c = 43758.5453;
    const dt2 = dot(uv2.xy, vec2(a, b)), sn = mod(dt2, PI);
    return fract(sin(sn).mul(c));
  });
  const mixElement = (t2, e1, e2) => mix(e1, e2, t2);
  const smoothstepElement = (x, low, high) => smoothstep(low, high, x);
  addMethodChaining("all", all);
  addMethodChaining("any", any);
  addMethodChaining("equals", equals);
  addMethodChaining("radians", radians);
  addMethodChaining("degrees", degrees);
  addMethodChaining("exp", exp);
  addMethodChaining("exp2", exp2);
  addMethodChaining("log", log);
  addMethodChaining("log2", log2);
  addMethodChaining("sqrt", sqrt);
  addMethodChaining("inverseSqrt", inverseSqrt);
  addMethodChaining("floor", floor);
  addMethodChaining("ceil", ceil);
  addMethodChaining("normalize", normalize);
  addMethodChaining("fract", fract);
  addMethodChaining("sin", sin);
  addMethodChaining("cos", cos);
  addMethodChaining("tan", tan);
  addMethodChaining("asin", asin);
  addMethodChaining("acos", acos);
  addMethodChaining("atan", atan);
  addMethodChaining("abs", abs);
  addMethodChaining("sign", sign);
  addMethodChaining("length", length);
  addMethodChaining("lengthSq", lengthSq);
  addMethodChaining("negate", negate);
  addMethodChaining("oneMinus", oneMinus);
  addMethodChaining("dFdx", dFdx);
  addMethodChaining("dFdy", dFdy);
  addMethodChaining("round", round);
  addMethodChaining("reciprocal", reciprocal);
  addMethodChaining("trunc", trunc);
  addMethodChaining("fwidth", fwidth);
  addMethodChaining("atan2", atan2);
  addMethodChaining("min", min$1);
  addMethodChaining("max", max$1);
  addMethodChaining("mod", mod);
  addMethodChaining("step", step);
  addMethodChaining("reflect", reflect);
  addMethodChaining("distance", distance);
  addMethodChaining("dot", dot);
  addMethodChaining("cross", cross);
  addMethodChaining("pow", pow);
  addMethodChaining("pow2", pow2);
  addMethodChaining("pow3", pow3);
  addMethodChaining("pow4", pow4);
  addMethodChaining("transformDirection", transformDirection);
  addMethodChaining("mix", mixElement);
  addMethodChaining("clamp", clamp);
  addMethodChaining("refract", refract);
  addMethodChaining("smoothstep", smoothstepElement);
  addMethodChaining("faceForward", faceForward);
  addMethodChaining("difference", difference);
  addMethodChaining("saturate", saturate);
  addMethodChaining("cbrt", cbrt);
  addMethodChaining("transpose", transpose);
  addMethodChaining("rand", rand);
  class ConditionalNode extends Node {
    static get type() {
      return "ConditionalNode";
    }
    constructor(condNode, ifNode, elseNode = null) {
      super();
      this.condNode = condNode;
      this.ifNode = ifNode;
      this.elseNode = elseNode;
    }
    getNodeType(builder) {
      const ifType = this.ifNode.getNodeType(builder);
      if (this.elseNode !== null) {
        const elseType = this.elseNode.getNodeType(builder);
        if (builder.getTypeLength(elseType) > builder.getTypeLength(ifType)) {
          return elseType;
        }
      }
      return ifType;
    }
    setup(builder) {
      const condNode = this.condNode.cache();
      const ifNode = this.ifNode.cache();
      const elseNode = this.elseNode ? this.elseNode.cache() : null;
      const currentNodeBlock = builder.context.nodeBlock;
      builder.getDataFromNode(ifNode).parentNodeBlock = currentNodeBlock;
      if (elseNode !== null) builder.getDataFromNode(elseNode).parentNodeBlock = currentNodeBlock;
      const properties = builder.getNodeProperties(this);
      properties.condNode = condNode;
      properties.ifNode = ifNode.context({ nodeBlock: ifNode });
      properties.elseNode = elseNode ? elseNode.context({ nodeBlock: elseNode }) : null;
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      const nodeData = builder.getDataFromNode(this);
      if (nodeData.nodeProperty !== void 0) {
        return nodeData.nodeProperty;
      }
      const { condNode, ifNode, elseNode } = builder.getNodeProperties(this);
      const needsOutput = output !== "void";
      const nodeProperty = needsOutput ? property(type).build(builder) : "";
      nodeData.nodeProperty = nodeProperty;
      const nodeSnippet = condNode.build(builder, "bool");
      builder.addFlowCode(`
${builder.tab}if ( ${nodeSnippet} ) {

`).addFlowTab();
      let ifSnippet = ifNode.build(builder, type);
      if (ifSnippet) {
        if (needsOutput) {
          ifSnippet = nodeProperty + " = " + ifSnippet + ";";
        } else {
          ifSnippet = "return " + ifSnippet + ";";
        }
      }
      builder.removeFlowTab().addFlowCode(builder.tab + "	" + ifSnippet + "\n\n" + builder.tab + "}");
      if (elseNode !== null) {
        builder.addFlowCode(" else {\n\n").addFlowTab();
        let elseSnippet = elseNode.build(builder, type);
        if (elseSnippet) {
          if (needsOutput) {
            elseSnippet = nodeProperty + " = " + elseSnippet + ";";
          } else {
            elseSnippet = "return " + elseSnippet + ";";
          }
        }
        builder.removeFlowTab().addFlowCode(builder.tab + "	" + elseSnippet + "\n\n" + builder.tab + "}\n\n");
      } else {
        builder.addFlowCode("\n\n");
      }
      return builder.format(nodeProperty, type, output);
    }
  }
  const select = /* @__PURE__ */ nodeProxy(ConditionalNode);
  addMethodChaining("select", select);
  const cond = (...params) => {
    console.warn("TSL.ConditionalNode: cond() has been renamed to select().");
    return select(...params);
  };
  addMethodChaining("cond", cond);
  class ContextNode extends Node {
    static get type() {
      return "ContextNode";
    }
    constructor(node, value = {}) {
      super();
      this.isContextNode = true;
      this.node = node;
      this.value = value;
    }
    getScope() {
      return this.node.getScope();
    }
    getNodeType(builder) {
      return this.node.getNodeType(builder);
    }
    analyze(builder) {
      this.node.build(builder);
    }
    setup(builder) {
      const previousContext = builder.getContext();
      builder.setContext({ ...builder.context, ...this.value });
      const node = this.node.build(builder);
      builder.setContext(previousContext);
      return node;
    }
    generate(builder, output) {
      const previousContext = builder.getContext();
      builder.setContext({ ...builder.context, ...this.value });
      const snippet = this.node.build(builder, output);
      builder.setContext(previousContext);
      return snippet;
    }
  }
  const context = /* @__PURE__ */ nodeProxy(ContextNode);
  const label = (node, name) => context(node, { label: name });
  addMethodChaining("context", context);
  addMethodChaining("label", label);
  class VarNode extends Node {
    static get type() {
      return "VarNode";
    }
    constructor(node, name = null) {
      super();
      this.node = node;
      this.name = name;
      this.global = true;
      this.isVarNode = true;
    }
    getHash(builder) {
      return this.name || super.getHash(builder);
    }
    getNodeType(builder) {
      return this.node.getNodeType(builder);
    }
    generate(builder) {
      const { node, name } = this;
      const nodeVar = builder.getVarFromNode(this, name, builder.getVectorType(this.getNodeType(builder)));
      const propertyName = builder.getPropertyName(nodeVar);
      const snippet = node.build(builder, nodeVar.type);
      builder.addLineFlowCode(`${propertyName} = ${snippet}`, this);
      return propertyName;
    }
  }
  const temp = /* @__PURE__ */ nodeProxy(VarNode);
  addMethodChaining("temp", temp);
  addMethodChaining("toVar", (...params) => temp(...params).append());
  class VaryingNode extends Node {
    static get type() {
      return "VaryingNode";
    }
    constructor(node, name = null) {
      super();
      this.node = node;
      this.name = name;
      this.isVaryingNode = true;
    }
    isGlobal() {
      return true;
    }
    getHash(builder) {
      return this.name || super.getHash(builder);
    }
    getNodeType(builder) {
      return this.node.getNodeType(builder);
    }
    setupVarying(builder) {
      const properties = builder.getNodeProperties(this);
      let varying2 = properties.varying;
      if (varying2 === void 0) {
        const name = this.name;
        const type = this.getNodeType(builder);
        properties.varying = varying2 = builder.getVaryingFromNode(this, name, type);
        properties.node = this.node;
      }
      varying2.needsInterpolation || (varying2.needsInterpolation = builder.shaderStage === "fragment");
      return varying2;
    }
    setup(builder) {
      this.setupVarying(builder);
    }
    analyze(builder) {
      this.setupVarying(builder);
      return this.node.analyze(builder);
    }
    generate(builder) {
      const properties = builder.getNodeProperties(this);
      const varying2 = this.setupVarying(builder);
      if (properties.propertyName === void 0) {
        const type = this.getNodeType(builder);
        const propertyName = builder.getPropertyName(varying2, NodeShaderStage.VERTEX);
        builder.flowNodeFromShaderStage(NodeShaderStage.VERTEX, this.node, type, propertyName);
        properties.propertyName = propertyName;
      }
      return builder.getPropertyName(varying2);
    }
  }
  const varying = /* @__PURE__ */ nodeProxy(VaryingNode);
  addMethodChaining("varying", varying);
  const WORKING_COLOR_SPACE = "WorkingColorSpace";
  const OUTPUT_COLOR_SPACE = "OutputColorSpace";
  function getColorSpaceName(colorSpace) {
    let method = null;
    if (colorSpace === LinearSRGBColorSpace) {
      method = "Linear";
    } else if (colorSpace === SRGBColorSpace) {
      method = "sRGB";
    }
    return method;
  }
  function getColorSpaceMethod(source, target) {
    return getColorSpaceName(source) + "To" + getColorSpaceName(target);
  }
  class ColorSpaceNode extends TempNode {
    static get type() {
      return "ColorSpaceNode";
    }
    constructor(colorNode, source, target) {
      super("vec4");
      this.colorNode = colorNode;
      this.source = source;
      this.target = target;
    }
    getColorSpace(builder, colorSpace) {
      if (colorSpace === WORKING_COLOR_SPACE) {
        return ColorManagement.workingColorSpace;
      } else if (colorSpace === OUTPUT_COLOR_SPACE) {
        return builder.context.outputColorSpace || builder.renderer.outputColorSpace;
      }
      return colorSpace;
    }
    setup(builder) {
      const { renderer } = builder;
      const { colorNode } = this;
      const source = this.getColorSpace(builder, this.source);
      const target = this.getColorSpace(builder, this.target);
      if (source === target) return colorNode;
      const colorSpace = getColorSpaceMethod(source, target);
      let outputNode = null;
      const colorSpaceFn = renderer.nodes.library.getColorSpaceFunction(colorSpace);
      if (colorSpaceFn !== null) {
        outputNode = vec4(colorSpaceFn(colorNode.rgb), colorNode.a);
      } else {
        console.error("ColorSpaceNode: Unsupported Color Space configuration.", colorSpace);
        outputNode = colorNode;
      }
      return outputNode;
    }
  }
  const toOutputColorSpace = (node) => nodeObject(new ColorSpaceNode(nodeObject(node), WORKING_COLOR_SPACE, OUTPUT_COLOR_SPACE));
  const toWorkingColorSpace = (node) => nodeObject(new ColorSpaceNode(nodeObject(node), OUTPUT_COLOR_SPACE, WORKING_COLOR_SPACE));
  const workingToColorSpace = (node, colorSpace) => nodeObject(new ColorSpaceNode(nodeObject(node), WORKING_COLOR_SPACE, colorSpace));
  const colorSpaceToWorking = (node, colorSpace) => nodeObject(new ColorSpaceNode(nodeObject(node), colorSpace, WORKING_COLOR_SPACE));
  addMethodChaining("toOutputColorSpace", toOutputColorSpace);
  addMethodChaining("toWorkingColorSpace", toWorkingColorSpace);
  addMethodChaining("workingToColorSpace", workingToColorSpace);
  addMethodChaining("colorSpaceToWorking", colorSpaceToWorking);
  let ReferenceElementNode$1 = class ReferenceElementNode extends ArrayElementNode {
    static get type() {
      return "ReferenceElementNode";
    }
    constructor(referenceNode, indexNode) {
      super(referenceNode, indexNode);
      this.referenceNode = referenceNode;
      this.isReferenceElementNode = true;
    }
    getNodeType() {
      return this.referenceNode.uniformType;
    }
    generate(builder) {
      const snippet = super.generate(builder);
      const arrayType = this.referenceNode.getNodeType();
      const elementType = this.getNodeType();
      return builder.format(snippet, arrayType, elementType);
    }
  };
  class ReferenceBaseNode extends Node {
    static get type() {
      return "ReferenceBaseNode";
    }
    constructor(property2, uniformType, object = null, count = null) {
      super();
      this.property = property2;
      this.uniformType = uniformType;
      this.object = object;
      this.count = count;
      this.properties = property2.split(".");
      this.reference = object;
      this.node = null;
      this.group = null;
      this.updateType = NodeUpdateType.OBJECT;
    }
    setGroup(group) {
      this.group = group;
      return this;
    }
    element(indexNode) {
      return nodeObject(new ReferenceElementNode$1(this, nodeObject(indexNode)));
    }
    setNodeType(uniformType) {
      const node = uniform(null, uniformType).getSelf();
      if (this.group !== null) {
        node.setGroup(this.group);
      }
      this.node = node;
    }
    getNodeType(builder) {
      if (this.node === null) {
        this.updateReference(builder);
        this.updateValue();
      }
      return this.node.getNodeType(builder);
    }
    getValueFromReference(object = this.reference) {
      const { properties } = this;
      let value = object[properties[0]];
      for (let i = 1; i < properties.length; i++) {
        value = value[properties[i]];
      }
      return value;
    }
    updateReference(state) {
      this.reference = this.object !== null ? this.object : state.object;
      return this.reference;
    }
    setup() {
      this.updateValue();
      return this.node;
    }
    update() {
      this.updateValue();
    }
    updateValue() {
      if (this.node === null) this.setNodeType(this.uniformType);
      const value = this.getValueFromReference();
      if (Array.isArray(value)) {
        this.node.array = value;
      } else {
        this.node.value = value;
      }
    }
  }
  class RendererReferenceNode extends ReferenceBaseNode {
    static get type() {
      return "RendererReferenceNode";
    }
    constructor(property2, inputType, renderer = null) {
      super(property2, inputType, renderer);
      this.renderer = renderer;
      this.setGroup(renderGroup);
    }
    updateReference(state) {
      this.reference = this.renderer !== null ? this.renderer : state.renderer;
      return this.reference;
    }
  }
  const rendererReference = (name, type, renderer) => nodeObject(new RendererReferenceNode(name, type, renderer));
  class ToneMappingNode extends TempNode {
    static get type() {
      return "ToneMappingNode";
    }
    constructor(toneMapping2, exposureNode = toneMappingExposure, colorNode = null) {
      super("vec3");
      this.toneMapping = toneMapping2;
      this.exposureNode = exposureNode;
      this.colorNode = colorNode;
    }
    getCacheKey() {
      return hash$1(super.getCacheKey(), this.toneMapping);
    }
    setup(builder) {
      const colorNode = this.colorNode || builder.context.color;
      const toneMapping2 = this.toneMapping;
      if (toneMapping2 === NoToneMapping) return colorNode;
      let outputNode = null;
      const toneMappingFn = builder.renderer.nodes.library.getToneMappingFunction(toneMapping2);
      if (toneMappingFn !== null) {
        outputNode = vec4(toneMappingFn(colorNode.rgb, this.exposureNode), colorNode.a);
      } else {
        console.error("ToneMappingNode: Unsupported Tone Mapping configuration.", toneMapping2);
        outputNode = colorNode;
      }
      return outputNode;
    }
  }
  const toneMapping = (mapping, exposure, color2) => nodeObject(new ToneMappingNode(mapping, nodeObject(exposure), nodeObject(color2)));
  const toneMappingExposure = /* @__PURE__ */ rendererReference("toneMappingExposure", "float");
  addMethodChaining("toneMapping", (color2, mapping, exposure) => toneMapping(mapping, exposure, color2));
  class BufferAttributeNode extends InputNode {
    static get type() {
      return "BufferAttributeNode";
    }
    constructor(value, bufferType = null, bufferStride = 0, bufferOffset = 0) {
      super(value, bufferType);
      this.isBufferNode = true;
      this.bufferType = bufferType;
      this.bufferStride = bufferStride;
      this.bufferOffset = bufferOffset;
      this.usage = StaticDrawUsage;
      this.instanced = false;
      this.attribute = null;
      this.global = true;
      if (value && value.isBufferAttribute === true) {
        this.attribute = value;
        this.usage = value.usage;
        this.instanced = value.isInstancedBufferAttribute;
      }
    }
    getHash(builder) {
      if (this.bufferStride === 0 && this.bufferOffset === 0) {
        let bufferData = builder.globalCache.getData(this.value);
        if (bufferData === void 0) {
          bufferData = {
            node: this
          };
          builder.globalCache.setData(this.value, bufferData);
        }
        return bufferData.node.uuid;
      }
      return this.uuid;
    }
    getNodeType(builder) {
      if (this.bufferType === null) {
        this.bufferType = builder.getTypeFromAttribute(this.attribute);
      }
      return this.bufferType;
    }
    setup(builder) {
      if (this.attribute !== null) return;
      const type = this.getNodeType(builder);
      const array = this.value;
      const itemSize = builder.getTypeLength(type);
      const stride = this.bufferStride || itemSize;
      const offset = this.bufferOffset;
      const buffer2 = array.isInterleavedBuffer === true ? array : new InterleavedBuffer(array, stride);
      const bufferAttribute2 = new InterleavedBufferAttribute(buffer2, itemSize, offset);
      buffer2.setUsage(this.usage);
      this.attribute = bufferAttribute2;
      this.attribute.isInstancedBufferAttribute = this.instanced;
    }
    generate(builder) {
      const nodeType = this.getNodeType(builder);
      const nodeAttribute = builder.getBufferAttributeFromNode(this, nodeType);
      const propertyName = builder.getPropertyName(nodeAttribute);
      let output = null;
      if (builder.shaderStage === "vertex" || builder.shaderStage === "compute") {
        this.name = propertyName;
        output = propertyName;
      } else {
        const nodeVarying = varying(this);
        output = nodeVarying.build(builder, nodeType);
      }
      return output;
    }
    getInputType() {
      return "bufferAttribute";
    }
    setUsage(value) {
      this.usage = value;
      if (this.attribute && this.attribute.isBufferAttribute === true) {
        this.attribute.usage = value;
      }
      return this;
    }
    setInstanced(value) {
      this.instanced = value;
      return this;
    }
  }
  const bufferAttribute = (array, type, stride, offset) => nodeObject(new BufferAttributeNode(array, type, stride, offset));
  addMethodChaining("toAttribute", (bufferNode) => bufferAttribute(bufferNode.value));
  class ComputeNode extends Node {
    static get type() {
      return "ComputeNode";
    }
    constructor(computeNode, count, workgroupSize = [64]) {
      super("void");
      this.isComputeNode = true;
      this.computeNode = computeNode;
      this.count = count;
      this.workgroupSize = workgroupSize;
      this.dispatchCount = 0;
      this.version = 1;
      this.updateBeforeType = NodeUpdateType.OBJECT;
      this.updateDispatchCount();
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    updateDispatchCount() {
      const { count, workgroupSize } = this;
      let size = workgroupSize[0];
      for (let i = 1; i < workgroupSize.length; i++)
        size *= workgroupSize[i];
      this.dispatchCount = Math.ceil(count / size);
    }
    onInit() {
    }
    updateBefore({ renderer }) {
      renderer.compute(this);
    }
    generate(builder) {
      const { shaderStage } = builder;
      if (shaderStage === "compute") {
        const snippet = this.computeNode.build(builder, "void");
        if (snippet !== "") {
          builder.addLineFlowCode(snippet, this);
        }
      }
    }
  }
  const compute = (node, count, workgroupSize) => nodeObject(new ComputeNode(nodeObject(node), count, workgroupSize));
  addMethodChaining("compute", compute);
  class CacheNode extends Node {
    static get type() {
      return "CacheNode";
    }
    constructor(node, parent = true) {
      super();
      this.node = node;
      this.parent = parent;
      this.isCacheNode = true;
    }
    getNodeType(builder) {
      return this.node.getNodeType(builder);
    }
    build(builder, ...params) {
      const previousCache = builder.getCache();
      const cache2 = builder.getCacheFromNode(this, this.parent);
      builder.setCache(cache2);
      const data = this.node.build(builder, ...params);
      builder.setCache(previousCache);
      return data;
    }
  }
  const cache = (node, ...params) => nodeObject(new CacheNode(nodeObject(node), ...params));
  addMethodChaining("cache", cache);
  class BypassNode extends Node {
    static get type() {
      return "BypassNode";
    }
    constructor(returnNode, callNode) {
      super();
      this.isBypassNode = true;
      this.outputNode = returnNode;
      this.callNode = callNode;
    }
    getNodeType(builder) {
      return this.outputNode.getNodeType(builder);
    }
    generate(builder) {
      const snippet = this.callNode.build(builder, "void");
      if (snippet !== "") {
        builder.addLineFlowCode(snippet, this);
      }
      return this.outputNode.build(builder);
    }
  }
  const bypass = /* @__PURE__ */ nodeProxy(BypassNode);
  addMethodChaining("bypass", bypass);
  class RemapNode extends Node {
    static get type() {
      return "RemapNode";
    }
    constructor(node, inLowNode, inHighNode, outLowNode = float(0), outHighNode = float(1)) {
      super();
      this.node = node;
      this.inLowNode = inLowNode;
      this.inHighNode = inHighNode;
      this.outLowNode = outLowNode;
      this.outHighNode = outHighNode;
      this.doClamp = true;
    }
    setup() {
      const { node, inLowNode, inHighNode, outLowNode, outHighNode, doClamp } = this;
      let t2 = node.sub(inLowNode).div(inHighNode.sub(inLowNode));
      if (doClamp === true) t2 = t2.clamp();
      return t2.mul(outHighNode.sub(outLowNode)).add(outLowNode);
    }
  }
  const remap = /* @__PURE__ */ nodeProxy(RemapNode, null, null, { doClamp: false });
  const remapClamp = /* @__PURE__ */ nodeProxy(RemapNode);
  addMethodChaining("remap", remap);
  addMethodChaining("remapClamp", remapClamp);
  class ExpressionNode extends Node {
    static get type() {
      return "ExpressionNode";
    }
    constructor(snippet = "", nodeType = "void") {
      super(nodeType);
      this.snippet = snippet;
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      const snippet = this.snippet;
      if (type === "void") {
        builder.addLineFlowCode(snippet, this);
      } else {
        return builder.format(`( ${snippet} )`, type, output);
      }
    }
  }
  const expression = /* @__PURE__ */ nodeProxy(ExpressionNode);
  const Discard = (conditional) => (conditional ? select(conditional, expression("discard")) : expression("discard")).append();
  addMethodChaining("discard", Discard);
  class RenderOutputNode extends TempNode {
    static get type() {
      return "RenderOutputNode";
    }
    constructor(colorNode, toneMapping2, outputColorSpace) {
      super("vec4");
      this.colorNode = colorNode;
      this.toneMapping = toneMapping2;
      this.outputColorSpace = outputColorSpace;
      this.isRenderOutput = true;
    }
    setup({ context: context2 }) {
      let outputNode = this.colorNode || context2.color;
      const toneMapping2 = (this.toneMapping !== null ? this.toneMapping : context2.toneMapping) || NoToneMapping;
      const outputColorSpace = (this.outputColorSpace !== null ? this.outputColorSpace : context2.outputColorSpace) || NoColorSpace;
      if (toneMapping2 !== NoToneMapping) {
        outputNode = outputNode.toneMapping(toneMapping2);
      }
      if (outputColorSpace !== NoColorSpace && outputColorSpace !== ColorManagement.workingColorSpace) {
        outputNode = outputNode.workingToColorSpace(outputColorSpace);
      }
      return outputNode;
    }
  }
  const renderOutput = (color2, toneMapping2 = null, outputColorSpace = null) => nodeObject(new RenderOutputNode(nodeObject(color2), toneMapping2, outputColorSpace));
  addMethodChaining("renderOutput", renderOutput);
  class AttributeNode extends Node {
    static get type() {
      return "AttributeNode";
    }
    constructor(attributeName, nodeType = null) {
      super(nodeType);
      this.global = true;
      this._attributeName = attributeName;
    }
    getHash(builder) {
      return this.getAttributeName(builder);
    }
    getNodeType(builder) {
      let nodeType = this.nodeType;
      if (nodeType === null) {
        const attributeName = this.getAttributeName(builder);
        if (builder.hasGeometryAttribute(attributeName)) {
          const attribute2 = builder.geometry.getAttribute(attributeName);
          nodeType = builder.getTypeFromAttribute(attribute2);
        } else {
          nodeType = "float";
        }
      }
      return nodeType;
    }
    setAttributeName(attributeName) {
      this._attributeName = attributeName;
      return this;
    }
    getAttributeName() {
      return this._attributeName;
    }
    generate(builder) {
      const attributeName = this.getAttributeName(builder);
      const nodeType = this.getNodeType(builder);
      const geometryAttribute = builder.hasGeometryAttribute(attributeName);
      if (geometryAttribute === true) {
        const attribute2 = builder.geometry.getAttribute(attributeName);
        const attributeType = builder.getTypeFromAttribute(attribute2);
        const nodeAttribute = builder.getAttribute(attributeName, attributeType);
        if (builder.shaderStage === "vertex") {
          return builder.format(nodeAttribute.name, attributeType, nodeType);
        } else {
          const nodeVarying = varying(this);
          return nodeVarying.build(builder, nodeType);
        }
      } else {
        console.warn(`AttributeNode: Vertex attribute "${attributeName}" not found on geometry.`);
        return builder.generateConst(nodeType);
      }
    }
    serialize(data) {
      super.serialize(data);
      data.global = this.global;
      data._attributeName = this._attributeName;
    }
    deserialize(data) {
      super.deserialize(data);
      this.global = data.global;
      this._attributeName = data._attributeName;
    }
  }
  const attribute = (name, nodeType) => nodeObject(new AttributeNode(name, nodeType));
  const uv = (index) => attribute("uv" + (index > 0 ? index : ""), "vec2");
  class TextureSizeNode extends Node {
    static get type() {
      return "TextureSizeNode";
    }
    constructor(textureNode, levelNode = null) {
      super("uvec2");
      this.isTextureSizeNode = true;
      this.textureNode = textureNode;
      this.levelNode = levelNode;
    }
    generate(builder, output) {
      const textureProperty = this.textureNode.build(builder, "property");
      const level = this.levelNode === null ? "0" : this.levelNode.build(builder, "int");
      return builder.format(`${builder.getMethod("textureDimensions")}( ${textureProperty}, ${level} )`, this.getNodeType(builder), output);
    }
  }
  const textureSize = /* @__PURE__ */ nodeProxy(TextureSizeNode);
  class MaxMipLevelNode extends UniformNode {
    static get type() {
      return "MaxMipLevelNode";
    }
    constructor(textureNode) {
      super(0);
      this._textureNode = textureNode;
      this.updateType = NodeUpdateType.FRAME;
    }
    get textureNode() {
      return this._textureNode;
    }
    get texture() {
      return this._textureNode.value;
    }
    update() {
      const texture2 = this.texture;
      const images = texture2.images;
      const image = images && images.length > 0 ? images[0] && images[0].image || images[0] : texture2.image;
      if (image && image.width !== void 0) {
        const { width, height } = image;
        this.value = Math.log2(Math.max(width, height));
      }
    }
  }
  const maxMipLevel = /* @__PURE__ */ nodeProxy(MaxMipLevelNode);
  class TextureNode extends UniformNode {
    static get type() {
      return "TextureNode";
    }
    constructor(value, uvNode = null, levelNode = null, biasNode = null) {
      super(value);
      this.isTextureNode = true;
      this.uvNode = uvNode;
      this.levelNode = levelNode;
      this.biasNode = biasNode;
      this.compareNode = null;
      this.depthNode = null;
      this.gradNode = null;
      this.sampler = true;
      this.updateMatrix = false;
      this.updateType = NodeUpdateType.NONE;
      this.referenceNode = null;
      this._value = value;
      this._matrixUniform = null;
      this.setUpdateMatrix(uvNode === null);
    }
    set value(value) {
      if (this.referenceNode) {
        this.referenceNode.value = value;
      } else {
        this._value = value;
      }
    }
    get value() {
      return this.referenceNode ? this.referenceNode.value : this._value;
    }
    getUniformHash() {
      return this.value.uuid;
    }
    getNodeType() {
      if (this.value.isDepthTexture === true) return "float";
      if (this.value.type === UnsignedIntType) {
        return "uvec4";
      } else if (this.value.type === IntType) {
        return "ivec4";
      }
      return "vec4";
    }
    getInputType() {
      return "texture";
    }
    getDefaultUV() {
      return uv(this.value.channel);
    }
    updateReference() {
      return this.value;
    }
    getTransformedUV(uvNode) {
      if (this._matrixUniform === null) this._matrixUniform = uniform(this.value.matrix);
      return this._matrixUniform.mul(vec3(uvNode, 1)).xy;
    }
    setUpdateMatrix(value) {
      this.updateMatrix = value;
      this.updateType = value ? NodeUpdateType.FRAME : NodeUpdateType.NONE;
      return this;
    }
    setupUV(builder, uvNode) {
      const texture2 = this.value;
      if (builder.isFlipY() && (texture2.isRenderTargetTexture === true || texture2.isFramebufferTexture === true || texture2.isDepthTexture === true)) {
        if (this.sampler) {
          uvNode = uvNode.flipY();
        } else {
          uvNode = uvNode.setY(int(textureSize(this, this.levelNode).y).sub(uvNode.y).sub(1));
        }
      }
      return uvNode;
    }
    setup(builder) {
      const properties = builder.getNodeProperties(this);
      properties.referenceNode = this.referenceNode;
      let uvNode = this.uvNode;
      if ((uvNode === null || builder.context.forceUVContext === true) && builder.context.getUV) {
        uvNode = builder.context.getUV(this);
      }
      if (!uvNode) uvNode = this.getDefaultUV();
      if (this.updateMatrix === true) {
        uvNode = this.getTransformedUV(uvNode);
      }
      uvNode = this.setupUV(builder, uvNode);
      let levelNode = this.levelNode;
      if (levelNode === null && builder.context.getTextureLevel) {
        levelNode = builder.context.getTextureLevel(this);
      }
      properties.uvNode = uvNode;
      properties.levelNode = levelNode;
      properties.biasNode = this.biasNode;
      properties.compareNode = this.compareNode;
      properties.gradNode = this.gradNode;
      properties.depthNode = this.depthNode;
    }
    generateUV(builder, uvNode) {
      return uvNode.build(builder, this.sampler === true ? "vec2" : "ivec2");
    }
    generateSnippet(builder, textureProperty, uvSnippet, levelSnippet, biasSnippet, depthSnippet, compareSnippet, gradSnippet) {
      const texture2 = this.value;
      let snippet;
      if (levelSnippet) {
        snippet = builder.generateTextureLevel(texture2, textureProperty, uvSnippet, levelSnippet, depthSnippet);
      } else if (biasSnippet) {
        snippet = builder.generateTextureBias(texture2, textureProperty, uvSnippet, biasSnippet, depthSnippet);
      } else if (gradSnippet) {
        snippet = builder.generateTextureGrad(texture2, textureProperty, uvSnippet, gradSnippet, depthSnippet);
      } else if (compareSnippet) {
        snippet = builder.generateTextureCompare(texture2, textureProperty, uvSnippet, compareSnippet, depthSnippet);
      } else if (this.sampler === false) {
        snippet = builder.generateTextureLoad(texture2, textureProperty, uvSnippet, depthSnippet);
      } else {
        snippet = builder.generateTexture(texture2, textureProperty, uvSnippet, depthSnippet);
      }
      return snippet;
    }
    generate(builder, output) {
      const properties = builder.getNodeProperties(this);
      const texture2 = this.value;
      if (!texture2 || texture2.isTexture !== true) {
        throw new Error("TextureNode: Need a three.js texture.");
      }
      const textureProperty = super.generate(builder, "property");
      if (output === "sampler") {
        return textureProperty + "_sampler";
      } else if (builder.isReference(output)) {
        return textureProperty;
      } else {
        const nodeData = builder.getDataFromNode(this);
        let propertyName = nodeData.propertyName;
        if (propertyName === void 0) {
          const { uvNode, levelNode, biasNode, compareNode, depthNode, gradNode } = properties;
          const uvSnippet = this.generateUV(builder, uvNode);
          const levelSnippet = levelNode ? levelNode.build(builder, "float") : null;
          const biasSnippet = biasNode ? biasNode.build(builder, "float") : null;
          const depthSnippet = depthNode ? depthNode.build(builder, "int") : null;
          const compareSnippet = compareNode ? compareNode.build(builder, "float") : null;
          const gradSnippet = gradNode ? [gradNode[0].build(builder, "vec2"), gradNode[1].build(builder, "vec2")] : null;
          const nodeVar = builder.getVarFromNode(this);
          propertyName = builder.getPropertyName(nodeVar);
          const snippet2 = this.generateSnippet(builder, textureProperty, uvSnippet, levelSnippet, biasSnippet, depthSnippet, compareSnippet, gradSnippet);
          builder.addLineFlowCode(`${propertyName} = ${snippet2}`, this);
          nodeData.snippet = snippet2;
          nodeData.propertyName = propertyName;
        }
        let snippet = propertyName;
        const nodeType = this.getNodeType(builder);
        if (builder.needsToWorkingColorSpace(texture2)) {
          snippet = colorSpaceToWorking(expression(snippet, nodeType), texture2.colorSpace).setup(builder).build(builder, nodeType);
        }
        return builder.format(snippet, nodeType, output);
      }
    }
    setSampler(value) {
      this.sampler = value;
      return this;
    }
    getSampler() {
      return this.sampler;
    }
    // @TODO: Move to TSL
    uv(uvNode) {
      const textureNode = this.clone();
      textureNode.uvNode = nodeObject(uvNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    blur(amountNode) {
      const textureNode = this.clone();
      textureNode.biasNode = nodeObject(amountNode).mul(maxMipLevel(textureNode));
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    level(levelNode) {
      const textureNode = this.clone();
      textureNode.levelNode = nodeObject(levelNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    size(levelNode) {
      return textureSize(this, levelNode);
    }
    bias(biasNode) {
      const textureNode = this.clone();
      textureNode.biasNode = nodeObject(biasNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    compare(compareNode) {
      const textureNode = this.clone();
      textureNode.compareNode = nodeObject(compareNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    grad(gradNodeX, gradNodeY) {
      const textureNode = this.clone();
      textureNode.gradNode = [nodeObject(gradNodeX), nodeObject(gradNodeY)];
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    depth(depthNode) {
      const textureNode = this.clone();
      textureNode.depthNode = nodeObject(depthNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    // --
    serialize(data) {
      super.serialize(data);
      data.value = this.value.toJSON(data.meta).uuid;
      data.sampler = this.sampler;
      data.updateMatrix = this.updateMatrix;
      data.updateType = this.updateType;
    }
    deserialize(data) {
      super.deserialize(data);
      this.value = data.meta.textures[data.value];
      this.sampler = data.sampler;
      this.updateMatrix = data.updateMatrix;
      this.updateType = data.updateType;
    }
    update() {
      const texture2 = this.value;
      const matrixUniform = this._matrixUniform;
      if (matrixUniform !== null) matrixUniform.value = texture2.matrix;
      if (texture2.matrixAutoUpdate === true) {
        texture2.updateMatrix();
      }
    }
    clone() {
      const newNode = new this.constructor(this.value, this.uvNode, this.levelNode, this.biasNode);
      newNode.sampler = this.sampler;
      return newNode;
    }
  }
  const texture = /* @__PURE__ */ nodeProxy(TextureNode);
  const cameraNear = /* @__PURE__ */ uniform("float").label("cameraNear").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.near);
  const cameraFar = /* @__PURE__ */ uniform("float").label("cameraFar").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.far);
  const cameraViewMatrix = /* @__PURE__ */ uniform("mat4").label("cameraViewMatrix").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.matrixWorldInverse);
  class Object3DNode extends Node {
    static get type() {
      return "Object3DNode";
    }
    constructor(scope, object3d = null) {
      super();
      this.scope = scope;
      this.object3d = object3d;
      this.updateType = NodeUpdateType.OBJECT;
      this._uniformNode = new UniformNode(null);
    }
    getNodeType() {
      const scope = this.scope;
      if (scope === Object3DNode.WORLD_MATRIX) {
        return "mat4";
      } else if (scope === Object3DNode.POSITION || scope === Object3DNode.VIEW_POSITION || scope === Object3DNode.DIRECTION || scope === Object3DNode.SCALE) {
        return "vec3";
      }
    }
    update(frame) {
      const object = this.object3d;
      const uniformNode = this._uniformNode;
      const scope = this.scope;
      if (scope === Object3DNode.WORLD_MATRIX) {
        uniformNode.value = object.matrixWorld;
      } else if (scope === Object3DNode.POSITION) {
        uniformNode.value = uniformNode.value || new Vector3();
        uniformNode.value.setFromMatrixPosition(object.matrixWorld);
      } else if (scope === Object3DNode.SCALE) {
        uniformNode.value = uniformNode.value || new Vector3();
        uniformNode.value.setFromMatrixScale(object.matrixWorld);
      } else if (scope === Object3DNode.DIRECTION) {
        uniformNode.value = uniformNode.value || new Vector3();
        object.getWorldDirection(uniformNode.value);
      } else if (scope === Object3DNode.VIEW_POSITION) {
        const camera = frame.camera;
        uniformNode.value = uniformNode.value || new Vector3();
        uniformNode.value.setFromMatrixPosition(object.matrixWorld);
        uniformNode.value.applyMatrix4(camera.matrixWorldInverse);
      }
    }
    generate(builder) {
      const scope = this.scope;
      if (scope === Object3DNode.WORLD_MATRIX) {
        this._uniformNode.nodeType = "mat4";
      } else if (scope === Object3DNode.POSITION || scope === Object3DNode.VIEW_POSITION || scope === Object3DNode.DIRECTION || scope === Object3DNode.SCALE) {
        this._uniformNode.nodeType = "vec3";
      }
      return this._uniformNode.build(builder);
    }
    serialize(data) {
      super.serialize(data);
      data.scope = this.scope;
    }
    deserialize(data) {
      super.deserialize(data);
      this.scope = data.scope;
    }
  }
  Object3DNode.WORLD_MATRIX = "worldMatrix";
  Object3DNode.POSITION = "position";
  Object3DNode.SCALE = "scale";
  Object3DNode.VIEW_POSITION = "viewPosition";
  Object3DNode.DIRECTION = "direction";
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.DIRECTION);
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.WORLD_MATRIX);
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.POSITION);
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.SCALE);
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.VIEW_POSITION);
  class ModelNode extends Object3DNode {
    static get type() {
      return "ModelNode";
    }
    constructor(scope) {
      super(scope);
    }
    update(frame) {
      this.object3d = frame.object;
      super.update(frame);
    }
  }
  /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.DIRECTION);
  const modelWorldMatrix = /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.WORLD_MATRIX);
  /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.POSITION);
  /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.SCALE);
  /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.VIEW_POSITION);
  const modelNormalMatrix = /* @__PURE__ */ uniform(new Matrix3()).onObjectUpdate(({ object }, self2) => self2.value.getNormalMatrix(object.matrixWorld));
  const modelViewMatrix = /* @__PURE__ */ cameraViewMatrix.mul(modelWorldMatrix).toVar("modelViewMatrix_2");
  const positionGeometry = /* @__PURE__ */ attribute("position", "vec3");
  const positionLocal = /* @__PURE__ */ positionGeometry.varying("positionLocal");
  const positionView = /* @__PURE__ */ modelViewMatrix.mul(positionLocal).xyz.varying("v_positionView");
  const positionViewDirection = /* @__PURE__ */ positionView.negate().varying("v_positionViewDirection").normalize().toVar("positionViewDirection");
  class FrontFacingNode extends Node {
    static get type() {
      return "FrontFacingNode";
    }
    constructor() {
      super("bool");
      this.isFrontFacingNode = true;
    }
    generate(builder) {
      const { renderer, material } = builder;
      if (renderer.coordinateSystem === WebGLCoordinateSystem) {
        if (material.side === BackSide) {
          return "false";
        }
      }
      return builder.getFrontFacing();
    }
  }
  const frontFacing = /* @__PURE__ */ nodeImmutable(FrontFacingNode);
  const faceDirection = /* @__PURE__ */ float(frontFacing).mul(2).sub(1);
  const normalGeometry = /* @__PURE__ */ attribute("normal", "vec3");
  const normalLocal = /* @__PURE__ */ Fn((builder) => {
    if (builder.geometry.hasAttribute("normal") === false) {
      console.warn('TSL.NormalNode: Vertex attribute "normal" not found on geometry.');
      return vec3(0, 1, 0);
    }
    return normalGeometry;
  }, "vec3").once()().toVar("normalLocal");
  const normalFlat = /* @__PURE__ */ positionView.dFdx().cross(positionView.dFdy()).normalize().toVar("normalFlat");
  const normalView = /* @__PURE__ */ Fn((builder) => {
    let node;
    if (builder.material.flatShading === true) {
      node = normalFlat;
    } else {
      node = varying(transformNormalToView(normalLocal), "v_normalView").normalize();
    }
    return node;
  }, "vec3").once()().toVar("normalView");
  const transformedNormalView = /* @__PURE__ */ Fn((builder) => {
    return builder.context.setupNormal();
  }, "vec3").once()().mul(faceDirection).toVar("transformedNormalView");
  const transformNormalToView = /* @__PURE__ */ Fn(([normal], builder) => {
    const modelNormalViewMatrix = builder.renderer.nodes.modelNormalViewMatrix;
    if (modelNormalViewMatrix !== null) {
      return modelNormalViewMatrix.transformDirection(normal);
    }
    const transformedNormal = modelNormalMatrix.mul(normal);
    return cameraViewMatrix.transformDirection(transformedNormal);
  });
  const materialRefractionRatio = /* @__PURE__ */ uniform(0).onReference(({ material }) => material).onRenderUpdate(({ material }) => material.refractionRatio);
  const reflectView = /* @__PURE__ */ positionViewDirection.negate().reflect(transformedNormalView);
  const refractView = /* @__PURE__ */ positionViewDirection.negate().refract(transformedNormalView, materialRefractionRatio);
  const reflectVector = /* @__PURE__ */ reflectView.transformDirection(cameraViewMatrix).toVar("reflectVector");
  const refractVector = /* @__PURE__ */ refractView.transformDirection(cameraViewMatrix).toVar("reflectVector");
  class CubeTextureNode extends TextureNode {
    static get type() {
      return "CubeTextureNode";
    }
    constructor(value, uvNode = null, levelNode = null, biasNode = null) {
      super(value, uvNode, levelNode, biasNode);
      this.isCubeTextureNode = true;
    }
    getInputType() {
      return "cubeTexture";
    }
    getDefaultUV() {
      const texture2 = this.value;
      if (texture2.mapping === CubeReflectionMapping) {
        return reflectVector;
      } else if (texture2.mapping === CubeRefractionMapping) {
        return refractVector;
      } else {
        console.error('THREE.CubeTextureNode: Mapping "%s" not supported.', texture2.mapping);
        return vec3(0, 0, 0);
      }
    }
    setUpdateMatrix() {
    }
    // Ignore .updateMatrix for CubeTextureNode
    setupUV(builder, uvNode) {
      const texture2 = this.value;
      if (builder.renderer.coordinateSystem === WebGPUCoordinateSystem || !texture2.isRenderTargetTexture) {
        return vec3(uvNode.x.negate(), uvNode.yz);
      } else {
        return uvNode;
      }
    }
    generateUV(builder, cubeUV) {
      return cubeUV.build(builder, "vec3");
    }
  }
  const cubeTexture = /* @__PURE__ */ nodeProxy(CubeTextureNode);
  class BufferNode extends UniformNode {
    static get type() {
      return "BufferNode";
    }
    constructor(value, bufferType, bufferCount = 0) {
      super(value, bufferType);
      this.isBufferNode = true;
      this.bufferType = bufferType;
      this.bufferCount = bufferCount;
    }
    getElementType(builder) {
      return this.getNodeType(builder);
    }
    getInputType() {
      return "buffer";
    }
  }
  const buffer = (value, type, count) => nodeObject(new BufferNode(value, type, count));
  class UniformArrayElementNode extends ArrayElementNode {
    static get type() {
      return "UniformArrayElementNode";
    }
    constructor(arrayBuffer, indexNode) {
      super(arrayBuffer, indexNode);
      this.isArrayBufferElementNode = true;
    }
    generate(builder) {
      const snippet = super.generate(builder);
      const type = this.getNodeType();
      return builder.format(snippet, "vec4", type);
    }
  }
  class UniformArrayNode extends BufferNode {
    static get type() {
      return "UniformArrayNode";
    }
    constructor(value, elementType = null) {
      super(null, "vec4");
      this.array = value;
      this.elementType = elementType;
      this._elementType = null;
      this._elementLength = 0;
      this.updateType = NodeUpdateType.RENDER;
      this.isArrayBufferNode = true;
    }
    getElementType() {
      return this.elementType || this._elementType;
    }
    getElementLength() {
      return this._elementLength;
    }
    update() {
      const { array, value } = this;
      const elementLength = this.getElementLength();
      const elementType = this.getElementType();
      if (elementLength === 1) {
        for (let i = 0; i < array.length; i++) {
          const index = i * 4;
          value[index] = array[i];
        }
      } else if (elementType === "color") {
        for (let i = 0; i < array.length; i++) {
          const index = i * 4;
          const vector = array[i];
          value[index] = vector.r;
          value[index + 1] = vector.g;
          value[index + 2] = vector.b || 0;
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          const index = i * 4;
          const vector = array[i];
          value[index] = vector.x;
          value[index + 1] = vector.y;
          value[index + 2] = vector.z || 0;
          value[index + 3] = vector.w || 0;
        }
      }
    }
    setup(builder) {
      const length2 = this.array.length;
      this._elementType = this.elementType === null ? getValueType(this.array[0]) : this.elementType;
      this._elementLength = builder.getTypeLength(this._elementType);
      let arrayType = Float32Array;
      if (this._elementType.charAt(0) === "i") arrayType = Int32Array;
      else if (this._elementType.charAt(0) === "u") arrayType = Uint32Array;
      this.value = new arrayType(length2 * 4);
      this.bufferCount = length2;
      this.bufferType = builder.changeComponentType("vec4", builder.getComponentType(this._elementType));
      return super.setup(builder);
    }
    element(indexNode) {
      return nodeObject(new UniformArrayElementNode(this, nodeObject(indexNode)));
    }
  }
  const uniformArray = (values, nodeType) => nodeObject(new UniformArrayNode(values, nodeType));
  class ReferenceElementNode extends ArrayElementNode {
    static get type() {
      return "ReferenceElementNode";
    }
    constructor(referenceNode, indexNode) {
      super(referenceNode, indexNode);
      this.referenceNode = referenceNode;
      this.isReferenceElementNode = true;
    }
    getNodeType() {
      return this.referenceNode.uniformType;
    }
    generate(builder) {
      const snippet = super.generate(builder);
      const arrayType = this.referenceNode.getNodeType();
      const elementType = this.getNodeType();
      return builder.format(snippet, arrayType, elementType);
    }
  }
  class ReferenceNode extends Node {
    static get type() {
      return "ReferenceNode";
    }
    constructor(property2, uniformType, object = null, count = null) {
      super();
      this.property = property2;
      this.uniformType = uniformType;
      this.object = object;
      this.count = count;
      this.properties = property2.split(".");
      this.reference = object;
      this.node = null;
      this.group = null;
      this.name = null;
      this.updateType = NodeUpdateType.OBJECT;
    }
    element(indexNode) {
      return nodeObject(new ReferenceElementNode(this, nodeObject(indexNode)));
    }
    setGroup(group) {
      this.group = group;
      return this;
    }
    label(name) {
      this.name = name;
      return this;
    }
    setNodeType(uniformType) {
      let node = null;
      if (this.count !== null) {
        node = buffer(null, uniformType, this.count);
      } else if (Array.isArray(this.getValueFromReference())) {
        node = uniformArray(null, uniformType);
      } else if (uniformType === "texture") {
        node = texture(null);
      } else if (uniformType === "cubeTexture") {
        node = cubeTexture(null);
      } else {
        node = uniform(null, uniformType);
      }
      if (this.group !== null) {
        node.setGroup(this.group);
      }
      if (this.name !== null) node.label(this.name);
      this.node = node.getSelf();
    }
    getNodeType(builder) {
      if (this.node === null) {
        this.updateReference(builder);
        this.updateValue();
      }
      return this.node.getNodeType(builder);
    }
    getValueFromReference(object = this.reference) {
      const { properties } = this;
      let value = object[properties[0]];
      for (let i = 1; i < properties.length; i++) {
        value = value[properties[i]];
      }
      return value;
    }
    updateReference(state) {
      this.reference = this.object !== null ? this.object : state.object;
      return this.reference;
    }
    setup() {
      this.updateValue();
      return this.node;
    }
    update() {
      this.updateValue();
    }
    updateValue() {
      if (this.node === null) this.setNodeType(this.uniformType);
      const value = this.getValueFromReference();
      if (Array.isArray(value)) {
        this.node.array = value;
      } else {
        this.node.value = value;
      }
    }
  }
  const reference = (name, type, object) => nodeObject(new ReferenceNode(name, type, object));
  class MaterialReferenceNode extends ReferenceNode {
    static get type() {
      return "MaterialReferenceNode";
    }
    constructor(property2, inputType, material = null) {
      super(property2, inputType, material);
      this.material = material;
      this.isMaterialReferenceNode = true;
    }
    /*setNodeType( node ) {
    
    			super.setNodeType( node );
    
    			this.node.groupNode = renderGroup;
    
    		}*/
    updateReference(state) {
      this.reference = this.material !== null ? this.material : state.material;
      return this.reference;
    }
  }
  const materialReference = (name, type, material) => nodeObject(new MaterialReferenceNode(name, type, material));
  const tangentGeometry = /* @__PURE__ */ Fn((builder) => {
    if (builder.geometry.hasAttribute("tangent") === false) {
      builder.geometry.computeTangents();
    }
    return attribute("tangent", "vec4");
  })();
  const tangentLocal = /* @__PURE__ */ tangentGeometry.xyz.toVar("tangentLocal");
  const tangentView = /* @__PURE__ */ modelViewMatrix.mul(vec4(tangentLocal, 0)).xyz.varying("v_tangentView").normalize().toVar("tangentView");
  const getBitangent = (crossNormalTangent) => crossNormalTangent.mul(tangentGeometry.w).xyz;
  const bitangentView = /* @__PURE__ */ varying(getBitangent(normalView.cross(tangentView)), "v_bitangentView").normalize().toVar("bitangentView");
  const TBNViewMatrix = /* @__PURE__ */ mat3(tangentView, bitangentView, normalView);
  const perturbNormal2Arb = /* @__PURE__ */ Fn((inputs) => {
    const { eye_pos, surf_norm, mapN, uv: uv2 } = inputs;
    const q0 = eye_pos.dFdx();
    const q1 = eye_pos.dFdy();
    const st0 = uv2.dFdx();
    const st1 = uv2.dFdy();
    const N = surf_norm;
    const q1perp = q1.cross(N);
    const q0perp = N.cross(q0);
    const T = q1perp.mul(st0.x).add(q0perp.mul(st1.x));
    const B2 = q1perp.mul(st0.y).add(q0perp.mul(st1.y));
    const det = T.dot(T).max(B2.dot(B2));
    const scale = faceDirection.mul(det.inverseSqrt());
    return add(T.mul(mapN.x, scale), B2.mul(mapN.y, scale), N.mul(mapN.z)).normalize();
  });
  class NormalMapNode extends TempNode {
    static get type() {
      return "NormalMapNode";
    }
    constructor(node, scaleNode = null) {
      super("vec3");
      this.node = node;
      this.scaleNode = scaleNode;
      this.normalMapType = TangentSpaceNormalMap;
    }
    setup(builder) {
      const { normalMapType, scaleNode } = this;
      let normalMap2 = this.node.mul(2).sub(1);
      if (scaleNode !== null) {
        normalMap2 = vec3(normalMap2.xy.mul(scaleNode), normalMap2.z);
      }
      let outputNode = null;
      if (normalMapType === ObjectSpaceNormalMap) {
        outputNode = transformNormalToView(normalMap2);
      } else if (normalMapType === TangentSpaceNormalMap) {
        const tangent = builder.hasGeometryAttribute("tangent");
        if (tangent === true) {
          outputNode = TBNViewMatrix.mul(normalMap2).normalize();
        } else {
          outputNode = perturbNormal2Arb({
            eye_pos: positionView,
            surf_norm: normalView,
            mapN: normalMap2,
            uv: uv()
          });
        }
      }
      return outputNode;
    }
  }
  const normalMap = /* @__PURE__ */ nodeProxy(NormalMapNode);
  const dHdxy_fwd = Fn(({ textureNode, bumpScale }) => {
    const sampleTexture = (callback) => textureNode.cache().context({ getUV: (texNode) => callback(texNode.uvNode || uv()), forceUVContext: true });
    const Hll = float(sampleTexture((uvNode) => uvNode));
    return vec2(
      float(sampleTexture((uvNode) => uvNode.add(uvNode.dFdx()))).sub(Hll),
      float(sampleTexture((uvNode) => uvNode.add(uvNode.dFdy()))).sub(Hll)
    ).mul(bumpScale);
  });
  const perturbNormalArb = Fn((inputs) => {
    const { surf_pos, surf_norm, dHdxy } = inputs;
    const vSigmaX = surf_pos.dFdx().normalize();
    const vSigmaY = surf_pos.dFdy().normalize();
    const vN = surf_norm;
    const R1 = vSigmaY.cross(vN);
    const R2 = vN.cross(vSigmaX);
    const fDet = vSigmaX.dot(R1).mul(faceDirection);
    const vGrad = fDet.sign().mul(dHdxy.x.mul(R1).add(dHdxy.y.mul(R2)));
    return fDet.abs().mul(surf_norm).sub(vGrad).normalize();
  });
  class BumpMapNode extends TempNode {
    static get type() {
      return "BumpMapNode";
    }
    constructor(textureNode, scaleNode = null) {
      super("vec3");
      this.textureNode = textureNode;
      this.scaleNode = scaleNode;
    }
    setup() {
      const bumpScale = this.scaleNode !== null ? this.scaleNode : 1;
      const dHdxy = dHdxy_fwd({ textureNode: this.textureNode, bumpScale });
      return perturbNormalArb({
        surf_pos: positionView,
        surf_norm: normalView,
        dHdxy
      });
    }
  }
  const bumpMap = /* @__PURE__ */ nodeProxy(BumpMapNode);
  const _propertyCache = /* @__PURE__ */ new Map();
  class MaterialNode extends Node {
    static get type() {
      return "MaterialNode";
    }
    constructor(scope) {
      super();
      this.scope = scope;
    }
    getCache(property2, type) {
      let node = _propertyCache.get(property2);
      if (node === void 0) {
        node = materialReference(property2, type);
        _propertyCache.set(property2, node);
      }
      return node;
    }
    getFloat(property2) {
      return this.getCache(property2, "float");
    }
    getColor(property2) {
      return this.getCache(property2, "color");
    }
    getTexture(property2) {
      return this.getCache(property2 === "map" ? "map" : property2 + "Map", "texture");
    }
    setup(builder) {
      const material = builder.context.material;
      const scope = this.scope;
      let node = null;
      if (scope === MaterialNode.COLOR) {
        const colorNode = material.color !== void 0 ? this.getColor(scope) : vec3();
        if (material.map && material.map.isTexture === true) {
          node = colorNode.mul(this.getTexture("map"));
        } else {
          node = colorNode;
        }
      } else if (scope === MaterialNode.OPACITY) {
        const opacityNode = this.getFloat(scope);
        if (material.alphaMap && material.alphaMap.isTexture === true) {
          node = opacityNode.mul(this.getTexture("alpha"));
        } else {
          node = opacityNode;
        }
      } else if (scope === MaterialNode.SPECULAR_STRENGTH) {
        if (material.specularMap && material.specularMap.isTexture === true) {
          node = this.getTexture("specular").r;
        } else {
          node = float(1);
        }
      } else if (scope === MaterialNode.SPECULAR_INTENSITY) {
        const specularIntensity = this.getFloat(scope);
        if (material.specularMap) {
          node = specularIntensity.mul(this.getTexture(scope).a);
        } else {
          node = specularIntensity;
        }
      } else if (scope === MaterialNode.SPECULAR_COLOR) {
        const specularColorNode = this.getColor(scope);
        if (material.specularColorMap && material.specularColorMap.isTexture === true) {
          node = specularColorNode.mul(this.getTexture(scope).rgb);
        } else {
          node = specularColorNode;
        }
      } else if (scope === MaterialNode.ROUGHNESS) {
        const roughnessNode = this.getFloat(scope);
        if (material.roughnessMap && material.roughnessMap.isTexture === true) {
          node = roughnessNode.mul(this.getTexture(scope).g);
        } else {
          node = roughnessNode;
        }
      } else if (scope === MaterialNode.METALNESS) {
        const metalnessNode = this.getFloat(scope);
        if (material.metalnessMap && material.metalnessMap.isTexture === true) {
          node = metalnessNode.mul(this.getTexture(scope).b);
        } else {
          node = metalnessNode;
        }
      } else if (scope === MaterialNode.EMISSIVE) {
        const emissiveIntensityNode = this.getFloat("emissiveIntensity");
        const emissiveNode = this.getColor(scope).mul(emissiveIntensityNode);
        if (material.emissiveMap && material.emissiveMap.isTexture === true) {
          node = emissiveNode.mul(this.getTexture(scope));
        } else {
          node = emissiveNode;
        }
      } else if (scope === MaterialNode.NORMAL) {
        if (material.normalMap) {
          node = normalMap(this.getTexture("normal"), this.getCache("normalScale", "vec2"));
          node.normalMapType = material.normalMapType;
        } else if (material.bumpMap) {
          node = bumpMap(this.getTexture("bump").r, this.getFloat("bumpScale"));
        } else {
          node = normalView;
        }
      } else if (scope === MaterialNode.CLEARCOAT) {
        const clearcoatNode = this.getFloat(scope);
        if (material.clearcoatMap && material.clearcoatMap.isTexture === true) {
          node = clearcoatNode.mul(this.getTexture(scope).r);
        } else {
          node = clearcoatNode;
        }
      } else if (scope === MaterialNode.CLEARCOAT_ROUGHNESS) {
        const clearcoatRoughnessNode = this.getFloat(scope);
        if (material.clearcoatRoughnessMap && material.clearcoatRoughnessMap.isTexture === true) {
          node = clearcoatRoughnessNode.mul(this.getTexture(scope).r);
        } else {
          node = clearcoatRoughnessNode;
        }
      } else if (scope === MaterialNode.CLEARCOAT_NORMAL) {
        if (material.clearcoatNormalMap) {
          node = normalMap(this.getTexture(scope), this.getCache(scope + "Scale", "vec2"));
        } else {
          node = normalView;
        }
      } else if (scope === MaterialNode.SHEEN) {
        const sheenNode = this.getColor("sheenColor").mul(this.getFloat("sheen"));
        if (material.sheenColorMap && material.sheenColorMap.isTexture === true) {
          node = sheenNode.mul(this.getTexture("sheenColor").rgb);
        } else {
          node = sheenNode;
        }
      } else if (scope === MaterialNode.SHEEN_ROUGHNESS) {
        const sheenRoughnessNode = this.getFloat(scope);
        if (material.sheenRoughnessMap && material.sheenRoughnessMap.isTexture === true) {
          node = sheenRoughnessNode.mul(this.getTexture(scope).a);
        } else {
          node = sheenRoughnessNode;
        }
        node = node.clamp(0.07, 1);
      } else if (scope === MaterialNode.ANISOTROPY) {
        if (material.anisotropyMap && material.anisotropyMap.isTexture === true) {
          const anisotropyPolar = this.getTexture(scope);
          const anisotropyMat = mat2(materialAnisotropyVector.x, materialAnisotropyVector.y, materialAnisotropyVector.y.negate(), materialAnisotropyVector.x);
          node = anisotropyMat.mul(anisotropyPolar.rg.mul(2).sub(vec2(1)).normalize().mul(anisotropyPolar.b));
        } else {
          node = materialAnisotropyVector;
        }
      } else if (scope === MaterialNode.IRIDESCENCE_THICKNESS) {
        const iridescenceThicknessMaximum = reference("1", "float", material.iridescenceThicknessRange);
        if (material.iridescenceThicknessMap) {
          const iridescenceThicknessMinimum = reference("0", "float", material.iridescenceThicknessRange);
          node = iridescenceThicknessMaximum.sub(iridescenceThicknessMinimum).mul(this.getTexture(scope).g).add(iridescenceThicknessMinimum);
        } else {
          node = iridescenceThicknessMaximum;
        }
      } else if (scope === MaterialNode.TRANSMISSION) {
        const transmissionNode = this.getFloat(scope);
        if (material.transmissionMap) {
          node = transmissionNode.mul(this.getTexture(scope).r);
        } else {
          node = transmissionNode;
        }
      } else if (scope === MaterialNode.THICKNESS) {
        const thicknessNode = this.getFloat(scope);
        if (material.thicknessMap) {
          node = thicknessNode.mul(this.getTexture(scope).g);
        } else {
          node = thicknessNode;
        }
      } else if (scope === MaterialNode.IOR) {
        node = this.getFloat(scope);
      } else if (scope === MaterialNode.LIGHT_MAP) {
        node = this.getTexture(scope).rgb.mul(this.getFloat("lightMapIntensity"));
      } else if (scope === MaterialNode.AO_MAP) {
        node = this.getTexture(scope).r.sub(1).mul(this.getFloat("aoMapIntensity")).add(1);
      } else {
        const outputType = this.getNodeType(builder);
        node = this.getCache(scope, outputType);
      }
      return node;
    }
  }
  MaterialNode.ALPHA_TEST = "alphaTest";
  MaterialNode.COLOR = "color";
  MaterialNode.OPACITY = "opacity";
  MaterialNode.SHININESS = "shininess";
  MaterialNode.SPECULAR = "specular";
  MaterialNode.SPECULAR_STRENGTH = "specularStrength";
  MaterialNode.SPECULAR_INTENSITY = "specularIntensity";
  MaterialNode.SPECULAR_COLOR = "specularColor";
  MaterialNode.REFLECTIVITY = "reflectivity";
  MaterialNode.ROUGHNESS = "roughness";
  MaterialNode.METALNESS = "metalness";
  MaterialNode.NORMAL = "normal";
  MaterialNode.CLEARCOAT = "clearcoat";
  MaterialNode.CLEARCOAT_ROUGHNESS = "clearcoatRoughness";
  MaterialNode.CLEARCOAT_NORMAL = "clearcoatNormal";
  MaterialNode.EMISSIVE = "emissive";
  MaterialNode.ROTATION = "rotation";
  MaterialNode.SHEEN = "sheen";
  MaterialNode.SHEEN_ROUGHNESS = "sheenRoughness";
  MaterialNode.ANISOTROPY = "anisotropy";
  MaterialNode.IRIDESCENCE = "iridescence";
  MaterialNode.IRIDESCENCE_IOR = "iridescenceIOR";
  MaterialNode.IRIDESCENCE_THICKNESS = "iridescenceThickness";
  MaterialNode.IOR = "ior";
  MaterialNode.TRANSMISSION = "transmission";
  MaterialNode.THICKNESS = "thickness";
  MaterialNode.ATTENUATION_DISTANCE = "attenuationDistance";
  MaterialNode.ATTENUATION_COLOR = "attenuationColor";
  MaterialNode.LINE_SCALE = "scale";
  MaterialNode.LINE_DASH_SIZE = "dashSize";
  MaterialNode.LINE_GAP_SIZE = "gapSize";
  MaterialNode.LINE_WIDTH = "linewidth";
  MaterialNode.LINE_DASH_OFFSET = "dashOffset";
  MaterialNode.POINT_WIDTH = "pointWidth";
  MaterialNode.DISPERSION = "dispersion";
  MaterialNode.LIGHT_MAP = "light";
  MaterialNode.AO_MAP = "ao";
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ALPHA_TEST);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.COLOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SHININESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.EMISSIVE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.OPACITY);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SPECULAR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SPECULAR_INTENSITY);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SPECULAR_COLOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SPECULAR_STRENGTH);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.REFLECTIVITY);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ROUGHNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.METALNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.CLEARCOAT);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.CLEARCOAT_ROUGHNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ROTATION);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SHEEN);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SHEEN_ROUGHNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ANISOTROPY);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE_IOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE_THICKNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.TRANSMISSION);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.THICKNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.IOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ATTENUATION_DISTANCE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ATTENUATION_COLOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_SCALE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_DASH_SIZE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_GAP_SIZE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_WIDTH);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_DASH_OFFSET);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.POINT_WIDTH);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.DISPERSION);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LIGHT_MAP);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.AO_MAP);
  const materialAnisotropyVector = /* @__PURE__ */ uniform(new Vector2()).onReference(function(frame) {
    return frame.material;
  }).onRenderUpdate(function({ material }) {
    this.value.set(material.anisotropy * Math.cos(material.anisotropyRotation), material.anisotropy * Math.sin(material.anisotropyRotation));
  });
  class IndexNode extends Node {
    static get type() {
      return "IndexNode";
    }
    constructor(scope) {
      super("uint");
      this.scope = scope;
      this.isInstanceIndexNode = true;
    }
    generate(builder) {
      const nodeType = this.getNodeType(builder);
      const scope = this.scope;
      let propertyName;
      if (scope === IndexNode.VERTEX) {
        propertyName = builder.getVertexIndex();
      } else if (scope === IndexNode.INSTANCE) {
        propertyName = builder.getInstanceIndex();
      } else if (scope === IndexNode.DRAW) {
        propertyName = builder.getDrawIndex();
      } else if (scope === IndexNode.INVOCATION_LOCAL) {
        propertyName = builder.getInvocationLocalIndex();
      } else if (scope === IndexNode.INVOCATION_SUBGROUP) {
        propertyName = builder.getInvocationSubgroupIndex();
      } else if (scope === IndexNode.SUBGROUP) {
        propertyName = builder.getSubgroupIndex();
      } else {
        throw new Error("THREE.IndexNode: Unknown scope: " + scope);
      }
      let output;
      if (builder.shaderStage === "vertex" || builder.shaderStage === "compute") {
        output = propertyName;
      } else {
        const nodeVarying = varying(this);
        output = nodeVarying.build(builder, nodeType);
      }
      return output;
    }
  }
  IndexNode.VERTEX = "vertex";
  IndexNode.INSTANCE = "instance";
  IndexNode.SUBGROUP = "subgroup";
  IndexNode.INVOCATION_LOCAL = "invocationLocal";
  IndexNode.INVOCATION_SUBGROUP = "invocationSubgroup";
  IndexNode.DRAW = "draw";
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.VERTEX);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.INSTANCE);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.SUBGROUP);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.INVOCATION_SUBGROUP);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.INVOCATION_LOCAL);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.DRAW);
  class LoopNode extends Node {
    static get type() {
      return "LoopNode";
    }
    constructor(params = []) {
      super();
      this.params = params;
    }
    getVarName(index) {
      return String.fromCharCode("i".charCodeAt() + index);
    }
    getProperties(builder) {
      const properties = builder.getNodeProperties(this);
      if (properties.stackNode !== void 0) return properties;
      const inputs = {};
      for (let i = 0, l = this.params.length - 1; i < l; i++) {
        const param = this.params[i];
        const name = param.isNode !== true && param.name || this.getVarName(i);
        const type = param.isNode !== true && param.type || "int";
        inputs[name] = expression(name, type);
      }
      const stack = builder.addStack();
      properties.returnsNode = this.params[this.params.length - 1](inputs, stack, builder);
      properties.stackNode = stack;
      builder.removeStack();
      return properties;
    }
    getNodeType(builder) {
      const { returnsNode } = this.getProperties(builder);
      return returnsNode ? returnsNode.getNodeType(builder) : "void";
    }
    setup(builder) {
      this.getProperties(builder);
    }
    generate(builder) {
      const properties = this.getProperties(builder);
      const params = this.params;
      const stackNode = properties.stackNode;
      for (let i = 0, l = params.length - 1; i < l; i++) {
        const param = params[i];
        let start = null, end = null, name = null, type = null, condition = null, update = null;
        if (param.isNode) {
          type = "int";
          name = this.getVarName(i);
          start = "0";
          end = param.build(builder, type);
          condition = "<";
        } else {
          type = param.type || "int";
          name = param.name || this.getVarName(i);
          start = param.start;
          end = param.end;
          condition = param.condition;
          update = param.update;
          if (typeof start === "number") start = start.toString();
          else if (start && start.isNode) start = start.build(builder, type);
          if (typeof end === "number") end = end.toString();
          else if (end && end.isNode) end = end.build(builder, type);
          if (start !== void 0 && end === void 0) {
            start = start + " - 1";
            end = "0";
            condition = ">=";
          } else if (end !== void 0 && start === void 0) {
            start = "0";
            condition = "<";
          }
          if (condition === void 0) {
            if (Number(start) > Number(end)) {
              condition = ">=";
            } else {
              condition = "<";
            }
          }
        }
        const internalParam = { start, end };
        const startSnippet = internalParam.start;
        const endSnippet = internalParam.end;
        let declarationSnippet = "";
        let conditionalSnippet = "";
        let updateSnippet = "";
        if (!update) {
          if (type === "int" || type === "uint") {
            if (condition.includes("<")) update = "++";
            else update = "--";
          } else {
            if (condition.includes("<")) update = "+= 1.";
            else update = "-= 1.";
          }
        }
        declarationSnippet += builder.getVar(type, name) + " = " + startSnippet;
        conditionalSnippet += name + " " + condition + " " + endSnippet;
        updateSnippet += name + " " + update;
        const forSnippet = `for ( ${declarationSnippet}; ${conditionalSnippet}; ${updateSnippet} )`;
        builder.addFlowCode((i === 0 ? "\n" : "") + builder.tab + forSnippet + " {\n\n").addFlowTab();
      }
      const stackSnippet = stackNode.build(builder, "void");
      const returnsSnippet = properties.returnsNode ? properties.returnsNode.build(builder) : "";
      builder.removeFlowTab().addFlowCode("\n" + builder.tab + stackSnippet);
      for (let i = 0, l = this.params.length - 1; i < l; i++) {
        builder.addFlowCode((i === 0 ? "" : builder.tab) + "}\n\n").removeFlowTab();
      }
      builder.addFlowTab();
      return returnsSnippet;
    }
  }
  const Loop = (...params) => nodeObject(new LoopNode(nodeArray(params, "int"))).append();
  let screenSizeVec, viewportVec;
  class ScreenNode extends Node {
    static get type() {
      return "ScreenNode";
    }
    constructor(scope) {
      super();
      this.scope = scope;
      this.isViewportNode = true;
    }
    getNodeType() {
      if (this.scope === ScreenNode.VIEWPORT) return "vec4";
      else return "vec2";
    }
    getUpdateType() {
      let updateType = NodeUpdateType.NONE;
      if (this.scope === ScreenNode.SIZE || this.scope === ScreenNode.VIEWPORT) {
        updateType = NodeUpdateType.RENDER;
      }
      this.updateType = updateType;
      return updateType;
    }
    update({ renderer }) {
      const renderTarget = renderer.getRenderTarget();
      if (this.scope === ScreenNode.VIEWPORT) {
        if (renderTarget !== null) {
          viewportVec.copy(renderTarget.viewport);
        } else {
          renderer.getViewport(viewportVec);
          viewportVec.multiplyScalar(renderer.getPixelRatio());
        }
      } else {
        if (renderTarget !== null) {
          screenSizeVec.width = renderTarget.width;
          screenSizeVec.height = renderTarget.height;
        } else {
          renderer.getDrawingBufferSize(screenSizeVec);
        }
      }
    }
    setup() {
      const scope = this.scope;
      let output = null;
      if (scope === ScreenNode.SIZE) {
        output = uniform(screenSizeVec || (screenSizeVec = new Vector2()));
      } else if (scope === ScreenNode.VIEWPORT) {
        output = uniform(viewportVec || (viewportVec = new Vector4()));
      } else {
        output = vec2(screenCoordinate.div(screenSize));
      }
      return output;
    }
    generate(builder) {
      if (this.scope === ScreenNode.COORDINATE) {
        let coord = builder.getFragCoord();
        if (builder.isFlipY()) {
          const size = builder.getNodeProperties(screenSize).outputNode.build(builder);
          coord = `${builder.getType("vec2")}( ${coord}.x, ${size}.y - ${coord}.y )`;
        }
        return coord;
      }
      return super.generate(builder);
    }
  }
  ScreenNode.COORDINATE = "coordinate";
  ScreenNode.VIEWPORT = "viewport";
  ScreenNode.SIZE = "size";
  ScreenNode.UV = "uv";
  const screenUV = /* @__PURE__ */ nodeImmutable(ScreenNode, ScreenNode.UV);
  const screenSize = /* @__PURE__ */ nodeImmutable(ScreenNode, ScreenNode.SIZE);
  const screenCoordinate = /* @__PURE__ */ nodeImmutable(ScreenNode, ScreenNode.COORDINATE);
  const viewport = /* @__PURE__ */ nodeImmutable(ScreenNode, ScreenNode.VIEWPORT);
  viewport.zw;
  /* @__PURE__ */ screenCoordinate.sub(viewport.xy);
  const _size$9 = /* @__PURE__ */ new Vector2();
  class ViewportTextureNode extends TextureNode {
    static get type() {
      return "ViewportTextureNode";
    }
    constructor(uvNode = screenUV, levelNode = null, framebufferTexture = null) {
      if (framebufferTexture === null) {
        framebufferTexture = new FramebufferTexture();
        framebufferTexture.minFilter = LinearMipmapLinearFilter;
      }
      super(framebufferTexture, uvNode, levelNode);
      this.generateMipmaps = false;
      this.isOutputTextureNode = true;
      this.updateBeforeType = NodeUpdateType.FRAME;
    }
    updateBefore(frame) {
      const renderer = frame.renderer;
      renderer.getDrawingBufferSize(_size$9);
      const framebufferTexture = this.value;
      if (framebufferTexture.image.width !== _size$9.width || framebufferTexture.image.height !== _size$9.height) {
        framebufferTexture.image.width = _size$9.width;
        framebufferTexture.image.height = _size$9.height;
        framebufferTexture.needsUpdate = true;
      }
      const currentGenerateMipmaps = framebufferTexture.generateMipmaps;
      framebufferTexture.generateMipmaps = this.generateMipmaps;
      renderer.copyFramebufferToTexture(framebufferTexture);
      framebufferTexture.generateMipmaps = currentGenerateMipmaps;
    }
    clone() {
      const viewportTextureNode = new this.constructor(this.uvNode, this.levelNode, this.value);
      viewportTextureNode.generateMipmaps = this.generateMipmaps;
      return viewportTextureNode;
    }
  }
  let sharedDepthbuffer = null;
  class ViewportDepthTextureNode extends ViewportTextureNode {
    static get type() {
      return "ViewportDepthTextureNode";
    }
    constructor(uvNode = screenUV, levelNode = null) {
      if (sharedDepthbuffer === null) {
        sharedDepthbuffer = new DepthTexture();
      }
      super(uvNode, levelNode, sharedDepthbuffer);
    }
  }
  const viewportDepthTexture = /* @__PURE__ */ nodeProxy(ViewportDepthTextureNode);
  class ViewportDepthNode extends Node {
    static get type() {
      return "ViewportDepthNode";
    }
    constructor(scope, valueNode = null) {
      super("float");
      this.scope = scope;
      this.valueNode = valueNode;
      this.isViewportDepthNode = true;
    }
    generate(builder) {
      const { scope } = this;
      if (scope === ViewportDepthNode.DEPTH_BASE) {
        return builder.getFragDepth();
      }
      return super.generate(builder);
    }
    setup({ camera }) {
      const { scope } = this;
      const value = this.valueNode;
      let node = null;
      if (scope === ViewportDepthNode.DEPTH_BASE) {
        if (value !== null) {
          node = depthBase().assign(value);
        }
      } else if (scope === ViewportDepthNode.DEPTH) {
        if (camera.isPerspectiveCamera) {
          node = viewZToPerspectiveDepth(positionView.z, cameraNear, cameraFar);
        } else {
          node = viewZToOrthographicDepth(positionView.z, cameraNear, cameraFar);
        }
      } else if (scope === ViewportDepthNode.LINEAR_DEPTH) {
        if (value !== null) {
          if (camera.isPerspectiveCamera) {
            const viewZ = perspectiveDepthToViewZ(value, cameraNear, cameraFar);
            node = viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);
          } else {
            node = value;
          }
        } else {
          node = viewZToOrthographicDepth(positionView.z, cameraNear, cameraFar);
        }
      }
      return node;
    }
  }
  ViewportDepthNode.DEPTH_BASE = "depthBase";
  ViewportDepthNode.DEPTH = "depth";
  ViewportDepthNode.LINEAR_DEPTH = "linearDepth";
  const viewZToOrthographicDepth = (viewZ, near, far) => viewZ.add(near).div(near.sub(far));
  const viewZToPerspectiveDepth = (viewZ, near, far) => near.add(viewZ).mul(far).div(far.sub(near).mul(viewZ));
  const perspectiveDepthToViewZ = (depth2, near, far) => near.mul(far).div(far.sub(near).mul(depth2).sub(far));
  const depthBase = /* @__PURE__ */ nodeProxy(ViewportDepthNode, ViewportDepthNode.DEPTH_BASE);
  const depth = /* @__PURE__ */ nodeImmutable(ViewportDepthNode, ViewportDepthNode.DEPTH);
  const linearDepth = /* @__PURE__ */ nodeProxy(ViewportDepthNode, ViewportDepthNode.LINEAR_DEPTH);
  /* @__PURE__ */ linearDepth(viewportDepthTexture());
  depth.assign = (value) => depthBase(value);
  class ClippingNode extends Node {
    static get type() {
      return "ClippingNode";
    }
    constructor(scope = ClippingNode.DEFAULT) {
      super();
      this.scope = scope;
    }
    setup(builder) {
      super.setup(builder);
      const clippingContext = builder.clippingContext;
      const { localClipIntersection, localClippingCount, globalClippingCount } = clippingContext;
      const numClippingPlanes = globalClippingCount + localClippingCount;
      const numUnionClippingPlanes = localClipIntersection ? numClippingPlanes - localClippingCount : numClippingPlanes;
      if (this.scope === ClippingNode.ALPHA_TO_COVERAGE) {
        return this.setupAlphaToCoverage(clippingContext.planes, numClippingPlanes, numUnionClippingPlanes);
      } else {
        return this.setupDefault(clippingContext.planes, numClippingPlanes, numUnionClippingPlanes);
      }
    }
    setupAlphaToCoverage(planes, numClippingPlanes, numUnionClippingPlanes) {
      return Fn(() => {
        const clippingPlanes = uniformArray(planes);
        const distanceToPlane = property("float", "distanceToPlane");
        const distanceGradient = property("float", "distanceToGradient");
        const clipOpacity = property("float", "clipOpacity");
        clipOpacity.assign(1);
        let plane;
        Loop(numUnionClippingPlanes, ({ i }) => {
          plane = clippingPlanes.element(i);
          distanceToPlane.assign(positionView.dot(plane.xyz).negate().add(plane.w));
          distanceGradient.assign(distanceToPlane.fwidth().div(2));
          clipOpacity.mulAssign(smoothstep(distanceGradient.negate(), distanceGradient, distanceToPlane));
          clipOpacity.equal(0).discard();
        });
        if (numUnionClippingPlanes < numClippingPlanes) {
          const unionClipOpacity = property("float", "unionclipOpacity");
          unionClipOpacity.assign(1);
          Loop({ start: numUnionClippingPlanes, end: numClippingPlanes }, ({ i }) => {
            plane = clippingPlanes.element(i);
            distanceToPlane.assign(positionView.dot(plane.xyz).negate().add(plane.w));
            distanceGradient.assign(distanceToPlane.fwidth().div(2));
            unionClipOpacity.mulAssign(smoothstep(distanceGradient.negate(), distanceGradient, distanceToPlane).oneMinus());
          });
          clipOpacity.mulAssign(unionClipOpacity.oneMinus());
        }
        diffuseColor.a.mulAssign(clipOpacity);
        diffuseColor.a.equal(0).discard();
      })();
    }
    setupDefault(planes, numClippingPlanes, numUnionClippingPlanes) {
      return Fn(() => {
        const clippingPlanes = uniformArray(planes);
        let plane;
        Loop(numUnionClippingPlanes, ({ i }) => {
          plane = clippingPlanes.element(i);
          positionView.dot(plane.xyz).greaterThan(plane.w).discard();
        });
        if (numUnionClippingPlanes < numClippingPlanes) {
          const clipped = property("bool", "clipped");
          clipped.assign(true);
          Loop({ start: numUnionClippingPlanes, end: numClippingPlanes }, ({ i }) => {
            plane = clippingPlanes.element(i);
            clipped.assign(positionView.dot(plane.xyz).greaterThan(plane.w).and(clipped));
          });
          clipped.discard();
        }
      })();
    }
  }
  ClippingNode.ALPHA_TO_COVERAGE = "alphaToCoverage";
  ClippingNode.DEFAULT = "default";
  vec3(0.04);
  float(1);
  const getDirection = /* @__PURE__ */ Fn(([uv_immutable, face]) => {
    const uv2 = uv_immutable.toVar();
    uv2.assign(mul(2, uv2).sub(1));
    const direction2 = vec3(uv2, 1).toVar();
    If(face.equal(0), () => {
      direction2.assign(direction2.zyx);
    }).ElseIf(face.equal(1), () => {
      direction2.assign(direction2.xzy);
      direction2.xz.mulAssign(-1);
    }).ElseIf(face.equal(2), () => {
      direction2.x.mulAssign(-1);
    }).ElseIf(face.equal(3), () => {
      direction2.assign(direction2.zyx);
      direction2.xz.mulAssign(-1);
    }).ElseIf(face.equal(4), () => {
      direction2.assign(direction2.xzy);
      direction2.xy.mulAssign(-1);
    }).ElseIf(face.equal(5), () => {
      direction2.z.mulAssign(-1);
    });
    return direction2;
  }).setLayout({
    name: "getDirection",
    type: "vec3",
    inputs: [
      { name: "uv", type: "vec2" },
      { name: "face", type: "float" }
    ]
  });
  Fn(({ texture: texture2, uv: uv2 }) => {
    const epsilon = 1e-4;
    const ret = vec3().toVar();
    If(uv2.x.lessThan(epsilon), () => {
      ret.assign(vec3(1, 0, 0));
    }).ElseIf(uv2.y.lessThan(epsilon), () => {
      ret.assign(vec3(0, 1, 0));
    }).ElseIf(uv2.z.lessThan(epsilon), () => {
      ret.assign(vec3(0, 0, 1));
    }).ElseIf(uv2.x.greaterThan(1 - epsilon), () => {
      ret.assign(vec3(-1, 0, 0));
    }).ElseIf(uv2.y.greaterThan(1 - epsilon), () => {
      ret.assign(vec3(0, -1, 0));
    }).ElseIf(uv2.z.greaterThan(1 - epsilon), () => {
      ret.assign(vec3(0, 0, -1));
    }).Else(() => {
      const step2 = 0.01;
      const x = texture2.uv(uv2.add(vec3(-step2, 0, 0))).r.sub(texture2.uv(uv2.add(vec3(step2, 0, 0))).r);
      const y2 = texture2.uv(uv2.add(vec3(0, -step2, 0))).r.sub(texture2.uv(uv2.add(vec3(0, step2, 0))).r);
      const z = texture2.uv(uv2.add(vec3(0, 0, -step2))).r.sub(texture2.uv(uv2.add(vec3(0, 0, step2))).r);
      ret.assign(vec3(x, y2, z));
    });
    return ret.normalize();
  });
  const direction = getDirection(uv(), attribute("faceIndex")).normalize();
  vec3(direction.x, direction.y.negate(), direction.z);
  class TimerNode extends UniformNode {
    static get type() {
      return "TimerNode";
    }
    constructor(scope = TimerNode.LOCAL, scale = 1, value = 0) {
      super(value);
      this.scope = scope;
      this.scale = scale;
      this.updateType = NodeUpdateType.FRAME;
    }
    /*
    		@TODO:
    		getNodeType( builder ) {
    
    			const scope = this.scope;
    
    			if ( scope === TimerNode.FRAME ) {
    
    				return 'uint';
    
    			}
    
    			return 'float';
    
    		}
    	*/
    update(frame) {
      const scope = this.scope;
      const scale = this.scale;
      if (scope === TimerNode.LOCAL) {
        this.value += frame.deltaTime * scale;
      } else if (scope === TimerNode.DELTA) {
        this.value = frame.deltaTime * scale;
      } else if (scope === TimerNode.FRAME) {
        this.value = frame.frameId;
      } else {
        this.value = frame.time * scale;
      }
    }
    serialize(data) {
      super.serialize(data);
      data.scope = this.scope;
      data.scale = this.scale;
    }
    deserialize(data) {
      super.deserialize(data);
      this.scope = data.scope;
      this.scale = data.scale;
    }
  }
  TimerNode.LOCAL = "local";
  TimerNode.GLOBAL = "global";
  TimerNode.DELTA = "delta";
  TimerNode.FRAME = "frame";
  const timerLocal = (timeScale, value = 0) => nodeObject(new TimerNode(TimerNode.LOCAL, timeScale, value));
  class OscNode extends Node {
    static get type() {
      return "OscNode";
    }
    constructor(method = OscNode.SINE, timeNode = timerLocal()) {
      super();
      this.method = method;
      this.timeNode = timeNode;
    }
    getNodeType(builder) {
      return this.timeNode.getNodeType(builder);
    }
    setup() {
      const method = this.method;
      const timeNode = nodeObject(this.timeNode);
      let outputNode = null;
      if (method === OscNode.SINE) {
        outputNode = timeNode.add(0.75).mul(Math.PI * 2).sin().mul(0.5).add(0.5);
      } else if (method === OscNode.SQUARE) {
        outputNode = timeNode.fract().round();
      } else if (method === OscNode.TRIANGLE) {
        outputNode = timeNode.add(0.5).fract().mul(2).sub(1).abs();
      } else if (method === OscNode.SAWTOOTH) {
        outputNode = timeNode.fract();
      }
      return outputNode;
    }
    serialize(data) {
      super.serialize(data);
      data.method = this.method;
    }
    deserialize(data) {
      super.deserialize(data);
      this.method = data.method;
    }
  }
  OscNode.SINE = "sine";
  OscNode.SQUARE = "square";
  OscNode.TRIANGLE = "triangle";
  OscNode.SAWTOOTH = "sawtooth";
  /* @__PURE__ */ nodeProxy(OscNode, OscNode.SINE);
  /* @__PURE__ */ nodeProxy(OscNode, OscNode.SQUARE);
  /* @__PURE__ */ nodeProxy(OscNode, OscNode.TRIANGLE);
  /* @__PURE__ */ nodeProxy(OscNode, OscNode.SAWTOOTH);
  new Plane();
  new Vector3();
  new Vector3();
  new Vector3();
  new Matrix4();
  new Vector3(0, 0, -1);
  new Vector4();
  new Vector3();
  new Vector3();
  new Vector4();
  new Vector2();
  new RenderTarget();
  screenUV.flipX();
  class SceneNode extends Node {
    static get type() {
      return "SceneNode";
    }
    constructor(scope = SceneNode.BACKGROUND_BLURRINESS, scene = null) {
      super();
      this.scope = scope;
      this.scene = scene;
    }
    setup(builder) {
      const scope = this.scope;
      const scene = this.scene !== null ? this.scene : builder.scene;
      let output;
      if (scope === SceneNode.BACKGROUND_BLURRINESS) {
        output = reference("backgroundBlurriness", "float", scene);
      } else if (scope === SceneNode.BACKGROUND_INTENSITY) {
        output = reference("backgroundIntensity", "float", scene);
      } else {
        console.error("THREE.SceneNode: Unknown scope:", scope);
      }
      return output;
    }
  }
  SceneNode.BACKGROUND_BLURRINESS = "backgroundBlurriness";
  SceneNode.BACKGROUND_INTENSITY = "backgroundIntensity";
  /* @__PURE__ */ nodeImmutable(SceneNode, SceneNode.BACKGROUND_BLURRINESS);
  /* @__PURE__ */ nodeImmutable(SceneNode, SceneNode.BACKGROUND_INTENSITY);
  const _size$6 = /* @__PURE__ */ new Vector2();
  class PassTextureNode extends TextureNode {
    static get type() {
      return "PassTextureNode";
    }
    constructor(passNode, texture2) {
      super(texture2);
      this.passNode = passNode;
      this.setUpdateMatrix(false);
    }
    setup(builder) {
      if (builder.object.isQuadMesh) this.passNode.build(builder);
      return super.setup(builder);
    }
    clone() {
      return new this.constructor(this.passNode, this.value);
    }
  }
  class PassMultipleTextureNode extends PassTextureNode {
    static get type() {
      return "PassMultipleTextureNode";
    }
    constructor(passNode, textureName, previousTexture = false) {
      super(passNode, null);
      this.textureName = textureName;
      this.previousTexture = previousTexture;
    }
    updateTexture() {
      this.value = this.previousTexture ? this.passNode.getPreviousTexture(this.textureName) : this.passNode.getTexture(this.textureName);
    }
    setup(builder) {
      this.updateTexture();
      return super.setup(builder);
    }
    clone() {
      return new this.constructor(this.passNode, this.textureName, this.previousTexture);
    }
  }
  class PassNode extends TempNode {
    static get type() {
      return "PassNode";
    }
    constructor(scope, scene, camera, options = {}) {
      super("vec4");
      this.scope = scope;
      this.scene = scene;
      this.camera = camera;
      this.options = options;
      this._pixelRatio = 1;
      this._width = 1;
      this._height = 1;
      const depthTexture = new DepthTexture();
      depthTexture.isRenderTargetTexture = true;
      depthTexture.name = "depth";
      const renderTarget = new RenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: HalfFloatType, ...options });
      renderTarget.texture.name = "output";
      renderTarget.depthTexture = depthTexture;
      this.renderTarget = renderTarget;
      this.updateBeforeType = NodeUpdateType.FRAME;
      this._textures = {
        output: renderTarget.texture,
        depth: depthTexture
      };
      this._textureNodes = {};
      this._linearDepthNodes = {};
      this._viewZNodes = {};
      this._previousTextures = {};
      this._previousTextureNodes = {};
      this._cameraNear = uniform(0);
      this._cameraFar = uniform(0);
      this._mrt = null;
      this.isPassNode = true;
    }
    setMRT(mrt) {
      this._mrt = mrt;
      return this;
    }
    getMRT() {
      return this._mrt;
    }
    isGlobal() {
      return true;
    }
    getTexture(name) {
      let texture2 = this._textures[name];
      if (texture2 === void 0) {
        const refTexture = this.renderTarget.texture;
        texture2 = refTexture.clone();
        texture2.isRenderTargetTexture = true;
        texture2.name = name;
        this._textures[name] = texture2;
        this.renderTarget.textures.push(texture2);
      }
      return texture2;
    }
    getPreviousTexture(name) {
      let texture2 = this._previousTextures[name];
      if (texture2 === void 0) {
        texture2 = this.getTexture(name).clone();
        texture2.isRenderTargetTexture = true;
        this._previousTextures[name] = texture2;
      }
      return texture2;
    }
    toggleTexture(name) {
      const prevTexture = this._previousTextures[name];
      if (prevTexture !== void 0) {
        const texture2 = this._textures[name];
        const index = this.renderTarget.textures.indexOf(texture2);
        this.renderTarget.textures[index] = prevTexture;
        this._textures[name] = prevTexture;
        this._previousTextures[name] = texture2;
        this._textureNodes[name].updateTexture();
        this._previousTextureNodes[name].updateTexture();
      }
    }
    getTextureNode(name = "output") {
      let textureNode = this._textureNodes[name];
      if (textureNode === void 0) {
        this._textureNodes[name] = textureNode = nodeObject(new PassMultipleTextureNode(this, name));
        this._textureNodes[name].updateTexture();
      }
      return textureNode;
    }
    getPreviousTextureNode(name = "output") {
      let textureNode = this._previousTextureNodes[name];
      if (textureNode === void 0) {
        if (this._textureNodes[name] === void 0) this.getTextureNode(name);
        this._previousTextureNodes[name] = textureNode = nodeObject(new PassMultipleTextureNode(this, name, true));
        this._previousTextureNodes[name].updateTexture();
      }
      return textureNode;
    }
    getViewZNode(name = "depth") {
      let viewZNode = this._viewZNodes[name];
      if (viewZNode === void 0) {
        const cameraNear2 = this._cameraNear;
        const cameraFar2 = this._cameraFar;
        this._viewZNodes[name] = viewZNode = perspectiveDepthToViewZ(this.getTextureNode(name), cameraNear2, cameraFar2);
      }
      return viewZNode;
    }
    getLinearDepthNode(name = "depth") {
      let linearDepthNode = this._linearDepthNodes[name];
      if (linearDepthNode === void 0) {
        const cameraNear2 = this._cameraNear;
        const cameraFar2 = this._cameraFar;
        const viewZNode = this.getViewZNode(name);
        this._linearDepthNodes[name] = linearDepthNode = viewZToOrthographicDepth(viewZNode, cameraNear2, cameraFar2);
      }
      return linearDepthNode;
    }
    setup({ renderer }) {
      this.renderTarget.samples = this.options.samples === void 0 ? renderer.samples : this.options.samples;
      if (renderer.backend.isWebGLBackend === true) {
        this.renderTarget.samples = 0;
      }
      this.renderTarget.depthTexture.isMultisampleRenderTargetTexture = this.renderTarget.samples > 1;
      return this.scope === PassNode.COLOR ? this.getTextureNode() : this.getLinearDepthNode();
    }
    updateBefore(frame) {
      const { renderer } = frame;
      const { scene, camera } = this;
      this._pixelRatio = renderer.getPixelRatio();
      const size = renderer.getSize(_size$6);
      this.setSize(size.width, size.height);
      const currentRenderTarget = renderer.getRenderTarget();
      const currentMRT = renderer.getMRT();
      this._cameraNear.value = camera.near;
      this._cameraFar.value = camera.far;
      for (const name in this._previousTextures) {
        this.toggleTexture(name);
      }
      renderer.setRenderTarget(this.renderTarget);
      renderer.setMRT(this._mrt);
      renderer.render(scene, camera);
      renderer.setRenderTarget(currentRenderTarget);
      renderer.setMRT(currentMRT);
    }
    setSize(width, height) {
      this._width = width;
      this._height = height;
      const effectiveWidth = this._width * this._pixelRatio;
      const effectiveHeight = this._height * this._pixelRatio;
      this.renderTarget.setSize(effectiveWidth, effectiveHeight);
    }
    setPixelRatio(pixelRatio) {
      this._pixelRatio = pixelRatio;
      this.setSize(this._width, this._height);
    }
    dispose() {
      this.renderTarget.dispose();
    }
  }
  PassNode.COLOR = "color";
  PassNode.DEPTH = "depth";
  Fn(({ depthTexture, shadowCoord }) => {
    return texture(depthTexture, shadowCoord.xy).compare(shadowCoord.z);
  });
  Fn(({ depthTexture, shadowCoord, shadow }) => {
    const depthCompare = (uv2, compare) => texture(depthTexture, uv2).compare(compare);
    const mapSize = reference("mapSize", "vec2", shadow).setGroup(renderGroup);
    const radius = reference("radius", "float", shadow).setGroup(renderGroup);
    const texelSize = vec2(1).div(mapSize);
    const dx0 = texelSize.x.negate().mul(radius);
    const dy0 = texelSize.y.negate().mul(radius);
    const dx1 = texelSize.x.mul(radius);
    const dy1 = texelSize.y.mul(radius);
    const dx2 = dx0.div(2);
    const dy2 = dy0.div(2);
    const dx3 = dx1.div(2);
    const dy3 = dy1.div(2);
    return add(
      depthCompare(shadowCoord.xy.add(vec2(dx0, dy0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(0, dy0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx1, dy0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx2, dy2)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(0, dy2)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx3, dy2)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx0, 0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx2, 0)), shadowCoord.z),
      depthCompare(shadowCoord.xy, shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx3, 0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx1, 0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx2, dy3)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(0, dy3)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx3, dy3)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx0, dy1)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(0, dy1)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx1, dy1)), shadowCoord.z)
    ).mul(1 / 17);
  });
  Fn(({ depthTexture, shadowCoord, shadow }) => {
    const depthCompare = (uv3, compare) => texture(depthTexture, uv3).compare(compare);
    const mapSize = reference("mapSize", "vec2", shadow).setGroup(renderGroup);
    const texelSize = vec2(1).div(mapSize);
    const dx = texelSize.x;
    const dy = texelSize.y;
    const uv2 = shadowCoord.xy;
    const f = fract(uv2.mul(mapSize).add(0.5));
    uv2.subAssign(f.mul(texelSize));
    return add(
      depthCompare(uv2, shadowCoord.z),
      depthCompare(uv2.add(vec2(dx, 0)), shadowCoord.z),
      depthCompare(uv2.add(vec2(0, dy)), shadowCoord.z),
      depthCompare(uv2.add(texelSize), shadowCoord.z),
      mix(
        depthCompare(uv2.add(vec2(dx.negate(), 0)), shadowCoord.z),
        depthCompare(uv2.add(vec2(dx.mul(2), 0)), shadowCoord.z),
        f.x
      ),
      mix(
        depthCompare(uv2.add(vec2(dx.negate(), dy)), shadowCoord.z),
        depthCompare(uv2.add(vec2(dx.mul(2), dy)), shadowCoord.z),
        f.x
      ),
      mix(
        depthCompare(uv2.add(vec2(0, dy.negate())), shadowCoord.z),
        depthCompare(uv2.add(vec2(0, dy.mul(2))), shadowCoord.z),
        f.y
      ),
      mix(
        depthCompare(uv2.add(vec2(dx, dy.negate())), shadowCoord.z),
        depthCompare(uv2.add(vec2(dx, dy.mul(2))), shadowCoord.z),
        f.y
      ),
      mix(
        mix(
          depthCompare(uv2.add(vec2(dx.negate(), dy.negate())), shadowCoord.z),
          depthCompare(uv2.add(vec2(dx.mul(2), dy.negate())), shadowCoord.z),
          f.x
        ),
        mix(
          depthCompare(uv2.add(vec2(dx.negate(), dy.mul(2))), shadowCoord.z),
          depthCompare(uv2.add(vec2(dx.mul(2), dy.mul(2))), shadowCoord.z),
          f.x
        ),
        f.y
      )
    ).mul(1 / 9);
  });
  Fn(({ depthTexture, shadowCoord }) => {
    const occlusion = float(1).toVar();
    const distribution = texture(depthTexture).uv(shadowCoord.xy).rg;
    const hardShadow = step(shadowCoord.z, distribution.x);
    If(hardShadow.notEqual(float(1)), () => {
      const distance2 = shadowCoord.z.sub(distribution.x);
      const variance = max$1(0, distribution.y.mul(distribution.y));
      let softnessProbability = variance.div(variance.add(distance2.mul(distance2)));
      softnessProbability = clamp(sub(softnessProbability, 0.3).div(0.95 - 0.3));
      occlusion.assign(clamp(max$1(hardShadow, softnessProbability)));
    });
    return occlusion;
  });
  Fn(({ samples, radius, size, shadowPass }) => {
    const mean = float(0).toVar();
    const squaredMean = float(0).toVar();
    const uvStride = samples.lessThanEqual(float(1)).select(float(0), float(2).div(samples.sub(1)));
    const uvStart = samples.lessThanEqual(float(1)).select(float(0), float(-1));
    Loop({ start: int(0), end: int(samples), type: "int", condition: "<" }, ({ i }) => {
      const uvOffset = uvStart.add(float(i).mul(uvStride));
      const depth2 = shadowPass.uv(add(screenCoordinate.xy, vec2(0, uvOffset).mul(radius)).div(size)).x;
      mean.addAssign(depth2);
      squaredMean.addAssign(depth2.mul(depth2));
    });
    mean.divAssign(samples);
    squaredMean.divAssign(samples);
    const std_dev = sqrt(squaredMean.sub(mean.mul(mean)));
    return vec2(mean, std_dev);
  });
  Fn(({ samples, radius, size, shadowPass }) => {
    const mean = float(0).toVar();
    const squaredMean = float(0).toVar();
    const uvStride = samples.lessThanEqual(float(1)).select(float(0), float(2).div(samples.sub(1)));
    const uvStart = samples.lessThanEqual(float(1)).select(float(0), float(-1));
    Loop({ start: int(0), end: int(samples), type: "int", condition: "<" }, ({ i }) => {
      const uvOffset = uvStart.add(float(i).mul(uvStride));
      const distribution = shadowPass.uv(add(screenCoordinate.xy, vec2(uvOffset, 0).mul(radius)).div(size));
      mean.addAssign(distribution.x);
      squaredMean.addAssign(add(distribution.y.mul(distribution.y), distribution.x.mul(distribution.x)));
    });
    mean.divAssign(samples);
    squaredMean.divAssign(samples);
    const std_dev = sqrt(squaredMean.sub(mean.mul(mean)));
    return vec2(mean, std_dev);
  });
  /* @__PURE__ */ mat3(vec3(1.6605, -0.1246, -0.0182), vec3(-0.5876, 1.1329, -0.1006), vec3(-0.0728, -83e-4, 1.1187));
  /* @__PURE__ */ mat3(vec3(0.6274, 0.0691, 0.0164), vec3(0.3293, 0.9195, 0.088), vec3(0.0433, 0.0113, 0.8956));
  class BarrierNode extends Node {
    constructor(scope) {
      super();
      this.scope = scope;
    }
    generate(builder) {
      const { scope } = this;
      const { renderer } = builder;
      if (renderer.backend.isWebGLBackend === true) {
        builder.addFlowCode(`	// ${scope}Barrier 
`);
      } else {
        builder.addLineFlowCode(`${scope}Barrier()`, this);
      }
    }
  }
  nodeProxy(BarrierNode);
  class AtomicFunctionNode extends TempNode {
    static get type() {
      return "AtomicFunctionNode";
    }
    constructor(method, pointerNode, valueNode, storeNode = null) {
      super("uint");
      this.method = method;
      this.pointerNode = pointerNode;
      this.valueNode = valueNode;
      this.storeNode = storeNode;
    }
    getInputType(builder) {
      return this.pointerNode.getNodeType(builder);
    }
    getNodeType(builder) {
      return this.getInputType(builder);
    }
    generate(builder) {
      const method = this.method;
      const type = this.getNodeType(builder);
      const inputType = this.getInputType(builder);
      const a = this.pointerNode;
      const b = this.valueNode;
      const params = [];
      params.push(`&${a.build(builder, inputType)}`);
      params.push(b.build(builder, inputType));
      const methodSnippet = `${builder.getMethod(method, type)}( ${params.join(", ")} )`;
      if (this.storeNode !== null) {
        const varSnippet = this.storeNode.build(builder, inputType);
        builder.addLineFlowCode(`${varSnippet} = ${methodSnippet}`, this);
      } else {
        builder.addLineFlowCode(methodSnippet, this);
      }
    }
  }
  AtomicFunctionNode.ATOMIC_LOAD = "atomicLoad";
  AtomicFunctionNode.ATOMIC_STORE = "atomicStore";
  AtomicFunctionNode.ATOMIC_ADD = "atomicAdd";
  AtomicFunctionNode.ATOMIC_SUB = "atomicSub";
  AtomicFunctionNode.ATOMIC_MAX = "atomicMax";
  AtomicFunctionNode.ATOMIC_MIN = "atomicMin";
  AtomicFunctionNode.ATOMIC_AND = "atomicAnd";
  AtomicFunctionNode.ATOMIC_OR = "atomicOr";
  AtomicFunctionNode.ATOMIC_XOR = "atomicXor";
  nodeProxy(AtomicFunctionNode);
  if (typeof __THREE_DEVTOOLS__ !== "undefined") {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
      revision: REVISION
    } }));
  }
  if (typeof window !== "undefined") {
    try {
      if ({
        url: self.location.href
      }) {
        if (!window.__THREE__IMPORTS__) window.__THREE__IMPORTS__ = [];
        window.__THREE__IMPORTS__.push({ url: self.location.href, revision: REVISION });
      }
    } catch {
    }
    if (window.__THREE__) {
      console.warn("WARNING: Multiple instances of Three.js being imported. Existing: " + window.__THREE__ + ", new: " + REVISION);
      console.warn(window.__THREE__IMPORTS__);
    } else {
      window.__THREE__ = REVISION;
    }
  }
  const _taskCache$1 = /* @__PURE__ */ new WeakMap();
  class DRACOLoader extends Loader {
    constructor(manager) {
      super(manager);
      this.decoderPath = "";
      this.decoderConfig = {};
      this.decoderBinary = null;
      this.decoderPending = null;
      this.workerLimit = 4;
      this.workerPool = [];
      this.workerNextTaskID = 1;
      this.workerSourceURL = "";
      this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD"
      };
      this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array"
      };
    }
    setDecoderPath(path) {
      this.decoderPath = path;
      return this;
    }
    setDecoderConfig(config) {
      this.decoderConfig = config;
      return this;
    }
    setWorkerLimit(workerLimit) {
      this.workerLimit = workerLimit;
      return this;
    }
    load(url, onLoad, onProgress, onError) {
      const loader2 = new FileLoader(this.manager);
      loader2.setPath(this.path);
      loader2.setResponseType("arraybuffer");
      loader2.setRequestHeader(this.requestHeader);
      loader2.setWithCredentials(this.withCredentials);
      loader2.load(url, (buffer2) => {
        this.parse(buffer2, onLoad, onError);
      }, onProgress, onError);
    }
    parse(buffer2, onLoad, onError = () => {
    }) {
      this.decodeDracoFile(buffer2, onLoad, null, null, SRGBColorSpace, onError).catch(onError);
    }
    decodeDracoFile(buffer2, callback, attributeIDs, attributeTypes, vertexColorSpace = LinearSRGBColorSpace, onError = () => {
    }) {
      const taskConfig = {
        attributeIDs: attributeIDs || this.defaultAttributeIDs,
        attributeTypes: attributeTypes || this.defaultAttributeTypes,
        useUniqueIDs: !!attributeIDs,
        vertexColorSpace
      };
      return this.decodeGeometry(buffer2, taskConfig).then(callback).catch(onError);
    }
    decodeGeometry(buffer2, taskConfig) {
      const taskKey = JSON.stringify(taskConfig);
      if (_taskCache$1.has(buffer2)) {
        const cachedTask = _taskCache$1.get(buffer2);
        if (cachedTask.key === taskKey) {
          return cachedTask.promise;
        } else if (buffer2.byteLength === 0) {
          throw new Error(
            "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
          );
        }
      }
      let worker;
      const taskID = this.workerNextTaskID++;
      const taskCost = buffer2.byteLength;
      const geometryPending = this._getWorker(taskID, taskCost).then((_worker) => {
        worker = _worker;
        return new Promise((resolve, reject) => {
          worker._callbacks[taskID] = { resolve, reject };
          worker.postMessage({ type: "decode", id: taskID, taskConfig, buffer: buffer2 }, [buffer2]);
        });
      }).then((message) => this._createGeometry(message.geometry));
      geometryPending.catch(() => true).then(() => {
        if (worker && taskID) {
          this._releaseTask(worker, taskID);
        }
      });
      _taskCache$1.set(buffer2, {
        key: taskKey,
        promise: geometryPending
      });
      return geometryPending;
    }
    _createGeometry(geometryData) {
      const geometry = new BufferGeometry();
      if (geometryData.index) {
        geometry.setIndex(new BufferAttribute(geometryData.index.array, 1));
      }
      for (let i = 0; i < geometryData.attributes.length; i++) {
        const result = geometryData.attributes[i];
        const name = result.name;
        const array = result.array;
        const itemSize = result.itemSize;
        const attribute2 = new BufferAttribute(array, itemSize);
        if (name === "color") {
          this._assignVertexColorSpace(attribute2, result.vertexColorSpace);
          attribute2.normalized = array instanceof Float32Array === false;
        }
        geometry.setAttribute(name, attribute2);
      }
      return geometry;
    }
    _assignVertexColorSpace(attribute2, inputColorSpace) {
      if (inputColorSpace !== SRGBColorSpace) return;
      const _color2 = new Color();
      for (let i = 0, il = attribute2.count; i < il; i++) {
        _color2.fromBufferAttribute(attribute2, i);
        ColorManagement.toWorkingColorSpace(_color2, SRGBColorSpace);
        attribute2.setXYZ(i, _color2.r, _color2.g, _color2.b);
      }
    }
    _loadLibrary(url, responseType) {
      const loader2 = new FileLoader(this.manager);
      loader2.setPath(this.decoderPath);
      loader2.setResponseType(responseType);
      loader2.setWithCredentials(this.withCredentials);
      return new Promise((resolve, reject) => {
        loader2.load(url, resolve, void 0, reject);
      });
    }
    preload() {
      this._initDecoder();
      return this;
    }
    _initDecoder() {
      if (this.decoderPending) return this.decoderPending;
      const useJS = typeof WebAssembly !== "object" || this.decoderConfig.type === "js";
      const librariesPending = [];
      if (useJS) {
        librariesPending.push(this._loadLibrary("draco_decoder.js", "text"));
      } else {
        librariesPending.push(this._loadLibrary("draco_wasm_wrapper.js", "text"));
        librariesPending.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"));
      }
      this.decoderPending = Promise.all(librariesPending).then((libraries) => {
        const jsContent = libraries[0];
        if (!useJS) {
          this.decoderConfig.wasmBinary = libraries[1];
        }
        const fn = DRACOWorker.toString();
        const body = [
          "/* draco decoder */",
          jsContent,
          "",
          "/* worker */",
          fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"))
        ].join("\n");
        this.workerSourceURL = URL.createObjectURL(new Blob([body]));
      });
      return this.decoderPending;
    }
    _getWorker(taskID, taskCost) {
      return this._initDecoder().then(() => {
        if (this.workerPool.length < this.workerLimit) {
          const worker2 = new Worker(this.workerSourceURL);
          worker2._callbacks = {};
          worker2._taskCosts = {};
          worker2._taskLoad = 0;
          worker2.postMessage({ type: "init", decoderConfig: this.decoderConfig });
          worker2.onmessage = function(e) {
            const message = e.data;
            switch (message.type) {
              case "decode":
                worker2._callbacks[message.id].resolve(message);
                break;
              case "error":
                worker2._callbacks[message.id].reject(message);
                break;
              default:
                console.error('THREE.DRACOLoader: Unexpected message, "' + message.type + '"');
            }
          };
          this.workerPool.push(worker2);
        } else {
          this.workerPool.sort(function(a, b) {
            return a._taskLoad > b._taskLoad ? -1 : 1;
          });
        }
        const worker = this.workerPool[this.workerPool.length - 1];
        worker._taskCosts[taskID] = taskCost;
        worker._taskLoad += taskCost;
        return worker;
      });
    }
    _releaseTask(worker, taskID) {
      worker._taskLoad -= worker._taskCosts[taskID];
      delete worker._callbacks[taskID];
      delete worker._taskCosts[taskID];
    }
    debug() {
      console.log("Task load: ", this.workerPool.map((worker) => worker._taskLoad));
    }
    dispose() {
      for (let i = 0; i < this.workerPool.length; ++i) {
        this.workerPool[i].terminate();
      }
      this.workerPool.length = 0;
      if (this.workerSourceURL !== "") {
        URL.revokeObjectURL(this.workerSourceURL);
      }
      return this;
    }
  }
  function DRACOWorker() {
    let decoderConfig;
    let decoderPending;
    onmessage = function(e) {
      const message = e.data;
      switch (message.type) {
        case "init":
          decoderConfig = message.decoderConfig;
          decoderPending = new Promise(function(resolve) {
            decoderConfig.onModuleLoaded = function(draco) {
              resolve({ draco });
            };
            DracoDecoderModule(decoderConfig);
          });
          break;
        case "decode":
          const buffer2 = message.buffer;
          const taskConfig = message.taskConfig;
          decoderPending.then((module) => {
            const draco = module.draco;
            const decoder = new draco.Decoder();
            try {
              const geometry = decodeGeometry(draco, decoder, new Int8Array(buffer2), taskConfig);
              const buffers = geometry.attributes.map((attr) => attr.array.buffer);
              if (geometry.index) buffers.push(geometry.index.array.buffer);
              self.postMessage({ type: "decode", id: message.id, geometry }, buffers);
            } catch (error) {
              console.error(error);
              self.postMessage({ type: "error", id: message.id, error: error.message });
            } finally {
              draco.destroy(decoder);
            }
          });
          break;
      }
    };
    function decodeGeometry(draco, decoder, array, taskConfig) {
      const attributeIDs = taskConfig.attributeIDs;
      const attributeTypes = taskConfig.attributeTypes;
      let dracoGeometry;
      let decodingStatus;
      const geometryType = decoder.GetEncodedGeometryType(array);
      if (geometryType === draco.TRIANGULAR_MESH) {
        dracoGeometry = new draco.Mesh();
        decodingStatus = decoder.DecodeArrayToMesh(array, array.byteLength, dracoGeometry);
      } else if (geometryType === draco.POINT_CLOUD) {
        dracoGeometry = new draco.PointCloud();
        decodingStatus = decoder.DecodeArrayToPointCloud(array, array.byteLength, dracoGeometry);
      } else {
        throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
      }
      if (!decodingStatus.ok() || dracoGeometry.ptr === 0) {
        throw new Error("THREE.DRACOLoader: Decoding failed: " + decodingStatus.error_msg());
      }
      const geometry = { index: null, attributes: [] };
      for (const attributeName in attributeIDs) {
        const attributeType = self[attributeTypes[attributeName]];
        let attribute2;
        let attributeID;
        if (taskConfig.useUniqueIDs) {
          attributeID = attributeIDs[attributeName];
          attribute2 = decoder.GetAttributeByUniqueId(dracoGeometry, attributeID);
        } else {
          attributeID = decoder.GetAttributeId(dracoGeometry, draco[attributeIDs[attributeName]]);
          if (attributeID === -1) continue;
          attribute2 = decoder.GetAttribute(dracoGeometry, attributeID);
        }
        const attributeResult = decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute2);
        if (attributeName === "color") {
          attributeResult.vertexColorSpace = taskConfig.vertexColorSpace;
        }
        geometry.attributes.push(attributeResult);
      }
      if (geometryType === draco.TRIANGULAR_MESH) {
        geometry.index = decodeIndex(draco, decoder, dracoGeometry);
      }
      draco.destroy(dracoGeometry);
      return geometry;
    }
    function decodeIndex(draco, decoder, dracoGeometry) {
      const numFaces = dracoGeometry.num_faces();
      const numIndices = numFaces * 3;
      const byteLength = numIndices * 4;
      const ptr = draco._malloc(byteLength);
      decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
      const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();
      draco._free(ptr);
      return { array: index, itemSize: 1 };
    }
    function decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute2) {
      const numComponents = attribute2.num_components();
      const numPoints = dracoGeometry.num_points();
      const numValues = numPoints * numComponents;
      const byteLength = numValues * attributeType.BYTES_PER_ELEMENT;
      const dataType = getDracoDataType(draco, attributeType);
      const ptr = draco._malloc(byteLength);
      decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute2, dataType, byteLength, ptr);
      const array = new attributeType(draco.HEAPF32.buffer, ptr, numValues).slice();
      draco._free(ptr);
      return {
        name: attributeName,
        array,
        itemSize: numComponents
      };
    }
    function getDracoDataType(draco, attributeType) {
      switch (attributeType) {
        case Float32Array:
          return draco.DT_FLOAT32;
        case Int8Array:
          return draco.DT_INT8;
        case Int16Array:
          return draco.DT_INT16;
        case Int32Array:
          return draco.DT_INT32;
        case Uint8Array:
          return draco.DT_UINT8;
        case Uint16Array:
          return draco.DT_UINT16;
        case Uint32Array:
          return draco.DT_UINT32;
      }
    }
  }
  function toTrianglesDrawMode(geometry, drawMode) {
    if (drawMode === TrianglesDrawMode) {
      console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
      return geometry;
    }
    if (drawMode === TriangleFanDrawMode || drawMode === TriangleStripDrawMode) {
      let index = geometry.getIndex();
      if (index === null) {
        const indices = [];
        const position = geometry.getAttribute("position");
        if (position !== void 0) {
          for (let i = 0; i < position.count; i++) {
            indices.push(i);
          }
          geometry.setIndex(indices);
          index = geometry.getIndex();
        } else {
          console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
          return geometry;
        }
      }
      const numberOfTriangles = index.count - 2;
      const newIndices = [];
      if (drawMode === TriangleFanDrawMode) {
        for (let i = 1; i <= numberOfTriangles; i++) {
          newIndices.push(index.getX(0));
          newIndices.push(index.getX(i));
          newIndices.push(index.getX(i + 1));
        }
      } else {
        for (let i = 0; i < numberOfTriangles; i++) {
          if (i % 2 === 0) {
            newIndices.push(index.getX(i));
            newIndices.push(index.getX(i + 1));
            newIndices.push(index.getX(i + 2));
          } else {
            newIndices.push(index.getX(i + 2));
            newIndices.push(index.getX(i + 1));
            newIndices.push(index.getX(i));
          }
        }
      }
      if (newIndices.length / 3 !== numberOfTriangles) {
        console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      }
      const newGeometry = geometry.clone();
      newGeometry.setIndex(newIndices);
      newGeometry.clearGroups();
      return newGeometry;
    } else {
      console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
      return geometry;
    }
  }
  class GLTFLoader extends Loader {
    constructor(manager) {
      super(manager);
      this.dracoLoader = null;
      this.ktx2Loader = null;
      this.meshoptDecoder = null;
      this.pluginCallbacks = [];
      this.register(function(parser) {
        return new GLTFMaterialsClearcoatExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsDispersionExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureBasisUExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureWebPExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureAVIFExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsSheenExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsTransmissionExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsVolumeExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsIorExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsEmissiveStrengthExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsSpecularExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsIridescenceExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsAnisotropyExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsBumpExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFLightsExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMeshoptCompression(parser);
      });
      this.register(function(parser) {
        return new GLTFMeshGpuInstancing(parser);
      });
    }
    load(url, onLoad, onProgress, onError) {
      const scope = this;
      let resourcePath;
      if (this.resourcePath !== "") {
        resourcePath = this.resourcePath;
      } else if (this.path !== "") {
        const relativeUrl = LoaderUtils.extractUrlBase(url);
        resourcePath = LoaderUtils.resolveURL(relativeUrl, this.path);
      } else {
        resourcePath = LoaderUtils.extractUrlBase(url);
      }
      this.manager.itemStart(url);
      const _onError = function(e) {
        if (onError) {
          onError(e);
        } else {
          console.error(e);
        }
        scope.manager.itemError(url);
        scope.manager.itemEnd(url);
      };
      const loader2 = new FileLoader(this.manager);
      loader2.setPath(this.path);
      loader2.setResponseType("arraybuffer");
      loader2.setRequestHeader(this.requestHeader);
      loader2.setWithCredentials(this.withCredentials);
      loader2.load(url, function(data) {
        try {
          scope.parse(data, resourcePath, function(gltf) {
            onLoad(gltf);
            scope.manager.itemEnd(url);
          }, _onError);
        } catch (e) {
          _onError(e);
        }
      }, onProgress, _onError);
    }
    setDRACOLoader(dracoLoader2) {
      this.dracoLoader = dracoLoader2;
      return this;
    }
    setKTX2Loader(ktx2Loader2) {
      this.ktx2Loader = ktx2Loader2;
      return this;
    }
    setMeshoptDecoder(meshoptDecoder) {
      this.meshoptDecoder = meshoptDecoder;
      return this;
    }
    register(callback) {
      if (this.pluginCallbacks.indexOf(callback) === -1) {
        this.pluginCallbacks.push(callback);
      }
      return this;
    }
    unregister(callback) {
      if (this.pluginCallbacks.indexOf(callback) !== -1) {
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
      }
      return this;
    }
    parse(data, path, onLoad, onError) {
      let json;
      let jsonErrorData;
      const extensions = {};
      const plugins = {};
      const textDecoder = new TextDecoder();
      if (typeof data === "string") {
        try {
          json = JSON.parse(data);
        } catch (error) {
          jsonErrorData = data;
          if (onError) onError(error);
          return;
        }
      } else if (data instanceof ArrayBuffer) {
        const magic = textDecoder.decode(new Uint8Array(data, 0, 4));
        if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
          try {
            extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
          } catch (error) {
            if (onError) onError(error);
            return;
          }
          try {
            json = JSON.parse(extensions[EXTENSIONS.KHR_BINARY_GLTF].content);
          } catch (error) {
            jsonErrorData = extensions[EXTENSIONS.KHR_BINARY_GLTF].content;
            if (onError) onError(error);
            return;
          }
        } else {
          try {
            json = JSON.parse(textDecoder.decode(data));
          } catch (error) {
            jsonErrorData = textDecoder.decode(data);
            if (onError) onError(error);
            return;
          }
        }
      } else {
        json = data;
      }
      if (json.asset === void 0 || json.asset.version[0] < 2) {
        if (onError) onError(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      this.json = json;
      this.jsonErrorData = jsonErrorData;
      const parser = new GLTFParser(json, {
        path: path || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      parser.fileLoader.setRequestHeader(this.requestHeader);
      for (let i = 0; i < this.pluginCallbacks.length; i++) {
        const plugin = this.pluginCallbacks[i](parser);
        if (!plugin.name) console.error("THREE.GLTFLoader: Invalid plugin found: missing name");
        plugins[plugin.name] = plugin;
        extensions[plugin.name] = true;
      }
      if (json.extensionsUsed) {
        for (let i = 0; i < json.extensionsUsed.length; ++i) {
          const extensionName = json.extensionsUsed[i];
          const extensionsRequired = json.extensionsRequired || [];
          switch (extensionName) {
            case EXTENSIONS.KHR_MATERIALS_UNLIT:
              extensions[extensionName] = new GLTFMaterialsUnlitExtension();
              break;
            case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
              extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
              break;
            case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
              extensions[extensionName] = new GLTFTextureTransformExtension();
              break;
            case EXTENSIONS.KHR_MESH_QUANTIZATION:
              extensions[extensionName] = new GLTFMeshQuantizationExtension();
              break;
            default:
              if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === void 0) {
                console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
              }
          }
        }
      }
      parser.setExtensions(extensions);
      parser.setPlugins(plugins);
      parser.parse(onLoad, onError);
    }
    parseAsync(data, path) {
      const scope = this;
      return new Promise(function(resolve, reject) {
        scope.parse(data, path, resolve, reject);
      });
    }
  }
  function GLTFRegistry() {
    let objects = {};
    return {
      get: function(key) {
        return objects[key];
      },
      add: function(key, object) {
        objects[key] = object;
      },
      remove: function(key) {
        delete objects[key];
      },
      removeAll: function() {
        objects = {};
      }
    };
  }
  const EXTENSIONS = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  class GLTFLightsExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
      this.cache = { refs: {}, uses: {} };
    }
    _markDefs() {
      const parser = this.parser;
      const nodeDefs = this.parser.json.nodes || [];
      for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
        const nodeDef = nodeDefs[nodeIndex];
        if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== void 0) {
          parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
        }
      }
    }
    _loadLight(lightIndex) {
      const parser = this.parser;
      const cacheKey = "light:" + lightIndex;
      let dependency = parser.cache.get(cacheKey);
      if (dependency) return dependency;
      const json = parser.json;
      const extensions = json.extensions && json.extensions[this.name] || {};
      const lightDefs = extensions.lights || [];
      const lightDef = lightDefs[lightIndex];
      let lightNode;
      const color2 = new Color(16777215);
      if (lightDef.color !== void 0) color2.setRGB(lightDef.color[0], lightDef.color[1], lightDef.color[2], LinearSRGBColorSpace);
      const range = lightDef.range !== void 0 ? lightDef.range : 0;
      switch (lightDef.type) {
        case "directional":
          lightNode = new DirectionalLight(color2);
          lightNode.target.position.set(0, 0, -1);
          lightNode.add(lightNode.target);
          break;
        case "point":
          lightNode = new PointLight(color2);
          lightNode.distance = range;
          break;
        case "spot":
          lightNode = new SpotLight(color2);
          lightNode.distance = range;
          lightDef.spot = lightDef.spot || {};
          lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== void 0 ? lightDef.spot.innerConeAngle : 0;
          lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== void 0 ? lightDef.spot.outerConeAngle : Math.PI / 4;
          lightNode.angle = lightDef.spot.outerConeAngle;
          lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
          lightNode.target.position.set(0, 0, -1);
          lightNode.add(lightNode.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
      }
      lightNode.position.set(0, 0, 0);
      lightNode.decay = 2;
      assignExtrasToUserData(lightNode, lightDef);
      if (lightDef.intensity !== void 0) lightNode.intensity = lightDef.intensity;
      lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
      dependency = Promise.resolve(lightNode);
      parser.cache.add(cacheKey, dependency);
      return dependency;
    }
    getDependency(type, index) {
      if (type !== "light") return;
      return this._loadLight(index);
    }
    createNodeAttachment(nodeIndex) {
      const self2 = this;
      const parser = this.parser;
      const json = parser.json;
      const nodeDef = json.nodes[nodeIndex];
      const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
      const lightIndex = lightDef.light;
      if (lightIndex === void 0) return null;
      return this._loadLight(lightIndex).then(function(light) {
        return parser._getNodeRef(self2.cache, lightIndex, light);
      });
    }
  }
  class GLTFMaterialsUnlitExtension {
    constructor() {
      this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return MeshBasicMaterial;
    }
    extendParams(materialParams, materialDef, parser) {
      const pending = [];
      materialParams.color = new Color(1, 1, 1);
      materialParams.opacity = 1;
      const metallicRoughness = materialDef.pbrMetallicRoughness;
      if (metallicRoughness) {
        if (Array.isArray(metallicRoughness.baseColorFactor)) {
          const array = metallicRoughness.baseColorFactor;
          materialParams.color.setRGB(array[0], array[1], array[2], LinearSRGBColorSpace);
          materialParams.opacity = array[3];
        }
        if (metallicRoughness.baseColorTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, SRGBColorSpace));
        }
      }
      return Promise.all(pending);
    }
  }
  class GLTFMaterialsEmissiveStrengthExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
      if (emissiveStrength !== void 0) {
        materialParams.emissiveIntensity = emissiveStrength;
      }
      return Promise.resolve();
    }
  }
  class GLTFMaterialsClearcoatExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.clearcoatFactor !== void 0) {
        materialParams.clearcoat = extension.clearcoatFactor;
      }
      if (extension.clearcoatTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
      }
      if (extension.clearcoatRoughnessFactor !== void 0) {
        materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
      }
      if (extension.clearcoatRoughnessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
      }
      if (extension.clearcoatNormalTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
        if (extension.clearcoatNormalTexture.scale !== void 0) {
          const scale = extension.clearcoatNormalTexture.scale;
          materialParams.clearcoatNormalScale = new Vector2(scale, scale);
        }
      }
      return Promise.all(pending);
    }
  }
  class GLTFMaterialsDispersionExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_DISPERSION;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const extension = materialDef.extensions[this.name];
      materialParams.dispersion = extension.dispersion !== void 0 ? extension.dispersion : 0;
      return Promise.resolve();
    }
  }
  class GLTFMaterialsIridescenceExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.iridescenceFactor !== void 0) {
        materialParams.iridescence = extension.iridescenceFactor;
      }
      if (extension.iridescenceTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
      }
      if (extension.iridescenceIor !== void 0) {
        materialParams.iridescenceIOR = extension.iridescenceIor;
      }
      if (materialParams.iridescenceThicknessRange === void 0) {
        materialParams.iridescenceThicknessRange = [100, 400];
      }
      if (extension.iridescenceThicknessMinimum !== void 0) {
        materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
      }
      if (extension.iridescenceThicknessMaximum !== void 0) {
        materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
      }
      if (extension.iridescenceThicknessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture));
      }
      return Promise.all(pending);
    }
  }
  class GLTFMaterialsSheenExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      materialParams.sheenColor = new Color(0, 0, 0);
      materialParams.sheenRoughness = 0;
      materialParams.sheen = 1;
      const extension = materialDef.extensions[this.name];
      if (extension.sheenColorFactor !== void 0) {
        const colorFactor = extension.sheenColorFactor;
        materialParams.sheenColor.setRGB(colorFactor[0], colorFactor[1], colorFactor[2], LinearSRGBColorSpace);
      }
      if (extension.sheenRoughnessFactor !== void 0) {
        materialParams.sheenRoughness = extension.sheenRoughnessFactor;
      }
      if (extension.sheenColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, SRGBColorSpace));
      }
      if (extension.sheenRoughnessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
      }
      return Promise.all(pending);
    }
  }
  class GLTFMaterialsTransmissionExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.transmissionFactor !== void 0) {
        materialParams.transmission = extension.transmissionFactor;
      }
      if (extension.transmissionTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
      }
      return Promise.all(pending);
    }
  }
  class GLTFMaterialsVolumeExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.thickness = extension.thicknessFactor !== void 0 ? extension.thicknessFactor : 0;
      if (extension.thicknessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
      }
      materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
      const colorArray = extension.attenuationColor || [1, 1, 1];
      materialParams.attenuationColor = new Color().setRGB(colorArray[0], colorArray[1], colorArray[2], LinearSRGBColorSpace);
      return Promise.all(pending);
    }
  }
  class GLTFMaterialsIorExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_IOR;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const extension = materialDef.extensions[this.name];
      materialParams.ior = extension.ior !== void 0 ? extension.ior : 1.5;
      return Promise.resolve();
    }
  }
  class GLTFMaterialsSpecularExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.specularIntensity = extension.specularFactor !== void 0 ? extension.specularFactor : 1;
      if (extension.specularTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
      }
      const colorArray = extension.specularColorFactor || [1, 1, 1];
      materialParams.specularColor = new Color().setRGB(colorArray[0], colorArray[1], colorArray[2], LinearSRGBColorSpace);
      if (extension.specularColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, SRGBColorSpace));
      }
      return Promise.all(pending);
    }
  }
  class GLTFMaterialsBumpExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_MATERIALS_BUMP;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.bumpScale = extension.bumpFactor !== void 0 ? extension.bumpFactor : 1;
      if (extension.bumpTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "bumpMap", extension.bumpTexture));
      }
      return Promise.all(pending);
    }
  }
  class GLTFMaterialsAnisotropyExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.anisotropyStrength !== void 0) {
        materialParams.anisotropy = extension.anisotropyStrength;
      }
      if (extension.anisotropyRotation !== void 0) {
        materialParams.anisotropyRotation = extension.anisotropyRotation;
      }
      if (extension.anisotropyTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "anisotropyMap", extension.anisotropyTexture));
      }
      return Promise.all(pending);
    }
  }
  class GLTFTextureBasisUExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
    }
    loadTexture(textureIndex) {
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[this.name]) {
        return null;
      }
      const extension = textureDef.extensions[this.name];
      const loader2 = parser.options.ktx2Loader;
      if (!loader2) {
        if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
          throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        } else {
          return null;
        }
      }
      return parser.loadTextureImage(textureIndex, extension.source, loader2);
    }
  }
  class GLTFTextureWebPExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
      this.isSupported = null;
    }
    loadTexture(textureIndex) {
      const name = this.name;
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[name]) {
        return null;
      }
      const extension = textureDef.extensions[name];
      const source = json.images[extension.source];
      let loader2 = parser.textureLoader;
      if (source.uri) {
        const handler = parser.options.manager.getHandler(source.uri);
        if (handler !== null) loader2 = handler;
      }
      return this.detectSupport().then(function(isSupported) {
        if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader2);
        if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
          throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
        }
        return parser.loadTexture(textureIndex);
      });
    }
    detectSupport() {
      if (!this.isSupported) {
        this.isSupported = new Promise(function(resolve) {
          const image = new Image();
          image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
          image.onload = image.onerror = function() {
            resolve(image.height === 1);
          };
        });
      }
      return this.isSupported;
    }
  }
  class GLTFTextureAVIFExtension {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
      this.isSupported = null;
    }
    loadTexture(textureIndex) {
      const name = this.name;
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[name]) {
        return null;
      }
      const extension = textureDef.extensions[name];
      const source = json.images[extension.source];
      let loader2 = parser.textureLoader;
      if (source.uri) {
        const handler = parser.options.manager.getHandler(source.uri);
        if (handler !== null) loader2 = handler;
      }
      return this.detectSupport().then(function(isSupported) {
        if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader2);
        if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
          throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
        }
        return parser.loadTexture(textureIndex);
      });
    }
    detectSupport() {
      if (!this.isSupported) {
        this.isSupported = new Promise(function(resolve) {
          const image = new Image();
          image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=";
          image.onload = image.onerror = function() {
            resolve(image.height === 1);
          };
        });
      }
      return this.isSupported;
    }
  }
  class GLTFMeshoptCompression {
    constructor(parser) {
      this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
      this.parser = parser;
    }
    loadBufferView(index) {
      const json = this.parser.json;
      const bufferView = json.bufferViews[index];
      if (bufferView.extensions && bufferView.extensions[this.name]) {
        const extensionDef = bufferView.extensions[this.name];
        const buffer2 = this.parser.getDependency("buffer", extensionDef.buffer);
        const decoder = this.parser.options.meshoptDecoder;
        if (!decoder || !decoder.supported) {
          if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
            throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          } else {
            return null;
          }
        }
        return buffer2.then(function(res) {
          const byteOffset = extensionDef.byteOffset || 0;
          const byteLength = extensionDef.byteLength || 0;
          const count = extensionDef.count;
          const stride = extensionDef.byteStride;
          const source = new Uint8Array(res, byteOffset, byteLength);
          if (decoder.decodeGltfBufferAsync) {
            return decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res2) {
              return res2.buffer;
            });
          } else {
            return decoder.ready.then(function() {
              const result = new ArrayBuffer(count * stride);
              decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
              return result;
            });
          }
        });
      } else {
        return null;
      }
    }
  }
  class GLTFMeshGpuInstancing {
    constructor(parser) {
      this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
      this.parser = parser;
    }
    createNodeMesh(nodeIndex) {
      const json = this.parser.json;
      const nodeDef = json.nodes[nodeIndex];
      if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === void 0) {
        return null;
      }
      const meshDef = json.meshes[nodeDef.mesh];
      for (const primitive of meshDef.primitives) {
        if (primitive.mode !== WEBGL_CONSTANTS.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && primitive.mode !== void 0) {
          return null;
        }
      }
      const extensionDef = nodeDef.extensions[this.name];
      const attributesDef = extensionDef.attributes;
      const pending = [];
      const attributes = {};
      for (const key in attributesDef) {
        pending.push(this.parser.getDependency("accessor", attributesDef[key]).then((accessor) => {
          attributes[key] = accessor;
          return attributes[key];
        }));
      }
      if (pending.length < 1) {
        return null;
      }
      pending.push(this.parser.createNodeMesh(nodeIndex));
      return Promise.all(pending).then((results) => {
        const nodeObject2 = results.pop();
        const meshes = nodeObject2.isGroup ? nodeObject2.children : [nodeObject2];
        const count = results[0].count;
        const instancedMeshes = [];
        for (const mesh of meshes) {
          const m = new Matrix4();
          const p = new Vector3();
          const q = new Quaternion();
          const s = new Vector3(1, 1, 1);
          const instancedMesh = new InstancedMesh(mesh.geometry, mesh.material, count);
          for (let i = 0; i < count; i++) {
            if (attributes.TRANSLATION) {
              p.fromBufferAttribute(attributes.TRANSLATION, i);
            }
            if (attributes.ROTATION) {
              q.fromBufferAttribute(attributes.ROTATION, i);
            }
            if (attributes.SCALE) {
              s.fromBufferAttribute(attributes.SCALE, i);
            }
            instancedMesh.setMatrixAt(i, m.compose(p, q, s));
          }
          for (const attributeName in attributes) {
            if (attributeName === "_COLOR_0") {
              const attr = attributes[attributeName];
              instancedMesh.instanceColor = new InstancedBufferAttribute(attr.array, attr.itemSize, attr.normalized);
            } else if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") {
              mesh.geometry.setAttribute(attributeName, attributes[attributeName]);
            }
          }
          Object3D.prototype.copy.call(instancedMesh, mesh);
          this.parser.assignFinalMaterial(instancedMesh);
          instancedMeshes.push(instancedMesh);
        }
        if (nodeObject2.isGroup) {
          nodeObject2.clear();
          nodeObject2.add(...instancedMeshes);
          return nodeObject2;
        }
        return instancedMeshes[0];
      });
    }
  }
  const BINARY_EXTENSION_HEADER_MAGIC = "glTF";
  const BINARY_EXTENSION_HEADER_LENGTH = 12;
  const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 1313821514, BIN: 5130562 };
  class GLTFBinaryExtension {
    constructor(data) {
      this.name = EXTENSIONS.KHR_BINARY_GLTF;
      this.content = null;
      this.body = null;
      const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
      const textDecoder = new TextDecoder();
      this.header = {
        magic: textDecoder.decode(new Uint8Array(data.slice(0, 4))),
        version: headerView.getUint32(4, true),
        length: headerView.getUint32(8, true)
      };
      if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {
        throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      } else if (this.header.version < 2) {
        throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      }
      const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
      const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
      let chunkIndex = 0;
      while (chunkIndex < chunkContentsLength) {
        const chunkLength = chunkView.getUint32(chunkIndex, true);
        chunkIndex += 4;
        const chunkType = chunkView.getUint32(chunkIndex, true);
        chunkIndex += 4;
        if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
          const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
          this.content = textDecoder.decode(contentArray);
        } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
          const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
          this.body = data.slice(byteOffset, byteOffset + chunkLength);
        }
        chunkIndex += chunkLength;
      }
      if (this.content === null) {
        throw new Error("THREE.GLTFLoader: JSON content not found.");
      }
    }
  }
  class GLTFDracoMeshCompressionExtension {
    constructor(json, dracoLoader2) {
      if (!dracoLoader2) {
        throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      }
      this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
      this.json = json;
      this.dracoLoader = dracoLoader2;
      this.dracoLoader.preload();
    }
    decodePrimitive(primitive, parser) {
      const json = this.json;
      const dracoLoader2 = this.dracoLoader;
      const bufferViewIndex = primitive.extensions[this.name].bufferView;
      const gltfAttributeMap = primitive.extensions[this.name].attributes;
      const threeAttributeMap = {};
      const attributeNormalizedMap = {};
      const attributeTypeMap = {};
      for (const attributeName in gltfAttributeMap) {
        const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
        threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
      }
      for (const attributeName in primitive.attributes) {
        const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
        if (gltfAttributeMap[attributeName] !== void 0) {
          const accessorDef = json.accessors[primitive.attributes[attributeName]];
          const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
          attributeTypeMap[threeAttributeName] = componentType.name;
          attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
        }
      }
      return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
        return new Promise(function(resolve, reject) {
          dracoLoader2.decodeDracoFile(bufferView, function(geometry) {
            for (const attributeName in geometry.attributes) {
              const attribute2 = geometry.attributes[attributeName];
              const normalized = attributeNormalizedMap[attributeName];
              if (normalized !== void 0) attribute2.normalized = normalized;
            }
            resolve(geometry);
          }, threeAttributeMap, attributeTypeMap, LinearSRGBColorSpace, reject);
        });
      });
    }
  }
  class GLTFTextureTransformExtension {
    constructor() {
      this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(texture2, transform) {
      if ((transform.texCoord === void 0 || transform.texCoord === texture2.channel) && transform.offset === void 0 && transform.rotation === void 0 && transform.scale === void 0) {
        return texture2;
      }
      texture2 = texture2.clone();
      if (transform.texCoord !== void 0) {
        texture2.channel = transform.texCoord;
      }
      if (transform.offset !== void 0) {
        texture2.offset.fromArray(transform.offset);
      }
      if (transform.rotation !== void 0) {
        texture2.rotation = transform.rotation;
      }
      if (transform.scale !== void 0) {
        texture2.repeat.fromArray(transform.scale);
      }
      texture2.needsUpdate = true;
      return texture2;
    }
  }
  class GLTFMeshQuantizationExtension {
    constructor() {
      this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
    }
  }
  class GLTFCubicSplineInterpolant extends Interpolant {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
      super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    copySampleValue_(index) {
      const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
      for (let i = 0; i !== valueSize; i++) {
        result[i] = values[offset + i];
      }
      return result;
    }
    interpolate_(i1, t0, t2, t1) {
      const result = this.resultBuffer;
      const values = this.sampleValues;
      const stride = this.valueSize;
      const stride2 = stride * 2;
      const stride3 = stride * 3;
      const td = t1 - t0;
      const p = (t2 - t0) / td;
      const pp = p * p;
      const ppp = pp * p;
      const offset1 = i1 * stride3;
      const offset0 = offset1 - stride3;
      const s2 = -2 * ppp + 3 * pp;
      const s3 = ppp - pp;
      const s0 = 1 - s2;
      const s1 = s3 - pp + p;
      for (let i = 0; i !== stride; i++) {
        const p0 = values[offset0 + i + stride];
        const m0 = values[offset0 + i + stride2] * td;
        const p1 = values[offset1 + i + stride];
        const m1 = values[offset1 + i] * td;
        result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
      }
      return result;
    }
  }
  const _q = new Quaternion();
  class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
    interpolate_(i1, t0, t2, t1) {
      const result = super.interpolate_(i1, t0, t2, t1);
      _q.fromArray(result).normalize().toArray(result);
      return result;
    }
  }
  const WEBGL_CONSTANTS = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  };
  const WEBGL_COMPONENT_TYPES = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  };
  const WEBGL_FILTERS = {
    9728: NearestFilter,
    9729: LinearFilter,
    9984: NearestMipmapNearestFilter,
    9985: LinearMipmapNearestFilter,
    9986: NearestMipmapLinearFilter,
    9987: LinearMipmapLinearFilter
  };
  const WEBGL_WRAPPINGS = {
    33071: ClampToEdgeWrapping,
    33648: MirroredRepeatWrapping,
    10497: RepeatWrapping
  };
  const WEBGL_TYPE_SIZES = {
    "SCALAR": 1,
    "VEC2": 2,
    "VEC3": 3,
    "VEC4": 4,
    "MAT2": 4,
    "MAT3": 9,
    "MAT4": 16
  };
  const ATTRIBUTES = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  };
  const PATH_PROPERTIES = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  };
  const INTERPOLATION = {
    CUBICSPLINE: void 0,
    // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
    // keyframe track will be initialized with a default interpolation type, then modified.
    LINEAR: InterpolateLinear,
    STEP: InterpolateDiscrete
  };
  const ALPHA_MODES = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function createDefaultMaterial(cache2) {
    if (cache2["DefaultMaterial"] === void 0) {
      cache2["DefaultMaterial"] = new MeshStandardMaterial({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: FrontSide
      });
    }
    return cache2["DefaultMaterial"];
  }
  function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
    for (const name in objectDef.extensions) {
      if (knownExtensions[name] === void 0) {
        object.userData.gltfExtensions = object.userData.gltfExtensions || {};
        object.userData.gltfExtensions[name] = objectDef.extensions[name];
      }
    }
  }
  function assignExtrasToUserData(object, gltfDef) {
    if (gltfDef.extras !== void 0) {
      if (typeof gltfDef.extras === "object") {
        Object.assign(object.userData, gltfDef.extras);
      } else {
        console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
      }
    }
  }
  function addMorphTargets(geometry, targets, parser) {
    let hasMorphPosition = false;
    let hasMorphNormal = false;
    let hasMorphColor = false;
    for (let i = 0, il = targets.length; i < il; i++) {
      const target = targets[i];
      if (target.POSITION !== void 0) hasMorphPosition = true;
      if (target.NORMAL !== void 0) hasMorphNormal = true;
      if (target.COLOR_0 !== void 0) hasMorphColor = true;
      if (hasMorphPosition && hasMorphNormal && hasMorphColor) break;
    }
    if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor) return Promise.resolve(geometry);
    const pendingPositionAccessors = [];
    const pendingNormalAccessors = [];
    const pendingColorAccessors = [];
    for (let i = 0, il = targets.length; i < il; i++) {
      const target = targets[i];
      if (hasMorphPosition) {
        const pendingAccessor = target.POSITION !== void 0 ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
        pendingPositionAccessors.push(pendingAccessor);
      }
      if (hasMorphNormal) {
        const pendingAccessor = target.NORMAL !== void 0 ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
        pendingNormalAccessors.push(pendingAccessor);
      }
      if (hasMorphColor) {
        const pendingAccessor = target.COLOR_0 !== void 0 ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
        pendingColorAccessors.push(pendingAccessor);
      }
    }
    return Promise.all([
      Promise.all(pendingPositionAccessors),
      Promise.all(pendingNormalAccessors),
      Promise.all(pendingColorAccessors)
    ]).then(function(accessors) {
      const morphPositions = accessors[0];
      const morphNormals = accessors[1];
      const morphColors = accessors[2];
      if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
      if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
      if (hasMorphColor) geometry.morphAttributes.color = morphColors;
      geometry.morphTargetsRelative = true;
      return geometry;
    });
  }
  function updateMorphTargets(mesh, meshDef) {
    mesh.updateMorphTargets();
    if (meshDef.weights !== void 0) {
      for (let i = 0, il = meshDef.weights.length; i < il; i++) {
        mesh.morphTargetInfluences[i] = meshDef.weights[i];
      }
    }
    if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
      const targetNames = meshDef.extras.targetNames;
      if (mesh.morphTargetInfluences.length === targetNames.length) {
        mesh.morphTargetDictionary = {};
        for (let i = 0, il = targetNames.length; i < il; i++) {
          mesh.morphTargetDictionary[targetNames[i]] = i;
        }
      } else {
        console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
      }
    }
  }
  function createPrimitiveKey(primitiveDef) {
    let geometryKey;
    const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    if (dracoExtension) {
      geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
    } else {
      geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
    }
    if (primitiveDef.targets !== void 0) {
      for (let i = 0, il = primitiveDef.targets.length; i < il; i++) {
        geometryKey += ":" + createAttributesKey(primitiveDef.targets[i]);
      }
    }
    return geometryKey;
  }
  function createAttributesKey(attributes) {
    let attributesKey = "";
    const keys = Object.keys(attributes).sort();
    for (let i = 0, il = keys.length; i < il; i++) {
      attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
    }
    return attributesKey;
  }
  function getNormalizedComponentScale(constructor) {
    switch (constructor) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  function getImageURIMimeType(uri) {
    if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0) return "image/jpeg";
    if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0) return "image/webp";
    return "image/png";
  }
  const _identityMatrix = new Matrix4();
  class GLTFParser {
    constructor(json = {}, options = {}) {
      this.json = json;
      this.extensions = {};
      this.plugins = {};
      this.options = options;
      this.cache = new GLTFRegistry();
      this.associations = /* @__PURE__ */ new Map();
      this.primitiveCache = {};
      this.nodeCache = {};
      this.meshCache = { refs: {}, uses: {} };
      this.cameraCache = { refs: {}, uses: {} };
      this.lightCache = { refs: {}, uses: {} };
      this.sourceCache = {};
      this.textureCache = {};
      this.nodeNamesUsed = {};
      let isSafari = false;
      let safariVersion = -1;
      let isFirefox = false;
      let firefoxVersion = -1;
      if (typeof navigator !== "undefined") {
        const userAgent = navigator.userAgent;
        isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) === true;
        const safariMatch = userAgent.match(/Version\/(\d+)/);
        safariVersion = isSafari && safariMatch ? parseInt(safariMatch[1], 10) : -1;
        isFirefox = userAgent.indexOf("Firefox") > -1;
        firefoxVersion = isFirefox ? userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
      }
      if (typeof createImageBitmap === "undefined" || isSafari && safariVersion < 17 || isFirefox && firefoxVersion < 98) {
        this.textureLoader = new TextureLoader(this.options.manager);
      } else {
        this.textureLoader = new ImageBitmapLoader(this.options.manager);
      }
      this.textureLoader.setCrossOrigin(this.options.crossOrigin);
      this.textureLoader.setRequestHeader(this.options.requestHeader);
      this.fileLoader = new FileLoader(this.options.manager);
      this.fileLoader.setResponseType("arraybuffer");
      if (this.options.crossOrigin === "use-credentials") {
        this.fileLoader.setWithCredentials(true);
      }
    }
    setExtensions(extensions) {
      this.extensions = extensions;
    }
    setPlugins(plugins) {
      this.plugins = plugins;
    }
    parse(onLoad, onError) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      this.cache.removeAll();
      this.nodeCache = {};
      this._invokeAll(function(ext) {
        return ext._markDefs && ext._markDefs();
      });
      Promise.all(this._invokeAll(function(ext) {
        return ext.beforeRoot && ext.beforeRoot();
      })).then(function() {
        return Promise.all([
          parser.getDependencies("scene"),
          parser.getDependencies("animation"),
          parser.getDependencies("camera")
        ]);
      }).then(function(dependencies) {
        const result = {
          scene: dependencies[0][json.scene || 0],
          scenes: dependencies[0],
          animations: dependencies[1],
          cameras: dependencies[2],
          asset: json.asset,
          parser,
          userData: {}
        };
        addUnknownExtensionsToUserData(extensions, result, json);
        assignExtrasToUserData(result, json);
        return Promise.all(parser._invokeAll(function(ext) {
          return ext.afterRoot && ext.afterRoot(result);
        })).then(function() {
          for (const scene of result.scenes) {
            scene.updateMatrixWorld();
          }
          onLoad(result);
        });
      }).catch(onError);
    }
    /**
     * Marks the special nodes/meshes in json for efficient parse.
     */
    _markDefs() {
      const nodeDefs = this.json.nodes || [];
      const skinDefs = this.json.skins || [];
      const meshDefs = this.json.meshes || [];
      for (let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
        const joints = skinDefs[skinIndex].joints;
        for (let i = 0, il = joints.length; i < il; i++) {
          nodeDefs[joints[i]].isBone = true;
        }
      }
      for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
        const nodeDef = nodeDefs[nodeIndex];
        if (nodeDef.mesh !== void 0) {
          this._addNodeRef(this.meshCache, nodeDef.mesh);
          if (nodeDef.skin !== void 0) {
            meshDefs[nodeDef.mesh].isSkinnedMesh = true;
          }
        }
        if (nodeDef.camera !== void 0) {
          this._addNodeRef(this.cameraCache, nodeDef.camera);
        }
      }
    }
    /**
     * Counts references to shared node / Object3D resources. These resources
     * can be reused, or "instantiated", at multiple nodes in the scene
     * hierarchy. Mesh, Camera, and Light instances are instantiated and must
     * be marked. Non-scenegraph resources (like Materials, Geometries, and
     * Textures) can be reused directly and are not marked here.
     *
     * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
     */
    _addNodeRef(cache2, index) {
      if (index === void 0) return;
      if (cache2.refs[index] === void 0) {
        cache2.refs[index] = cache2.uses[index] = 0;
      }
      cache2.refs[index]++;
    }
    /** Returns a reference to a shared resource, cloning it if necessary. */
    _getNodeRef(cache2, index, object) {
      if (cache2.refs[index] <= 1) return object;
      const ref = object.clone();
      const updateMappings = (original, clone) => {
        const mappings = this.associations.get(original);
        if (mappings != null) {
          this.associations.set(clone, mappings);
        }
        for (const [i, child] of original.children.entries()) {
          updateMappings(child, clone.children[i]);
        }
      };
      updateMappings(object, ref);
      ref.name += "_instance_" + cache2.uses[index]++;
      return ref;
    }
    _invokeOne(func) {
      const extensions = Object.values(this.plugins);
      extensions.push(this);
      for (let i = 0; i < extensions.length; i++) {
        const result = func(extensions[i]);
        if (result) return result;
      }
      return null;
    }
    _invokeAll(func) {
      const extensions = Object.values(this.plugins);
      extensions.unshift(this);
      const pending = [];
      for (let i = 0; i < extensions.length; i++) {
        const result = func(extensions[i]);
        if (result) pending.push(result);
      }
      return pending;
    }
    /**
     * Requests the specified dependency asynchronously, with caching.
     * @param {string} type
     * @param {number} index
     * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
     */
    getDependency(type, index) {
      const cacheKey = type + ":" + index;
      let dependency = this.cache.get(cacheKey);
      if (!dependency) {
        switch (type) {
          case "scene":
            dependency = this.loadScene(index);
            break;
          case "node":
            dependency = this._invokeOne(function(ext) {
              return ext.loadNode && ext.loadNode(index);
            });
            break;
          case "mesh":
            dependency = this._invokeOne(function(ext) {
              return ext.loadMesh && ext.loadMesh(index);
            });
            break;
          case "accessor":
            dependency = this.loadAccessor(index);
            break;
          case "bufferView":
            dependency = this._invokeOne(function(ext) {
              return ext.loadBufferView && ext.loadBufferView(index);
            });
            break;
          case "buffer":
            dependency = this.loadBuffer(index);
            break;
          case "material":
            dependency = this._invokeOne(function(ext) {
              return ext.loadMaterial && ext.loadMaterial(index);
            });
            break;
          case "texture":
            dependency = this._invokeOne(function(ext) {
              return ext.loadTexture && ext.loadTexture(index);
            });
            break;
          case "skin":
            dependency = this.loadSkin(index);
            break;
          case "animation":
            dependency = this._invokeOne(function(ext) {
              return ext.loadAnimation && ext.loadAnimation(index);
            });
            break;
          case "camera":
            dependency = this.loadCamera(index);
            break;
          default:
            dependency = this._invokeOne(function(ext) {
              return ext != this && ext.getDependency && ext.getDependency(type, index);
            });
            if (!dependency) {
              throw new Error("Unknown type: " + type);
            }
            break;
        }
        this.cache.add(cacheKey, dependency);
      }
      return dependency;
    }
    /**
     * Requests all dependencies of the specified type asynchronously, with caching.
     * @param {string} type
     * @return {Promise<Array<Object>>}
     */
    getDependencies(type) {
      let dependencies = this.cache.get(type);
      if (!dependencies) {
        const parser = this;
        const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
        dependencies = Promise.all(defs.map(function(def, index) {
          return parser.getDependency(type, index);
        }));
        this.cache.add(type, dependencies);
      }
      return dependencies;
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
     * @param {number} bufferIndex
     * @return {Promise<ArrayBuffer>}
     */
    loadBuffer(bufferIndex) {
      const bufferDef = this.json.buffers[bufferIndex];
      const loader2 = this.fileLoader;
      if (bufferDef.type && bufferDef.type !== "arraybuffer") {
        throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
      }
      if (bufferDef.uri === void 0 && bufferIndex === 0) {
        return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
      }
      const options = this.options;
      return new Promise(function(resolve, reject) {
        loader2.load(LoaderUtils.resolveURL(bufferDef.uri, options.path), resolve, void 0, function() {
          reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
        });
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
     * @param {number} bufferViewIndex
     * @return {Promise<ArrayBuffer>}
     */
    loadBufferView(bufferViewIndex) {
      const bufferViewDef = this.json.bufferViews[bufferViewIndex];
      return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer2) {
        const byteLength = bufferViewDef.byteLength || 0;
        const byteOffset = bufferViewDef.byteOffset || 0;
        return buffer2.slice(byteOffset, byteOffset + byteLength);
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
     * @param {number} accessorIndex
     * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
     */
    loadAccessor(accessorIndex) {
      const parser = this;
      const json = this.json;
      const accessorDef = this.json.accessors[accessorIndex];
      if (accessorDef.bufferView === void 0 && accessorDef.sparse === void 0) {
        const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
        const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        const normalized = accessorDef.normalized === true;
        const array = new TypedArray(accessorDef.count * itemSize);
        return Promise.resolve(new BufferAttribute(array, itemSize, normalized));
      }
      const pendingBufferViews = [];
      if (accessorDef.bufferView !== void 0) {
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
      } else {
        pendingBufferViews.push(null);
      }
      if (accessorDef.sparse !== void 0) {
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
      }
      return Promise.all(pendingBufferViews).then(function(bufferViews) {
        const bufferView = bufferViews[0];
        const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
        const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        const elementBytes = TypedArray.BYTES_PER_ELEMENT;
        const itemBytes = elementBytes * itemSize;
        const byteOffset = accessorDef.byteOffset || 0;
        const byteStride = accessorDef.bufferView !== void 0 ? json.bufferViews[accessorDef.bufferView].byteStride : void 0;
        const normalized = accessorDef.normalized === true;
        let array, bufferAttribute2;
        if (byteStride && byteStride !== itemBytes) {
          const ibSlice = Math.floor(byteOffset / byteStride);
          const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
          let ib = parser.cache.get(ibCacheKey);
          if (!ib) {
            array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
            ib = new InterleavedBuffer(array, byteStride / elementBytes);
            parser.cache.add(ibCacheKey, ib);
          }
          bufferAttribute2 = new InterleavedBufferAttribute(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
        } else {
          if (bufferView === null) {
            array = new TypedArray(accessorDef.count * itemSize);
          } else {
            array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
          }
          bufferAttribute2 = new BufferAttribute(array, itemSize, normalized);
        }
        if (accessorDef.sparse !== void 0) {
          const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
          const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
          const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
          const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
          const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
          const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
          if (bufferView !== null) {
            bufferAttribute2 = new BufferAttribute(bufferAttribute2.array.slice(), bufferAttribute2.itemSize, bufferAttribute2.normalized);
          }
          bufferAttribute2.normalized = false;
          for (let i = 0, il = sparseIndices.length; i < il; i++) {
            const index = sparseIndices[i];
            bufferAttribute2.setX(index, sparseValues[i * itemSize]);
            if (itemSize >= 2) bufferAttribute2.setY(index, sparseValues[i * itemSize + 1]);
            if (itemSize >= 3) bufferAttribute2.setZ(index, sparseValues[i * itemSize + 2]);
            if (itemSize >= 4) bufferAttribute2.setW(index, sparseValues[i * itemSize + 3]);
            if (itemSize >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
          bufferAttribute2.normalized = normalized;
        }
        return bufferAttribute2;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
     * @param {number} textureIndex
     * @return {Promise<THREE.Texture|null>}
     */
    loadTexture(textureIndex) {
      const json = this.json;
      const options = this.options;
      const textureDef = json.textures[textureIndex];
      const sourceIndex = textureDef.source;
      const sourceDef = json.images[sourceIndex];
      let loader2 = this.textureLoader;
      if (sourceDef.uri) {
        const handler = options.manager.getHandler(sourceDef.uri);
        if (handler !== null) loader2 = handler;
      }
      return this.loadTextureImage(textureIndex, sourceIndex, loader2);
    }
    loadTextureImage(textureIndex, sourceIndex, loader2) {
      const parser = this;
      const json = this.json;
      const textureDef = json.textures[textureIndex];
      const sourceDef = json.images[sourceIndex];
      const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
      if (this.textureCache[cacheKey]) {
        return this.textureCache[cacheKey];
      }
      const promise = this.loadImageSource(sourceIndex, loader2).then(function(texture2) {
        texture2.flipY = false;
        texture2.name = textureDef.name || sourceDef.name || "";
        if (texture2.name === "" && typeof sourceDef.uri === "string" && sourceDef.uri.startsWith("data:image/") === false) {
          texture2.name = sourceDef.uri;
        }
        const samplers = json.samplers || {};
        const sampler = samplers[textureDef.sampler] || {};
        texture2.magFilter = WEBGL_FILTERS[sampler.magFilter] || LinearFilter;
        texture2.minFilter = WEBGL_FILTERS[sampler.minFilter] || LinearMipmapLinearFilter;
        texture2.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || RepeatWrapping;
        texture2.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || RepeatWrapping;
        texture2.anisotropy = 4;
        parser.associations.set(texture2, { textures: textureIndex });
        return texture2;
      }).catch(function() {
        return null;
      });
      this.textureCache[cacheKey] = promise;
      return promise;
    }
    loadImageSource(sourceIndex, loader2) {
      const parser = this;
      const json = this.json;
      const options = this.options;
      if (this.sourceCache[sourceIndex] !== void 0) {
        return this.sourceCache[sourceIndex].then((texture2) => texture2.clone());
      }
      const sourceDef = json.images[sourceIndex];
      const URL2 = self.URL || self.webkitURL;
      let sourceURI = sourceDef.uri || "";
      let isObjectURL = false;
      if (sourceDef.bufferView !== void 0) {
        sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
          isObjectURL = true;
          const blob = new Blob([bufferView], { type: sourceDef.mimeType });
          sourceURI = URL2.createObjectURL(blob);
          return sourceURI;
        });
      } else if (sourceDef.uri === void 0) {
        throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
      }
      const promise = Promise.resolve(sourceURI).then(function(sourceURI2) {
        return new Promise(function(resolve, reject) {
          let onLoad = resolve;
          if (loader2.isImageBitmapLoader === true) {
            onLoad = function(imageBitmap) {
              const texture2 = new Texture(imageBitmap);
              texture2.needsUpdate = true;
              resolve(texture2);
            };
          }
          loader2.load(LoaderUtils.resolveURL(sourceURI2, options.path), onLoad, void 0, reject);
        });
      }).then(function(texture2) {
        if (isObjectURL === true) {
          URL2.revokeObjectURL(sourceURI);
        }
        assignExtrasToUserData(texture2, sourceDef);
        texture2.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
        return texture2;
      }).catch(function(error) {
        console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
        throw error;
      });
      this.sourceCache[sourceIndex] = promise;
      return promise;
    }
    /**
     * Asynchronously assigns a texture to the given material parameters.
     * @param {Object} materialParams
     * @param {string} mapName
     * @param {Object} mapDef
     * @return {Promise<Texture>}
     */
    assignTexture(materialParams, mapName, mapDef, colorSpace) {
      const parser = this;
      return this.getDependency("texture", mapDef.index).then(function(texture2) {
        if (!texture2) return null;
        if (mapDef.texCoord !== void 0 && mapDef.texCoord > 0) {
          texture2 = texture2.clone();
          texture2.channel = mapDef.texCoord;
        }
        if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
          const transform = mapDef.extensions !== void 0 ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
          if (transform) {
            const gltfReference = parser.associations.get(texture2);
            texture2 = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture2, transform);
            parser.associations.set(texture2, gltfReference);
          }
        }
        if (colorSpace !== void 0) {
          texture2.colorSpace = colorSpace;
        }
        materialParams[mapName] = texture2;
        return texture2;
      });
    }
    /**
     * Assigns final material to a Mesh, Line, or Points instance. The instance
     * already has a material (generated from the glTF material options alone)
     * but reuse of the same glTF material may require multiple threejs materials
     * to accommodate different primitive types, defines, etc. New materials will
     * be created if necessary, and reused from a cache.
     * @param  {Object3D} mesh Mesh, Line, or Points instance.
     */
    assignFinalMaterial(mesh) {
      const geometry = mesh.geometry;
      let material = mesh.material;
      const useDerivativeTangents = geometry.attributes.tangent === void 0;
      const useVertexColors = geometry.attributes.color !== void 0;
      const useFlatShading = geometry.attributes.normal === void 0;
      if (mesh.isPoints) {
        const cacheKey = "PointsMaterial:" + material.uuid;
        let pointsMaterial = this.cache.get(cacheKey);
        if (!pointsMaterial) {
          pointsMaterial = new PointsMaterial();
          Material.prototype.copy.call(pointsMaterial, material);
          pointsMaterial.color.copy(material.color);
          pointsMaterial.map = material.map;
          pointsMaterial.sizeAttenuation = false;
          this.cache.add(cacheKey, pointsMaterial);
        }
        material = pointsMaterial;
      } else if (mesh.isLine) {
        const cacheKey = "LineBasicMaterial:" + material.uuid;
        let lineMaterial = this.cache.get(cacheKey);
        if (!lineMaterial) {
          lineMaterial = new LineBasicMaterial();
          Material.prototype.copy.call(lineMaterial, material);
          lineMaterial.color.copy(material.color);
          lineMaterial.map = material.map;
          this.cache.add(cacheKey, lineMaterial);
        }
        material = lineMaterial;
      }
      if (useDerivativeTangents || useVertexColors || useFlatShading) {
        let cacheKey = "ClonedMaterial:" + material.uuid + ":";
        if (useDerivativeTangents) cacheKey += "derivative-tangents:";
        if (useVertexColors) cacheKey += "vertex-colors:";
        if (useFlatShading) cacheKey += "flat-shading:";
        let cachedMaterial = this.cache.get(cacheKey);
        if (!cachedMaterial) {
          cachedMaterial = material.clone();
          if (useVertexColors) cachedMaterial.vertexColors = true;
          if (useFlatShading) cachedMaterial.flatShading = true;
          if (useDerivativeTangents) {
            if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
            if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
          }
          this.cache.add(cacheKey, cachedMaterial);
          this.associations.set(cachedMaterial, this.associations.get(material));
        }
        material = cachedMaterial;
      }
      mesh.material = material;
    }
    getMaterialType() {
      return MeshStandardMaterial;
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
     * @param {number} materialIndex
     * @return {Promise<Material>}
     */
    loadMaterial(materialIndex) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      const materialDef = json.materials[materialIndex];
      let materialType;
      const materialParams = {};
      const materialExtensions = materialDef.extensions || {};
      const pending = [];
      if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
        const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
        materialType = kmuExtension.getMaterialType();
        pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
      } else {
        const metallicRoughness = materialDef.pbrMetallicRoughness || {};
        materialParams.color = new Color(1, 1, 1);
        materialParams.opacity = 1;
        if (Array.isArray(metallicRoughness.baseColorFactor)) {
          const array = metallicRoughness.baseColorFactor;
          materialParams.color.setRGB(array[0], array[1], array[2], LinearSRGBColorSpace);
          materialParams.opacity = array[3];
        }
        if (metallicRoughness.baseColorTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, SRGBColorSpace));
        }
        materialParams.metalness = metallicRoughness.metallicFactor !== void 0 ? metallicRoughness.metallicFactor : 1;
        materialParams.roughness = metallicRoughness.roughnessFactor !== void 0 ? metallicRoughness.roughnessFactor : 1;
        if (metallicRoughness.metallicRoughnessTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
          pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
        }
        materialType = this._invokeOne(function(ext) {
          return ext.getMaterialType && ext.getMaterialType(materialIndex);
        });
        pending.push(Promise.all(this._invokeAll(function(ext) {
          return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
        })));
      }
      if (materialDef.doubleSided === true) {
        materialParams.side = DoubleSide;
      }
      const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
      if (alphaMode === ALPHA_MODES.BLEND) {
        materialParams.transparent = true;
        materialParams.depthWrite = false;
      } else {
        materialParams.transparent = false;
        if (alphaMode === ALPHA_MODES.MASK) {
          materialParams.alphaTest = materialDef.alphaCutoff !== void 0 ? materialDef.alphaCutoff : 0.5;
        }
      }
      if (materialDef.normalTexture !== void 0 && materialType !== MeshBasicMaterial) {
        pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
        materialParams.normalScale = new Vector2(1, 1);
        if (materialDef.normalTexture.scale !== void 0) {
          const scale = materialDef.normalTexture.scale;
          materialParams.normalScale.set(scale, scale);
        }
      }
      if (materialDef.occlusionTexture !== void 0 && materialType !== MeshBasicMaterial) {
        pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
        if (materialDef.occlusionTexture.strength !== void 0) {
          materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
        }
      }
      if (materialDef.emissiveFactor !== void 0 && materialType !== MeshBasicMaterial) {
        const emissiveFactor = materialDef.emissiveFactor;
        materialParams.emissive = new Color().setRGB(emissiveFactor[0], emissiveFactor[1], emissiveFactor[2], LinearSRGBColorSpace);
      }
      if (materialDef.emissiveTexture !== void 0 && materialType !== MeshBasicMaterial) {
        pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, SRGBColorSpace));
      }
      return Promise.all(pending).then(function() {
        const material = new materialType(materialParams);
        if (materialDef.name) material.name = materialDef.name;
        assignExtrasToUserData(material, materialDef);
        parser.associations.set(material, { materials: materialIndex });
        if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
        return material;
      });
    }
    /** When Object3D instances are targeted by animation, they need unique names. */
    createUniqueName(originalName) {
      const sanitizedName = PropertyBinding.sanitizeNodeName(originalName || "");
      if (sanitizedName in this.nodeNamesUsed) {
        return sanitizedName + "_" + ++this.nodeNamesUsed[sanitizedName];
      } else {
        this.nodeNamesUsed[sanitizedName] = 0;
        return sanitizedName;
      }
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
     *
     * Creates BufferGeometries from primitives.
     *
     * @param {Array<GLTF.Primitive>} primitives
     * @return {Promise<Array<BufferGeometry>>}
     */
    loadGeometries(primitives) {
      const parser = this;
      const extensions = this.extensions;
      const cache2 = this.primitiveCache;
      function createDracoPrimitive(primitive) {
        return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
          return addPrimitiveAttributes(geometry, primitive, parser);
        });
      }
      const pending = [];
      for (let i = 0, il = primitives.length; i < il; i++) {
        const primitive = primitives[i];
        const cacheKey = createPrimitiveKey(primitive);
        const cached = cache2[cacheKey];
        if (cached) {
          pending.push(cached.promise);
        } else {
          let geometryPromise;
          if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
            geometryPromise = createDracoPrimitive(primitive);
          } else {
            geometryPromise = addPrimitiveAttributes(new BufferGeometry(), primitive, parser);
          }
          cache2[cacheKey] = { primitive, promise: geometryPromise };
          pending.push(geometryPromise);
        }
      }
      return Promise.all(pending);
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
     * @param {number} meshIndex
     * @return {Promise<Group|Mesh|SkinnedMesh>}
     */
    loadMesh(meshIndex) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      const meshDef = json.meshes[meshIndex];
      const primitives = meshDef.primitives;
      const pending = [];
      for (let i = 0, il = primitives.length; i < il; i++) {
        const material = primitives[i].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
        pending.push(material);
      }
      pending.push(parser.loadGeometries(primitives));
      return Promise.all(pending).then(function(results) {
        const materials = results.slice(0, results.length - 1);
        const geometries = results[results.length - 1];
        const meshes = [];
        for (let i = 0, il = geometries.length; i < il; i++) {
          const geometry = geometries[i];
          const primitive = primitives[i];
          let mesh;
          const material = materials[i];
          if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === void 0) {
            mesh = meshDef.isSkinnedMesh === true ? new SkinnedMesh(geometry, material) : new Mesh(geometry, material);
            if (mesh.isSkinnedMesh === true) {
              mesh.normalizeSkinWeights();
            }
            if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) {
              mesh.geometry = toTrianglesDrawMode(mesh.geometry, TriangleStripDrawMode);
            } else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) {
              mesh.geometry = toTrianglesDrawMode(mesh.geometry, TriangleFanDrawMode);
            }
          } else if (primitive.mode === WEBGL_CONSTANTS.LINES) {
            mesh = new LineSegments(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) {
            mesh = new Line(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) {
            mesh = new LineLoop(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.POINTS) {
            mesh = new Points(geometry, material);
          } else {
            throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
          }
          if (Object.keys(mesh.geometry.morphAttributes).length > 0) {
            updateMorphTargets(mesh, meshDef);
          }
          mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
          assignExtrasToUserData(mesh, meshDef);
          if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
          parser.assignFinalMaterial(mesh);
          meshes.push(mesh);
        }
        for (let i = 0, il = meshes.length; i < il; i++) {
          parser.associations.set(meshes[i], {
            meshes: meshIndex,
            primitives: i
          });
        }
        if (meshes.length === 1) {
          if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, meshes[0], meshDef);
          return meshes[0];
        }
        const group = new Group();
        if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, group, meshDef);
        parser.associations.set(group, { meshes: meshIndex });
        for (let i = 0, il = meshes.length; i < il; i++) {
          group.add(meshes[i]);
        }
        return group;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
     * @param {number} cameraIndex
     * @return {Promise<THREE.Camera>}
     */
    loadCamera(cameraIndex) {
      let camera;
      const cameraDef = this.json.cameras[cameraIndex];
      const params = cameraDef[cameraDef.type];
      if (!params) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      if (cameraDef.type === "perspective") {
        camera = new PerspectiveCamera(MathUtils.radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6);
      } else if (cameraDef.type === "orthographic") {
        camera = new OrthographicCamera(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
      }
      if (cameraDef.name) camera.name = this.createUniqueName(cameraDef.name);
      assignExtrasToUserData(camera, cameraDef);
      return Promise.resolve(camera);
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
     * @param {number} skinIndex
     * @return {Promise<Skeleton>}
     */
    loadSkin(skinIndex) {
      const skinDef = this.json.skins[skinIndex];
      const pending = [];
      for (let i = 0, il = skinDef.joints.length; i < il; i++) {
        pending.push(this._loadNodeShallow(skinDef.joints[i]));
      }
      if (skinDef.inverseBindMatrices !== void 0) {
        pending.push(this.getDependency("accessor", skinDef.inverseBindMatrices));
      } else {
        pending.push(null);
      }
      return Promise.all(pending).then(function(results) {
        const inverseBindMatrices = results.pop();
        const jointNodes = results;
        const bones = [];
        const boneInverses = [];
        for (let i = 0, il = jointNodes.length; i < il; i++) {
          const jointNode = jointNodes[i];
          if (jointNode) {
            bones.push(jointNode);
            const mat = new Matrix4();
            if (inverseBindMatrices !== null) {
              mat.fromArray(inverseBindMatrices.array, i * 16);
            }
            boneInverses.push(mat);
          } else {
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[i]);
          }
        }
        return new Skeleton(bones, boneInverses);
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
     * @param {number} animationIndex
     * @return {Promise<AnimationClip>}
     */
    loadAnimation(animationIndex) {
      const json = this.json;
      const parser = this;
      const animationDef = json.animations[animationIndex];
      const animationName = animationDef.name ? animationDef.name : "animation_" + animationIndex;
      const pendingNodes = [];
      const pendingInputAccessors = [];
      const pendingOutputAccessors = [];
      const pendingSamplers = [];
      const pendingTargets = [];
      let i = 0;
      let il = animationDef.channels.length;
      for (i = 0, il = animationDef.channels.length; i < il; i++) {
        const channel = animationDef.channels[i];
        const sampler = animationDef.samplers[channel.sampler];
        const target = channel.target;
        const name = target.node;
        const input = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.input] : sampler.input;
        const output = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.output] : sampler.output;
        if (target.node === void 0) continue;
        pendingNodes.push(this.getDependency("node", name));
        pendingInputAccessors.push(this.getDependency("accessor", input));
        pendingOutputAccessors.push(this.getDependency("accessor", output));
        pendingSamplers.push(sampler);
        pendingTargets.push(target);
      }
      return Promise.all([
        Promise.all(pendingNodes),
        Promise.all(pendingInputAccessors),
        Promise.all(pendingOutputAccessors),
        Promise.all(pendingSamplers),
        Promise.all(pendingTargets)
      ]).then(function(dependencies) {
        const nodes = dependencies[0];
        const inputAccessors = dependencies[1];
        const outputAccessors = dependencies[2];
        const samplers = dependencies[3];
        const targets = dependencies[4];
        const tracks = [];
        for (i = 0, il = nodes.length; i < il; i++) {
          const node = nodes[i];
          const inputAccessor = inputAccessors[i];
          const outputAccessor = outputAccessors[i];
          const sampler = samplers[i];
          const target = targets[i];
          if (node === void 0) continue;
          if (node.updateMatrix) {
            node.updateMatrix();
          }
          const createdTracks = parser._createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target);
          if (createdTracks) {
            for (let k = 0; k < createdTracks.length; k++) {
              tracks.push(createdTracks[k]);
            }
          }
        }
        return new AnimationClip(animationName, void 0, tracks);
      });
    }
    createNodeMesh(nodeIndex) {
      const json = this.json;
      const parser = this;
      const nodeDef = json.nodes[nodeIndex];
      if (nodeDef.mesh === void 0) return null;
      return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
        const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
        if (nodeDef.weights !== void 0) {
          node.traverse(function(o) {
            if (!o.isMesh) return;
            for (let i = 0, il = nodeDef.weights.length; i < il; i++) {
              o.morphTargetInfluences[i] = nodeDef.weights[i];
            }
          });
        }
        return node;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
     * @param {number} nodeIndex
     * @return {Promise<Object3D>}
     */
    loadNode(nodeIndex) {
      const json = this.json;
      const parser = this;
      const nodeDef = json.nodes[nodeIndex];
      const nodePending = parser._loadNodeShallow(nodeIndex);
      const childPending = [];
      const childrenDef = nodeDef.children || [];
      for (let i = 0, il = childrenDef.length; i < il; i++) {
        childPending.push(parser.getDependency("node", childrenDef[i]));
      }
      const skeletonPending = nodeDef.skin === void 0 ? Promise.resolve(null) : parser.getDependency("skin", nodeDef.skin);
      return Promise.all([
        nodePending,
        Promise.all(childPending),
        skeletonPending
      ]).then(function(results) {
        const node = results[0];
        const children = results[1];
        const skeleton = results[2];
        if (skeleton !== null) {
          node.traverse(function(mesh) {
            if (!mesh.isSkinnedMesh) return;
            mesh.bind(skeleton, _identityMatrix);
          });
        }
        for (let i = 0, il = children.length; i < il; i++) {
          node.add(children[i]);
        }
        return node;
      });
    }
    // ._loadNodeShallow() parses a single node.
    // skin and child nodes are created and added in .loadNode() (no '_' prefix).
    _loadNodeShallow(nodeIndex) {
      const json = this.json;
      const extensions = this.extensions;
      const parser = this;
      if (this.nodeCache[nodeIndex] !== void 0) {
        return this.nodeCache[nodeIndex];
      }
      const nodeDef = json.nodes[nodeIndex];
      const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
      const pending = [];
      const meshPromise = parser._invokeOne(function(ext) {
        return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
      });
      if (meshPromise) {
        pending.push(meshPromise);
      }
      if (nodeDef.camera !== void 0) {
        pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera) {
          return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
        }));
      }
      parser._invokeAll(function(ext) {
        return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
      }).forEach(function(promise) {
        pending.push(promise);
      });
      this.nodeCache[nodeIndex] = Promise.all(pending).then(function(objects) {
        let node;
        if (nodeDef.isBone === true) {
          node = new Bone();
        } else if (objects.length > 1) {
          node = new Group();
        } else if (objects.length === 1) {
          node = objects[0];
        } else {
          node = new Object3D();
        }
        if (node !== objects[0]) {
          for (let i = 0, il = objects.length; i < il; i++) {
            node.add(objects[i]);
          }
        }
        if (nodeDef.name) {
          node.userData.name = nodeDef.name;
          node.name = nodeName;
        }
        assignExtrasToUserData(node, nodeDef);
        if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);
        if (nodeDef.matrix !== void 0) {
          const matrix = new Matrix4();
          matrix.fromArray(nodeDef.matrix);
          node.applyMatrix4(matrix);
        } else {
          if (nodeDef.translation !== void 0) {
            node.position.fromArray(nodeDef.translation);
          }
          if (nodeDef.rotation !== void 0) {
            node.quaternion.fromArray(nodeDef.rotation);
          }
          if (nodeDef.scale !== void 0) {
            node.scale.fromArray(nodeDef.scale);
          }
        }
        if (!parser.associations.has(node)) {
          parser.associations.set(node, {});
        }
        parser.associations.get(node).nodes = nodeIndex;
        return node;
      });
      return this.nodeCache[nodeIndex];
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
     * @param {number} sceneIndex
     * @return {Promise<Group>}
     */
    loadScene(sceneIndex) {
      const extensions = this.extensions;
      const sceneDef = this.json.scenes[sceneIndex];
      const parser = this;
      const scene = new Group();
      if (sceneDef.name) scene.name = parser.createUniqueName(sceneDef.name);
      assignExtrasToUserData(scene, sceneDef);
      if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene, sceneDef);
      const nodeIds = sceneDef.nodes || [];
      const pending = [];
      for (let i = 0, il = nodeIds.length; i < il; i++) {
        pending.push(parser.getDependency("node", nodeIds[i]));
      }
      return Promise.all(pending).then(function(nodes) {
        for (let i = 0, il = nodes.length; i < il; i++) {
          scene.add(nodes[i]);
        }
        const reduceAssociations = (node) => {
          const reducedAssociations = /* @__PURE__ */ new Map();
          for (const [key, value] of parser.associations) {
            if (key instanceof Material || key instanceof Texture) {
              reducedAssociations.set(key, value);
            }
          }
          node.traverse((node2) => {
            const mappings = parser.associations.get(node2);
            if (mappings != null) {
              reducedAssociations.set(node2, mappings);
            }
          });
          return reducedAssociations;
        };
        parser.associations = reduceAssociations(scene);
        return scene;
      });
    }
    _createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target) {
      const tracks = [];
      const targetName = node.name ? node.name : node.uuid;
      const targetNames = [];
      if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {
        node.traverse(function(object) {
          if (object.morphTargetInfluences) {
            targetNames.push(object.name ? object.name : object.uuid);
          }
        });
      } else {
        targetNames.push(targetName);
      }
      let TypedKeyframeTrack;
      switch (PATH_PROPERTIES[target.path]) {
        case PATH_PROPERTIES.weights:
          TypedKeyframeTrack = NumberKeyframeTrack;
          break;
        case PATH_PROPERTIES.rotation:
          TypedKeyframeTrack = QuaternionKeyframeTrack;
          break;
        case PATH_PROPERTIES.position:
        case PATH_PROPERTIES.scale:
          TypedKeyframeTrack = VectorKeyframeTrack;
          break;
        default:
          switch (outputAccessor.itemSize) {
            case 1:
              TypedKeyframeTrack = NumberKeyframeTrack;
              break;
            case 2:
            case 3:
            default:
              TypedKeyframeTrack = VectorKeyframeTrack;
              break;
          }
          break;
      }
      const interpolation = sampler.interpolation !== void 0 ? INTERPOLATION[sampler.interpolation] : InterpolateLinear;
      const outputArray = this._getArrayFromAccessor(outputAccessor);
      for (let j = 0, jl = targetNames.length; j < jl; j++) {
        const track = new TypedKeyframeTrack(
          targetNames[j] + "." + PATH_PROPERTIES[target.path],
          inputAccessor.array,
          outputArray,
          interpolation
        );
        if (sampler.interpolation === "CUBICSPLINE") {
          this._createCubicSplineTrackInterpolant(track);
        }
        tracks.push(track);
      }
      return tracks;
    }
    _getArrayFromAccessor(accessor) {
      let outputArray = accessor.array;
      if (accessor.normalized) {
        const scale = getNormalizedComponentScale(outputArray.constructor);
        const scaled = new Float32Array(outputArray.length);
        for (let j = 0, jl = outputArray.length; j < jl; j++) {
          scaled[j] = outputArray[j] * scale;
        }
        outputArray = scaled;
      }
      return outputArray;
    }
    _createCubicSplineTrackInterpolant(track) {
      track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
        const interpolantType = this instanceof QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
        return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
      };
      track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  }
  function computeBounds(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const box = new Box3();
    if (attributes.POSITION !== void 0) {
      const accessor = parser.json.accessors[attributes.POSITION];
      const min = accessor.min;
      const max = accessor.max;
      if (min !== void 0 && max !== void 0) {
        box.set(
          new Vector3(min[0], min[1], min[2]),
          new Vector3(max[0], max[1], max[2])
        );
        if (accessor.normalized) {
          const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
          box.min.multiplyScalar(boxScale);
          box.max.multiplyScalar(boxScale);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else {
      return;
    }
    const targets = primitiveDef.targets;
    if (targets !== void 0) {
      const maxDisplacement = new Vector3();
      const vector = new Vector3();
      for (let i = 0, il = targets.length; i < il; i++) {
        const target = targets[i];
        if (target.POSITION !== void 0) {
          const accessor = parser.json.accessors[target.POSITION];
          const min = accessor.min;
          const max = accessor.max;
          if (min !== void 0 && max !== void 0) {
            vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
            vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
            vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
            if (accessor.normalized) {
              const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
              vector.multiplyScalar(boxScale);
            }
            maxDisplacement.max(vector);
          } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
          }
        }
      }
      box.expandByVector(maxDisplacement);
    }
    geometry.boundingBox = box;
    const sphere = new Sphere();
    box.getCenter(sphere.center);
    sphere.radius = box.min.distanceTo(box.max) / 2;
    geometry.boundingSphere = sphere;
  }
  function addPrimitiveAttributes(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const pending = [];
    function assignAttributeAccessor(accessorIndex, attributeName) {
      return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
        geometry.setAttribute(attributeName, accessor);
      });
    }
    for (const gltfAttributeName in attributes) {
      const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
      if (threeAttributeName in geometry.attributes) continue;
      pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
    }
    if (primitiveDef.indices !== void 0 && !geometry.index) {
      const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor2) {
        geometry.setIndex(accessor2);
      });
      pending.push(accessor);
    }
    if (ColorManagement.workingColorSpace !== LinearSRGBColorSpace && "COLOR_0" in attributes) {
      console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ColorManagement.workingColorSpace}" not supported.`);
    }
    assignExtrasToUserData(geometry, primitiveDef);
    computeBounds(geometry, primitiveDef, parser);
    return Promise.all(pending).then(function() {
      return primitiveDef.targets !== void 0 ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
    });
  }
  class WorkerPool {
    constructor(pool = 4) {
      this.pool = pool;
      this.queue = [];
      this.workers = [];
      this.workersResolve = [];
      this.workerStatus = 0;
    }
    _initWorker(workerId) {
      if (!this.workers[workerId]) {
        const worker = this.workerCreator();
        worker.addEventListener("message", this._onMessage.bind(this, workerId));
        this.workers[workerId] = worker;
      }
    }
    _getIdleWorker() {
      for (let i = 0; i < this.pool; i++)
        if (!(this.workerStatus & 1 << i)) return i;
      return -1;
    }
    _onMessage(workerId, msg) {
      const resolve = this.workersResolve[workerId];
      resolve && resolve(msg);
      if (this.queue.length) {
        const { resolve: resolve2, msg: msg2, transfer } = this.queue.shift();
        this.workersResolve[workerId] = resolve2;
        this.workers[workerId].postMessage(msg2, transfer);
      } else {
        this.workerStatus ^= 1 << workerId;
      }
    }
    setWorkerCreator(workerCreator) {
      this.workerCreator = workerCreator;
    }
    setWorkerLimit(pool) {
      this.pool = pool;
    }
    postMessage(msg, transfer) {
      return new Promise((resolve) => {
        const workerId = this._getIdleWorker();
        if (workerId !== -1) {
          this._initWorker(workerId);
          this.workerStatus |= 1 << workerId;
          this.workersResolve[workerId] = resolve;
          this.workers[workerId].postMessage(msg, transfer);
        } else {
          this.queue.push({ resolve, msg, transfer });
        }
      });
    }
    dispose() {
      this.workers.forEach((worker) => worker.terminate());
      this.workersResolve.length = 0;
      this.workers.length = 0;
      this.queue.length = 0;
      this.workerStatus = 0;
    }
  }
  const t = 0, n = 2, u = 1, y = 2, S = 0, E = 1, X = 10, it = 0, ht = 9, gt = 15, xt = 16, dt = 22, Ft = 37, Et = 43, te = 76, ae = 83, ue = 97, ye = 100, de = 103, Ae = 109, We = 122, He = 123, qe = 131, Je = 132, Qe = 133, Ze = 134, en = 137, nn = 138, rn = 141, on = 142, cn = 145, Un = 146, pn = 148, xn = 152, Dn = 157, wn = 158, Vn = 165, Cn = 166, _i = 1000066e3;
  class Ci {
    constructor(t2, e, n2, i) {
      this._dataView = void 0, this._littleEndian = void 0, this._offset = void 0, this._dataView = new DataView(t2.buffer, t2.byteOffset + e, n2), this._littleEndian = i, this._offset = 0;
    }
    _nextUint8() {
      const t2 = this._dataView.getUint8(this._offset);
      return this._offset += 1, t2;
    }
    _nextUint16() {
      const t2 = this._dataView.getUint16(this._offset, this._littleEndian);
      return this._offset += 2, t2;
    }
    _nextUint32() {
      const t2 = this._dataView.getUint32(this._offset, this._littleEndian);
      return this._offset += 4, t2;
    }
    _nextUint64() {
      const t2 = this._dataView.getUint32(this._offset, this._littleEndian) + 2 ** 32 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
      return this._offset += 8, t2;
    }
    _nextInt32() {
      const t2 = this._dataView.getInt32(this._offset, this._littleEndian);
      return this._offset += 4, t2;
    }
    _nextUint8Array(t2) {
      const e = new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + this._offset, t2);
      return this._offset += t2, e;
    }
    _skip(t2) {
      return this._offset += t2, this;
    }
    _scan(t2, e = 0) {
      const n2 = this._offset;
      let i = 0;
      for (; this._dataView.getUint8(this._offset) !== e && i < t2; ) i++, this._offset++;
      return i < t2 && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n2, i);
    }
  }
  const Oi = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
  function Si(t2) {
    return new TextDecoder().decode(t2);
  }
  function Mi(t2) {
    const e = new Uint8Array(t2.buffer, t2.byteOffset, Oi.length);
    if (e[0] !== Oi[0] || e[1] !== Oi[1] || e[2] !== Oi[2] || e[3] !== Oi[3] || e[4] !== Oi[4] || e[5] !== Oi[5] || e[6] !== Oi[6] || e[7] !== Oi[7] || e[8] !== Oi[8] || e[9] !== Oi[9] || e[10] !== Oi[10] || e[11] !== Oi[11]) throw new Error("Missing KTX 2.0 identifier.");
    const n2 = { vkFormat: 0, typeSize: 1, pixelWidth: 0, pixelHeight: 0, pixelDepth: 0, layerCount: 0, faceCount: 1, levelCount: 0, supercompressionScheme: 0, levels: [], dataFormatDescriptor: [{ vendorId: 0, descriptorType: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], keyValue: {}, globalData: null }, i = 17 * Uint32Array.BYTES_PER_ELEMENT, s = new Ci(t2, Oi.length, i, true);
    n2.vkFormat = s._nextUint32(), n2.typeSize = s._nextUint32(), n2.pixelWidth = s._nextUint32(), n2.pixelHeight = s._nextUint32(), n2.pixelDepth = s._nextUint32(), n2.layerCount = s._nextUint32(), n2.faceCount = s._nextUint32(), n2.levelCount = s._nextUint32(), n2.supercompressionScheme = s._nextUint32();
    const a = s._nextUint32(), r = s._nextUint32(), o = s._nextUint32(), l = s._nextUint32(), f = s._nextUint64(), c = s._nextUint64(), U = 3 * Math.max(n2.levelCount, 1) * 8, h = new Ci(t2, Oi.length + i, U, true);
    for (let e2 = 0, i2 = Math.max(n2.levelCount, 1); e2 < i2; e2++) n2.levels.push({ levelData: new Uint8Array(t2.buffer, t2.byteOffset + h._nextUint64(), h._nextUint64()), uncompressedByteLength: h._nextUint64() });
    const p = new Ci(t2, a, r, true);
    p._skip(4);
    const _ = p._nextUint16(), u2 = p._nextUint16(), g2 = p._nextUint16(), x = p._nextUint16(), y2 = { vendorId: _, descriptorType: u2, versionNumber: g2, colorModel: p._nextUint8(), colorPrimaries: p._nextUint8(), transferFunction: p._nextUint8(), flags: p._nextUint8(), texelBlockDimension: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], bytesPlane: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], samples: [] }, b = (x / 4 - 6) / 4;
    for (let t3 = 0; t3 < b; t3++) {
      const e2 = { bitOffset: p._nextUint16(), bitLength: p._nextUint8(), channelType: p._nextUint8(), samplePosition: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], sampleLower: Number.NEGATIVE_INFINITY, sampleUpper: Number.POSITIVE_INFINITY };
      64 & e2.channelType ? (e2.sampleLower = p._nextInt32(), e2.sampleUpper = p._nextInt32()) : (e2.sampleLower = p._nextUint32(), e2.sampleUpper = p._nextUint32()), y2.samples[t3] = e2;
    }
    n2.dataFormatDescriptor.length = 0, n2.dataFormatDescriptor.push(y2);
    const m = new Ci(t2, o, l, true);
    for (; m._offset < l; ) {
      const t3 = m._nextUint32(), e2 = m._scan(t3), i2 = Si(e2);
      if (n2.keyValue[i2] = m._nextUint8Array(t3 - e2.byteLength - 1), i2.match(/^ktx/i)) {
        const t4 = Si(n2.keyValue[i2]);
        n2.keyValue[i2] = t4.substring(0, t4.lastIndexOf("\0"));
      }
      m._skip(t3 % 4 ? 4 - t3 % 4 : 0);
    }
    if (c <= 0) return n2;
    const d = new Ci(t2, f, c, true), D = d._nextUint16(), w = d._nextUint16(), v = d._nextUint32(), B2 = d._nextUint32(), L = d._nextUint32(), A2 = d._nextUint32(), k = [];
    for (let t3 = 0, e2 = Math.max(n2.levelCount, 1); t3 < e2; t3++) k.push({ imageFlags: d._nextUint32(), rgbSliceByteOffset: d._nextUint32(), rgbSliceByteLength: d._nextUint32(), alphaSliceByteOffset: d._nextUint32(), alphaSliceByteLength: d._nextUint32() });
    const I2 = f + d._offset, V = I2 + v, C2 = V + B2, F = C2 + L, O = new Uint8Array(t2.buffer, t2.byteOffset + I2, v), T = new Uint8Array(t2.buffer, t2.byteOffset + V, B2), S2 = new Uint8Array(t2.buffer, t2.byteOffset + C2, L), E2 = new Uint8Array(t2.buffer, t2.byteOffset + F, A2);
    return n2.globalData = { endpointCount: D, selectorCount: w, imageDescs: k, endpointsData: O, selectorsData: T, tablesData: S2, extendedData: E2 }, n2;
  }
  let A, I, B;
  const g = { env: { emscripten_notify_memory_growth: function(A2) {
    B = new Uint8Array(I.exports.memory.buffer);
  } } };
  class Q {
    init() {
      return A || (A = "undefined" != typeof fetch ? fetch("data:application/wasm;base64," + C).then((A2) => A2.arrayBuffer()).then((A2) => WebAssembly.instantiate(A2, g)).then(this._init) : WebAssembly.instantiate(Buffer.from(C, "base64"), g).then(this._init), A);
    }
    _init(A2) {
      I = A2.instance, g.env.emscripten_notify_memory_growth(0);
    }
    decode(A2, g2 = 0) {
      if (!I) throw new Error("ZSTDDecoder: Await .init() before decoding.");
      const Q2 = A2.byteLength, C2 = I.exports.malloc(Q2);
      B.set(A2, C2), g2 = g2 || Number(I.exports.ZSTD_findDecompressedSize(C2, Q2));
      const E2 = I.exports.malloc(g2), i = I.exports.ZSTD_decompress(E2, g2, C2, Q2), D = B.slice(E2, E2 + i);
      return I.exports.free(C2), I.exports.free(E2), D;
    }
  }
  const C = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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";
  const DisplayP3ColorSpace = "display-p3";
  const LinearDisplayP3ColorSpace = "display-p3-linear";
  const _taskCache = /* @__PURE__ */ new WeakMap();
  let _activeLoaders = 0;
  let _zstd;
  class KTX2Loader extends Loader {
    /**
     * Constructs a new KTX2 loader.
     *
     * @param {LoadingManager} [manager] - The loading manager.
     */
    constructor(manager) {
      super(manager);
      this.transcoderPath = "";
      this.transcoderBinary = null;
      this.transcoderPending = null;
      this.workerPool = new WorkerPool();
      this.workerSourceURL = "";
      this.workerConfig = null;
      if (typeof MSC_TRANSCODER !== "undefined") {
        console.warn(
          'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
        );
      }
    }
    /**
     * Sets the transcoder path.
     *
     * The WASM transcoder and JS wrapper are available from the `examples/jsm/libs/basis` directory.
     *
     * @param {string} path - The transcoder path to set.
     * @return {KTX2Loader} A reference to this loader.
     */
    setTranscoderPath(path) {
      this.transcoderPath = path;
      return this;
    }
    /**
     * Sets the maximum number of Web Workers to be allocated by this instance.
     *
     * @param {number} workerLimit - The worker limit.
     * @return {KTX2Loader} A reference to this loader.
     */
    setWorkerLimit(workerLimit) {
      this.workerPool.setWorkerLimit(workerLimit);
      return this;
    }
    /**
     * Async version of {@link KTX2Loader#detectSupport}.
     *
     * @async
     * @param {WebGPURenderer|WebGLRenderer} renderer - The renderer.
     * @return {Promise} A Promise that resolves when the support has been detected.
     */
    async detectSupportAsync(renderer) {
      this.workerConfig = {
        astcSupported: await renderer.hasFeatureAsync("texture-compression-astc"),
        astcHDRSupported: false,
        // https://github.com/gpuweb/gpuweb/issues/3856
        etc1Supported: await renderer.hasFeatureAsync("texture-compression-etc1"),
        etc2Supported: await renderer.hasFeatureAsync("texture-compression-etc2"),
        dxtSupported: await renderer.hasFeatureAsync("texture-compression-bc"),
        bptcSupported: await renderer.hasFeatureAsync("texture-compression-bptc"),
        pvrtcSupported: await renderer.hasFeatureAsync("texture-compression-pvrtc")
      };
      return this;
    }
    /**
     * Detects hardware support for available compressed texture formats, to determine
     * the output format for the transcoder. Must be called before loading a texture.
     *
     * @param {WebGPURenderer|WebGLRenderer} renderer - The renderer.
     * @return {KTX2Loader} A reference to this loader.
     */
    detectSupport(renderer) {
      if (renderer.isWebGPURenderer === true) {
        this.workerConfig = {
          astcSupported: renderer.hasFeature("texture-compression-astc"),
          astcHDRSupported: false,
          // https://github.com/gpuweb/gpuweb/issues/3856
          etc1Supported: renderer.hasFeature("texture-compression-etc1"),
          etc2Supported: renderer.hasFeature("texture-compression-etc2"),
          dxtSupported: renderer.hasFeature("texture-compression-bc"),
          bptcSupported: renderer.hasFeature("texture-compression-bptc"),
          pvrtcSupported: renderer.hasFeature("texture-compression-pvrtc")
        };
      } else {
        this.workerConfig = {
          astcSupported: renderer.extensions.has("WEBGL_compressed_texture_astc"),
          astcHDRSupported: renderer.extensions.has("WEBGL_compressed_texture_astc") && renderer.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),
          etc1Supported: renderer.extensions.has("WEBGL_compressed_texture_etc1"),
          etc2Supported: renderer.extensions.has("WEBGL_compressed_texture_etc"),
          dxtSupported: renderer.extensions.has("WEBGL_compressed_texture_s3tc"),
          bptcSupported: renderer.extensions.has("EXT_texture_compression_bptc"),
          pvrtcSupported: renderer.extensions.has("WEBGL_compressed_texture_pvrtc") || renderer.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
        };
      }
      return this;
    }
    // TODO: Make this method private
    init() {
      if (!this.transcoderPending) {
        const jsLoader = new FileLoader(this.manager);
        jsLoader.setPath(this.transcoderPath);
        jsLoader.setWithCredentials(this.withCredentials);
        const jsContent = jsLoader.loadAsync("basis_transcoder.js");
        const binaryLoader = new FileLoader(this.manager);
        binaryLoader.setPath(this.transcoderPath);
        binaryLoader.setResponseType("arraybuffer");
        binaryLoader.setWithCredentials(this.withCredentials);
        const binaryContent = binaryLoader.loadAsync("basis_transcoder.wasm");
        this.transcoderPending = Promise.all([jsContent, binaryContent]).then(([jsContent2, binaryContent2]) => {
          const fn = KTX2Loader.BasisWorker.toString();
          const body = [
            "/* constants */",
            "let _EngineFormat = " + JSON.stringify(KTX2Loader.EngineFormat),
            "let _EngineType = " + JSON.stringify(KTX2Loader.EngineType),
            "let _TranscoderFormat = " + JSON.stringify(KTX2Loader.TranscoderFormat),
            "let _BasisFormat = " + JSON.stringify(KTX2Loader.BasisFormat),
            "/* basis_transcoder.js */",
            jsContent2,
            "/* worker */",
            fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"))
          ].join("\n");
          this.workerSourceURL = URL.createObjectURL(new Blob([body]));
          this.transcoderBinary = binaryContent2;
          this.workerPool.setWorkerCreator(() => {
            const worker = new Worker(this.workerSourceURL);
            const transcoderBinary = this.transcoderBinary.slice(0);
            worker.postMessage({ type: "init", config: this.workerConfig, transcoderBinary }, [transcoderBinary]);
            return worker;
          });
        });
        if (_activeLoaders > 0) {
          console.warn(
            "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
          );
        }
        _activeLoaders++;
      }
      return this.transcoderPending;
    }
    /**
     * Starts loading from the given URL and passes the loaded KTX2 texture
     * to the `onLoad()` callback.
     *
     * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
     * @param {function(CompressedTexture)} onLoad - Executed when the loading process has been finished.
     * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
     * @param {onErrorCallback} onError - Executed when errors occur.
     */
    load(url, onLoad, onProgress, onError) {
      if (this.workerConfig === null) {
        throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
      }
      const loader2 = new FileLoader(this.manager);
      loader2.setPath(this.path);
      loader2.setCrossOrigin(this.crossOrigin);
      loader2.setWithCredentials(this.withCredentials);
      loader2.setResponseType("arraybuffer");
      loader2.load(url, (buffer2) => {
        this.parse(buffer2, onLoad, onError);
      }, onProgress, onError);
    }
    /**
     * Parses the given KTX2 data.
     *
     * @param {ArrayBuffer} buffer - The raw KTX2 data as an array buffer.
     * @param {function(CompressedTexture)} onLoad - Executed when the loading/parsing process has been finished.
     * @param {onErrorCallback} onError - Executed when errors occur.
     * @returns {Promise} A Promise that resolves when the parsing has been finished.
     */
    parse(buffer2, onLoad, onError) {
      if (this.workerConfig === null) {
        throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
      }
      if (_taskCache.has(buffer2)) {
        const cachedTask = _taskCache.get(buffer2);
        return cachedTask.promise.then(onLoad).catch(onError);
      }
      this._createTexture(buffer2).then((texture2) => onLoad ? onLoad(texture2) : null).catch(onError);
    }
    _createTextureFrom(transcodeResult, container) {
      const { type: messageType, error, data: { faces, width, height, format, type, dfdFlags } } = transcodeResult;
      if (messageType === "error") return Promise.reject(error);
      let texture2;
      if (container.faceCount === 6) {
        texture2 = new CompressedCubeTexture(faces, format, type);
      } else {
        const mipmaps = faces[0].mipmaps;
        texture2 = container.layerCount > 1 ? new CompressedArrayTexture(mipmaps, width, height, container.layerCount, format, type) : new CompressedTexture(mipmaps, width, height, format, type);
      }
      texture2.minFilter = faces[0].mipmaps.length === 1 ? LinearFilter : LinearMipmapLinearFilter;
      texture2.magFilter = LinearFilter;
      texture2.generateMipmaps = false;
      texture2.needsUpdate = true;
      texture2.colorSpace = parseColorSpace(container);
      texture2.premultiplyAlpha = !!(dfdFlags & u);
      return texture2;
    }
    /**
     * @private
     * @param {ArrayBuffer} buffer
     * @param {?Object} config
     * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
     */
    async _createTexture(buffer2, config = {}) {
      const container = Mi(new Uint8Array(buffer2));
      const isBasisHDR = container.vkFormat === _i && container.dataFormatDescriptor[0].colorModel === 167;
      const needsTranscoder = container.vkFormat === it || isBasisHDR && !this.workerConfig.astcHDRSupported;
      if (!needsTranscoder) {
        return createRawTexture(container);
      }
      const taskConfig = config;
      const texturePending = this.init().then(() => {
        return this.workerPool.postMessage({ type: "transcode", buffer: buffer2, taskConfig }, [buffer2]);
      }).then((e) => this._createTextureFrom(e.data, container));
      _taskCache.set(buffer2, { promise: texturePending });
      return texturePending;
    }
    /**
     * Frees internal resources. This method should be called
     * when the loader is no longer required.
     */
    dispose() {
      this.workerPool.dispose();
      if (this.workerSourceURL) URL.revokeObjectURL(this.workerSourceURL);
      _activeLoaders--;
    }
  }
  KTX2Loader.BasisFormat = {
    ETC1S: 0,
    UASTC: 1,
    UASTC_HDR: 2
  };
  KTX2Loader.TranscoderFormat = {
    ETC1: 0,
    ETC2: 1,
    BC1: 2,
    BC3: 3,
    BC4: 4,
    BC5: 5,
    BC7_M6_OPAQUE_ONLY: 6,
    BC7_M5: 7,
    PVRTC1_4_RGB: 8,
    PVRTC1_4_RGBA: 9,
    ASTC_4x4: 10,
    ATC_RGB: 11,
    ATC_RGBA_INTERPOLATED_ALPHA: 12,
    RGBA32: 13,
    RGB565: 14,
    BGR565: 15,
    RGBA4444: 16,
    BC6H: 22,
    RGB_HALF: 24,
    RGBA_HALF: 25
  };
  KTX2Loader.EngineFormat = {
    RGBAFormat,
    RGBA_ASTC_4x4_Format,
    RGB_BPTC_UNSIGNED_Format,
    RGBA_BPTC_Format,
    RGBA_ETC2_EAC_Format,
    RGBA_PVRTC_4BPPV1_Format,
    RGBA_S3TC_DXT5_Format,
    RGB_ETC1_Format,
    RGB_ETC2_Format,
    RGB_PVRTC_4BPPV1_Format,
    RGBA_S3TC_DXT1_Format
  };
  KTX2Loader.EngineType = {
    UnsignedByteType,
    HalfFloatType,
    FloatType
  };
  KTX2Loader.BasisWorker = function() {
    let config;
    let transcoderPending;
    let BasisModule;
    const EngineFormat = _EngineFormat;
    const EngineType = _EngineType;
    const TranscoderFormat = _TranscoderFormat;
    const BasisFormat = _BasisFormat;
    self.addEventListener("message", function(e) {
      const message = e.data;
      switch (message.type) {
        case "init":
          config = message.config;
          init(message.transcoderBinary);
          break;
        case "transcode":
          transcoderPending.then(() => {
            try {
              const { faces, buffers, width, height, hasAlpha, format, type, dfdFlags } = transcode(message.buffer);
              self.postMessage({ type: "transcode", id: message.id, data: { faces, width, height, hasAlpha, format, type, dfdFlags } }, buffers);
            } catch (error) {
              console.error(error);
              self.postMessage({ type: "error", id: message.id, error: error.message });
            }
          });
          break;
      }
    });
    function init(wasmBinary) {
      transcoderPending = new Promise((resolve) => {
        BasisModule = { wasmBinary, onRuntimeInitialized: resolve };
        BASIS(BasisModule);
      }).then(() => {
        BasisModule.initializeBasis();
        if (BasisModule.KTX2File === void 0) {
          console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
        }
      });
    }
    function transcode(buffer2) {
      const ktx2File = new BasisModule.KTX2File(new Uint8Array(buffer2));
      function cleanup() {
        ktx2File.close();
        ktx2File.delete();
      }
      if (!ktx2File.isValid()) {
        cleanup();
        throw new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
      }
      let basisFormat;
      if (ktx2File.isUASTC()) {
        basisFormat = BasisFormat.UASTC;
      } else if (ktx2File.isETC1S()) {
        basisFormat = BasisFormat.ETC1S;
      } else if (ktx2File.isHDR()) {
        basisFormat = BasisFormat.UASTC_HDR;
      } else {
        throw new Error("THREE.KTX2Loader: Unknown Basis encoding");
      }
      const width = ktx2File.getWidth();
      const height = ktx2File.getHeight();
      const layerCount = ktx2File.getLayers() || 1;
      const levelCount = ktx2File.getLevels();
      const faceCount = ktx2File.getFaces();
      const hasAlpha = ktx2File.getHasAlpha();
      const dfdFlags = ktx2File.getDFDFlags();
      const { transcoderFormat, engineFormat, engineType } = getTranscoderFormat(basisFormat, width, height, hasAlpha);
      if (!width || !height || !levelCount) {
        cleanup();
        throw new Error("THREE.KTX2Loader:	Invalid texture");
      }
      if (!ktx2File.startTranscoding()) {
        cleanup();
        throw new Error("THREE.KTX2Loader: .startTranscoding failed");
      }
      const faces = [];
      const buffers = [];
      for (let face = 0; face < faceCount; face++) {
        const mipmaps = [];
        for (let mip = 0; mip < levelCount; mip++) {
          const layerMips = [];
          let mipWidth, mipHeight;
          for (let layer = 0; layer < layerCount; layer++) {
            const levelInfo = ktx2File.getImageLevelInfo(mip, layer, face);
            if (face === 0 && mip === 0 && layer === 0 && (levelInfo.origWidth % 4 !== 0 || levelInfo.origHeight % 4 !== 0)) {
              console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions.");
            }
            if (levelCount > 1) {
              mipWidth = levelInfo.origWidth;
              mipHeight = levelInfo.origHeight;
            } else {
              mipWidth = levelInfo.width;
              mipHeight = levelInfo.height;
            }
            let dst = new Uint8Array(ktx2File.getImageTranscodedSizeInBytes(mip, layer, 0, transcoderFormat));
            const status = ktx2File.transcodeImage(dst, mip, layer, face, transcoderFormat, 0, -1, -1);
            if (engineType === EngineType.HalfFloatType) {
              dst = new Uint16Array(dst.buffer, dst.byteOffset, dst.byteLength / Uint16Array.BYTES_PER_ELEMENT);
            }
            if (!status) {
              cleanup();
              throw new Error("THREE.KTX2Loader: .transcodeImage failed.");
            }
            layerMips.push(dst);
          }
          const mipData = concat(layerMips);
          mipmaps.push({ data: mipData, width: mipWidth, height: mipHeight });
          buffers.push(mipData.buffer);
        }
        faces.push({ mipmaps, width, height, format: engineFormat, type: engineType });
      }
      cleanup();
      return { faces, buffers, width, height, hasAlpha, dfdFlags, format: engineFormat, type: engineType };
    }
    const FORMAT_OPTIONS = [
      {
        if: "astcSupported",
        basisFormat: [BasisFormat.UASTC],
        transcoderFormat: [TranscoderFormat.ASTC_4x4, TranscoderFormat.ASTC_4x4],
        engineFormat: [EngineFormat.RGBA_ASTC_4x4_Format, EngineFormat.RGBA_ASTC_4x4_Format],
        engineType: [EngineType.UnsignedByteType],
        priorityETC1S: Infinity,
        priorityUASTC: 1,
        needsPowerOfTwo: false
      },
      {
        if: "bptcSupported",
        basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC],
        transcoderFormat: [TranscoderFormat.BC7_M5, TranscoderFormat.BC7_M5],
        engineFormat: [EngineFormat.RGBA_BPTC_Format, EngineFormat.RGBA_BPTC_Format],
        engineType: [EngineType.UnsignedByteType],
        priorityETC1S: 3,
        priorityUASTC: 2,
        needsPowerOfTwo: false
      },
      {
        if: "dxtSupported",
        basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC],
        transcoderFormat: [TranscoderFormat.BC1, TranscoderFormat.BC3],
        engineFormat: [EngineFormat.RGBA_S3TC_DXT1_Format, EngineFormat.RGBA_S3TC_DXT5_Format],
        engineType: [EngineType.UnsignedByteType],
        priorityETC1S: 4,
        priorityUASTC: 5,
        needsPowerOfTwo: false
      },
      {
        if: "etc2Supported",
        basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC],
        transcoderFormat: [TranscoderFormat.ETC1, TranscoderFormat.ETC2],
        engineFormat: [EngineFormat.RGB_ETC2_Format, EngineFormat.RGBA_ETC2_EAC_Format],
        engineType: [EngineType.UnsignedByteType],
        priorityETC1S: 1,
        priorityUASTC: 3,
        needsPowerOfTwo: false
      },
      {
        if: "etc1Supported",
        basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC],
        transcoderFormat: [TranscoderFormat.ETC1],
        engineFormat: [EngineFormat.RGB_ETC1_Format],
        engineType: [EngineType.UnsignedByteType],
        priorityETC1S: 2,
        priorityUASTC: 4,
        needsPowerOfTwo: false
      },
      {
        if: "pvrtcSupported",
        basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC],
        transcoderFormat: [TranscoderFormat.PVRTC1_4_RGB, TranscoderFormat.PVRTC1_4_RGBA],
        engineFormat: [EngineFormat.RGB_PVRTC_4BPPV1_Format, EngineFormat.RGBA_PVRTC_4BPPV1_Format],
        engineType: [EngineType.UnsignedByteType],
        priorityETC1S: 5,
        priorityUASTC: 6,
        needsPowerOfTwo: true
      },
      {
        if: "bptcSupported",
        basisFormat: [BasisFormat.UASTC_HDR],
        transcoderFormat: [TranscoderFormat.BC6H],
        engineFormat: [EngineFormat.RGB_BPTC_UNSIGNED_Format],
        engineType: [EngineType.HalfFloatType],
        priorityHDR: 1,
        needsPowerOfTwo: false
      },
      // Uncompressed fallbacks.
      {
        basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC],
        transcoderFormat: [TranscoderFormat.RGBA32, TranscoderFormat.RGBA32],
        engineFormat: [EngineFormat.RGBAFormat, EngineFormat.RGBAFormat],
        engineType: [EngineType.UnsignedByteType, EngineType.UnsignedByteType],
        priorityETC1S: 100,
        priorityUASTC: 100,
        needsPowerOfTwo: false
      },
      {
        basisFormat: [BasisFormat.UASTC_HDR],
        transcoderFormat: [TranscoderFormat.RGBA_HALF],
        engineFormat: [EngineFormat.RGBAFormat],
        engineType: [EngineType.HalfFloatType],
        priorityHDR: 100,
        needsPowerOfTwo: false
      }
    ];
    const OPTIONS = {
      // TODO: For ETC1S we intentionally sort by _UASTC_ priority, preserving
      // a historical accident shown to avoid performance pitfalls for Linux with
      // Firefox & AMD GPU (RadeonSI). Further work needed.
      // See https://github.com/mrdoob/three.js/pull/29730.
      [BasisFormat.ETC1S]: FORMAT_OPTIONS.filter((opt) => opt.basisFormat.includes(BasisFormat.ETC1S)).sort((a, b) => a.priorityUASTC - b.priorityUASTC),
      [BasisFormat.UASTC]: FORMAT_OPTIONS.filter((opt) => opt.basisFormat.includes(BasisFormat.UASTC)).sort((a, b) => a.priorityUASTC - b.priorityUASTC),
      [BasisFormat.UASTC_HDR]: FORMAT_OPTIONS.filter((opt) => opt.basisFormat.includes(BasisFormat.UASTC_HDR)).sort((a, b) => a.priorityHDR - b.priorityHDR)
    };
    function getTranscoderFormat(basisFormat, width, height, hasAlpha) {
      const options = OPTIONS[basisFormat];
      for (let i = 0; i < options.length; i++) {
        const opt = options[i];
        if (opt.if && !config[opt.if]) continue;
        if (!opt.basisFormat.includes(basisFormat)) continue;
        if (hasAlpha && opt.transcoderFormat.length < 2) continue;
        if (opt.needsPowerOfTwo && !(isPowerOfTwo2(width) && isPowerOfTwo2(height))) continue;
        const transcoderFormat = opt.transcoderFormat[hasAlpha ? 1 : 0];
        const engineFormat = opt.engineFormat[hasAlpha ? 1 : 0];
        const engineType = opt.engineType[0];
        return { transcoderFormat, engineFormat, engineType };
      }
      throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.");
    }
    function isPowerOfTwo2(value) {
      if (value <= 2) return true;
      return (value & value - 1) === 0 && value !== 0;
    }
    function concat(arrays) {
      if (arrays.length === 1) return arrays[0];
      let totalByteLength = 0;
      for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i];
        totalByteLength += array.byteLength;
      }
      const result = new Uint8Array(totalByteLength);
      let byteOffset = 0;
      for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i];
        result.set(array, byteOffset);
        byteOffset += array.byteLength;
      }
      return result;
    }
  };
  const UNCOMPRESSED_FORMATS = /* @__PURE__ */ new Set([RGBAFormat, RGBFormat, RGFormat, RedFormat]);
  const FORMAT_MAP = {
    [Ae]: RGBAFormat,
    [ue]: RGBAFormat,
    [Ft]: RGBAFormat,
    [Et]: RGBAFormat,
    [de]: RGFormat,
    [ae]: RGFormat,
    [xt]: RGFormat,
    [dt]: RGFormat,
    [ye]: RedFormat,
    [te]: RedFormat,
    [gt]: RedFormat,
    [ht]: RedFormat,
    [He]: RGBFormat,
    [We]: RGBFormat,
    [pn]: RGB_ETC2_Format,
    [xn]: RGBA_ETC2_EAC_Format,
    [_i]: RGBA_ASTC_4x4_Format,
    [wn]: RGBA_ASTC_4x4_Format,
    [Dn]: RGBA_ASTC_4x4_Format,
    [Cn]: RGBA_ASTC_6x6_Format,
    [Vn]: RGBA_ASTC_6x6_Format,
    [Qe]: RGBA_S3TC_DXT1_Format,
    [Ze]: RGBA_S3TC_DXT1_Format,
    [qe]: RGB_S3TC_DXT1_Format,
    [Je]: RGB_S3TC_DXT1_Format,
    [nn]: RGBA_S3TC_DXT3_Format,
    [en]: RGBA_S3TC_DXT3_Format,
    [on]: RGBA_S3TC_DXT5_Format,
    [rn]: RGBA_S3TC_DXT5_Format,
    [Un]: RGBA_BPTC_Format,
    [cn]: RGBA_BPTC_Format
  };
  const TYPE_MAP = {
    [Ae]: FloatType,
    [ue]: HalfFloatType,
    [Ft]: UnsignedByteType,
    [Et]: UnsignedByteType,
    [de]: FloatType,
    [ae]: HalfFloatType,
    [xt]: UnsignedByteType,
    [dt]: UnsignedByteType,
    [ye]: FloatType,
    [te]: HalfFloatType,
    [gt]: UnsignedByteType,
    [ht]: UnsignedByteType,
    [He]: UnsignedInt5999Type,
    [We]: UnsignedInt101111Type,
    [pn]: UnsignedByteType,
    [xn]: UnsignedByteType,
    [_i]: HalfFloatType,
    [Cn]: UnsignedByteType,
    [Vn]: UnsignedByteType
  };
  async function createRawTexture(container) {
    const { vkFormat } = container;
    if (FORMAT_MAP[vkFormat] === void 0) {
      throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
    }
    let zstd;
    if (container.supercompressionScheme === n) {
      if (!_zstd) {
        _zstd = new Promise(async (resolve) => {
          const zstd2 = new Q();
          await zstd2.init();
          resolve(zstd2);
        });
      }
      zstd = await _zstd;
    }
    const mipmaps = [];
    for (let levelIndex = 0; levelIndex < container.levels.length; levelIndex++) {
      const levelWidth = Math.max(1, container.pixelWidth >> levelIndex);
      const levelHeight = Math.max(1, container.pixelHeight >> levelIndex);
      const levelDepth = container.pixelDepth ? Math.max(1, container.pixelDepth >> levelIndex) : 0;
      const level = container.levels[levelIndex];
      let levelData;
      if (container.supercompressionScheme === t) {
        levelData = level.levelData;
      } else if (container.supercompressionScheme === n) {
        levelData = zstd.decode(level.levelData, level.uncompressedByteLength);
      } else {
        throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
      }
      let data;
      if (TYPE_MAP[vkFormat] === FloatType) {
        data = new Float32Array(
          levelData.buffer,
          levelData.byteOffset,
          levelData.byteLength / Float32Array.BYTES_PER_ELEMENT
        );
      } else if (TYPE_MAP[vkFormat] === HalfFloatType) {
        data = new Uint16Array(
          levelData.buffer,
          levelData.byteOffset,
          levelData.byteLength / Uint16Array.BYTES_PER_ELEMENT
        );
      } else if (TYPE_MAP[vkFormat] === UnsignedInt5999Type || TYPE_MAP[vkFormat] === UnsignedInt101111Type) {
        data = new Uint32Array(
          levelData.buffer,
          levelData.byteOffset,
          levelData.byteLength / Uint32Array.BYTES_PER_ELEMENT
        );
      } else {
        data = levelData;
      }
      mipmaps.push({
        data,
        width: levelWidth,
        height: levelHeight,
        depth: levelDepth
      });
    }
    const useMipmaps = container.levelCount === 0 || mipmaps.length > 1;
    let texture2;
    if (UNCOMPRESSED_FORMATS.has(FORMAT_MAP[vkFormat])) {
      texture2 = container.pixelDepth === 0 ? new DataTexture(mipmaps[0].data, container.pixelWidth, container.pixelHeight) : new Data3DTexture(mipmaps[0].data, container.pixelWidth, container.pixelHeight, container.pixelDepth);
      texture2.minFilter = useMipmaps ? NearestMipmapNearestFilter : NearestFilter;
      texture2.magFilter = NearestFilter;
      texture2.generateMipmaps = container.levelCount === 0;
    } else {
      if (container.pixelDepth > 0) throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
      texture2 = new CompressedTexture(mipmaps, container.pixelWidth, container.pixelHeight);
      texture2.minFilter = useMipmaps ? LinearMipmapLinearFilter : LinearFilter;
      texture2.magFilter = LinearFilter;
    }
    texture2.mipmaps = mipmaps;
    texture2.type = TYPE_MAP[vkFormat];
    texture2.format = FORMAT_MAP[vkFormat];
    texture2.colorSpace = parseColorSpace(container);
    texture2.needsUpdate = true;
    return Promise.resolve(texture2);
  }
  function parseColorSpace(container) {
    const dfd = container.dataFormatDescriptor[0];
    if (dfd.colorPrimaries === E) {
      return dfd.transferFunction === y ? SRGBColorSpace : LinearSRGBColorSpace;
    } else if (dfd.colorPrimaries === X) {
      return dfd.transferFunction === y ? DisplayP3ColorSpace : LinearDisplayP3ColorSpace;
    } else if (dfd.colorPrimaries === S) {
      return NoColorSpace;
    } else {
      console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${dfd.colorPrimaries}"`);
      return NoColorSpace;
    }
  }
  self.onmessage = (msg) => {
    const request = msg.data;
    switch (request.type) {
      case "init":
        break;
      case "load":
        loadGLTF(request);
        break;
      default:
        console.error("[Worker] Unknown message type:", request.type);
        break;
    }
  };
  self.onerror = (error) => {
    console.error("[Worker] Error:", error);
  };
  function postMessage(data) {
    self.postMessage(data);
  }
  let loader = null;
  let dracoLoader = null;
  let ktx2Loader = null;
  async function loadGLTF(req) {
    loader ??= new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    dracoLoader ??= new DRACOLoader();
    dracoLoader.setDecoderConfig({ type: "js" });
    dracoLoader.setDecoderPath(req.dracoDecoderPath);
    loader.setDRACOLoader(dracoLoader);
    ktx2Loader ??= new KTX2Loader();
    ktx2Loader.workerConfig = req.ktx2LoaderConfig;
    ktx2Loader.setTranscoderPath(req.ktx2TranscoderPath);
    loader.setKTX2Loader(ktx2Loader);
    loader.load(req.url, (gltf) => {
      const data = {
        type: "loaded-gltf",
        result: {
          url: req.url,
          geometries: [],
          textures: []
        }
      };
      collectData(gltf, data);
      postMessage(data);
    });
  }
  function collectData(gltf, data) {
    const { result } = data;
    for (const key of gltf.parser.associations.keys()) {
      const cache2 = gltf.parser.associations.get(key);
      if (!cache2) {
        continue;
      }
      if ("isTexture" in key && key.isTexture) {
        const texture2 = (
          /** @type {import("three").Texture} */
          /** @type {unknown} */
          key
        );
        const gltf_texture = gltf.parser.json.textures[cache2.textures ?? -1];
        result.textures.push({
          texture: texture2,
          textureIndex: cache2.textures ?? -1,
          extensions: gltf_texture?.extensions ?? {}
        });
      } else if ("isMesh" in key && key.isMesh) {
        const mesh = (
          /** @type {import("three").Mesh} */
          /** @type {unknown} */
          key
        );
        const meshIndex = cache2.meshes ?? -1;
        const primitiveIndex = cache2.primitives ?? -1;
        const gltf_mesh = gltf.parser.json.meshes[meshIndex];
        result.geometries.push({
          geometry: mesh.geometry,
          meshIndex,
          primitiveIndex,
          extensions: gltf_mesh?.extensions ?? {}
        });
      } else if ("isMaterial" in key && key.isMaterial) ;
    }
  }
})();
//# sourceMappingURL=loader.worker-CezcHVvU.js.map
