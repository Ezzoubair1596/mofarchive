"use strict";

// Add direct video links to the matching videos array.
// Example: { title: "Episode 01", src: "https://example.com/episode-01.mp4", duration: "03:20" }
// The duration is optional.
const collections = [
  { id: "tv", tone: "#ffa36c", wash: "#87472d", label: "MOF TV", videos: [
    {"title": "MOF Tv 2024 (NEW)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795557839/MOF_TV_2024_dr4dtm.mp4", "duration": "14:22"},
    {"title": "MOF Tv 01", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795557798/MOF_Tv_1_-_MARS_2020_hc9mn7.mp4", "duration": "9:19"},
    {"title": "MOF Tv 02", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795557800/MOF_Tv_2_-_APRIL_2020_gatd8c.mp4", "duration": "7:00"},
    {"title": "MOF Tv 03", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795559112/MOF-Tv-3-MAI-2020-compressed_le8e5t.mp4", "duration": "16:15"},
    {"title": "MOF Tv 04", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795559131/MOF-Tv-4-MAI-2021-compressed_bus1ux.mp4", "duration": "22:38"},
    {"title": "MOF Tv 05", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795559119/MOF-TV-5-DEC-2021-compressed_vdupi0.mp4", "duration": "20:02"},
    {"title": "OLD Tv 2017", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795557790/OLD_MOF_Tv_-_2018_ab4yvy.mp4", "duration": "9:13"},
    {"title": "OLD Tv 2018", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795557782/OLD_MOF_Tv_-_2019_m9nywa.mp4", "duration": "10:33"}
  ] },
  { id: "reports", tone: "#d2acff", wash: "#513477", label: "MOF REPORTS", videos: [
    {"title": "MOF REPORTS - Ep 01", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553725/MOF_REPORTS_-_EP01_hsbpgp.mp4", "duration": "5:10"},
    {"title": "MOF REPORTS - Ep 02", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553703/MOF_REPORTS_-_EP02_txhsr1.mp4", "duration": "5:23"},
    {"title": "MOF REPORTS - Ep 03", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553753/MOF_REPORTS_-_EP03_zjrof9.mp4", "duration": "7:30"},
    {"title": "MOF REPORTS - Ep 04", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553754/MOF_REPORTS_-_EP04_it3yhz.mp4", "duration": "6:17"},
    {"title": "MOF REPORTS - Ep 05", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553749/MOF_REPORTS_-_EP05_gv66mk.mp4", "duration": "6:40"},
    {"title": "MOF REPORTS - Ep 06 END", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553737/MOF_REPORTS_-_EP06_END_eve0i3.mp4", "duration": "6:08"}
  ] },
  { id: "tapes", tone: "#81d9f2", wash: "#285a68", label: "MOF TAPES", videos: [
    {"title": "MOF TAPES - 01", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554604/MOF_TAPES_01_nu3ah4.mp4", "duration": "10:58"},
    {"title": "MOF TAPES - 02", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554616/MOF_TAPES_02_qrt0ds.mp4", "duration": "12:57"},
    {"title": "MOF TAPES - 03", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554610/MOF_TAPES_03_uhpbsi.mp4", "duration": "9:27"}
  ] },
  { id: "dub", tone: "#ffa0cb", wash: "#793650", label: "MOF DUB", videos: [
    {"title": "DUB 2019 - SNK", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552086/DUB_2019_-_SNK_pzskep.mp4", "duration": "6:50"},
    {"title": "DUB 2020 - CLASS", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552088/DUB_2020_-_CLASS_ph01pg.mp4", "duration": "16:02"},
    {"title": "DUB 2021 - TEAM 1", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552108/DUB_2021_-_TEAM_1_ct1xmo.mp4", "duration": "10:45"},
    {"title": "DUB 2021 - TEAM 2", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552110/DUB_2021_-_TEAM_2_lpyva0.mp4", "duration": "9:18"},
    {"title": "DUB 2021 - TEAM 3", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552060/DUB_2021_-_TEAM_3_mlmvde.mp4", "duration": "7:17"},
    {"title": "DUB 2021 - TEAM 4", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552055/DUB_2021_-_TEAM_4_xaersf.mp4", "duration": "4:56"},
    {"title": "DUB 2022 - PRIME 1", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552106/DUB_2022_-_PRIME_1_qkntvf.mp4", "duration": "16:40"},
    {"title": "DUB 2022 - PRIME 2", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552104/DUB_2022_-_PRIME_2_cm0ixx.mp4", "duration": "15:05"},
    {"title": "DUB 2022 - PRIME 3", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552105/DUB_2022_-_PRIME_3_a85rzj.mp4", "duration": "14:26"},
    {"title": "DUB 2022 - PRIME 4", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553454/Dub_2022_-_Prime_4_pkqgpq.mp4", "duration": "17:07"},
    {"title": "DUB 2022 - TEAM 1", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552096/DUB_2022_-_TEAM_1_autllq.mp4", "duration": "8:11"},
    {"title": "DUB 2022 - TEAM 2", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552037/DUB_2022_-_TEAM_2_u1lfj7.mp4", "duration": "1:26"},
    {"title": "DUB 2022 - TEAM 3", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552096/DUB_2022_-_TEAM_3_yiqa4f.mp4", "duration": "7:46"}
  ] },
  { id: "news", tone: "#f4ce78", wash: "#765726", label: "MOF NEWS", videos: [
    {"title": "MOF NEWS 1", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795557579/Mof_News_1_wjq6oj.mp4", "duration": "12:12"},
    {"title": "MOF NEWS 2", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795557575/Mof_News_2_lpa68j.mp4", "duration": "17:06"},
    {"title": "MOF NEWS 3", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556922/MOF_NEWS_3_uu1wdi.mp4", "duration": "8:16"},
    {"title": "MOF NEWS 4", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556942/MOF_NEWS_4_bktsbf.mp4", "duration": "7:41"},
    {"title": "MOF NEWS 5", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556914/MOF_NEWS_5_blwktr.mp4", "duration": "5:29"}
  ] },
  { id: "live", tone: "#86e7bf", wash: "#2d674f", label: "MOF LIVE", videos: [
    {"title": "MOF COMMENTS P1 (19.03.2020)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553029/19.03.2020_TOP_MOF_COMMENTS_LIVE_PART_1_s51fa3.mp4", "duration": "44:22"},
    {"title": "MOF COMMENTS P2 (19.03.2020)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795553020/19.03.2020_TOP_MOF_COMMENTS_LIVE_PART_2_pcbl44.mp4", "duration": "21:36"},
    {"title": "MOF COMMENTS P3 (22.03.2020)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795555348/22_03_2020_TOP_MOF_Comments_LIVE_zti4cv.mp4", "duration": "109:40"},
    {"title": "TALENT SHOW 1 (24.03.2020)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795560765/Talent-Show-2020-03-24-compressed_jktfa7.mp4", "duration": "112:36"},
    {"title": "TALENT SHOW 2 (27.06.2020)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795560769/Talent-Show-2020-06-27-compressed_reil8w.mp4", "duration": "123:28"},
    {"title": "MOF LIVE 1 (21.06.2020)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795559312/21-06-2020-compressed_xjwwcn.mp4", "duration": "138:26"},
    {"title": "MOF LIVE 2 (25.07.2020)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795558467/25-07-2020-compressed_wjfaye.mp4", "duration": "129:49"}
  ] },
  { id: "call", tone: "#91baff", wash: "#344f82", label: "MOF CALL", title: "المكالمة الموفية", videos: [
    {"title": "المكالمة الموفية - الحلقة الأولى", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552929/%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D9%81%D9%8A%D8%A9_-_%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_1_ctyuoz.mp4", "duration": "10:39"},
    {"title": "المكالمة الموفية - الحلقة الثانية", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552414/%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D9%81%D9%8A%D8%A9_-_%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_2_e7se2i.mp4", "duration": "5:51"},
    {"title": "المكالمة الموفية - الحلقة الثالثة", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552411/%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D9%81%D9%8A%D8%A9_-_%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_3_fwgibl.mp4", "duration": "7:26"},
    {"title": "المكالمة الموفية - الحلقة الرابعة", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552411/%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D9%81%D9%8A%D8%A9_-_%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_4_twwzw0.mp4", "duration": "6:59"},
    {"title": "المكالمة الموفية - الحلقة الخامسة", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552720/%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D9%81%D9%8A%D8%A9_-_%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_5_yewcap.mp4", "duration": "9:41"},
    {"title": "المكالمة الموفية - الحلقة السادسة", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552418/%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D9%81%D9%8A%D8%A9_-_%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_6_hvvwn7.mp4", "duration": "7:07"},
    {"title": "المكالمة الموفية - الحلقة الأخيرة", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795552418/%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D9%81%D9%8A%D8%A9_-_%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_7_cvrqp1.mp4", "duration": "7:45"}
  ] },
  { id: "serie", tone: "#ff8d82", wash: "#77383c", label: "MOF SERIE", title: "شبحان و روح واحدة", videos: [
    {"title": "شبحان و روح واحدة - الحلقة الأولى", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554806/two_ghosts_and_one_spirit_-_01_powi9b.mp4", "duration": "8:09"},
    {"title": "شبحان و روح واحدة - الحلقة الثانية", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554807/two_ghosts_and_one_spirit_-_02_ylvi7u.mp4", "duration": "13:25"},
    {"title": "شبحان و روح واحدة - الحلقة الثالثة", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554805/two_ghosts_and_one_spirit_-_03_co1aki.mp4", "duration": "9:55"},
    {"title": "شبحان و روح واحدة - الحلقة الرابعة", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554808/two_ghosts_and_one_spirit_-_04_sgwjza.mp4", "duration": "10:02"},
    {"title": "شبحان و روح واحدة - الحلقة الخامسة", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554830/two_ghosts_and_one_spirit_-_05_xofeke.mp4", "duration": "20:11"}
  ] },
  { id: "stories", tone: "#f6a9ed", wash: "#71376f", label: "MOF STORIES", videos: [
    {"title": "MOF STORIES - Teaser", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554113/MOF_STORIES_Pv_bnkucn.mp4", "duration": "0:15"},
    {"title": "MOF STORIES - EP01", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554137/MOF_Stories_-_EP01_yfh6s5.mp4", "duration": "11:43"},
    {"title": "MOF STORIES - EP02", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554123/MOF_Stories_-_EP02_nu6b4h.mp4", "duration": "8:45"},
    {"title": "MOF STORIES - EP03", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554125/MOF_Stories_-_EP03_h5pkj1.mp4", "duration": "13:03"},
    {"title": "MOF STORIES - EP04", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554124/MOF_Stories_-_EP04_rbvhm0.mp4", "duration": "8:48"},
    {"title": "MOF STORIES - EP05", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554197/MOF_Stories_-_EP05_pdowkk.mp4", "duration": "12:39"}
  ] },
  { id: "comments", tone: "#c7df87", wash: "#536639", label: "MOF COMMENTS", title: "TOP MOF COMMENTS", videos: [
    {"title": "Top Mof Comments 1", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554709/Top_Mof_Comments_1_xugwq8.mp4", "duration": "6:10"},
    {"title": "Top Mof Comments 2", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554694/Top_Mof_Comments_2_cxeocq.mp4", "duration": "5:56"},
    {"title": "Top Mof Comments 3", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554714/Top_Mof_Comments_3_kdz9jf.mp4", "duration": "5:28"},
    {"title": "Top Mof Comments 4", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554710/Top_Mof_Comments_4_akuo6n.mp4", "duration": "8:02"},
    {"title": "Top Mof Comments 5", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554743/Top_Mof_Comments_5_m2yfsm.mp4", "duration": "7:31"}
  ] },
  { id: "voice-over", tone: "#9caaff", wash: "#414b81", label: "MOF VOICE OVER", videos: [
    {"title": "العابر الأخير", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795555420/%D8%A7%D9%84%D8%B9%D8%A7%D8%A8%D8%B1_%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1_lh4n5r.mp4", "duration": "2:03"},
    {"title": "كفاح روح", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795561734/kifah-rouh_j3vj75.mp4", "duration": "10:55"},
    {"title": "أفضل 5 أفلام موسيقية", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795554940/TOP_5_MUSICAL_MOVIES_kqktdx.mp4", "duration": "11:10"}
  ] },
  { id: "randoms", tone: "#ffb38d", wash: "#794a45", label: "MOF RANDOMS", title: "عشوائيات", videos: [
    {"title": "Wissada chan Review 1", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556413/Wissada_chan_Review_di93l4.mp4", "duration": "2:51"},
    {"title": "Wissada chan Review 2", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556474/Wissada_Chan_-_REVIEW_bvi4s0.mp4", "duration": "6:28"},
    {"title": "MOF Anniversary 2019", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556456/MOF_anniversary_2019_igonb8.mp4", "duration": "4:01"},
    {"title": "STORY TIME", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556610/STORY_TIME_z8yvp7.mp4", "duration": "4:36"},
    {"title": "MOF BUZZ 01", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556421/mof_buz_1_rktazf.mp4", "duration": "2:15"},
    {"title": "MOF BUZZ 02", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556410/mof_buzz_2_du787s.mp4", "duration": "1:15"},
    {"title": "Control all", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556463/control_all_iis4o2.mp4", "duration": "4:44"},
    {"title": "Makeup shippuden", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556362/makeup_shippuden_gbhoqj.mp4", "duration": "1:30"},
    {"title": "SNK O.Meme", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556240/snk_meme_2018_dzcdpi.mp4", "duration": "3:32"},
    {"title": "Ozil Dance", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556417/%D8%A3%D9%88%D8%B2%D9%8A%D9%84_%D9%84%D9%85%D8%B1%D9%8A%D9%88%D9%84_zwiwj8.mp4", "duration": "2:08"},
    {"title": "Ozil Dreams", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556413/ezgif-2-8b1f63784f65_pdqipe.mp4", "duration": "1:59"},
    {"title": "Ozil Fghunssi", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556232/Ozil_Fghunssi_csqas9.mp4", "duration": "0:23"},
    {"title": "Attack on Ozil", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556320/Attack_on_Ozil_spp4db.mp4", "duration": "0:51"},
    {"title": "Benchlikha Possible", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556466/KIM_OZIL_b8djnw.mp4", "duration": "0:59"},
    {"title": "Missing Ozil", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556445/%D8%A3%D9%88%D8%B2%D9%8A%D9%84_%D9%85%D9%81%D9%82%D9%88%D8%AF_e5ttov.mp4", "duration": "0:54"},
    {"title": "Dub out of context", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556404/ezgif-5-5ee7bfc5b1_odu08q.mp4", "duration": "0:44"},
    {"title": "MOF DARK INTRO", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556483/DARK_esuyag.mp4", "duration": "1:23"},
    {"title": "V.Saga (Dub)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556477/V.Saga_Dub_iobui1.mp4", "duration": "1:22"},
    {"title": "D.Note (DUB)", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556441/D.N_DUB_a9fh1d.mp4", "duration": "0:46"},
    {"title": "SNK Alt DUB", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556606/DUB_com_rm92aq.mp4", "duration": "3:32"},
    {"title": "Aymane Dub", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556452/aymandub_ybccio.mp4", "duration": "4:47"},
    {"title": "Twist away", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556484/Twist_away_kynm5o.mp4", "duration": "1:34"},
    {"title": "M.Humburger", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556245/Humburger_q3rna9.mp4", "duration": "0:52"},
    {"title": "MOF GREAT WARS", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556246/mof_wars_zham9b.mp4", "duration": "1:35"},
    {"title": "Ozil out of context", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556428/Ozil_out_of_context_aihokg.mp4", "duration": "0:32"},
    {"title": "OZIL KHAMASS", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556234/OZIL_KHAMASS_upxfiq.mp4", "duration": "0:17"},
    {"title": "Mof Anime Awards", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556430/Mof_Anime_Awards_vbfwgx.mp4", "duration": "19:02"},
    {"title": "Dragon ball M.Review", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556475/Dbz-review_dikplq.mp4", "duration": "5:09"},
    {"title": "Lionel Ozil", "src": "https://res.cloudinary.com/dbo59baai/video/upload/v1795556252/Lionel_Ozil_ntnmqd.mp4", "duration": "0:40"}
  ] }
];

const byId = (id) => document.getElementById(id);
const home = byId("home-view");
const collectionView = byId("collection-view");
const search = byId("search");
const links = byId("collection-links");
const playlist = byId("playlist");
const player = byId("player");
const playerError = byId("player-error");
const screenMessage = byId("screen-message");
const sectionTitle = byId("section-title");

const iconPaths = [
  'M3 5h18v13H3z M9 21h6 M10 9l5 3-5 3z',
  'M6 3h9l3 3v15H6z M9 11h6 M9 15h6',
  'M3 6h18v12H3z M7 10h10l2 4H5z M9 12h6',
  'M3 10h4l5-4v12l-5-4H3z M16 9q4 3 0 6 M19 6q6 6 0 12',
  'M4 4h16v16H4z M8 8h8 M8 12h3 M8 16h8',
  'M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2 M8 8q-4 4 0 8 M16 8q4 4 0 8 M5 5q-7 7 0 14 M19 5q7 7 0 14',
  'M6 3l4 5-2 3q2 4 5 5l3-2 5 4-2 3C10 22 2 14 3 5z',
  'M4 3h16v18H4z M4 7h4 M4 17h4 M16 7h4 M16 17h4 M10 9l5 3-5 3z',
  'M7 3h10v18H7z M10 17h4',
  'M3 4h18v12H10l-5 4v-4H3z M7 8h10 M7 12h7',
  'M9 6a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0z M6 11v1a6 6 0 0 0 12 0v-1 M12 18v3 M9 21h6',
  'M3 6h4l10 12h4 M17 14l4 4-4 4 M3 18h4l10-12h4 M17 2l4 4-4 4'
];
const svgNS = "http://www.w3.org/2000/svg";

const tiles = collections.map((collection, index) => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#" + collection.id;
  link.className = "tile";
  link.style.setProperty("--order", index);
  link.style.setProperty("--tone", collection.tone);
  const iconBox = document.createElement("span");
  iconBox.className = "category-icon";
  iconBox.setAttribute("aria-hidden", "true");
  const icon = document.createElementNS(svgNS, "svg");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("width", "21");
  icon.setAttribute("height", "21");
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", iconPaths[index]);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "1.5");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("stroke-linecap", "round");
  icon.append(path);
  iconBox.append(icon);
  const label = document.createElement("strong");
  label.textContent = collection.label;
  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  link.append(iconBox, label, arrow);
  item.append(link);
  links.append(item);
  return item;
});

let searchTransition = 0;
async function filterCollections() {
  const generation = ++searchTransition;
  const query = search.value.trim().toLocaleLowerCase();
  const directory = byId("collection-links");
  const results = byId("video-hits");
  const empty = byId("no-results");
  const searching = Boolean(query);
  const reducedMotion = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const outgoing = searching ? directory : results;
  const incoming = searching ? results : directory;
  if (!outgoing.hidden) {
    if (!reducedMotion) {
      await outgoing.animate([{opacity:1},{opacity:0}],
        {duration:250,easing:"ease-in-out"}).finished.catch(() => {});
    }
    if (generation !== searchTransition) return;
    outgoing.hidden = true;
  }
  if (generation !== searchTransition) return;
  empty.hidden = true;
  if (searching) {
    results.replaceChildren();
    results.scrollTop = 0;
    for (const collection of collections) {
      for (const [index, video] of collection.videos.entries()) {
        if (!video.title.toLocaleLowerCase().includes(query)) continue;
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#" + collection.id + "/" + (index + 1);
        const name = document.createElement("span");
        const category = document.createElement("small");
        name.dir = "auto";
        name.textContent = video.title;
        category.textContent = collection.label;
        link.append(name, category);
        li.append(link);
        results.append(li);
      }
    }
    empty.hidden = results.childElementCount > 0;
  }
  const wasHidden = incoming.hidden;
  incoming.hidden = searching && !results.childElementCount;
  if (wasHidden && !incoming.hidden && !reducedMotion) {
    incoming.animate([{opacity:0},{opacity:1}], {duration:300,easing:"ease-in-out"});
  }
}

const playerTools = byId("player-tools");
const seek = byId("player-seek");
const playButton = byId("player-toggle");
const volume = byId("player-volume");
const muteButton = byId("player-mute");
const fullscreenButton = byId("player-fullscreen");
const playerScreen = byId("player-screen");
const playerClock = byId("player-clock");
const mobileView = matchMedia("(max-width:899px), (hover:none) and (pointer:coarse)");
let selectedDuration = 0;
let scrubbing = false;

function playbackDuration() {
  return selectedDuration || (Number.isFinite(player.duration) ? player.duration : 0);
}


function formatTime(seconds) {
  const total = Number.isFinite(seconds) ? Math.floor(seconds) : 0;
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const remainder = String(total % 60).padStart(2, "0");
  return hours ? hours + ":" + String(minutes).padStart(2, "0") + ":" + remainder : minutes + ":" + remainder;
}

function syncPlayer() {
  const duration = playbackDuration();
  const progress = duration ? Math.min(1, player.currentTime / duration) : 0;
  seek.disabled = !duration;
  if (!scrubbing) {
    seek.value = Math.round(progress * 1000);
    seek.style.setProperty("--progress", progress * 100 + "%");
    seek.setAttribute("aria-valuetext", formatTime(player.currentTime));
    const clock = formatTime(player.currentTime) + " / " + (duration ? formatTime(duration) : "—");
    if (playerClock.textContent !== clock) playerClock.textContent = clock;
  }
  const stopped = player.paused || player.ended;
  playButton.toggleAttribute("data-active", !stopped);
  playButton.title = stopped ? "Play" : "Pause";
  playButton.setAttribute("aria-label", playButton.title);
  const silent = player.muted || player.volume === 0;
  muteButton.toggleAttribute("data-active", silent);
  muteButton.title = silent ? "Unmute" : "Mute";
  muteButton.setAttribute("aria-label", muteButton.title);
  volume.value = player.muted ? 0 : player.volume;
  volume.style.setProperty("--progress", Number(volume.value) * 100 + "%");
}

function togglePlayback() {
  if (player.paused || player.ended) player.play().catch(() => {});
  else {
    player.pause();
    // On mobile, resume audio in the same user gesture as the pause tap.
    if (mobileView.matches) syncArchiveMusic();
  }
}

for (const event of ["timeupdate", "loadedmetadata", "durationchange", "play", "pause", "ended", "volumechange", "emptied"]) {
  player.addEventListener(event, syncPlayer);
}
playButton.addEventListener("click", togglePlayback);
let wakeTouch = false;
player.addEventListener("pointerdown", event => {
  wakeTouch = event.pointerType !== "mouse" && playerTools.classList.contains("resting");
});
player.addEventListener("click", () => {
  if (!wakeTouch && !(mobileView.matches && playerScreen.classList.contains("is-expanded"))) togglePlayback();
  wakeTouch = false;
  showTools();
});
seek.addEventListener("input", () => {
  scrubbing = true;
  const duration = playbackDuration();
  if (duration) playerClock.textContent = formatTime(duration * Number(seek.value) / 1000) + " / " + formatTime(duration);
  seek.style.setProperty("--progress", Number(seek.value) / 10 + "%");
  showTools();
});
let lastSeekValue = -1;
let lastSeekAt = 0;
function commitSeek(value = Number(seek.value)) {
  const duration = Number.isFinite(player.duration) && player.duration > 0 ? player.duration : playbackDuration();
  scrubbing = false;
  if (!duration) return;
  if (lastSeekValue === value && performance.now() - lastSeekAt < 250) return;
  lastSeekValue = value;
  lastSeekAt = performance.now();
  const target = Math.max(0, Math.min(duration * value / 1000, duration - .1));
  if (player.readyState >= HTMLMediaElement.HAVE_METADATA) player.currentTime = target;
  else player.addEventListener("loadedmetadata", () => { player.currentTime = target; }, {once:true});
  syncPlayer();
  showTools();
}
seek.addEventListener("change", () => commitSeek());
seek.addEventListener("pointerup", () => {
  const value = Number(seek.value);
  setTimeout(() => commitSeek(value), 0);
});
volume.addEventListener("input", () => {
  player.volume = Number(volume.value);
  player.muted = false;
  syncPlayer();
});
muteButton.addEventListener("click", () => {
  if (player.volume === 0) {
    player.volume = .7;
    player.muted = false;
  } else {
    player.muted = !player.muted;
  }
});
function updateFullscreen(fallback = false) {
  const active = fallback || document.fullscreenElement === playerScreen;
  playerScreen.classList.toggle("is-expanded", active);
  playerScreen.toggleAttribute("data-fullscreen-fallback", fallback);
  playerScreen.toggleAttribute("data-landscape", active && mobileView.matches);
  document.body.classList.toggle("player-expanded", active);
  fullscreenButton.toggleAttribute("data-active", active);
  const label = active ? "Exit fullscreen" : "Fullscreen";
  fullscreenButton.title = label;
  fullscreenButton.setAttribute("aria-label", label);
  if (active) showTools();
}

let fullscreenHistoryGuard = false;
let fullscreenReturnHash = "";
let ignoreFullscreenHash = "";
function guardFullscreenBack() {
  if (fullscreenHistoryGuard || !mobileView.matches) return;
  fullscreenReturnHash = location.hash;
  // A distinct history URL survives mobile in-app browsers that coalesce equal URLs.
  history.pushState({ ...(history.state || {}), mofFullscreen: true }, "", fullscreenReturnHash + "/fullscreen");
  fullscreenHistoryGuard = true;
}
function consumeFullscreenBack() {
  if (!fullscreenHistoryGuard) return;
  fullscreenHistoryGuard = false;
  ignoreFullscreenHash = fullscreenReturnHash;
  history.back();
}
window.addEventListener("popstate", () => {
  if (!fullscreenHistoryGuard) return;
  fullscreenHistoryGuard = false;
  ignoreFullscreenHash = fullscreenReturnHash;
  if (document.fullscreenElement === playerScreen) document.exitFullscreen().catch(() => updateFullscreen());
  else updateFullscreen();
});

async function exitPlayerFullscreen() {
  consumeFullscreenBack();
  if (document.fullscreenElement === playerScreen) {
    await document.exitFullscreen();
  } else {
    updateFullscreen();
  }
}

fullscreenButton.addEventListener("click", async () => {
  if (playerScreen.classList.contains("is-expanded")) {
    await exitPlayerFullscreen().catch(() => {});
    return;
  }
  try {
    if (!document.fullscreenEnabled || !playerScreen.requestFullscreen) {
      updateFullscreen(true);
      guardFullscreenBack();
      return;
    }
    await playerScreen.requestFullscreen();
  } catch {
    updateFullscreen(true);
    guardFullscreenBack();
    return;
  }
  guardFullscreenBack();
  if (mobileView.matches && document.fullscreenElement === playerScreen) {
    // A rotated surface also covers browsers that reject orientation locking.
    try { await screen.orientation?.lock?.("landscape"); } catch {}
  }
});
document.addEventListener("fullscreenchange", () => {
  const wasLandscape = playerScreen.hasAttribute("data-landscape");
  updateFullscreen(playerScreen.hasAttribute("data-fullscreen-fallback"));
  if (wasLandscape && document.fullscreenElement !== playerScreen) screen.orientation?.unlock?.();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && playerScreen.hasAttribute("data-fullscreen-fallback")) exitPlayerFullscreen().catch(() => {});
});

playerScreen.addEventListener("contextmenu", event => event.preventDefault());
// Original dialogue and media recovered from the supplied executable.
// Branch connections are reconstructed because the original Dart source is unavailable.
const story = {
  "menu": {
    "text": "",
    "bg": "MainMenuBackground",
    "actor": "GameTitle",
    "choices": [
      [
        "ابدأ اللعبة",
        "opening"
      ],
      [
        "طريقة اللعب",
        "instructions"
      ]
    ]
  },
  "instructions": {
    "text": "هذه لعبة قائمة على الاختيار, كل قرار تتخذه يقرر مصير شخصيتك وربما موتها\n .اختر بحكمة\n\nسوف تمر بسيناريوهات مختلفة ، كل منها يقدم قرارين ، كل قرار تتخذه سيؤثر على التالي ، حتى تصل إلى نهاية القصة\n\nهناك 3 نهايات، جرب قرارات مختلفة في كل جولة ولاحظ كيف تؤثر على النهاية.\n\nنصيحة: اختر القرارات الصحيحة",
    "bg": "HowToPlayBackground",
    "choices": [
      [
        "تابع",
        "menu"
      ]
    ]
  },
  "gender": {
    "text": "للتوقف عن الخلط بين الجنسين... قل لي:",
    "bg": "House",
    "choices": [
      [
        "ذكر",
        "chooseMale"
      ],
      [
        "أنثى",
        "chooseFemale"
      ]
    ]
  },
  "chooseMale": {
    "text": "من هو بطلنا ..... أو بطلتنا؟",
    "bg": "MainMenuBackground",
    "choices": [
      [
        "الشخصية الأولى",
        "player1"
      ],
      [
        "الشخصية الثانية",
        "player3"
      ],
      [
        "الشخصية الثالثة",
        "player5"
      ]
    ]
  },
  "chooseFemale": {
    "text": "من هو بطلنا ..... أو بطلتنا؟",
    "bg": "MainMenuBackground",
    "choices": [
      [
        "الشخصية الأولى",
        "player2"
      ],
      [
        "الشخصية الثانية",
        "player4"
      ]
    ]
  },
  "player1": {
    "text": "",
    "bg": "MainMenuBackground",
    "player": 1,
    "actor": "Player1",
    "voice": "Player1Quote",
    "choices": [
      [
        "اختيار هذه الشخصية",
        "bored"
      ],
      [
        "رجوع",
        "gender"
      ]
    ]
  },
  "player2": {
    "text": "",
    "bg": "MainMenuBackground",
    "player": 2,
    "actor": "Player2",
    "voice": "Player2Quote",
    "choices": [
      [
        "اختيار هذه الشخصية",
        "bored"
      ],
      [
        "رجوع",
        "gender"
      ]
    ]
  },
  "player3": {
    "text": "",
    "bg": "MainMenuBackground",
    "player": 3,
    "actor": "Player3",
    "voice": "Player3Quote",
    "choices": [
      [
        "اختيار هذه الشخصية",
        "bored"
      ],
      [
        "رجوع",
        "gender"
      ]
    ]
  },
  "player4": {
    "text": "",
    "bg": "MainMenuBackground",
    "player": 4,
    "actor": "Player4",
    "voice": "Player4Quote",
    "choices": [
      [
        "اختيار هذه الشخصية",
        "bored"
      ],
      [
        "رجوع",
        "gender"
      ]
    ]
  },
  "player5": {
    "text": "",
    "bg": "MainMenuBackground",
    "player": 5,
    "actor": "Player5",
    "voice": "Player5Quote",
    "choices": [
      [
        "اختيار هذه الشخصية",
        "bored"
      ],
      [
        "رجوع",
        "gender"
      ]
    ]
  },
  "opening": {
    "text": "كان اليوم يقترب من نهايته.\nكان الجميع إما ينامون أو يخرجون إلى الحانة لتناول بعض المشروبات.\nبطلنا... أو بطلتنا لم تكن من عشاق النوم، لذلك قرر... أو قررت الذهاب إلى الحانة.",
    "bg": "House",
    "reset": true,
    "music": "OpeningMusic",
    "voice": "NarratorOpening",
    "choices": [["تابع", "gender"]]
  },
  "bored": {
    "text": "أنت: يا إلهي ، أشعر بالملل ولا أستطيع النوم ، اظن انني سأذهب إلى الحانه المجاورة",
    "bg": "House",
    "actor": "$player",
    "voice": "$Bored",
    "choices": [
      [
        "تابع",
        "streetIntro"
      ]
    ]
  },
  "streetIntro": {
    "text": "في طريقك إلى الحانة ، تقابل رجلًا جائعًا بلا مأوى",
    "bg": "NightOutSide1",
    "actor": "HomelessMan",
    "voice": "NarratorHomeless",
    "choices": [
      [
        "تابع",
        "street"
      ]
    ]
  },
  "street": {
    "text": "الرجل المتشرد: مرحبًا ، ارجوك ساعدني ، ليس لدي ما آكله ، هل يمكنك أن تعطيني بعض المال ، من فضلك؟",
    "bg": "NightOutSide1",
    "actor": "HomelessMan",
    "voice": "HomelessManHello",
    "choices": [
      [
        "طبعا، تفضل",
        "give"
      ],
      [
        "اعتدر ولكن ليس معي نقوذ",
        "refuse"
      ]
    ]
  },
  "give": {
    "text": "أنت: طبعا، تفضل",
    "bg": "NightOutSide1",
    "helped": true,
    "actor": "$player",
    "voice": "$GiveMoney",
    "choices": [
      [
        "تابع",
        "thanks"
      ]
    ]
  },
  "thanks": {
    "text": "الرجل المتشرد: شكرا جزيلا ، سأرد لك الجميل يوما ما! ",
    "bg": "NightOutSide1",
    "actor": "HomelessMan",
    "voice": "HomelessManThanks",
    "choices": [
      [
        "تابع",
        "door"
      ]
    ]
  },
  "refuse": {
    "text": "أنت: اعتدر ولكن ليس معي نقوذ",
    "bg": "NightOutSide1",
    "helped": false,
    "actor": "$player",
    "voice": "$NoMoney",
    "choices": [
      [
        "تابع",
        "angry"
      ]
    ]
  },
  "angry": {
    "text": "!الرجل المتشرد: كاذب! كاذب! أتمنى أن يقتلك سفاء أو شيء ما",
    "bg": "NightOutSide1",
    "actor": "HomelessMan",
    "voice": "HomelessManAngry",
    "choices": [
      [
        "تابع",
        "door"
      ]
    ]
  },
  "door": {
    "text": "وصلت أخيرًا إلى الحانة ، عند الباب تقف سيدة مثيرة للغاية",
    "bg": "BarDoor",
    "actor": "MommyNeutral",
    "voice": "NarratorBarDoor",
    "choices": [
      [
        "تابع",
        "drink"
      ]
    ]
  },
  "drink": {
    "text": "السيدة المثيرة: مرحبًا ، اتود احتساء مشروب ما معي؟",
    "bg": "BarDoor",
    "actor": "MommyNeutral",
    "voice": "MommyHaveADrink",
    "choices": [
      [
        "اجل! بالتأكيد لما لا. * إنها ليلة حظي *",
        "accept"
      ],
      [
        "لا ، شكرًا لك ، لست في مزاج للحذيت مع احد",
        "reject"
      ]
    ]
  },
  "accept": {
    "text": "*أنت: اجل! بالتأكيد لما لا. *إنها ليلة حظي",
    "bg": "BarDoor",
    "actor": "$player",
    "voice": "$LuckyNight",
    "choices": [
      [
        "تابع",
        "seat"
      ]
    ]
  },
  "seat": {
    "text": "السيدة المثيرة: رائع ، دعنا نذهب ، أنا جالسة في تلك على الطاولة",
    "bg": "BarInside",
    "actor": "MommyHappy",
    "voice": "MommyLetsHaveASeat",
    "choices": [
      [
        "تابع",
        "table"
      ]
    ]
  },
  "table": {
    "text": "جلستما على الطاولة معًا وتحدثتما قليلاً",
    "bg": "BarInside",
    "choices": [
      [
        "تابع",
        "flirt"
      ]
    ]
  },
  "flirt": {
    "text": "السيدة المثيرة: أنا معجبة بك فعلا ، لديك كلا الجمال والكاريزما",
    "bg": "BarInside",
    "actor": "MommyHappy",
    "voice": "MommyILikeYou",
    "choices": [
      [
        "شكرا لك ، أنت سيدة لطيفة جدا, أنا أيضا معجب بك",
        "flirtback"
      ],
      [
        "حسنًا اسمعي ، أنا هنا فقط لأحتسي مشروبًا ، لست مهتمًا بصنع قصة حب أو أي شيء.",
        "onlydrink"
      ]
    ]
  },
  "flirtback": {
    "text": "أنت: شكرا لك ، أنت سيدة لطيفة جدا, أنا أيضا معجب بك",
    "bg": "BarInside",
    "actor": "$player",
    "voice": "$FlirtBack",
    "choices": [
      [
        "تابع",
        "sweet"
      ]
    ]
  },
  "sweet": {
    "text": "السيدة المثيرة: آه ، ما أحلاك!",
    "bg": "BarInside",
    "actor": "MommyPleased",
    "voice": "MommyHowSweet",
    "choices": [
      [
        "تابع",
        "toilet"
      ]
    ]
  },
  "onlydrink": {
    "text": "أنت: حسنًا اسمعي ، أنا هنا فقط لأحتسي مشروبًا ، لست مهتمًا بصنع قصة حب أو أي شيء.",
    "bg": "BarInside",
    "actor": "$player",
    "voice": "$OnlyDrink",
    "choices": [
      [
        "تابع",
        "notinterested"
      ]
    ]
  },
  "notinterested": {
    "text": "السيدة المثيرة: أغخ! لم أكن معجبتا بك أيها الأحمق الغبي! * ثم تغادر *",
    "bg": "BarInside",
    "actor": "MommyAngry",
    "voice": "MommyIDidntLikeYou",
    "choices": [
      [
        "تابع",
        "gohome"
      ]
    ]
  },
  "reject": {
    "text": "أنت: لا ، شكرًا لك ، لست في مزاج للحذيت مع احد",
    "bg": "BarDoor",
    "actor": "$player",
    "voice": "$NotInTheMood",
    "choices": [
      [
        "تابع",
        "ugly"
      ]
    ]
  },
  "ugly": {
    "text": "السيدة المثيرة: أنا لست مهتمًتا بوجهك القبيح أيضًا!",
    "bg": "BarDoor",
    "actor": "MommyAngry",
    "voice": "MommyYouUgly",
    "choices": [
      [
        "تابع",
        "freeDrink"
      ]
    ]
  },
  "freeDrink": {
    "text": "!أنت: حسنًا ... أنا لست جيدًا مع النساء ولكن على الاقل حصلت على مشروب مجاني",
    "bg": "BarDoor",
    "actor": "$player",
    "voice": "$NotGoodWithLadies",
    "choices": [
      [
        "تابع",
        "home"
      ]
    ]
  },
  "toilet": {
    "text": "السيدة المثيرة: إذا كنت لا تمانع ، سأذهب إلى المرحاض سريعًا وأعود",
    "bg": "BarInside",
    "actor": "MommyNeutral",
    "voice": "MommyToilet",
    "choices": [
      [
        "تابع",
        "stranger"
      ]
    ]
  },
  "stranger": {
    "text": "الرجل الغريب: مرحبًا ، أعلم أن هذا عشوائي ولكن عليك توخي الحذر ، فهذه المرأة خطيرة",
    "bg": "BarInside",
    "actor": "RandomGuy",
    "voice": "RandomGuyWatchout",
    "choices": [
      [
        "من الأفضل أن أخرج من المتاعب",
        "heed"
      ],
      [
        " ماذا؟ أتغار مني؟ سأظل معها",
        "jealous"
      ]
    ]
  },
  "heed": {
    "text": "أنت: أوه ... قد تكون على حق ، من الأفضل أن أخرج من المتاعب",
    "bg": "BarInside",
    "actor": "$player",
    "voice": "$NoTrouble",
    "choices": [
      [
        "تابع",
        "leaveNow"
      ]
    ]
  },
  "leaveNow": {
    "text": "الرجل الغريب: جيد ، اخرج من هنا الآن قبل أن تعود.",
    "bg": "BarInside",
    "actor": "RandomGuy",
    "voice": "RandomGuyGoOutNow",
    "choices": [
      [
        "تابع",
        "run"
      ]
    ]
  },
  "run": {
    "text": "* هذا الرجل يبدو جادًا من الأفضل أن أهرب قبل أن أوقع نفسي في المشاكل *",
    "bg": "BarInside",
    "actor": "$player",
    "choices": [
      [
        "تابع",
        "gohome"
      ]
    ]
  },
  "jealous": {
    "text": "أنت: ماذا؟ أتغار مني؟ سأظل معها",
    "bg": "BarInside",
    "actor": "$player",
    "voice": "$Jealous",
    "choices": [
      [
        "تابع",
        "warned"
      ]
    ]
  },
  "warned": {
    "text": "الرجل الغريب: مهما يكن ، لا تقل أنني لم أحذرك ... إذا استطعت",
    "bg": "BarInside",
    "actor": "RandomGuy",
    "voice": "RandomGuyWarnedYou",
    "choices": [
      [
        "تابع",
        "returned"
      ]
    ]
  },
  "returned": {
    "text": "!السيدة المثيرة: لقد عدت يا عزيزي",
    "bg": "BarInside",
    "actor": "MommyHappy",
    "voice": "MommyHoneyImBack",
    "choices": [
      [
        "تابع",
        "invite"
      ]
    ]
  },
  "invite": {
    "text": "السيدة المثيرة: أنا معجبه بك فعلا ، هل تريد أن تأتي إلى منزلي؟ الجو مظلم في الليل ولا أريد العودة إلى المنزل بنفسي ، لن تدع سيدة مثلي تذهب بمفردها ، أليس كذلك؟",
    "bg": "BarInside",
    "actor": "MommyHappy",
    "voice": "MommyLetsGoBackHome",
    "choices": [
      [
        "أوه هاها ، نعم من الذي سيسمح لسيدة جميلة مثلك بالذهاب بمفردها",
        "escort"
      ],
      [
        "اعتدر أنت لطيفة ، لكن أمي أخبرتني ألا أذهب إلى منازل الغرباء",
        "strangers"
      ]
    ]
  },
  "escort": {
    "text": " أنت: أوه هاها ، نعم من الذي سيسمح لسيدة جميلة مثلك بالذهاب بمفردها",
    "bg": "BarInside",
    "actor": "$player",
    "voice": "$FlirtBack",
    "choices": [
      [
        "تابع",
        "thankyou"
      ]
    ]
  },
  "thankyou": {
    "text": "السيدة المثيرة: أوه ، شكرا جزيلا لك!",
    "bg": "BarInside",
    "actor": "MommyPleased",
    "voice": "MommyThankYou",
    "choices": [
      [
        "تابع",
        "car"
      ]
    ]
  },
  "strangers": {
    "text": " أنت: اعتدر أنت لطيفة ، لكن أمي أخبرتني ألا أذهب إلى منازل الغرباء",
    "bg": "BarInside",
    "actor": "$player",
    "voice": "$NoStrangerHome",
    "choices": [
      [
        "تابع",
        "nofun"
      ]
    ]
  },
  "nofun": {
    "text": "السيدة المثيرة: أوه... أين هو المرح",
    "bg": "BarInside",
    "actor": "MommySad",
    "voice": "MommyWhereIsTheFun",
    "choices": [
      [
        "تابع",
        "needhelp"
      ]
    ]
  },
  "needhelp": {
    "text": "السيدة المثيرة: لكن مهلا ، أحتاج حقًا إلى مساعدتك، نفدت بطارية سيارتي وأحتاج إلى القليل من المساعدة، أرجوووووك",
    "bg": "BarInside",
    "actor": "MommySad",
    "voice": "MommyNeedHelp",
    "choices": [
      [
        "* كم هي مثيرة للشفقة.* نعم بالتأكيد ، لم لا",
        "pathetic"
      ],
      [
        "اابذو لكي كميكانيكي؟",
        "mechanic"
      ]
    ]
  },
  "pathetic": {
    "text": "أنت: * كم هي مثيرة للشفقة.* نعم بالتأكيد ، لم لا",
    "bg": "BarInside",
    "actor": "$player",
    "voice": "$HowPathetic",
    "choices": [
      [
        "تابع",
        "laugh"
      ]
    ]
  },
  "laugh": {
    "text": "السيدة المثيرة: *ضحك* شكرًا عزيزي.",
    "bg": "BarInside",
    "actor": "MommyHappy",
    "voice": "Mommylaughs",
    "choices": [
      [
        "تابع",
        "car"
      ]
    ]
  },
  "mechanic": {
    "text": "أنت: اابذو لكي كميكانيكي؟",
    "bg": "BarInside",
    "actor": "$player",
    "voice": "$Mechanic",
    "choices": [
      [
        "تابع",
        "stupid"
      ]
    ]
  },
  "stupid": {
    "text": "السيدة المثيرة: آخ ، يال الغباء!",
    "bg": "BarInside",
    "actor": "MommyAngry",
    "voice": "MommyWhatAStupid",
    "choices": [
      [
        "تابع",
        "loser"
      ]
    ]
  },
  "loser": {
    "text": "...السيدة المثيرة: يا لك من فاشل",
    "bg": "BarInside",
    "actor": "MommyAngry",
    "voice": "MommyYouLoser",
    "choices": [
      [
        "تابع",
        "gohome"
      ]
    ]
  },
  "car": {
    "text": "السيدة المثيرة: حسنا هل ترى السيارة هناك؟ خذ المفاتيح وحاول تشغيلها من فضلك سأذهب لأخذ شيئًا من صندوق السيارة بسرعة.",
    "bg": "InsideCar",
    "voice": "MommySomethingFromTheTrunk",
    "choices": [
      [
        "تابع",
        "knife"
      ]
    ]
  },
  "knife": {
    "text": "*السيدة المثيرة: *سحبت سكينًا حادًا جدًا واقتربت منك",
    "bg": "InsideCar",
    "actor": "MommyAngry",
    "voice": "NarratorKnife",
    "choices": [
      [
        "تابع",
        "whatknife"
      ]
    ]
  },
  "whatknife": {
    "text": "أنت: واه, ماذا تفعلين بهذا السكين ؟؟",
    "bg": "InsideCar",
    "actor": "$player",
    "voice": "$WhatKnife",
    "choices": [
      [
        "تابع",
        "$outcome"
      ]
    ]
  },
  "rescued": {
    "text": "الرجل المتشرد: قلت لك انني سأرد لك الجميل يوما ما",
    "bg": "InsideCar",
    "actor": "HomelessMan",
    "voice": "HomelessManEnding1",
    "choices": [
      [
        "تابع",
        "youagain"
      ]
    ]
  },
  "youagain": {
    "text": "أنت: أوه ، أنت مرة أخرى ، شكرًا لإنقاذ حياتي",
    "bg": "InsideCar",
    "actor": "$player",
    "voice": "$YouAgain",
    "choices": [
      [
        "تابع",
        "homelesslaugh"
      ]
    ]
  },
  "homelesslaugh": {
    "text": "الرجل المتشرد: *يضحك بجنون*",
    "bg": "InsideCar",
    "actor": "HomelessMan",
    "voice": "HomelessManEnding2",
    "choices": [
      [
        "تابع",
        "life"
      ]
    ]
  },
  "gohome": {
    "text": "",
    "bg": "NightOutSide1",
    "actor": "$player",
    "voice": "$GoHome",
    "choices": [
      [
        "تابع",
        "home"
      ]
    ]
  },
  "home": {
    "text": "",
    "bg": "BackHomeEnding",
    "ending": "نهاية العودة إلى المنزل",
    "music": "BitchlessEndingMusic",
    "actor": "BitchlessEndingTitle",
    "voice": "NarratorBitchlessEnding"
  },
  "life": {
    "text": "",
    "bg": "EndingLife",
    "ending": "نهاية النجاة",
    "music": "LifeEndingMusic",
    "actor": "LifeEndingTitle",
    "voice": "NarratorLifeEnding"
  },
  "death": {
    "text": "",
    "bg": "InsideCar",
    "ending": "نهاية الموت",
    "music": "DeathEndingMusic",
    "actor": "DeathEndingTitle",
    "voice": "NarratorDeathEnding"
  }
};
let selectedPlayer = 1;
let helpedHomeless = false;
const availableVoices = new Set(["Player3YouAgain", "HomelessManEnding1", "Player1Quote", "Player5WhatKnife", "Player5LuckyNight", "Player5GoHome", "MainMenuMusic", "Player3Bored", "Player5NotGoodWithLadies", "Player1HowPathetic", "Player5YouAgain", "Player5FlirtBack", "Player3GiveMoney", "Player5GiveMoney", "CarStartUp", "MommyHowSweet", "MommyToilet", "NarratorLifeEnding", "Player3Quote", "Player1OnlyDrink", "Player2Mechanic", "Player5NoMoney", "Player3NoTrouble", "HomelessManEnding2", "Player3HowPathetic", "MommyHoneyImBack", "Player5OnlyDrink", "Player2HowPathetic", "Player3Jealous", "Player2NotGoodWithLadies", "MommyHaveADrink", "Player1GoHome", "NarratorBarDoor", "NarratorFlirt", "AmongusKill", "Player4Quote", "Player1LuckyNight", "Player1NoStrangerHome", "Player3NoStrangerHome", "Player5Jealous", "MommyILikeYou", "RandomGuyWarnedYou", "Player3OnlyDrink", "Player1WhatKnife", "MommyIDidntLikeYou", "Player5Bored", "Player2NoMoney", "Player5Quote", "HomelessManAngry", "KnifeSlice", "Player2NoTrouble", "Player3NotGoodWithLadies", "Player5NoStrangerHome", "NarratorOpening", "Player2GiveMoney", "NarratorDeathEnding", "NarratorHomeless", "RandomGuyGoOutNow", "Player1NoTrouble", "OptionClicked", "MommyWhatAStupid", "HitSound", "MommySomethingFromTheTrunk", "Mommylaughs", "Player2Bored", "Player2LuckyNight", "HomelessManThanks", "Player2NoStrangerHome", "NarratorKnife", "Player1NotInTheMood", "BitchlessEndingMusic", "DeathEndingMusic", "Player2NotInTheMood", "Player1Bored", "Player2OnlyDrink", "Player1NoMoney", "MommyThankYou", "MommyYouUgly", "Player2GoHome", "HomelessManHello", "Player2Quote", "NarratorBitchlessEnding", "ImposterSound", "MommyLetsGoBackHome", "Player1YouAgain", "Player3Mechanic", "Player5HowPathetic", "Player1Jealous", "MommyYouLoser", "EchoesSkullgirls", "Player5Mechanic", "OpeningMusic", "BackButton", "MommyNeedHelp", "OptionSelected", "Player3FlirtBack", "Player3LuckyNight", "MommyLetsHaveASeat", "Player3GoHome", "Player5NotInTheMood", "MommyStrangers", "Player2WhatKnife", "Player5NoTrouble", "MommyWhereIsTheFun", "Player2Jealous", "Player2YouAgain", "Player3NotInTheMood", "Player3WhatKnife", "Player3NoMoney", "Player1FlirtBack", "Player1NotGoodWithLadies", "Player1Mechanic", "Player2FlirtBack", "Player1GiveMoney", "LifeEndingMusic", "RandomGuyWatchout"]);
const gameDialog = byId("game-dialog");
const gameChoices = byId("game-choices");
const gameAudio = new Map();
let gameVoice;
let gameMusic;
let stopWaitingForVoice = () => {};
let gameSound = true;

function getGameAudio(name) {
  if (!gameAudio.has(name)) {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = "./game/" + name + ".mp3";
    gameAudio.set(name, audio);
  }
  return gameAudio.get(name);
}

function startGameMusic(name) {
  gameMusic?.pause();
  gameMusic = getGameAudio(name);
  gameMusic.currentTime = 0;
  gameMusic.loop = true;
  gameMusic.volume = 1;
  gameMusic.muted = !gameSound;
  gameMusic.play().catch(() => {});
}

function sceneVoice(scene) {
  const voice = scene?.voice;
  return voice?.startsWith("$") ? "Player" + selectedPlayer + voice.slice(1) : voice;
}

function gameScene(id) {
  stopWaitingForVoice();
  gameVoice?.pause();
  gameVoice = undefined;
  if (id === "$outcome") id = helpedHomeless ? "rescued" : "death";
  const scene = story[id];
  if (scene.reset) helpedHomeless = false;
  if (scene.player) selectedPlayer = scene.player;
  if (typeof scene.helped === "boolean") helpedHomeless = scene.helped;
  if (id === "menu") startGameMusic("MainMenuMusic");
  if (scene.music) startGameMusic(scene.music);

  byId("game-stage").style.backgroundImage = 'url("./game/' + scene.bg + '.webp")';
  const art = byId("game-character");
  const actor = scene.actor === "$player" ? "Player" + selectedPlayer : scene.actor;
  art.hidden = !actor;
  if (actor) art.src = "./game/" + actor + ".webp";
  art.classList.toggle("game-title", id === "menu" || Boolean(scene.ending));
  byId("game-ending").textContent = scene.ending || "";
  byId("game-text").textContent = scene.text || "";
  gameChoices.replaceChildren();

  const choices = scene.choices || [["عاود اللعب", "menu"]];
  function showChoices() {
    for (const [label, next] of choices) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => gameScene(next));
      gameChoices.append(button);
    }
    gameChoices.firstElementChild.focus({preventScroll: true});
  }

  const voice = sceneVoice(scene);
  if (availableVoices.has(voice)) {
    const voiceAudio = getGameAudio(voice);
    gameVoice = voiceAudio;
    voiceAudio.currentTime = 0;
    voiceAudio.muted = !gameSound;
    let waiting = true;
    let stalledTimer;
    function stopWaiting() {
      waiting = false;
      clearTimeout(stalledTimer);
      voiceAudio.removeEventListener("ended", finishVoice);
      voiceAudio.removeEventListener("error", finishVoice);
      voiceAudio.removeEventListener("waiting", waitForPlayback);
      voiceAudio.removeEventListener("playing", clearStall);
    }
    function finishVoice() {
      if (!waiting || !gameDialog.hasAttribute("open")) return;
      stopWaiting();
      voiceAudio.pause();
      showChoices();
    }
    function clearStall() {
      clearTimeout(stalledTimer);
    }
    function waitForPlayback() {
      clearStall();
      stalledTimer = setTimeout(finishVoice, 8000);
    }
    stopWaitingForVoice = stopWaiting;
    voiceAudio.addEventListener("ended", finishVoice);
    voiceAudio.addEventListener("error", finishVoice);
    voiceAudio.addEventListener("waiting", waitForPlayback);
    voiceAudio.addEventListener("playing", clearStall);
    waitForPlayback();
    voiceAudio.play().catch(finishVoice);
  } else {
    showChoices();
  }

  for (const [, next] of choices) {
    const nextScene = story[next === "$outcome" ? (helpedHomeless ? "rescued" : "death") : next];
    const nextVoice = sceneVoice(nextScene);
    if (availableVoices.has(nextVoice)) getGameAudio(nextVoice);
    if (nextScene?.music) getGameAudio(nextScene.music);
  }
}

byId("game-sound").addEventListener("click", () => {
  gameSound = !gameSound;
  if (gameVoice) gameVoice.muted = !gameSound;
  if (gameMusic) gameMusic.muted = !gameSound;
  const button = byId("game-sound");
  const label = gameSound ? "كتم الصوت" : "تشغيل الصوت";
  button.toggleAttribute("data-muted", !gameSound);
  button.setAttribute("aria-label", label);
  button.title = label;
});
function finishGame() {
  document.body.classList.remove("game-open");
  stopWaitingForVoice();
  gameVoice?.pause();
  gameMusic?.pause();
  byId("game-open").focus({preventScroll: true});
  syncArchiveMusic();
}

function closeGame() {
  if (!gameDialog.hasAttribute("open")) return;
  if (!gameDialog.hasAttribute("data-fallback")) {
    gameDialog.close();
    return;
  }
  gameDialog.removeAttribute("open");
  gameDialog.removeAttribute("data-fallback");
  finishGame();
}

gameDialog.addEventListener("close", finishGame);
byId("game-close").addEventListener("click", closeGame);

byId("game-open").addEventListener("click", () => {
  if (gameDialog.hasAttribute("open")) return;
  player.pause();
  if (player.webkitDisplayingFullscreen) player.webkitExitFullscreen?.();
  try {
    gameDialog.showModal();
  } catch {
    gameDialog.setAttribute("open", "");
    gameDialog.setAttribute("data-fallback", "");
  }
  document.body.classList.add("game-open");
  syncArchiveMusic();
  gameScene("menu");
  getGameAudio("OpeningMusic");
  getGameAudio("NarratorOpening");
});

const archiveSongs = [
  {title: "كل الأحزان تنجلي – حاتم", file: "al-ahzan"},
  {title: "قناص المدينة – أيمن وكوثر وهناء", file: "city-hunter"},
  {title: "فارسات الليل – كوثر وهناء", file: "night-riders"},
  {title: "إيروكا – لن أعود للوراء", file: "eureka"},
  {title: "هكذا هي الحياة – نهيلة", file: "life"}
];
const archiveAudio = byId("archive-audio");
const musicToggle = byId("music-toggle");
const musicTitle = byId("music-title");
const spectrumBars = document.querySelectorAll(".music-spectrum span");
const spectrumMotion = matchMedia("(prefers-reduced-motion: reduce)");
let spectrumFrame;
const archiveMusicVolume = .3;
const archiveMusicFadeMs = 1600;
archiveAudio.volume = archiveMusicVolume;
let resumeWithFade = false;
let fadeOnPlaying = false;
let fadeFrame;
let songQueue = [];
let currentSong;
let archiveMusicEnabled = false;
let archiveMusicUnlocked = false;
let archiveMusicNeedsGesture = false;
let mobilePageActive = true;
let archivePlayPending = false;

function selectNextSong() {
  if (!songQueue.length) {
    songQueue = [...archiveSongs];
    for (let i = songQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songQueue[i], songQueue[j]] = [songQueue[j], songQueue[i]];
    }
    if (songQueue[0] === currentSong) songQueue.push(songQueue.shift());
  }
  currentSong = songQueue.shift();
  archiveAudio.src = "./music/" + currentSong.file + ".mp3";
  musicTitle.textContent = currentSong.title;
  musicTitle.title = currentSong.title;
}

function videoIsPlaying() {
  return !player.paused && !player.ended;
}

function syncArchiveMusic() {
  const interrupted = gameDialog.hasAttribute("open") || videoIsPlaying();
  if (interrupted && archiveMusicUnlocked && archiveMusicEnabled) resumeWithFade = true;
  if (!archiveMusicUnlocked || !archiveMusicEnabled || interrupted || (mobileView.matches && (!mobilePageActive || document.hidden))) {
    cancelAnimationFrame(fadeFrame);
    fadeOnPlaying = false;
    archiveAudio.pause();
    return;
  }
  if (!archiveAudio.paused || archivePlayPending) return;
  fadeOnPlaying = resumeWithFade;
  archiveAudio.volume = fadeOnPlaying ? 0 : archiveMusicVolume;
  archivePlayPending = true;
  archiveAudio.play().then(() => {
    archivePlayPending = false;
  }).catch((error) => {
    archivePlayPending = false;
    if (error?.name === "NotAllowedError" && archiveMusicEnabled && !videoIsPlaying() && !gameDialog.hasAttribute("open") && mobilePageActive && !document.hidden) {
      archiveMusicNeedsGesture = true;
      updateMusicButton();
    }
  });
}

archiveAudio.addEventListener("playing", () => {
  archiveMusicNeedsGesture = false;
  updateMusicButton();
  if (!fadeOnPlaying) return;
  fadeOnPlaying = false;
  resumeWithFade = false;
  const startedAt = performance.now();
  function fadeIn(now) {
    if (archiveAudio.paused) return;
    const progress = Math.min(1, (now - startedAt) / archiveMusicFadeMs);
    archiveAudio.volume = archiveMusicVolume * progress;
    if (progress < 1) fadeFrame = requestAnimationFrame(fadeIn);
  }
  fadeFrame = requestAnimationFrame(fadeIn);
});

function updateMusicButton() {
  const playing = !archiveAudio.paused && !archiveAudio.ended;
  const label = playing ? "إيقاف الموسيقى مؤقتاً" : archiveMusicNeedsGesture ? "اضغط لتشغيل الموسيقى" : "تشغيل الموسيقى";
  musicToggle.setAttribute("aria-label", label);
  musicToggle.title = label;

  byId("music-toggle-icon").setAttribute("d", playing ? "M6 4h4v16H6zm8 0h4v16h-4z" : "M7 4v16l13-8z");
}
for (const event of ["play", "pause", "ended"]) {
  archiveAudio.addEventListener(event, updateMusicButton);
}
// Use the actual frequency levels of each bundled song, indexed by its playback time.
function drawSpectrum() {
  const spectrum = window.archiveSpectrum?.[currentSong?.file];
  if (!spectrum || archiveAudio.paused || spectrumMotion.matches) return;
  const sample = archiveAudio.currentTime * 16;
  const last = spectrum.length / spectrumBars.length - 1;
  const index = Math.min(last, Math.floor(sample));
  const next = Math.min(last, index + 1);
  const fraction = sample % 1;
  spectrumBars.forEach((bar, band) => {
    const a = spectrum.charCodeAt(index * spectrumBars.length + band) - 65;
    const b = spectrum.charCodeAt(next * spectrumBars.length + band) - 65;
    bar.style.setProperty("--level", .15 + .85 * (a + (b - a) * fraction) / 25);
  });
  spectrumFrame = requestAnimationFrame(drawSpectrum);
}

function stopSpectrum() {
  cancelAnimationFrame(spectrumFrame);
  spectrumBars.forEach(bar => bar.style.removeProperty("--level"));
}

archiveAudio.addEventListener("playing", () => {
  stopSpectrum();
  drawSpectrum();
});
for (const event of ["pause", "waiting", "ended", "emptied"]) {
  archiveAudio.addEventListener(event, stopSpectrum);
}

musicToggle.addEventListener("click", () => {
  if (gameDialog.hasAttribute("open") || videoIsPlaying()) return;
  archiveMusicEnabled = archiveAudio.paused;
  if (!archiveMusicEnabled) resumeWithFade = false;
  syncArchiveMusic();
});
// Some mobile browsers reject the first play request even after entering.
// Retry only after another explicit tap; respect the user's pause choice.
document.addEventListener("click", (event) => {
  if (event.target.closest("#music-toggle") || !archiveMusicNeedsGesture) return;
  if (archiveMusicEnabled && !videoIsPlaying() && !gameDialog.hasAttribute("open")) syncArchiveMusic();
});
function advanceArchiveMusic() {
  cancelAnimationFrame(fadeFrame);
  selectNextSong();
  syncArchiveMusic();
}
archiveAudio.addEventListener("ended", advanceArchiveMusic);
if (mobileView.matches) {
  function suspendMobileMusic() {
    mobilePageActive = false;
    archiveAudio.pause();
  }
  function restoreMobileMusic() {
    mobilePageActive = true;
    if (!document.hidden) syncArchiveMusic();
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) suspendMobileMusic();
    else restoreMobileMusic();
  });
  window.addEventListener("pagehide", suspendMobileMusic);
  window.addEventListener("pageshow", restoreMobileMusic);
  window.addEventListener("blur", suspendMobileMusic);
  window.addEventListener("focus", restoreMobileMusic);
  document.addEventListener("freeze", suspendMobileMusic);
}
for (const event of ["play", "pause", "ended", "emptied"]) {
  player.addEventListener(event, syncArchiveMusic);
}

function clearPlayer() {
  selectedDuration = 0;
  if (playerScreen.classList.contains("is-expanded")) exitPlayerFullscreen().catch(() => {});
  byId("game-open").hidden = true;
  closeGame();
  player.hidden = true;
  playerTools.hidden = true;
  if (player.hasAttribute("src")) {
    player.pause();
    player.removeAttribute("src");
    player.load();
  }
  syncArchiveMusic();
  playerError.hidden = true;
  screenMessage.hidden = false;
}

function mobileVideoSource(source) {
  // Preserve the original MP4's seek index and image quality on mobile.
  return source;
}

function renderPlaylist(videos, collectionId) {
  playlist.replaceChildren();
  playlist.scrollTop = 0;
  byId("video-count").textContent = videos.length + (videos.length === 1 ? " video" : " videos");
  byId("playlist-empty").hidden = videos.length > 0;
  byId("screen-label").textContent = videos.length ? "Select a video" : "No videos yet";

  function addEpisode(video, index, destination) {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "episode";
    button.dataset.src = video.src;
    button.setAttribute("aria-pressed", "false");
    const label = document.createElement("span");
    label.textContent = video.title || "Video " + (index + 1);
    label.title = label.textContent;
    label.dir = "auto";
    if (/[\u0600-\u06ff]/.test(label.textContent)) label.lang = "ar";
    button.append(label);
    if (video.duration) {
      const duration = document.createElement("span");
      duration.className = "duration";
      duration.textContent = video.duration;
      button.append(duration);
    }
    button.addEventListener("click", () => {
      playlist.querySelector('[aria-pressed="true"]')?.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-pressed", "true");
      playerError.hidden = true;
      screenMessage.hidden = true;
      player.hidden = false;
      playerTools.hidden = false;
      emptyPanorama();showTools();
      const gameButton = byId("game-open");
      gameButton.hidden = video.title !== "DUB 2022 - TEAM 2";
      player.setAttribute("aria-label", label.textContent);
      selectedDuration = video.duration
        ? video.duration.split(":").reduce((seconds, unit) => seconds * 60 + Number(unit), 0)
        : 0;
      lastSeekValue = -1;
      player.dataset.originalSrc = video.src;
      player.src = mobileVideoSource(video.src);
      syncPlayer();
      player.play().catch(() => {
        // If autoplay is restricted, the play button stays available.
      });
    });
    item.append(button);
    destination.append(item);
  }

  const dub2022 = collectionId === "dub" ? videos.filter((video) => video.title.startsWith("DUB 2022 - ")) : [];
  videos.forEach((video, index) => {
    if (!dub2022.includes(video)) addEpisode(video, index, playlist);
  });
  if (!dub2022.length) return;

  const item = document.createElement("li");
  item.className = "dub-group";
  const year = document.createElement("details");
  const title = document.createElement("summary");
  title.textContent = "MOF DUB 2022";
  year.append(title);

  for (const [group, prefix] of [["PRIMES", "PRIME "], ["FINALS", "TEAM "]]) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const list = document.createElement("ol");
    summary.textContent = group;
    details.append(summary, list);
    dub2022.filter((video) => video.title.startsWith("DUB 2022 - " + prefix))
      .forEach((video, index) => addEpisode(video, index, list));
    year.append(details);
  }
  item.append(year);
  playlist.append(item);
}

function renderRoute(moveFocus) {
  if(document.body.classList.contains("intro")) return;
  emptyPanorama();
  const [route, requested] = location.hash.slice(1).split("/");
  const index = collections.findIndex((collection) => collection.id === route);
  const collection = collections[index];
  clearPlayer();
  document.body.classList.toggle("has-work", Boolean(collection));
  document.body.style.setProperty("--studio-tone", collection?.tone || "#ff9d60");
  document.body.style.setProperty("--studio-wash", collection?.wash || "#78442d");
  home.hidden = Boolean(collection);
  syncPreviews();
  collectionView.hidden = !collection;
  document.title = collection ? collection.label + " | MOF Archive" : "MOF Archive";

  if (collection) {
    const titleText = document.createElement("span");
    titleText.className = "title-text";
    titleText.textContent = collection.title || collection.label;
    sectionTitle.lang = /[\u0600-\u06ff]/.test(titleText.textContent) ? "ar" : "en";
    sectionTitle.dir = sectionTitle.lang === "ar" ? "rtl" : "ltr";
    const titleIcon = tiles[index].querySelector("svg").cloneNode(true);
    titleIcon.setAttribute("aria-hidden", "true");
    sectionTitle.replaceChildren(titleIcon, titleText);
    renderPlaylist(collection.videos.filter((video) => typeof video.src === "string" && video.src.trim()), collection.id);
    const chosen=collection.videos[Number(requested)-1];
    if(chosen){
      const button=Array.from(playlist.querySelectorAll(".episode")).find(item=>item.dataset.src===chosen.src);
      for(let parent=button?.parentElement;parent && parent!==playlist;parent=parent.parentElement){
        if(parent.tagName==="DETAILS")parent.open=true;
      }
      button?.click();
    } else drawPanorama(collection);
    collectionView.getAnimations().forEach((animation) => animation.cancel());
    if (!mobileView.matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      collectionView.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 360, easing: "ease-out" });
    }
    window.scrollTo(0, 0);
    if (moveFocus) sectionTitle.focus({ preventScroll: true });
    return;
  }

  if (route === "collections") {
    byId("collections").scrollIntoView({ behavior: moveFocus && !matchMedia("(prefers-reduced-motion: reduce)").matches ? "smooth" : "auto" });
    if (moveFocus) byId("directory-title").focus({ preventScroll: true });
  } else {
    window.scrollTo(0, 0);
    if (moveFocus) document.querySelector(".archive-banner").focus({ preventScroll: true });
  }
}

player.addEventListener("error", () => {
  if (!player.hasAttribute("src")) return;
  const original = player.dataset.originalSrc;
  if (original && player.getAttribute("src") !== original) {
    const position = player.currentTime;
    player.src = original;
    if (position > 0) player.currentTime = position;
    player.play().catch(() => {});
    return;
  }
  playerError.textContent = "This video could not be loaded. Check its link or choose another video.";
  playerError.hidden = false;
});
document.querySelector(".archive-banner").addEventListener("click", (event) => {
  if (location.hash === "#collections") {
    event.preventDefault();
    renderRoute(true);
  }
});
document.querySelector(".explore").addEventListener("click", (event) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (location.hash !== "#collections") history.pushState(null, "", "#collections");
  byId("directory-title").focus({preventScroll: true});
  byId("collections").scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
  });
});
search.addEventListener("input", filterCollections);
document.querySelector(".back").addEventListener("click", () => {
  // Resume while the tap is still active; the hashchange arrives later.
  player.pause();
  syncArchiveMusic();
});
window.addEventListener("hashchange", () => {
  if (ignoreFullscreenHash && location.hash === ignoreFullscreenHash) {
    ignoreFullscreenHash = "";
    return;
  }
  renderRoute(true);
});
const reelMode = matchMedia("(min-width:900px) and (hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)");
const reelTrack = document.querySelector(".reel-track");
const reelClips = ["tv-1", "dub-1", "tv-2", "dub-3", "tv-4", "dub-9", "tv-6"].map(id => ({
  src: "./clips/"+id+".mp4", poster: "./clips/"+id+".jpg"
}));
const visibleReelPreviews = new Set();
const reelObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const preview = entry.target.querySelector("video");
    if (entry.isIntersecting) visibleReelPreviews.add(preview);
    else visibleReelPreviews.delete(preview);
  }
  syncPreviews();
}, {root: byId("home-view").querySelector(".hero-reel"), rootMargin: "0px 10%"});

function syncPreviews() {
  const shouldPlay = !document.hidden && !home.hidden;
  for (const preview of reelTrack.querySelectorAll("video")) {
    if (shouldPlay && visibleReelPreviews.has(preview)) preview.play().catch(() => {});
    else preview.pause();
  }
}

function setupReel() {
  if (!reelMode.matches && !document.body.classList.contains("intro")) {
    for (const preview of reelTrack.querySelectorAll("video")) preview.pause();
    reelObserver.disconnect();
    visibleReelPreviews.clear();
    reelTrack.replaceChildren();
    return;
  }
  if (reelTrack.firstChild) return;

  const group = document.createElement("div");
  group.className = "reel-group";
  for (const clip of reelClips) {
    const frame = document.createElement("div");
    frame.className = "reel-frame";
    const preview = document.createElement("video");
    preview.muted = true;
    preview.defaultMuted = true;
    preview.loop = true;
    preview.playsInline = true;
    preview.preload = "none";
    preview.poster = clip.poster;

    preview.src = clip.src;
    frame.append(preview);
    group.append(frame);
  }
  reelTrack.append(group, group.cloneNode(true));
  for (const frame of reelTrack.querySelectorAll(".reel-frame")) {
    frame.querySelector("video").muted = true;
    reelObserver.observe(frame);
  }
  syncPreviews();
}
reelMode.addEventListener("change", setupReel);
document.addEventListener("visibilitychange", syncPreviews);
let idleTimer;
function showTools() {
  clearTimeout(idleTimer);
  playerTools.classList.remove("resting");
  if (!player.hidden) idleTimer = setTimeout(() => playerTools.classList.add("resting"), 5000);
}
for (const event of ["pointermove","pointerdown","focusin","keydown"]) playerScreen.addEventListener(event,showTools);
player.addEventListener("play",showTools);
const panorama = document.querySelector(".panorama");
let slideTimer;
let slideGeneration = 0;
function emptyPanorama() {
  clearTimeout(slideTimer);
  slideGeneration++;
  panorama.replaceChildren();
}
function drawPanorama(collection) {
  const generation = slideGeneration;
  let next = 0;
  let failures = 0;
  function advance() {
    if (generation !== slideGeneration) return;
    const image = new Image();
    image.alt = "";
    image.onload = () => {
      if (generation !== slideGeneration) return;
      failures = 0;
      const old = panorama.lastElementChild;
      panorama.append(image);
      const reducedMotion = mobileView.matches || matchMedia("(prefers-reduced-motion:reduce)").matches;
      if (!reducedMotion) {
        // Keep both frames moving until the incoming frame has fully covered the old one.
        image.animate([{ transform: "scale(1)" }, { transform: "scale(1.08)" }],
          { duration: 8000, easing: "linear", iterations: Infinity, direction: "alternate" });
      }
      if (old && !reducedMotion) {
        const fade = image.animate([{opacity:0},{opacity:1}], {duration:950,easing:"ease-in-out"});
        fade.onfinish = () => old.remove();
      } else old?.remove();
      if (!mobileView.matches && collection.videos.length > 1) slideTimer = setTimeout(advance, 3000);
    };
    image.onerror = () => {
      if (generation === slideGeneration && ++failures < collection.videos.length) slideTimer = setTimeout(advance, 150);
    };
    image.src = "./stills/"+collection.id+"-"+(next+1)+".jpg";
    next = (next + 1) % collection.videos.length;
  }
  if (collection.videos.length) advance();
}
playlist.addEventListener("toggle",event=>{
  const details=event.target;
  if(details.tagName!=="DETAILS" || !details.open)return;
  requestAnimationFrame(()=>{
    const bounds=playlist.getBoundingClientRect(), panel=details.getBoundingClientRect();
    const delta=Math.min(panel.top-bounds.top,panel.bottom-bounds.bottom);
    if(delta>0)playlist.scrollBy({top:delta,behavior:"smooth"});
  });
},true);
byId("enter").addEventListener("click",()=>{
  const logo=document.querySelector(".hero-brand");
  const start=logo.getBoundingClientRect();
  const reel=document.querySelector(".hero-reel"), reelStart=reel.getBoundingClientRect();
  history.replaceState(null, "", location.pathname + location.search + "#home");
  search.value = "";
  filterCollections();
  document.body.classList.remove("intro");document.body.classList.add("arriving");
  archiveMusicUnlocked = true;
  archiveMusicEnabled = true;
  advanceArchiveMusic();
  renderRoute(false);
  setupReel();
  const end=logo.getBoundingClientRect();
  if(end.width && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    const reelEnd=reel.getBoundingClientRect();
    if(!mobileView.matches && reelEnd.height) reel.animate([{translate:"0 "+(reelStart.top-reelEnd.top)+"px",scale:"1 "+reelStart.height/reelEnd.height,transformOrigin:"top center"},{translate:"0 0",scale:"1 1",transformOrigin:"top center"}],{duration:680,easing:"ease-out"});
    logo.animate([{transformOrigin:"top left",transform:"translate("+(start.left-end.left)+"px,"+(start.top-end.top)+"px) scale("+start.width/end.width+")"},{transformOrigin:"top left",transform:"none"}],{duration:680,easing:"cubic-bezier(.22,.8,.25,1)"});
  }
  setTimeout(()=>document.body.classList.remove("arriving"),900);
  (home.hidden ? sectionTitle : byId("directory-title")).focus({preventScroll:true});
});

setupReel();

filterCollections();
renderRoute(false);
