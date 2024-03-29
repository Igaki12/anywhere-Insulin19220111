import { useState } from 'react'

// import q1 from './img/question/220613-1.JPG'
import vitamin2 from './img/answer/vitamin2.png'
import vitamin1 from './img/answer/vitamin1.png'
import LDLVLDL from './img/answer/LDLVLDL.png'
import jaundice from './img/answer/jaundice.png'
import enzyme from './img/answer/enzyme.png'
import endocytosisLDL from './img/answer/endocytosisLDL.png'
import COVID19 from './img/answer/COVID19.gif'
import coriCycle from './img/answer/coriCycle.png'
import aminoPool from './img/answer/aminoPool.png'
import F1toF5 from './img/answer/F1toF5.png'
import enzymeReport1 from './img/answer/enzymeReport1.png'
import colloid from './img/answer/colloid.png'
import BMTD from './img/answer/BMTD.png'
import EnzymeActivity from './img/answer/EnzymeActivity.jpg'
import NSAIDs from './img/answer/NSAIDs.jpg'
import lipidMediator from './img/answer/lipidMediator.jpg'
import chromatographyResult from './img/answer/chromatographyResult.jpg'
import plate96well from './img/answer/plate96well.png'
import cubetAbsorbance from './img/answer/cubetAbsorbance.png'
import blankGraph from './img/answer/blankGraph.png'
import baseAbsorbance from './img/answer/baseAbsorbance.png'
import diabetesMellitus from './img/answer/diabetesMellitus.png'
import NEFA from './img/answer/NEFA.png'
import chyloMicron from './img/answer/chyloMicron.png'
import chromatography from './img/answer/chromatography.png'
import cholesterol from './img/answer/cholesterol.png'
import beforeDiet from './img/answer/beforeDiet.png'
import afterDiet from './img/answer/afterDiet.png'
import restrictionEnzyme from './img/answer/restrictionEnzyme.png'
import microRNA from './img/answer/microRNA.png'
import kidneyTissue from './img/answer/kidneyTissue.jpg'
import genomeEditting from './img/answer/genomeEditting.webp'
import geneTherapy from './img/answer/geneTherapy.png'
import geneModifyVector from './img/answer/geneModifyVector.png'
import taqman from './img/answer/taqman.png'
import SNP from './img/answer/SNP.png'
import sequencing from './img/answer/sequencing.png'
import mtDNA from './img/answer/mtDNA.jpeg'
import HIV from './img/answer/HIV.jpg'
import alcohol from './img/answer/alcohol.png'
import VATPase from './img/answer/VATPase.png'
import SAM from './img/answer/SAM.png'
import ammonia from './img/answer/ammonia.png'
import RTPCR from './img/answer/RTPCR.png'
import Xgal from './img/answer/Xgal.png'
import operon from './img/answer/operon.png'
import lacZ from './img/answer/lacZ.png'
import introducedAST1 from './img/answer/introducedAST1.png'
import plasmid from './img/answer/plasmid.png'
import metabolism from './img/answer/metabolism.png'
import uncouplingProtein from './img/answer/uncouplingProtein.png'
import glucokinase from './img/answer/glucokinase.png'
import cytoplasmAcetylCoA from './img/answer/cytoplasmAcetylCoA.png'
import SDSMicelle from './img/answer/SDSMicelle.png'
import ribonucleotide from './img/answer/ribonucleotide.png'
import oligoDTprimer from './img/answer/oligoDTprimer.png'
import electrophoresisDNA from './img/answer/electrophoresisDNA.png'
import DNAsynthesize from './img/answer/DNAsynthesize.png'
import coagulation from './img/answer/coagulation.png'
import S15Gene from './img/question/S15Gene.png'
import insulinGene from './img/question/insulinGene.png'
import biochemistry_2020_1_1 from './img/answer/biochemistry_2020_1_1.jpg'
import biochemistry_2020_1_2 from './img/answer/biochemistry_2020_1_2.jpg'
import biochemistry_2020_1_3 from './img/answer/biochemistry_2020_1_3.jpg'
import biochemistry_2020_1_4 from './img/answer/biochemistry_2020_1_4.jpg'
import biochemistry_2020_1_5 from './img/answer/biochemistry_2020_1_5.jpg'
import biochemistry_2020_1_6 from './img/answer/biochemistry_2020_1_6.jpg'
import biochemistry_2020_2_1 from './img/answer/biochemistry_2020_2_1.jpg'
import biochemistry_2020_2_2 from './img/answer/biochemistry_2020_2_2.jpg'
import biochemistry_2020_2_3 from './img/answer/biochemistry_2020_2_3.jpg'
import biochemistry_2020_2_4 from './img/answer/biochemistry_2020_2_4.jpg'
import biochemistry_2020_2_5 from './img/answer/biochemistry_2020_2_5.jpg'
import biochemistry_2020_4_1 from './img/answer/biochemistry_2020_4_1.jpg'
import biochemistry_2020_4_2 from './img/answer/biochemistry_2020_4_2.jpg'
import biochemistry_2020_5_1 from './img/answer/biochemistry_2020_5_1.jpg'
import biochemistry_2020_5_2 from './img/answer/biochemistry_2020_5_2.jpg'
import biochemistry2021_7_4 from './img/answer/biochemistry2021_7_4.JPG'
import biochemistry2021_7_3 from './img/answer/biochemistry2021_7_3.JPG'
import biochemistry2021_7_2 from './img/answer/biochemistry2021_7_2.JPG'
import biochemistry2021_7_1 from './img/answer/biochemistry2021_7_1.JPG'
import biochemistry2021_6_3 from './img/answer/biochemistry2021_6_3.JPG'
import biochemistry2021_6_2 from './img/answer/biochemistry2021_6_2.JPG'
import biochemistry2021_6_1 from './img/answer/biochemistry2021_6_1.JPG'
import biochemistry2021_5_3 from './img/answer/biochemistry2021_5_3.JPG'
import biochemistry2021_5_2 from './img/answer/biochemistry2021_5_2.JPG'
import biochemistry2021_5_1 from './img/answer/biochemistry2021_5_1.JPG'
import biochemistry2021_4_3 from './img/answer/biochemistry2021_4_3.JPG'
import biochemistry2021_4_2 from './img/answer/biochemistry2021_4_2.JPG'
import biochemistry2021_4_1 from './img/answer/biochemistry2021_4_1.JPG'
import biochemistry2021_3 from './img/answer/biochemistry2021_3.JPG'
import biochemistry2021_2 from './img/answer/biochemistry2021_2.JPG'
import biochemistry2021_1_3 from './img/answer/biochemistry2021_1_3.JPG'
import biochemistry2021_1_2 from './img/answer/biochemistry2021_1_2.JPG'
import biochemistry2021_1_1 from './img/answer/biochemistry2021_1_1.JPG'
import biochemistry2020_3_question from './img/answer/biochemistry2020_3_question.jpg'
import biochemistry2020_3_answer from './img/answer/biochemistry2020_3_answer.jpg'
import biochemistry2019_8 from './img/answer/biochemistry2019_8.jpg'
import biochemistry2019_6_ans from './img/answer/biochemistry2019_6_ans.jpg'
import biochemistry2019_5 from './img/answer/biochemistry2019_5.jpg'
import biochemistry2019_4_2 from './img/answer/biochemistry2019_4_2.jpg'
import biochemistry2019_4_1 from './img/answer/biochemistry2019_4_1.jpg'
import biochemistry2019_3_3 from './img/answer/biochemistry2019_3_3.jpg'
import biochemistry2019_3_2 from './img/answer/biochemistry2019_3_2.jpg'
import biochemistry2019_3_1 from './img/answer/biochemistry2019_3_1.jpg'
import biochemistry2019_2_3 from './img/answer/biochemistry2019_2_3.jpg'
import biochemistry2019_2_2 from './img/answer/biochemistry2019_2_2.jpg'
import biochemistry2019_2_1 from './img/answer/biochemistry2019_2_1.jpg'
import biochemistry2019_1_2 from './img/answer/biochemistry2019_1_2.jpg'
import biochemistry2019_1_1 from './img/answer/biochemistry2019_1_1.jpg'
import biochemistry2018_7 from './img/answer/biochemistry2018_7.jpg'
import biochemistry2018_4_4 from './img/answer/biochemistry2018_4_4.jpg'
import biochemistry2018_4_1 from './img/answer/biochemistry2018_4_1.jpg'
import biochemistry2018_3 from './img/answer/biochemistry2018_3.JPG'
import biochemistry2018_2 from './img/answer/biochemistry2018_2.jpg'
import biochemistry2017_5_3 from './img/answer/biochemistry2017_5_3.JPG'
import biochemistry2017_5_2 from './img/answer/biochemistry2017_5_2.JPG'
import biochemistry2017_5_1 from './img/answer/biochemistry2017_5_1.JPG'
import biochemistry2016_5_3 from './img/answer/biochemistry2016_5_3.JPG'
import biochemistry2016_5_2 from './img/answer/biochemistry2016_5_2.JPG'
import biochemistry2016_5_1 from './img/answer/biochemistry2016_5_1.JPG'
import biochemistry2016_3_3 from './img/answer/biochemistry2016_3_3.jpg'
import biochemistry2016_3_2 from './img/answer/biochemistry2016_3_2.jpg'
import biochemistry2016_3_1 from './img/answer/biochemistry2016_3_1.jpg'
import biochemistry2016_2 from './img/answer/biochemistry2016_2.jpg'
import biochemistry2018_5 from './img/answer/biochemistry2018_5.png'
import biochemistry2018_4_3 from './img/answer/biochemistry2018_4_3.png'
import biochemistry2018_4_2 from './img/answer/biochemistry2018_4_2.png'
import biochemistry2018_1 from './img/answer/biochemistry2018_1.png'

import corePromoter from './img/answer/corePromoter.png'
import promoter from './img/answer/promotor.png'
import synthesizeCatecholamine from './img/answer/synthesizeCatecholamine.png'
import donorAcceptorSite from './img/answer/donorAcceptorSite.png'
import flankingRegion from './img/answer/flankingRegion.png'
import splicing from './img/answer/splicing.png'
import removeIntron from './img/answer/removeIntron.png'
import tRNA from './img/answer/tRNA.png'
import snRNA from './img/answer/snRNA.png'
import promotor from './img/answer/promotor.png'
import insulinLikePeptides from './img/answer/insulinLikePeptides.png'
import geneDuplication from './img/answer/geneDuplication.png'
import DNArepair from './img/answer/DNArepair.png'
import standardFreeEnergy from './img/answer/standardFreeEnergy.png'
import SFEquestion from './img/question/SFEquestion.png'
import SFEquestion2 from './img/question/SFEquestion2.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: 'DNA模型',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Exon とは？Intron とは？どんな構造上の特徴があるのか？《DNA模型の大文字→Exon/小文字→Intronなど》',
          choices: [],
          answerImg: [flankingRegion],
          answer:
            'intronはsplicingによって除去されるDNAやRNAの領域。イントロンはGU(GT)配列で始まりAG配列で終わり、この配列はsplicingで利用される。Exonはsplicingにより結合されてmRNAとして核膜外に運ばれるDNAやRNAの領域',
          commentary:
            'さらにExonにはタンパク質に翻訳されるコーディング領域CDSと翻訳されない非翻訳領域UTRで構成されている。UTRはCDSを挟んで存在する。必ずしもすべてのExonが成熟mRNAに含まれるわけではない（→選択的スプライシング）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '5’-flanking region とは？《DNA模型の001~009小文字領域》',
          choices: [],
          answerImg: [flankingRegion],
          answer:
            'DNAの5’末端に隣接する領域で、プロモーターやエンハンサー、サイレンサーなども含む。RNAには転写されない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '3’-flanking region とは？《DNA模型の112~114小文字領域》',
          choices: [],
          answerImg: [flankingRegion],
          answer:
            'DNAの3’末端に隣接する領域で、RNAには転写されるが、成熟mRNAを形成する過程で取り除かれる',
          commentary: 'エンハンサーやサイレンサーも含まれる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'TATA box とは何？《DNA模型の008)...tagaaa...》',
          choices: [],
          answerImg: [promoter],
          answer:
            'RNAポリメラーゼⅡによる転写開始位置の上流25塩基対の位置、あるいはさらに上流に存在する共通した塩基配列のこと。通常A TATA AAAのようになっており、プロモーターとよばれる',
          commentary: 'TATA boxの配列は様々な変異があっても機能する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '（TATA boxは）どんな役割を担っているの？',
          choices: [],
          answerImg: [promoter],
          answer:
            '転写因子として知られるタンパク質がこれらと結合し、転写因子がRNAポリメラーゼⅡと結合することが転写の開始に必須であり、プロモーターの中でも転写を正しい位置から開始するため誘導するコアプロモーターに分類される。',
          commentary:
            'TATA boxをもつプロモーターは、全プロモーターの10~15%あるいはそれ以下ともいわれる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'GC box とは？TATA box との違いは？《DNA模型【007】..gggcgg..【006】..ccgccc..》',
          choices: [],
          answerImg: [corePromoter],
          answer:
            'GC boxはgggcggの配列で、RNAポリメラーゼⅡにかかわるプロモーターのひとつであるが、TATA box（正しい位置からの適切な転写開始に必要なコアプロモーター）とは違いこれらコアモーターの活性を高める領域に分類される。',
          commentary:
            'コアモーターの活性を高める領域はほかにもCAAT boxなどが存在するが、その中でも常に（恒常的に）発現しているようなハウスキーピング遺伝子にGC boxは存在している。※今回のDNAではTATA boxがプロモーターとしての役割を果たしており、GC boxはエンハンサーとしての役割を担っていると考えられている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Polyadenylation signal とは？《DNA模型113~)...AATAAA...》',
          choices: [],
          answerImg: [],
          answer:
            'polyA部位（ポリアデニル化部分）の10~30塩基上流に存在するDNA領域。ヒトの場合はほぼAAUAAA配列を含む。',
          commentary: 'ポリA鎖を形成する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'splicing の donor・acceptor とは？例外は？《DNA模型020,081)gt.../071,087)...ag》',
          choices: [],
          answerImg: [donorAcceptorSite, removeIntron],
          answer:
            'イントロンの5’末端をdonor、3’末端をacceptorと呼び、99%以上のイントロンの5’末端がGUで3’末端がAG（GU-AG則）。RNAスプライシングの過程でこれらの部位は投げ縄構造を取ってエキソンの適切な連結を助ける',
          commentary:
            '5’-スプライス部位と3’スプライス部位はそれぞれ供与部位donor site、受容部位acceptor siteという別名がある。例外はがん細胞？',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'donor,acceptorの他に splicing に関する塩基配列状の特徴は？',
          choices: [],
          answerImg: [donorAcceptorSite, removeIntron],
          answer:
            'イントロンの3’スプライス部位の18~40塩基上流にある分枝部位は動物ではYNYYRAYとなっており、RNAスプライシングでイントロンの投げ縄構造を形成するのに重要な役割を担う。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'PNMT 遺伝子のコードするタンパク質の働きは？',
          choices: [],
          answerImg: [],
          answer:
            'stress responseで中心的な役割を果たし、心拍数や血圧を上昇させ、瞳孔を開き、血糖値の上昇をもたらすadrenalineの生合成に関与する。PNMTはノルアドレナリン→アドレナリンの反応に関与する。',
          commentary:
            'Phenylethanolamine N-methyltransferase。adrenalineは高峰譲吉らにより発見され、現代でも心停止・アナフィラキシーショック・敗血症・また気管支喘息時の気管支拡張薬として使用されている。睡眠時無呼吸症候群で高血圧が合併する一つの理由としてPNMTの発現上昇が考えられるようになってきている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Tyrosine を出発材料として adrenaline が作られるまでの代謝経路は？それを触媒する酵素は？',
          choices: [],
          answerImg: [synthesizeCatecholamine],
          answer: 'チロシン→L-DOPA→ドーパミン→ノルアドレナリン→アドレナリン',
          commentary:
            '酵素はチロシンヒドロキシラーゼ、ドーパデカルボキシラーゼ、ドーパミンβ-ヒドロキシラーゼ、PNMT（N-メチル化転移酵素）',
        },
      ],
    },

    // {
    //   groupTag: '実習課題',
    //   groupContents: [

    //     {
    //       detailInfo: '核酸2',
    //       questionImg: [],
    //       questionSentence:
    //         '一般に遺伝子情報発現の調節機構としてどのような可能性が考えられるか。また、今回の実習で検討した遺伝子についてはどのような調節を受けていると考えられるか？ハウスキーピング遺伝子と組織（細胞）特異的発現をする遺伝子について考えてみよう。',
    //       choices: [],
    //       answerImg: [flankingRegion],
    //       answer:
    //         '一般的な調節機構としてDNAのメチル化・ヒストンのリン酸化/メチル化/アセチル化などの遺伝子修飾と、リプレッサー・アクチベーター・エンハンサーサイレンサーなどによる転写調節、キャッピングの調節・スプライシング・ポリAテールの付加・配列特異的な核外輸送などによる転写後調節が挙げられる。今回の膵臓では消化酵素などを刺激に応答して生成する必要があるため、セカンドメッセンジャーによって柔軟に抑制・促進が切り替わる方式の転写調節が活発である可能性がたかい（後日詳しく調べます）',
    //       commentary:
    //         '遺伝子修飾は転写調節に比べて恒久的な遺伝子発現調節機構で、今回の場合はセカンドメッセンジャーで転写調節を行うために必要な受容体・タンパク質・酵素をコードする部分にDNA修飾がされていると考えられる。',
    //     }
    //     {
    //       detailInfo: '酵素1',
    //       questionImg: [],
    //       questionSentence:
    //         '一般に酵素活性はどのようにして測定するのか？また、比活性とはどの様な概念か？',
    //       choices: [],
    //       answerImg: [],
    //       answer:
    //         '【酵素活性】経時的吸光度変化？（分光光度計で吸光度の経時変化をとらえた酵素活性測定法）【比活性】酵素試料タンパク質1mgあたりに含まれる酵素量[Unit/mg]。',
    //       commentary:
    //         '基質と生成物が何らかの方法で区別できれば酵素活性の測定が可能となる。ある条件において1分間に1μmolの基質を生成物に変えるために必要な酵素量が1Unitである。生体材料から酵素を精製するときは、比活性の増加を目安にして、「何倍に精製された」と称することが多い。',
    //     },
    //     // {
    //     //   detailInfo: '',
    //     //   questionImg: [],
    //     //   questionSentence: '',
    //     //   answerImg: [],
    //     //   answer: '',
    //     //   commentary: '',
    //     // },
    //   ],
    // },
    {
      groupTag: '授業中',
      groupContents: [
        {
          detailInfo: '9/29',
          questionImg: [SFEquestion],
          questionSentence:
            '(1)解糖系の反応の 	１つの、ジヒドロキシアセトンリン酸(DHAP)のグリセルアルデヒド3-リン酸(GAP)への異性化反応についてΔG⁰（標準自由エネルギー変化）を計算してください。平衡状態では、DHAPに対するGAPの濃度の比は、0.0475(25℃,pH7.0)です。In0.0475=-3.05 (2)初めのDHAP濃度が2.0*10⁻⁴mol/L,GAPの濃度が3.0*10⁻⁶mol/Lであるとき、この異性化反応のδGを計算してください(25.0℃,pH7.0)。In0.015=-4.20',
          choices: [],
          answerImg: [standardFreeEnergy],
          answer: '(1)1805.98kal/mol (2)-0.69kcal/mol',
          commentary: 'いずれも公式参照',
        },
        {
          detailInfo: '9/29',
          questionImg: [SFEquestion2],
          questionSentence: 'スライド参照',
          choices: [],
          answerImg: [],
          answer: '-53kcal・mol⁻¹',
          commentary:
            'ΔG⁰ = -2*23.1kcal/mol/V*1.14V = -53kcal/mol ΔG⁰が負なので発エルゴン反応',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence:
            'セカンドメッセンジャーの性質として適当でないものはどれか？',
          choices: [
            '水溶性',
            '低分子物質',
            '分解されにくい',
            '低濃度で作用を示す',
            '細胞内で産生される',
          ],
          answerImg: [],
          answer: '分解されにくい',
          commentary:
            'セカンドメッセンジャー自体は細胞内ではたらくものなので水溶性。短時間で状況は変わるので、低濃度で作用し、すぐ分解されるものが多い。',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: '解糖系で誤っているのはどれか',
          choices: [
            'ヒトでは赤血球以外の全ての細胞にある代謝経路',
            '酸素を必要としない',
            'ATPを産生する',
            '最終産物は乳酸、またはピルビン酸',
          ],
          answerImg: [],
          answer: 'ヒトでは赤血球以外の全ての細胞にある代謝経路',
          commentary:
            '赤血球にとって特に主要な代謝経路。酸素があるかどうかで乳酸・ピルビン酸のどちらが最終産物になるか決まる。嫌気的条件下では乳酸。',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: 'アイソザイムについて誤っているものはどれか',
          choices: [
            '同じ反応を触媒するが異なったタンパク質である',
            '酵素学的な性質が同じ',
            '組織による違いがある',
            '異なる遺伝子の産物である',
          ],
          answerImg: [],
          answer: '酵素学的な性質が同じ',
          commentary:
            'KmやVmaxが違ったり、フィードバック阻害されるかどうかが変わる。参考：ヘキソキナーゼ、グルコキナーゼ',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence:
            'グルコキナーゼとヘキソキナーゼの説明で誤っているものはどれか',
          choices: [
            'グルコキナーゼとヘキソキナーゼはアイソザイムである',
            'グルコ－スをリン酸化してグルコース6-Pを産生する',
            '肝臓では主にグルコキナーゼが作用する',
            'どちらも生成物によりフィードバック阻害される',
          ],
          answerImg: [],
          answer: 'どちらも生成物によりフィードバック阻害される',
          commentary:
            'グルコキナーゼとヘキソキナーゼはアイソザイムなので生成物は同じ。グルコキナーゼはフィードバック阻害されず、グルコース濃度によって活性が決まる。',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: '解糖系の説明文で誤っているものはどれか',
          choices: [
            '三か所の不可逆非平衡反応が律速段階になっている',
            '不可逆反応があるため、解糖系全体は逆行できない',
            'ATPを産生するのに電子伝達系との共役を必要としない',
            '解糖系酵素の欠乏は赤血球を脆弱にする',
          ],
          answerImg: [],
          answer: '不可逆反応があるため、解糖系全体は逆行できない',
          commentary:
            '解糖系は全体としては逆行できる（糖新生）。三か所の律速段階では片方向の反応のみを触媒する酵素が存在し、解糖系と糖新生が同時に起こらないよう調節されている。',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: 'TCA回路について誤っているものはどれか',
          choices: [
            'アセチルCoAはTCA回路で代謝されオキサロ酢酸となる',
            '不可逆反応があるためTCA回路全体は一方向に進む',
            'ATP産生とともに反応が起こる',
            '酸素を必要とする',
          ],
          answerImg: [],
          answer: 'アセチルCoAはTCA回路で代謝されオキサロ酢酸となる',
          commentary: '',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: '次のs津名分で誤っているものはどれか',
          choices: [
            '血液には常に一定量のグルコースが必要である',
            '赤血球のエネルギー源はグルコースだけである',
            '空腹時のエネルギー産生のため、肝臓ではグルコースを貯蔵している',
            '摂食後まもなくはエネルギー産生のためのグルコースの供給源は食事由来である。',
          ],
          answerImg: [],
          answer:
            '空腹時のエネルギー産生のため、肝臓ではグルコースを貯蔵している',
          commentary:
            '肝臓では血糖値の維持のために、グリコーゲンで糖を貯蔵している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'グリコーゲン代謝について誤っているものはどれか',
          choices: [
            'グリコーゲンはグルコースから構成される多糖類',
            '肝臓と筋肉に貯蔵され、どちらも血糖の維持に利用される',
            'グリコーゲン代謝に関わる多くの酵素がリン酸化によって調節される',
            '肝臓と筋肉に貯えられたグリコーゲンの合成と分解の方向性はホルモンによって調節される',
          ],
          answerImg: [],
          answer: '肝臓と筋肉に貯蔵され、どちらも血糖の維持に利用される',
          commentary:
            '筋肉に蓄えられたグリコーゲンは、血糖維持に利用されない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ペントースリン酸経路について誤っているのはどれか',
          choices: [
            'ペントースリン酸経路とは解糖系の側副路で、グルコース6-リン酸を代謝しATPを産生する',
            'ペントースリン酸経路で生じたリボース5-リン酸は、プリン塩基合成の最初のステップの基質になる',
            'NADPHは脂質類の還元的合成反応に使われる',
            '赤血球の安定化にはペントースリン酸経路も寄与している',
          ],
          answerImg: [],
          answer:
            'ペントースリン酸経路とは解糖系の側副路で、グルコース6-リン酸を代謝しATPを産生する',
          commentary: 'ペントースリン酸経路では、NADPHが産生される',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'カイロミクロンの説明で誤っているものはどれか',
          choices: [
            'カイロミクロンに含まれる脂肪酸は、エステルより遊離脂肪酸が多い',
            '食事由来の脂質からできているので、その構成成分として必須脂肪酸を含む。',
            'カイロミクロンは一重のリン脂質膜に覆われて親水化されている。',
            'ちいさくなったカイロミクロンは粒子そのまま肝細胞に取り込まれる。',
          ],
          answerImg: [],
          answer:
            'カイロミクロンに含まれる脂肪酸は、エステルより遊離脂肪酸が多い',
          commentary:
            'カイロミクロンの1重のリン脂質は内部が疎水性なので、カイロミクロンに蓄えられているものは疎水性のエステル主体（遊離脂肪酸は親水性）。',
        },
        {
          detailInfo: '10/31午前',
          questionImg: [],
          questionSentence:
            '22歳男性、母趾関節痛で来院。関節から吸引した滑膜液は、微生物は陰性であったが針状の尿酸塩結晶が陽性であった。重大な既住歴はなく、現在は健康。抗炎症薬の投与をうけ、炎症症状は軽快した。24時間尿と血液検査の結果から、尿酸の排出機能には異常がないことがわかった。血中尿酸値（8.5mg/dL）は高値であった。追加検査の結果PRPP合成酵素が、酵素活性が亢進するタイプであることがわかった。',
          answerImg: [],
          answer:
            '遺伝子変異によりPRPP合成酵素の活動が亢進されることによって、プリンヌクレオチド分解産物である尿酸が増え体内に蓄積されてしまっている痛風。',
          commentary:
            '参考：痛風。PRPPはヌクレオチド合成に必要な酵素（律速酵素）で、ヌクレオチド合成には大量のATPがエネルギー源として必要である。SNIPとして報告されているのではないか。',
        },
        {
          detailInfo: '10/31午前',
          questionImg: [],
          questionSentence:
            '遺伝子の核酸塩基がメチル化修飾されても影響されない反応はどれか',
          choices: [
            '制限酵素（エンドヌクレアーゼ）による遺伝子の切断',
            '複製',
            '転写',
            '次世代の細胞での転写',
          ],
          answerImg: [],
          answer: '複製',
          commentary:
            '制限酵素での切断はメチル化修飾に影響される→大腸菌などは制限酵素で外来遺伝子を処理しているが、自身の同じ配列の遺伝子はメチル化することで、制限酵素による切断を防いでいる。また、メチル化修飾は複製後の遺伝子にも行われる。',
        },
        {
          detailInfo: '10/31午前',
          questionImg: [],
          questionSentence:
            '「核酸やヌクレオチドは生体にとって重要な成分なので、食物から摂取するのが望ましい」について正しい評価はどれか',
          choices: [
            'その必要はない',
            '適量は摂取すべきである',
            '積極的に摂取すべきである',
          ],
          answerImg: [],
          answer: '適量は摂取すべきである',
          commentary:
            '色々な考え方があるが...。サプリメントは医薬品ではなく、食料品として消費者庁からのみ審査を受けているため、有効性については検証されていない。例えばコエンザイムQ10は鮭の白子から抽出されているサプリメント。食事由来の核酸はそれほど体内に吸収されないといわれているが、高尿酸血症を引き起こす原因となってしまうかもしれないので、過剰摂取は禁物。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence: '代謝の説明で誤っているものはどれか',
          choices: [
            '代謝とは酵素によって触媒される反応が連続して起こること',
            '酵素は反応を触媒するが反応の方向性や経路以降は変えない',
            '代謝の調節は主に酵素活性の調節によって行われる',
            '代謝経路の反応は可逆的で平衡状態になる',
            '律速段階とは、代謝経路全体の速度を決める反応である',
          ],
          answerImg: [],
          answer: '代謝経路の反応は可逆的で平衡状態になる',
          commentary:
            'どこかで不可逆的反応が含まれており、代謝は一方向に進む。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            'プリンヌクレオチドの新規合成反応について正しいのはどれか',
          choices: [
            '最初に核酸塩基が合成され、次にリボースが結合する',
            'PRPP産生が律速段階である',
            'PRPPによって新規合成は抑制される',
            'AMPとGMPは過不足なく作られるように調節されている',
            'ATPが新たに合成される発エルゴン反応である',
          ],
          answerImg: [],
          answer: 'AMPとGMPは過不足なく作られるように調節されている',
          commentary:
            '参考：プリンヌクレオチドの新規合成経路。新規合成反応は最初にリボースが活性化される。PRPPによって新規合成は促進され、PRPPを基質とする反応が律速段階である。新規合成反応はATPをエネルギー源として大量に消費する吸エルゴン反応である。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            '痛風治療薬アロプリノールの説明で正しいのはどれか。',
          choices: [
            '尿酸合成を促進する',
            '尿酸の排泄を促進する',
            'キサンチンやヒポキサンチンの尿中への排泄が低下する',
            'キサンチンやヒポキサンチンを酸化して尿酸に変換する酵素を競合阻害する',
          ],
          answerImg: [],
          answer:
            'キサンチンやヒポキサンチンを参加して尿酸に変換する酵素を競合阻害する',
          commentary:
            'キサンチンやヒポキサンチンと構造が似ている→競合阻害することで難溶性の尿酸への変換を防ぐ。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            'ヌクレオチド・核酸合成の説明文で誤っているものはどれか',
          choices: [
            '過剰なヌクレオチドは細胞毒性を示すことがある',
            'プリンヌクレオチド合成の重要な中間体であるイノシン酸IMPは鰹節のうまみ成分である。',
            'UDPは他のピリミジンヌクレオチドの前駆体である',
            'DNAはRNAのリボースがデオキシリボースに還元されてできる',
          ],
          answerImg: [],
          answer: 'DNAはRNAのリボースがデオキシリボースに還元されてできる',
          commentary:
            'デオキシATP？はアポトーシスのシグナルとなる。体に重要な成分はおいしいと感じることが多い。UDPはTTPなどを合成するもととなる。リボースがデオキシリボースに還元されるのは正しいが...',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            'DNAが二本鎖であることに由来する性質ではないのはどれか',
          choices: [
            'プリン塩基とピリミジン塩基が等モル存在する',
            'AとT、GとCがそれぞれ等モル存在する',
            '紫外領域の光を吸収する',
            '加熱により紫外吸収が増加する',
            'GC含量が多いほど熱安定性が高い',
          ],
          answerImg: [],
          answer: '紫外領域の光を吸収する',
          commentary:
            '紫外線を吸収する部分は核酸塩基の部分であり、1本鎖であっても2本鎖であっても紫外線は吸収される。加熱変性は2本鎖特有。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            'DNAポリメラーゼの反応生成物を放射性標識する場合、基質として用いるヌクレオチドのリン酸の放射性標識はどれが正しいか。【ヒント：生成した核酸に取り込まれるリン酸はどれか？】',
          choices: ['α-32P-dNTP', 'β-32P-dNTP', 'γ-32P-dNTP'],
          answerImg: [],
          answer: '準備中',
          commentary: '',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2022本試(暫定)',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '酵素の触媒作用における「遷移状態の安定化」の概念を説明せよ',
          choices: [],
          answerImg: [enzyme],
          answer:
            '酵素は基質を遷移状態に安定化することによって、生成物に変換可能な反応中間体の濃度を非常に高め、その結果反応を促進する。',
          commentary:
            '基質の遷移状態の不安定さ＝反応の活性化エネルギーに相当し、酵素は遷移状態を安定化させることによって反応速度を早めている。この原理を利用したのが抗体触媒（抗体酵素）で、遷移状態にある基質に相当する遷移状態アナログに対する抗体を人工的な酵素として利用できる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '活性型ビタミンDの生理作用について説明せよ',
          choices: [],
          answerImg: [vitamin1, vitamin2],
          answer:
            '活性型ビタミンDは、小腸からのカルシウムやリン酸の吸収を促進したりすることによって、血中カルシウム濃度を上昇させる作用をもつ。',
          commentary:
            'ビタミンDは食物から摂取するほか、皮膚で紫外線照射によって合成する事ができる。肝臓で1位、腎臓で25位が水酸化されて活性型ビタミンD₃となる。不足するとくる病となり、骨が軟化する（最近の子どもは外に出ないので多い）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '新生児黄疸について原因と治療法を簡潔に説明せよ',
          choices: [],
          answerImg: [jaundice],
          answer:
            '新生児、特に未熟児はビリルビン排泄に関わる酵素活性が低く、血中ビリルビン濃度が上昇することにより黄疸を引き起こすことがある。多くは成長とともに自然と改善されるが、深刻な場合は青色蛍光によりビリルビンを水溶性の異性体に変換する治療が行われる。',
          commentary:
            'その他新生児の赤血球は寿命が短く、また新生児の血液脳関門は未成熟でビリルビンの影響を受けやすい。黄疸は赤血球疾患（鎌状赤血球・G6PD欠損）による溶血性黄疸や、逸脱酵素ASTやALTの血清濃度が上昇する肝細胞性黄疸、閉塞性黄疸なども存在する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞内消化について説明し、その生化学的意義を述べよ',
          choices: [],
          answerImg: [aminoPool],
          answer:
            'タンパク質は細胞内で、ユビキチン-プロテアソーム系によって選択的に、オートファジーによって非選択的に分解され、アミノ酸プールとして必要タンパク質の合成や、糖新生、ケトン体合成、ポルフィリン・クレアチンなどの窒素含有化合物合成などに利用されたり、エネルギー源として消費される。',
          commentary:
            '20種類以上のアミノ酸はすべて同じ方法で利用されるのではない。糖原性アミノ酸は糖新生に利用できるが、ケト原性アミノ酸（→アセチルCoA）からグルコースを合成することはできない。分解されるとケトン体と糖新生材料の両方を生成するアミノ酸も存在する。アミノ酸分解酵素の先天的欠損は尿に現れることが多い：フェニルケトン尿症はフェニルアラニン→チロシンの分解酵素の欠損、アルカプトン尿症はチロシン→→フマル酸の途中の酵素の欠損、メープルシロップ尿症は分枝アミノ酸分解酵素の欠損、ホモシスチン尿症はメチオニン→ホモシステイン→→の酵素の欠損など。これらは新生児スクリーニング検査の対象となる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'グルコースを代謝してピルビン酸を経て乳酸にする経路(a)と、ピルビン酸を代謝して二酸化炭素と水にする経路(b)の2つについて、(1)経路(a)が経路(b)より有利な点を述べよ。どの組織・生理条件において経路(a)がよりはたらくか。',
          choices: [],
          answerImg: [],
          answer:
            '赤血球や激しい運動中の筋肉などではたらいていて、酸素を消費せずATPを作り出すことができる点で有利。',
          commentary:
            '経路で実質的なNAD⁺の消費がない点もメリットとして存在するが、(b)経路と比べて有利であるかは微妙。（この議論は生物選択の方に）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'グルコースを代謝してピルビン酸を経て乳酸にする経路(a)と、ピルビン酸を代謝して二酸化炭素と水にする経路(b)の2つについて、(2)経路(b)が経路(a)より有利な点を述べよ。どの組織・生理条件において経路(b)がよりはたらくか。',
          choices: [],
          answerImg: [],
          answer:
            '脳や肝臓や穏やかな運動中の筋肉などで働いていて、ATP産生効率が高い点で有利。',
          commentary:
            '心筋や褐色脂肪細胞など、ミトコンドリアが多い細胞で活発。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'グルコースを代謝してピルビン酸を経て乳酸にする経路(a)と、ピルビン酸を代謝して二酸化炭素と水にする経路(b)の2つについて、経路(a)で産生された乳酸はどのような経路で代謝されるか。',
          choices: [],
          answerImg: [coriCycle],
          answer: '血中を流れ肝臓で糖新生され、グルコースとなる（コリ回路）',
          commentary:
            '他の肝臓を介する回路としてはアラニン-グルコース回路が挙げられる。これは筋肉などでアミノ酸分解時発生するアンモニアをピルビン酸→アラニン（ALT）の形で血中へ流し、肝臓でアラニン→ピルビン酸（ALT）へと戻すことでアンモニアを回収し尿素回路へ投入した後ピルビン酸→グルコースに糖新生して血中へ流して再利用する回路。コリ回路ではNADHの処理を、アラニン-グルコース回路ではアンモニアの処理を肝臓に丸投げしているという形が共通している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '肝臓で生成されたコレステロールは血液を介して末梢組織まで届けられる。(1)コレステロールは血液中でどのように運搬されるか。',
          choices: [],
          answerImg: [LDLVLDL],
          answer: '主にコレステロールエステルの形でVLDL/LDLで運搬される。',
          commentary:
            '肝臓でアセチルCoAから合成されたコレステロールはエステル化されリポタンパク質VLDLで運ばれるが、食事由来のコレステロールはエステル化された後小腸で生成されるキロミクロンに含まれ血中を運搬される。コレステロールは両親媒性だがコレステロールエステルは脂溶性。リポタンパク質には他にTAGなども多く含まれていて、キロミクロンやVLDLではコレステロールエステルより割合が大きい。キロミクロンやVLDLは脂肪組織にTAG（の脂肪酸）を渡した後、コレステロールエステルの割合が高いキロミクロンレムナントやLDLへと変化していく。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '肝臓で生成されたコレステロールは血液を介して末梢組織まで届けられる。(2)コレステロールは末梢組織でどのように取り込まれるか。',
          choices: [],
          answerImg: [endocytosisLDL],
          answer:
            '受容体に結合したLDLはクラスリン被覆小胞の形でエンドサイトーシスされる。',
          commentary:
            'apoB-100というアポリポタンパク質(キロミクロンはapoB-48)を受容体が認識してリポタンパク質丸ごとエンドサイトーシスを行う。この取り込まれ方は同じVLDLなどに含まれるTAGとは異なる：TAGはapoC-Ⅱを受容した毛細血管壁のリポタンパク質リパーゼによって脂肪酸とグリセロールに分解されたあとで、脂肪酸のみが脂肪細胞に取り込まれる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '脂質メディエーターとは何か説明せよ。',
          choices: [],
          answerImg: [lipidMediator],
          answer:
            '脂質メディエーターとは、（局所で）細胞間情報伝達などの生理活性をもつ脂質の総称である。',
          commentary:
            'プロスタグランジン(PG)、ロイコトリエン(LT)、血小板活性化因子(PAF)、内因性カンナビノイド、リゾホスファチジン酸、スフィンゴシン1-リン酸などを指す。脂肪酸（アラキドン酸）由来のものが多く、リン脂質由来、コレステロール由来のものも脂質メディエーターに分類される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'SARS-Cov2が短期間に多くの変異型を生み出している理由について、遺伝子複製の観点から説明せよ。',
          choices: [],
          answerImg: [COVID19],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAの間に塩基の部位を内部にしまうことができるので、塩基の損失や置換による遺伝子情報の変化・損失を抑えることができる。また複製において誤った塩基を付加された場合、相補鎖の関係からDNAポリメラーゼの持つ酵素によって除去されて正確なDNA合成が行われる。複製が正確に行われたとしても突然変異による一塩基変異が起こりうるが、相補的な塩基情報を用いるこ とで修復は可能である。これよりDNAは非常に安定しており、遺伝子情報を担う物質として適している。一方RNAは一本鎖であるため、DNAのような校正機構を持たず、変異が起こりやすい。また校正されないため変異が起こっても修復されることはなく変異は蓄積されていき、様々な性質を持つ変異ウイルスを生じやすい。コロナウイルスはプラスRNA一本鎖ウイルスとして知られている。そのためセントラルドグマにおいて転写は行われないが、DNA を遺伝子情報として持つ細胞と同じく翻訳を行い 遺伝情報の複製を行なっていく。しかし前述の通りDNAによる複製との比較よりRNAからの翻訳は不正確であり変異が非常に起こりやすい。そのため変異型ウイルスが多く現れ得る。このことは昨今の報道での変異型ウイルスや、各国のワクチン開発が遅れている原因となっていると考えられる。',
          commentary:
            'コロナウイルスはRNAウイルスで、自身のゲノムそのものがmRNAとして働き、ウイルス蛋白質を作り出す。細胞質内で自らが持つRNA依存性ポリメラーゼで複製を行う。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'コロナ診断のためのPCR法の原理を説明せよ。',
          choices: [],
          answerImg: [RTPCR, taqman],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAは相補的な塩基対間で形成される水素結合によって繋がっている。この繋がりは温度を上げることで切ることができ、これを変性という。また徐々に温度を下げていくことで水素結合が再形成されて 復元される。これらの作用を利用したのが PCR 法である。まず増幅したい領域の両端に相補的なプライマーDNA、鋳型のゲノム DNA、耐熱性を持つDNAポリメラーゼ、材料となる 4 種のヌクレオチドを混合する。そして温度を上げるとゲノムDNAは変性により一本鎖となる。その後徐々に温度を下げていくことでプライマーDNA とゲノムDNAの複製がお こる。次にDNAポリメラーゼの至適温度まで温度上昇することでプライマーからDNA合 成が起こっていく。この一連の操作を繰り返すことでプライマー間のDNAを特異的に増幅 することになる。このようにして生じた増幅断片を電気泳動にかける。そして検体において も同じようにした断片の泳動度と同じであればその断片は感染の疑いがあるといえる。こ のようにDNAの特性を使い PCR 法は行われる。',
          commentary:
            'コロナウイルスはRNAウイルスなので、まずcDNAに逆転写してからPCRで増幅する必要がある。実際のRT-PCRではこれをシークエンスするか、コロナウイルスの塩基配列に特異的に結合するプローブに蛍光色素をつけた試薬(Taqman法)で存在を調べる方法などが考えられる→特別講義「個人差の生化学」参考。実習の方法を使うのであればコロナウイルスに特異的な塩基配列を切断する制限酵素を探さなければいけない。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },

        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2021本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '胃を全摘手術した際に欠乏するビタミン、そのビタミンの欠乏により引き起こされる貧血について明確にしるし述べなさい。',
          choices: [],
          answerImg: [
            biochemistry2021_1_1,
            biochemistry2021_1_2,
            biochemistry2021_1_3,
          ],
          answer:
            'ビタミンB12が欠乏する。ビタミンB12が欠乏すると、メチオニンシンターゼの活性が低下し、THFが不足する。これにより、赤血球のDNA合成が滞り、骨髄中に未成熟の巨赤芽球が蓄積し、血中の赤血球が異常な大型血球に置き換わる、巨赤芽球性貧血が起こる。特に、ビタミンB12の不足による巨赤芽球性貧血を悪性貧血と呼ぶ。',
          commentary:
            'ビタミンB12の吸収には、胃の壁細胞から分泌される内因子が必要で、全摘によって内因子が分泌されなくなる。ビタミンB12の欠乏症は、悪性貧血の他に、神経障害、メチルマロン酸血症（尿症）、高ホモシステイン血症がある。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            '酵素の活性と温度の関係について述べなさい。（150字以内）',
          choices: [],
          answerImg: [biochemistry2021_2],
          answer:
            '通常の反応と同じように温度を上げると酵素の活性は上昇する。ただし、温度を上げすぎると酵素のタンパク質が変性して失活するので活性は急激に低下する。したがって、それぞれの酵素には活性が最大になる最適温度が存在する。(105字)',
          commentary: '',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            ' グルコースアラニン回路について説明について述べよ。',
          choices: [],
          answerImg: [biochemistry2021_3],
          answer:
            '遊離アンモニアは毒性が高いので、アミノ酸に変えて生体にとって無害な状態にした後に血流によって肝臓に運ばれる。グルコースアラニン回路はその運搬系の一つであり、主として筋肉一肝臓間でのやり取りに関わっている。まず筋肉で解糖系により生じたビルビン酸にアンモニアを付加してアラニンとし、肝臓へ輸送する。肝臓ではアミノ基転移反応によってそのアラニンからピルビン酸を再生し、アンモニアを脱離するが、それぞれアンモニアは尿素回路へ入った後に尿素として尿から排出、ピルビン酸は糖新生経路へ入ってグルコースの生成に携わる。こうしてピルビン酸からグルコースが生成され今度は肝臓から筋肉に輸送される。',
          commentary:
            'アミノ酸分解で生じるアミノ基は、基本的には肝臓で尿素に変えられて排出される。アミノ酸分解は肝臓だけでなく筋肉など様々な組織で行われており（顕著なのは分枝アミノ酸であるバリン・ロイシン・イソロイシン）、生じたアミノ基をアラニンやグルタミンの形で肝臓へ血液輸送する。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            '空腹時や好気的運動時には遊離脂肪酸の血中濃度が上昇すると考えられるが、その理由について肝臓と筋肉、脂肪でどのような代謝がおこっているか説明しなさい。ただしまとまりの反応は〇〇経路として良い。（500 字以内）',
          choices: [],
          answerImg: [
            biochemistry2021_4_1,
            biochemistry2021_4_2,
            biochemistry2021_4_3,
          ],
          answer:
            'まず、肝臓では脂肪酸はβ酸化され、アセチル CoAが多量に作られる。作られたアセチル CoAは一部 TCA 回路に入り、大部分がケトン体の合成に使用される。ケトン体は肝臓から血中に送り出され、全身の組織のエネルギー源として利用される。筋肉では肝臓と同様に脂肪酸をβ酸化してアセチルCoAを得る。その後、アセチルCoAをTCA 回路によっCO2 まで分解し、電子伝達系と酸化的リン酸化によってエネルギーを産生する。脂肪酸はトリアシルグリセロールとして脂肪組織に貯蔵されている。空腹時や好気的運動時には、グルカゴンやアドレナリンの作用により脂肪組織でホルモン感受性リパーゼが活性化し、トリアシルグリセロールの分解が進行する。それにより得られた脂肪酸がアルブミンと結合して親水性となり、遊離脂肪酸として血中に放出されることで血中脂肪酸濃度が上昇する。この脂肪酸は筋肉と肝臓で使用される。一方、トリアシルグリセロールの分解時に同時に産生されたグリセロールは肝臓で糖新生の素材として使用される。(446字)',
          commentary:
            '脂肪細胞のホルモン感受性リパーゼが空腹時グルカゴンやア運動時ドレナリンによって促進され、遊離脂肪酸が血中に放出される。脂肪細胞から血中へ放出された遊離脂肪酸は数分で肝臓や筋肉などに取り込まれる。　空腹時の代謝を問う問題。摂食時の分も確認しておきましょう。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            '解糖系のNAD⁺について、⑴ 赤血球ではどのようにしてNADHに再生しているのか。⑵ これらの反応を継続して行うために必要な組織はなにか、またこれらの反応はどのような経路を辿るか。',
          choices: [],
          answerImg: [
            biochemistry2021_5_1,
            biochemistry2021_5_2,
            biochemistry2021_5_3,
          ],
          answer:
            '（1）赤血球にはミトコンドリアが存在しないので、酸素を還元してNADHを酸化することができない。そこで、代わりに解糖系の代謝産物であるピルビン酸を還元して乳酸にすることで、NADHを酸化してNAD⁺を再生している。（2）（1）で生成された乳酸を処理するために、肝臓（や心臓）が必要である。これらの臓器では血中から得た乳酸を酸化してピルビン酸に戻す（乳酸デヒドロゲナーゼの作用）。肝臓ではピルビン酸は糖新生によりグルコースに変換される（経路：ピルビン酸→オキサロ酢酸→ホスホエノールピルビン酸→→→グルコース6-P→）か、TCA回路（経路：ピルビン酸→アセチルCoA→→2CO₂など）で異化されATP合成に利用される。',
          commentary:
            '嫌気的条件を述べる。赤血球のほかに血管の少ない組織やがん細胞、激しい運動をする骨格筋などが挙げられる。血漿中の乳酸濃度が上昇すると乳酸アシドーシスとなる。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence: 'exonとintronについて説明しなさい。',
          choices: [],
          answerImg: [
            biochemistry2021_6_1,
            biochemistry2021_6_2,
            biochemistry2021_6_3,
          ],
          answer:
            'exonはメッセンジャーRNA前駆体から成熟メッセンジャーRNAに変換される際に、スプライシングを受けて残るメッセンジャーRNA前駆体の領域に相当するDNA上の領域である。一方、intronはexonに挟まれたDNA領域で、スプライシングによって除去されるメッセンジャーRNA 前駆体の領域に相当するDNA上の領域である。',
          commentary:
            'DNA模型の口頭試問で聞かれた人はその際の先生からのコメントを反映させた方が良いかもしれません。私は、どのような挙動をするかよりも定義が大事で、挙動は推測に過ぎず例外が出たらどうするんだ、と詰められました。',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence: '半不連続的複製について説明しなさい。',
          choices: [],
          answerImg: [
            biochemistry2021_7_1,
            biochemistry2021_7_2,
            biochemistry2021_7_3,
            biochemistry2021_7_4,
          ],
          answer:
            'DNA は相補的な二本差であり、複製に必要なDNAポリメラーゼは5’→3’の方向へしか複製を進めることができない。二本鎖のうち、3’→5’方向の鎖を鋳型にして合成される鎖は DNAポリメラーゼによる伸長方向と複製フォークの進行とが同一方向になり、5’→3’へと連続的に合成される。一方、5’→3’方向の鎖を鋳型にして合成される鎖では、岡崎フラグメントと呼ばれる短い DNA鎖が5’→3’方向に合成され、DNAリガーゼによって一本の鎖に合成される。これを半不連続的複製という。',
          commentary:
            'リーディング鎖では連続的な合成が行われ、ラギング鎖では不連続的な合成が行われる。その他、DNA複製は半保存的複製の性質も持つ。複製後のDNAのうち片方が親から受け継がれた（保存された）鎖で、もう片方が新しく合成された（保存されていない）鎖であることから。',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence: 'PCR検査の原理と測定方法について述べなさい。',
          choices: [],
          answerImg: [RTPCR],
          answer:
            'PCR 反応では、鋳型となる被験者のゲノムDNA鎖とDNAポリメラーゼ、増幅目的の領域の両末端に相補的に結合するプライマー、そして材料となる四種類のヌクレオチドを混合する。そして、これをまず 90°Cに加熱することで鉄型DNAを変性させ一本鎖にする。次に、温度を 50°Cまで低下させてプライマーと鋳型DNAのアニーリングを起こす。最後に、ポリメラーゼの最適温度である 70°Cまで上昇させてプライマーから DNA合成を生じさせる。以降この過程を繰り返すことでDNAの目的領域を増幅させる。PCR検査ではこの PCR 反応産物を電気泳動してバンドを観察することで、目的DNA領域が増幅されていたのかどうか、すなわちコロナ陽性だったのかどうかを確認する。',
          commentary:
            'コロナウイルスはRNAウイルスなので逆転写を行ったcDNAをPCRで増幅し調べる。PCRは精度が高いのでほんの少しのウイルス数でも増幅して検出することができるし、増幅される速度を調べることでウイルスの量を調べることができる。ただし、コロナウイルスは型（塩基配列）が変わりやすく、死滅したウイルスでも検出されてしまうので注意。実習でやったことを確認しておこう。口頭試問の勉強にもなるでしょう。',
        },
      ],
    },
    {
      groupTag: '2020本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            'ミトコンドリアの電子伝達系におけるATP合成機構について説明しなさい。',
          choices: [],
          answerImg: [
            biochemistry_2020_1_1,
            biochemistry_2020_1_2,
            biochemistry_2020_1_3,
            biochemistry_2020_1_4,
            biochemistry_2020_1_5,
            biochemistry_2020_1_6,
          ],
          answer:
            'ミトコンドリアにおいて電子伝達系と酸化的リン酸化は緊密に共役している。まず、電子複合体が電子を供給する毎にマトリックスから膜間腔へと H＋を汲み出す。このH＋の濃度差によってプロトン勾配が生じて ATP 合成酵素がマトリックス内へと入り込む。これにより電子伝達で生じたエネルギーを ATP として捕捉し合成できる。このようなエネルギー変換の過程をとることで、ATP 合成のために高エネルギー中間体を使う必要がなく持続的な ATP 合成が行える。',
          commentary:
            '電子伝達系について聞かれているが、酸化的リン酸化反応についても書くとよい。化学浸透説のメリットについて書いてもなおよい。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            'アンモニアは生体内で有毒であるが、ヒトのアミノ酸の合成および分解においてはアンモニアが低濃度に抑えられるのはなぜか説明しなさい。',
          choices: [],
          answerImg: [
            ammonia,
            // biochemistry_2020_2_1,
            // biochemistry_2020_2_2,
            // biochemistry_2020_2_3,
            // biochemistry_2020_2_4,
            // biochemistry_2020_2_5,
          ],
          answer:
            'アミノ酸はアミノ基を外すと糖代謝の中間体となり糖新生に利用できるため、まずアミノ基を外す反応がおこる。これをアミノ基転移反応といい、これによってグルタミン酸が生じる。このグルタミン酸は分解されてα-ケトグルタル酸とアンモニアとなる。ここで生じたアンモニアを肝臓へと運んで尿素とする必要があるのだが、アンモニアは有毒であるため肝臓までの輸送の際は比較的無害な物質へと変換されて運ばれる。この輸送法は２つあり、１つ目はグルタミンシンターゼである。このグルタミンシンターゼではアンモニアをグルタミン酸と結合させてグルタミンとし、肝臓まで送って再びアンモニアとグルタミン酸へと分解する。ここで生じたグルタミン酸は再利用される。もう１つはグルコース-アラニン経路である。こちらはアンモニアをピルビン酸と結合させてアラニンとして肝臓まで送る。肝臓でアラニンは再びアンモニアとピルビン酸へ分解され、ピルビン酸は糖新生でグルコースとされたのち解糖系を経て再びピルビン酸として利用される。このように２つの経路で運ばれたアンモニアは尿素回路にのり無毒化されていく。以上のように、体内において出来るだけ有毒なアンモニアが存在しないようになっていると言える。',
          commentary:
            'アンモニアはほとんどが肝臓の尿素回路で代謝される。組織で出てきたアンモニア（アミノ基）は、基本グルタミンかアラニンの形で肝臓へ輸送される。アラニンからグルタミン酸へアミノ基を転移する酵素をALT（アラニンアミノトランスフェラーゼ）という。ちなみにグルタミン酸からオキサロ酢酸へアミノ基を転移させ尿素回路の中間産物であるアスパラギン酸を生成する反応の酵素をAST（アスパラギン酸アミノトランスフェラーゼ）という。肝機能の障害や尿素回路の遺伝的欠陥によって高アンモニア血症を発症する。',
        },
        {
          detailInfo: '3',
          questionImg: [biochemistry2020_3_question],
          questionSentence:
            'ある酵素触媒反応の反応速度と基質濃度の関係は、阻害剤非存在下で以下のラインウィーバー・バークプロットに示される。この反応を阻害する阻害剤Iについて、阻害剤Iの阻害作用は競合的であった。阻害剤I存在下でのラインウィーバー・バークプロットがどのようになるか、以下のグラフに描きこみなさい。また、競合阻害によって起こる速度論的パラメーター(KmやVmax)の変化を150字以内で説明しなさい。',
          choices: [],
          answerImg: [biochemistry2020_3_answer],
          answer:
            '競合阻害剤は酵素の活性部位に可逆的に結合し、基質の結合を妨げる。競合阻害剤が存在しても最大反応速度Vmax は変化しない。一方、阻害剤の濃度を増加させると、見かけのミカエリス定数Kmは増加する。図において、阻害剤Iの非存在下および存在下でのプロットはy軸状の 1/Vmax で交わるが、阻害剤Iの存在下ではx切片の負の値が0に近づいており見かけのKmが増加したことが分かる。よって競合阻害である。(199字)',
          commentary:
            'Kmは反応速度が1/2 Vmaxとなるような基質の濃度であり、基質に対する酵素の親和性ともよばれる（Kmが大きいほど反応により多くの基質濃度が必要→基質親和性が低いといえる）。酵素のVmaxやKmは阻害剤の阻害様式（競合阻害or非競合阻害）によって変化し、非競合阻害では基質の濃度に関わらず一定の基質の反応が阻害される→Kmは変わらずVmaxは下がる。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            '11-cis-レチナールの生理作用と欠乏症状について、100 字以上 200 字以下で説明しな さい。',
          choices: [],
          answerImg: [biochemistry_2020_4_1, biochemistry_2020_4_2],
          answer:
            '11-cis-レチナールはビタミンA由来の物質である。11-cis-レチナールはオプシンと結合してロドプシンとなる。このロドプシンは光を感受し視覚サイクルに関与する。そのためこの 11-cis-レチナールが欠乏すると夜盲症や眼球乾燥症といった主に眼球に関する症状がみられると言える(142字)',
          commentary: '',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            '代謝とは生命維持に関わる連続的な化学反応のことである。ヒトの肝臓の細胞におけるミトコンドリア中のアセチルCoAと細胞質中のアセチルCoAの生理的意義を、代謝の観点から比較して述べなさい。',
          choices: [],
          answerImg: [biochemistry_2020_5_1, biochemistry_2020_5_2],
          answer:
            '摂食後体内にはグルコースが大量に存在するためグルコースをエネルギーへと変換しようとする。グルコースははじめに解糖系に乗り最終的にピルビン酸へと変化する。このピルビン酸はミトコンドリア内でアセチルCoAへと変換されて TCA 回路でクエン酸が生じる。これによって TCA 回路がまわり ATP 合成へと進む。一方、クエン酸は過剰になると細胞質に輸送されてアセチルCoAとなり脂肪酸合成へと進む。そして空腹時のエネル ギー不足に応じて蓄えられていた脂肪酸は分解されていくことにより再びミトコンドリア内でアセチルCoAとして存在して、TCA 回路に再び乗りエネルギー不足を解消する。また 飢餓時は脂肪酸の過剰な分解によりミトコンドリア内でアセチルCoAが大量にあることとなり、ケトン体として代わりのエネルギー源として活躍する。このようにミトコンドリア内でのアセチルCoAは主にエネルギー生成へと、細胞質内のアセチルCoAはエネルギー貯蔵へと進める物質として意義があると言える。',
          commentary:
            'アセチルCoAが糖代謝と脂肪酸合成を結びつけていることが分かればよい。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            '生体内のカスケード反応について、例を挙げて説明しなさい。(300 字以内、具体的な酵素の名前は書かなくてよい。)',
          choices: [],
          answerImg: [],
          answer:
            'カスケード反応とは多段階反応のことであり、はじめの刺激を段階を踏んで増幅させてすばやく反応を起こすことである。例えばグリコーゲン合成分解によるリン酸化カスケード反応である。摂食時グルコースは体内に大量にあるためグリコーゲンとして蓄積しようとする。その際インスリンが膵ランゲルハンス細胞から分泌されてグリコーゲンシンターゼを活性化しグリコーゲンホスホリラーゼは不活性化されてグリコーゲン合成の向きに進む。一方空腹時は逆でアドレナリンやグルカゴンの分泌でグリコーゲンシンターゼは不活性化されてグリコーゲンホスホリラーゼを活性することで分解の向きへと進む。このようにカスケード反応を使いグリコーゲン代謝の素早い調節を行うことができる。(314字)',
          commentary:
            'はじめの１行目がポイントで、素早い反応を行うのに効果的という旨を必ず書くこと。他は好きなものを書けばよし。アラキドン酸カスケードなど。',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence:
            '(1)コロナウイルスの遺伝子複製と発現について説明し、コロナウイルスと 宿主細胞の遺伝子複製と発現の(2)共通点と(3)相違点を述べなさい。',
          choices: [],
          answerImg: [],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAの間に塩基の部位を内部にしまうことができるので、塩基の損失や置換による遺伝子情報の変化・損失を抑えることができる。また複製において誤った塩基を付加された場合、相補鎖の関係からDNAポリメラーゼの持つ酵素によって除去されて正確なDNA合成が行われる。複製が正確に行われたとしても突然変異による一塩基変異が起こりうるが、相補的な塩基情報を用いるこ とで修復は可能である。これよりDNAは非常に安定しており、遺伝子情報を担う物質として適している。一方RNAは一本鎖であるため、DNAのような校正機構を持たず、変異が起こりやすい。また校正されないため変異が起こっても修復されることはなく変異は蓄積されていき、様々な性質を持つ変異ウイルスを生じやすい。コロナウイルスはプラスRNA一本鎖ウイルスとして知られている。そのためセントラルドグマにおいて転写は行われないが、DNA を遺伝子情報として持つ細胞と同じく翻訳を行い 遺伝情報の複製を行なっていく。しかし前述の通りDNAによる複製との比較よりRNAからの翻訳は不正確であり変異が非常に起こりやすい。そのため変異型ウイルスが多く現れ得る。このことは昨今の報道での変異型ウイルスや、各国のワクチン開発が遅れている原因となっていると考えられる。',
          commentary:
            'コロナウイルスはRNAウイルスで、自身のゲノムそのものがmRNAとして働き、ウイルス蛋白質を作り出す。細胞質内で自らが持つRNA依存性ポリメラーゼで複製を行う。',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence:
            'COVID-19 感染疑いの検体(唾液、咽頭ぬぐい液)のPCR検査を行う際の大まかな手順と準備物を示しなさい。(実際に行われている real-time PCR、実習で行ったゲル電気泳動法のどちらを答えてもよい。ただし、どちらを説明したか明確にすること。)',
          choices: [],
          answerImg: [RTPCR],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAは相補的な塩基対間で形成される水素結合によって繋がっている。この繋がりは温度を上げることで切ることができ、これを変性という。また徐々に温度を下げていくことで水素結合が再形成されて 復元される。これらの作用を利用したのが PCR 法である。まず増幅したい領域の両端に相補的なプライマーDNA、鋳型のゲノム DNA、耐熱性を持つDNAポリメラーゼ、材料となる 4 種のヌクレオチドを混合する。そして温度を上げるとゲノムDNAは変性により一本鎖となる。その後徐々に温度を下げていくことでプライマーDNA とゲノムDNAの複製がお こる。次にDNAポリメラーゼの至適温度まで温度上昇することでプライマーからDNA合 成が起こっていく。この一連の操作を繰り返すことでプライマー間のDNAを特異的に増幅 することになる。このようにして生じた増幅断片を電気泳動にかける。そして検体において も同じようにした断片の泳動度と同じであればその断片は感染の疑いがあるといえる。こ のようにDNAの特性を使い PCR 法は行われる。',
          commentary:
            'コロナウイルスはRNAウイルスなので、まずcDNAに逆転写してからPCRで増幅する必要がある。実際のRT-PCRではこれをシークエンスするか、コロナウイルスの塩基配列に特異的に結合するプローブに蛍光色素をつけた試薬(Taqman法)で存在を調べる方法などが考えられる→特別講義「個人差の生化学」参考。実習の方法を使うのであればコロナウイルスに特異的な塩基配列を切断する制限酵素を探さなければいけない。',
        },
        {
          detailInfo: '9',
          questionImg: [],
          questionSentence:
            '（1）カルタヘナ法の目的について説明し、（2）実際の生化学実習において具体的にどのような注意を必要としたか、（3）医学領域においてどのような場合がこの法令により規制されるかについて説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '（1）遺伝子組換え生物の使用等による生物多様性への悪影響の防止（2）実習においては大腸菌の組換え実験の際にこのカルタヘナ法の遵守を必要とする。例えば、実験室に「関係者以外立ち入り禁止」との張り紙を貼り、実習中は組換え生物の拡散を防ぐために密室にして入室制限をする。また使用したチップ等も不活性化をしてから廃棄するため専用の回収 BOX に集めることが必要である。宿主又は供与体の性質に応じてクラス 1〜4 まで分類されて、これに応じて拡散防止措置をとる。（3）遺伝子組み換えを施した大腸菌を、普通の水道の流しに捨てた場合。',
          commentary:
            '口頭試問で、実習中にカルタヘナ法に違反すると誰が処罰されるか、という質問があったらしい。実験者と学長である。',
        },
      ],
    },
    {
      groupTag: '2019本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            'ジヒドロ葉酸レダクターゼはテトラヒドロ葉酸(THF)の生成を触媒する NADPH 依存性レダクターゼである。 (1)NADPH の生体内における役割を説明せよ。(50 字以内)（2）ジヒドロ葉酸レダクターゼの阻害剤が抗がん剤に応用されているのはなぜか。THF の生理作用にも言及して説明せよ。(200 字以内)',
          choices: [],
          answerImg: [biochemistry2019_1_1, biochemistry2019_1_2],
          answer:
            '（1）細胞障害性をもつ活性酸素種の一種である過酸化水素を消去する際に酸化されたグルタチオンを再還元する。(49字)（2）THFは、葉酸の活性型であり、一炭素単位の運搬体として機能し、メチオニン、プリンヌクレオチド、TMP の合成に関わるため、細胞分裂の盛んな組織に多く、細胞増殖や成長に必要な物質である。そのため、阻害剤を用いて、THF の生成を触媒するジヒドロ葉酸レダクターゼを阻害することで、がん細胞の増殖と成長を抑えることができるからである。 この際、正常細胞も標的となるが、がん細胞の方が増殖が速いため、より影響を受ける。(205字)',
          commentary:
            'NADPH/NADP⁺は電子供与体で、上述の過酸化水素の還元に関わるほか、シトクロムp450モノオキシゲナーゼが触媒する反応(A-H + O₂ + NADPH + H⁺ → A-OH + H₂O + NADP⁺:酸素原子1個を付加することによる水酸化)にも必要で、同化反応などで多用される還元的生合成に利用される。合成はペントースリン酸経路・リンゴ酸デヒドロゲナーゼなどで行われる。ペントースリン酸経路のグルコース6リン酸デヒドロゲナーゼが欠損すると赤血球でNADPH産生能が低下し、溶血が起きやすくなる。※赤血球の寿命が縮みマラリア耐性を得るので中東などを中心に2億人以上の患者がいる。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence: '化学浸透圧説について説明せよ。',
          choices: [],
          answerImg: [
            biochemistry2019_2_1,
            biochemistry2019_2_2,
            biochemistry2019_2_3,
          ],
          answer:
            '電子伝達系で遊離したエネルギーは H⁺の電気化学ポテンシャルに変換され、 ATP 合成酵素はこのH⁺駆動力を利用して ATP 合成を行う、という説。すべての生命に普遍的な生体エネルギー変換の原理を説明でき、ATP 合成のために、物質(高エネルギー中間体)をいちいち使う必要がなく、ATP合成を持続的に行える。',
          commentary:
            '酸化的リン酸化におけるATPシンターゼ（複合体Ⅴ）は電子伝達鎖によって生じたプロトン勾配のエネルギーを使ってATPを合成するが、これとは真逆で、ATPを使用してリソソームなどでプロトン勾配を作り出す酵素V-ATPaseも細胞内には存在する。このV-ATPaseはリソソームやオルガネラの酸性化だけでなく、破骨細胞や発生初期の極性の形成に重要な役割を担っている。→特別講義「疾患発症に関わる酸性オルガネラの高次構造」',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            'PIP₂(ホスファチジルイノシトール 4,5 ビスリン酸)のシグナル伝達について説明せよ。',
          choices: [],
          answerImg: [
            biochemistry2019_3_1,
            biochemistry2019_3_2,
            biochemistry2019_3_3,
          ],
          answer:
            'ホルモンが GPCR に特異的に結合すると、Gタンパク質のαサブユニットの GDP-GTP 交換反応が起こる。活性化したαサブユニットは PLC を活性化し、活性化した PLC はPIP₂を DG(ジアシルグリセロール)と IP₃(イノシトール 1,4,5-トリスリン酸)に切断する。細胞膜に残った DG は PKC を活性化する。また、IP₃ が小胞体の IP₃ 依存性 Ca²⁺チャネルに結合して Ca²⁺を 細胞質内に大量に放出させ、その Ca²⁺も PKC を活性化させる。活性化された PKC がタンパク質をリン酸化することで、細胞内応答が起こる。',
          commentary: '',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            'ライソゾーム病(リソソーム病)とは何か。またその機序について説明せよ。(200 字以内)',
          choices: [],
          answerImg: [biochemistry2019_4_1, biochemistry2019_4_2],
          answer:
            'リソゾーム中には数多くの分解酵素が存在しており、老廃物・不要物の分解を行う。この分解酵素の一つが先天的に欠損しているために起こる病気がリソゾーム病である。欠損する酵素の種類によって 色々な病気があり、症状も異なってくる。リソソームの中に分解されない老廃物が次第に蓄積していくことで病気が進行していく。(150字)',
          commentary: '',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            'グリコーゲン代謝において、合成と分解はそれぞれグリコーゲンシンターゼとグリコーゲンホスファターゼによって相反的に調節されている。（1）なぜ相反的に調節されているのか説明せよ。(100 字以内) （2）グリコーゲンシンターゼとグリコーゲンホスファターゼはどのようにして相反的に調節されているか、説明せよ。(300 字以内)',
          choices: [],
          answerImg: [biochemistry2019_5],
          answer:
            '（1）もし同化経路と異化経路が同じ酵素により制御されていれば、異化経路(エネルギー産生) が触媒されるのと同時に、分子の合成(同化経路)も触媒されてしまう。これでは反応の緻密な制御ができない。同化経路と異化経路が異なる酵素によって触媒されると、片方の経路の活性のみが上昇するため反応の方向性を決定することができ、代謝の緻密な制御が可能となる。(168字)（2）グリコーゲンシンターゼとグリコーゲンホスホリラーゼはともにアロステリックな調節を受けている。血糖値が高いと、グリコーゲンシンターゼはグルコース 6 リン酸(G6-P)に よって活性化され、グリコーゲンホスホリラーゼは ATP と G6-P によって阻害される。その結果、グリコーゲン合成が進む。運動時には、筋肉や肝臓では細胞内 Ca2+濃度が上昇し、ATP が消費され AMP が生じる。 グリコーゲンホスホリラーゼは Ca²⁺と AMP により活性化され、グリコーゲン分解が進む。 また肝臓では、Ca²⁺によりプロテインキナーゼCが活性化されグリコーゲンシンターゼがリン酸化不活化されてグリコーゲン合成は抑制される。(311字)',
          commentary: '',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            'DNA の複製おいて、複製フォークが進むにつれ、3’→5’方向の親鎖に対してはDNAポリメラーゼで連続的に合成できるが、5’→3’方向の親鎖に対しては既知のDNAポリメラーゼでは連続的に合成できない。しかし 5’→3’方向へも複製フォークが進むと同時にDNAは合成されているように見える。これはなぜか、図を用いて説明せよ。',
          choices: [],
          answerImg: [biochemistry2019_6_ans],
          answer:
            '3’→5’方向の親鎖の複製が進み、5’→3’方向の親鎖がある程度露出するたびに、DNAポリメラーゼが新しいプライマーRNAに結合し、岡崎フラグメントを作り始める。その後、DNAポリメラーゼが断片の合成を完了すると、プライマーRNA除去され、DNAに置換される。その切れ目をDNAリガーゼが共有結合でつなぎ、岡崎フラグメントを連結する。これにより、5’→3’方向へもDNAを合成することができる。',
          commentary: 'ラギング鎖とリーディング鎖',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence:
            'DNA の変性と復元について説明し、この機構が分子生物学的、分子工学的にどのように活用されているか説明せよ。',
          choices: [],
          answerImg: [],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAは相補的な塩基対間で形成される水素結合によってつながっている。この水素結合は温度を 上げることで切ることができる。これをDNAの変性という。また温度を徐々に下げることで元の塩基対 間の 水素結合が再形成される。これをDNAの復元 (アニーリング) という。アニーリングは塩基対が相補的であれば起こり、相補鎖は必ずしも元ペアであったDNA鎖である必要はない。このメカニズムが応用されている例としては PCR 法が挙げられる。',
          commentary: '',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence:
            'HbA1c とは何か。また、HbA1c を糖尿病の診断に用いることの意義を血糖値との違いに言及して説明せよ。',
          choices: [],
          answerImg: [biochemistry2019_8],
          answer:
            'HbA1c とはグルコースが結合したヘモグロビンである。生理的条件下において赤血球の ヘモグロビンは寿命 120 日間でゆっくりと血糖と結合して糖化するが、この結合の程度は過去 1~2 か月間における血中のグルコース平均濃度に比例する。したがって HbA1c 値測定は過去 1~2 か月間における平均血糖値を反映しており、血糖コントロールの指標となる。 糖尿病患者は血中のグルコース濃度が慢性的に高いためこの HbA1c の濃度が高くなる。よって HbA1c 値測定は糖尿病を判断する指標として用いられる。',
          commentary:
            '生理的条件下で、HbAはゆっくり非酵素的に糖鎖が付加されていく。',
        },
      ],
    },
    {
      groupTag: '2018本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '糖化へモグロビンとは何か?生成機構と臨床における意義も含めて説明しなさい。',
          choices: [],
          answerImg: [biochemistry2018_1],
          answer:
            '糖化ヘモグロビンは、ヘモグロビン β 鎖末端のバリンの NH₂基にグルコースが結合したもので、AGEs になる前の中間物質である。糖化ヘモグロビン量は、過去 1〜2 ヶ月の平均の血糖を反映しているので、血糖コントロールの指標となり、糖尿病の判定基準にも用いられる。また、溶血性貧血など、赤血球寿命が短縮する場合は、糖化ヘモグロビンの値は低くなる。',
          commentary:
            '生理的条件下で、HbAはゆっくり非酵素的に糖鎖が付加される。糖化（糖鎖付加）ヘモグロビンで最も多量にあるのがHbA1cである。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            'ジオキシゲナーゼは何の反応を触媒するかを答えよ。また、これの先天的欠損によって起こる病とその症状について述べよ。',
          choices: [],
          answerImg: [biochemistry2018_2],
          answer:
            '空気中の酸素分子を必須アミノ酸であるトリプトファンに取り込む反応(ジオキシゲナーゼ反応)を触媒する。アルカプトン尿症が起こり、症状は、ホモゲンチジン酸尿、大関節の関節炎、軟骨・コラーゲン組織への色素沈着がある。',
          commentary:
            'ジオキシゲナーゼはトリプトファン分解の第一段階の酵素であるほか、フェニルアラニン・チロシンの芳香環構造の開裂にも用いられる。アルカプトン尿症のほかにも、タンパク質の分解過程の酵素の欠損による疾患として、フェニルケトン尿症・メープルシロップ尿症・ホモシスチン尿症などが挙げられる。フェニルケトン尿症はフェニルケトン（→チロシン）の分解酵素の欠損で、知的障害・発育遅延などの症状がみられるので、早期のフェニルアラニン摂取制限とチロシン摂取が必要となる。メープルシロップ尿症ではバリン・ロイシン・イソロイシンの分枝アミノ酸共通の分解酵素が欠損していて、特有のメープルシロップのようなにおいのする尿が特徴的である。治療されない場合は生後数週間で死に至る。これらの疾患は新生児スクリーニングの対象で、早期発見することによって症状を緩和することができる。ホモシスチン尿症はメチオニンの分解過程酵素の欠損で、治療法としてはメチオニンの摂取制限とこの酵素を経由せずメチオニン→SAM→→メチオニンの再生経路を触媒する補酵素である葉酸・ビタミンB12、欠損酵素の補酵素であるビタミンB6の投与が有効である。',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            'ワルファリン投与時の二重逆数プロットの変化、血液凝固反応における還元型ビタミンKの生理的意義について説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_3],
          answer:
            'ワルファリンはビタミン K エポキシドレダクターゼを競合阻害する。これによって、二重逆数プロットのグラフは、x切片が大きくなり、y切片は変化せず、傾きは大きくなる。血液凝固反応における還元型ビタミン K はタンパク質中のグルタミン酸残基のカルボキシル化(Glu→Gla)を触媒し、ビタミン K 依存性カルボキシラーぜの補酵素として機能する。 血液凝固因子の Gla 残基が Ca²⁺をキレート化し生理作用を示す。',
          commentary: '',
        },
        {
          detailInfo: '4(1)',
          questionImg: [],
          questionSentence:
            '（１）コレステロールは血中でどのように運ばれるか説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_4_1],
          answer:
            '（1）コレステロールは両親媒性だが血中ではほとんどが疎水性の高いコレステロールエステルになり、リポタンパク質のコアに取り込まれて運搬される。',
          commentary:
            'コレステロールのヒドロキシ基が脂肪酸とエステル結合することで親水性を失う。TAGがキロミクロンやLDLに含まれるがHDLにはほとんど含まれない一方で、コレステロールエステルはLDLにもHDLにもキロミクロンにも含まれる。',
        },
        {
          detailInfo: '4(2)',
          questionImg: [],
          questionSentence:
            '（2）スタチン系治療薬Aが、HMG-CoAリダクターゼを阻害する時の阻害様式について説明せよ。 ',
          choices: [],
          answerImg: [biochemistry2018_4_2],
          answer:
            '（2）スタチン系治療薬 A は HMG-CoA と構造類似物質のため、HMG-CoA リダクターゼの競合阻害剤となる。酵素である HMG-CoA リダクターゼの活性部位への結合を、本来の基質である HMG-CoA と競合的に行うことで、HMG-CoA リダクターゼを阻害する。',
          commentary: '',
        },
        {
          detailInfo: '4(3)',
          questionImg: [],
          questionSentence:
            '（3）LDL受容体が細胞内に取り込まれるのはどんな場合か?また、その機構について説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_4_3],
          answer:
            '（3）LDL 受容体が細胞内に取り込まれるのは LDL を取り込むときである。LDL 受容体が LDL 上の apoB-100 に結合し、エンドサイトーシスを開始する。LDL はエンドソーム内に移行し、LDL 受容体は分離されて小胞内に入り、細胞表面へとリサイクルされる。',
          commentary:
            'apoB-100はVLDL~HDLに存在する。apoB-48はキロミクロンに特異的である。',
        },
        {
          detailInfo: '4(4)',
          questionImg: [],
          questionSentence:
            '（4）スタチン系治療薬Aが血中コレステロール濃度を下げる機構について説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_4_4],
          answer:
            '（4）アセチルCoAからコレステロールが生成される過程で、HMG-CoA が酵素である HMG-CoAリダクターゼによりメバロン酸へ変換される。スタチン系治療薬 A は、HMG-CoA リダクターゼの競合阻害剤としてこの反応を阻害することで、血中コレステロール濃度を下げる。',
          commentary:
            'HMG-CoAリダクターゼが律速酵素。競合阻害剤は基質結合部位に結合することで酵素の作用を阻害する。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            '遺伝子からmRNAが合成される過程とその調節機構について説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_5],
          answer:
            '転写の開始は，TATAボックスや CAATボックス，GCボックスといったコンセンサス配列を含むプロモーター領域に基本転写因子と呼ばれるタンパク質が結合することによって起こる。続いて基本転写因子同士や基本転写因子とRNAポリメラーゼIIが結合する。RNAポリメラーゼによってDNA配列の転写産物が合成され始め伸張していくがその方向は 5’ から 3’方向である.DNA 配列の中にはエンハンサーと呼ばれるものがあり，ここにアクチベーターと呼ばれる転写因子が結合することによって転写開始の効率は上がる.こうしてできた mRNA前駆体はその後，転写後修飾を受ける。具体的には 5’末端へのキャップ構造の付加と3’末端へのポリAテール付加である.そしてイントロンを除去してエキソンを繋ぎ合わせるスプライシングの過程を経てmRNAが完成する.',
          commentary:
            '2022年度のDNA模型の対象となったPNMT遺伝子ではTATA boxとGC boxが両方存在していたが、GC boxはどちらかというと転写の活発な遺伝子にのみみられるため、コアプロモーターであるTATA boxに対してエンハンサーの役割を担っていると考えられる。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence: 'カルタヘナ法について説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '目的は遺伝子組み換え生物等の使用等による生物多様性への悪影響を防ぐこと。 実習において、試験管内で組換えたDNAを持つプラスミドを大腸菌に導入する実験を行った。カルタヘナ法に基づき、実験室には「関係者以外立ち入り禁止」の表示があり、実習中は組み換え生物を外部に拡散させないために、実験室を密室にし、入退室の制限を行なった。使用したチップ等も廃棄前に不活化の措置を講ずるために専用の BOX に回収した。',
          commentary: '',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence:
            'V-ATPaseとは何か?また、哺乳動物における生理的役割は何か?説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_7],
          answer:
            'プロトン輸送 ATP アーゼであり、細胞内コンパートメントの酸性化を担うタンパク質である。オルガネラ小胞の膜に存在するタンパク質で、ATP を燃料とし回転運動でプロトンを輸送しオルガネラ内を酸性化しタンパク質の品質管理や神経伝達、免疫反応を支える役割。',
          commentary: '特別講義の内容？',
        },
      ],
    },
    {
      groupTag: '2017本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '（1）アンフィンセンのドグマとはどのようなドグマか。その根拠となる実験を示し説明しなさい。（2）細胞内ではこのドグマは必ずしも成立しない。その理由を説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '（1）アンフィンセンは、あるタンパク質に変性剤(尿素とβ―メルカプトエタノール)を加え、 水素結合とジスルフィド結合を切断する処理を行い、変性させた後、変性剤を取り除いた。 その結果、変性したタンパク質がもとの立体構造に自発的に折りたたまれた。 この実験から導かれた結論である「アミノ酸配列(一次構造)が高次構造を決定する」というドグマがアンフィンセンのドグマである。（2）細胞内では、タンパク質濃度がかなり高い。そのため、タンパク質の折りたたみ過程において、そのタンパク質の疎水性部分が他のタンパク質の疎水性部分と凝縮してしまったり、あるいは、他のタンパク質の持つ電荷の作用などにより、ネイティブな構造に折りたたまれないことがある。これらの理由から、細胞内において必ずしも一次構造が高次構造を決定するとは限らない。',
          commentary: '参考：シャペロン',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            'ミトコンドリアにおける脱共役剤とはどのようなものか説明しなさい。',
          choices: [],
          answerImg: [uncouplingProtein],
          answer:
            '脱共役剤とは、電子伝達鎖による電子伝達と酸化的リン酸化による ATP の合成を脱共役させるものである。脱共役剤には、プロトンと結合した状態で膜間腔とマトリックスの間を移動できるものがある。このような物質は膜間腔でプロトンと結合し、マトリックスでそれを放出することで膜間腔内のプロトン勾配を解消し、酸化的リン酸化を起こせなくすることで脱共役を起こす。これにより非ふるえ熱が発生する。',
          commentary: '参考：褐色脂肪細胞などで脱共役タンパク質がみられる。',
        },
        {
          detailInfo: '3(1)',
          questionImg: [],
          questionSentence:
            '（1）cAMPは受容体などと共役してはたらくアデニル酸シクラーゼによって合成され、細胞内のcAMP依存型プロテインキナーゼを活性化する。このような物質をなんというか。また、なぜこのような物質が必要なのか説明せよ。',
          choices: [],
          answerImg: [],
          answer:
            '（1）セカンドメッセンジャーという。 ホルモンや神経伝達物質などが、細胞表面の受容体に結合することで一連の反応を引き起こし、その結果として特異的な細胞応答が生じる。 この時、ホルモンや神経伝達物質と細胞への最終的な効果の間に介在する物質(セカンドメッセンジャー)が必要であるため。',
          commentary:
            '水溶性ホルモンの受容体は細胞膜にある一方で、標的となるタンパク質は細胞質にある。この間を埋める細胞内シグナル伝達としての働きと、少ない刺激伝達でも増幅して十分な応答を誘導する働きの2点。　例えばグルカゴンやアドレナリンはGタンパク共役型の受容体/GPCRで受容され、アデニル酸シクラーゼを活性化させcAMPを増やすことでグリコーゲン分解を促進する。',
        },
        {
          detailInfo: '3(2)',
          questionImg: [],
          questionSentence:
            '（2）プロテインホスファターゼとは一般的にどのような反応を触媒する酵素か。 ',
          choices: [],
          answerImg: [],
          answer:
            '（2）タンパク質のリン酸化された残基を脱リン酸化する反応を触媒する酵素。',
          commentary: 'プロテインキナーゼの逆',
        },
        {
          detailInfo: '3(3)',
          questionImg: [],
          questionSentence:
            '（3）ヒトにおいてエネルギー源が過剰な時、トリアシルグリセロールが合成されて脂肪組織に蓄えられるが、この過剰なエネルギー源はどのようにして脂肪酸合成酵素の基質になるか説明しなさい。',
          choices: [],
          answerImg: [cytoplasmAcetylCoA],
          answer:
            '（3）エネルギー源が過剰な時、細胞内ATP濃度が上昇し、TCA回路はイソクエン酸からαケトグルタル酸への反応で阻害されるためにクエン酸が蓄積する。 これらのクエン酸は細胞質へ輸送された後、オキサロ酢酸とアセチルCoAに分解される。 このように生成されたアセチルCoAがカルボキシル化され、マロニルCoAとなる。 このようにして脂肪酸合成酵素の基質であるマロニルCoAが得られる。',
          commentary:
            'ATPが過剰→TCA回路抑制→脂肪酸合成。脂肪酸合成の律速酵素がその入口：アセチルCoA→マロニルCoAのアセチルCoAカルボキシラーゼ。インスリンで脱リン酸化されても活性化する。その際に余っているアセチルCoAをミトコンドリアマトリックス→細胞質へクエン酸を経由して輸送する必要がある。これがクエン酸シャトルと呼ばれる。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            'ヘキソキナーゼには四種類のアイソザイムがあり、主に筋肉に存在するヘキソキナーゼは Km が約 0.1mM、主に肝臓に存在するグルコキナーゼは Km が約 10mM である。 Km とはどのようなものか説明しなさい。また、上述のことは血糖値とどのような関連があるか説明しなさい。',
          choices: [],
          answerImg: [glucokinase],
          answer:
            'Km とは反応初速度が最大反応速度の半分の時の基質濃度のことであり、基質に対する酵素の親和性の指標として用いられる。血糖値が低いときは、筋肉などの組織において、Km値が低く、グルコース濃度が低くてもグルコースを効率的にリン酸化できるヘキソキナーゼが働き、一方で血糖値が高いときは、肝臓などの組織において、Km 値が高く、高濃度のグルコースを素早くリン酸化できるグルコキナーゼが働く。',
          commentary:
            'グルコキナーゼは肝臓と膵臓に存在する。肝臓ではグリコーゲン合成に、膵臓β細胞ではグルコース濃度センサー（→インスリン分泌）として利用される。グルコキナーゼはVmaxは高いがKmも大きく、基質を高濃度にしないと反応速度が上がらない→基質親和性が低いといえる。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence: 'Exon と Intron について説明しなさい。',
          choices: [],
          answerImg: [
            biochemistry2017_5_1,
            biochemistry2017_5_2,
            biochemistry2017_5_3,
          ],
          answer:
            'exonはメッセンジャーRNA前駆体から成熟メッセンジャーRNAに変換される際に、スプライシングを受けて残るメッセンジャーRNA前駆体の領域に相当するDNA上の領域である。一方、intronはexonに挟まれたDNA領域で、スプライシングによって除去されるメッセンジャーRNA 前駆体の領域に相当するDNA上の領域である。',
          commentary:
            '頻出。イントロンの前後には特徴的な配列GU-AGがあり。ここがスプライシングに利用される。exonであってもスプライシングされることがあるので注意→選択的スプライシング',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            'HIV ウイルスの感染予防のためにワクチンを開発する際問題点となるのは何か。HIV ウイルス複製機構をもとに考察しなさい。',
          choices: [],
          answerImg: [],
          answer:
            'HIV ウイルスはヘルパーT細胞内に侵入し、逆転写酵素を使い自らのゲノミックRNAからDNAを逆転写により合成する。そのDNAをヘルパーT 細胞の持つDNAに組み込み、転写することでRNAを産出し、このRNAの一部から翻訳によりウイルス構造蛋白質が作られ、また、遺伝情報の担体として産出されたRNAを使うことでウイルスが複製される。 HIV ウイルスの持つ逆転写酵素は正確性が低く、変異が入りやすいため、様々な性質を持った変異ウイルスが生じやすい。このことがワクチン開発を困難にしている。',
          commentary: '特別講義から出題？',
        },
      ],
    },
    {
      groupTag: '2016本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '異化経路と同化経路を別々にとり、酵素を別にすることの生理的意義(200 字)。',
          choices: [],
          answerImg: [metabolism],
          answer:
            '同化経路と異化経路で別の酵素を用いると、片方の酵素だけを活性化し、もう片方の酵素を抑制することで、同化経路と異化経路の片方を促進、もう片方を抑制できる。これにより、その時々に応じて代謝の方向性を一方向に定めることができるという意義がある。(119字)',
          commentary:
            '例えば脂肪酸合成（同化）経路はアセチルCoA→マロニルCoA→アシルCoA→...であるのに対し、脂肪酸酸化（異化）経路は...→アシルCoA→アセチルCoAである。当然酵素も異なり、アセチルCoAやATPが多いと脂肪酸合成が促進され、脂肪酸合成が停滞しマロニルCoAが減少すると脂肪酸分解が促進される。両者が同時に促進されることはない。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            '壊血病の治癒、予防としてのアスコルビン酸の生理的作用(150〜300 字)',
          choices: [],
          answerImg: [
            biochemistry2016_3_1,
            biochemistry2016_3_2,
            biochemistry2016_3_3,
          ],
          answer:
            'まず、コラーゲン繊維は3本のポリペプチドからなる三重らせん構造をしているが、各ポリペプチド鎖のリシン残基・プロリン残基は水酸化されている。この水酸基が互いに架橋構造を作ることでコラーゲン繊維は張力に強くなり、ひいては細胞外マトリックス(ECM) の強度も上がる。 ここで、リシン残基・プロリン残基の水酸化酵素の補酵素が、アスコルビン酸すなわちビタミンCであるから、アスコルビン酸はコラーゲン繊維やECMの強度を保つのに寄与している。従って、アスコルビン酸によって、ECMや皮下組織の強度が保たれ、歯肉や皮下組織の強度も保たれるので、そこからの出血も防がれ、壊血病が予防・治癒される。(291字)',
          commentary:
            'コラーゲンは様々なシグナル配列を含む前駆体（プロα鎖）の形で生成され、粗面小胞体の内腔で様々な酵素によって処理され細胞外へ分泌される。アスコルビン酸が不足するとプロリンとリシンの水酸化が不足して、コラーゲン繊維が架橋できず、線維の引っ張り強度が極端に低下し、皮下内出血などを起こす壊血病を発症する。',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence: 'アセチルCoAの代謝について(200〜500 字)',
          choices: [],

          answerImg: [biochemistry2016_2],
          answer:
            'まず、アセチルCoAは、グルコース、脂肪酸、ケト原性アミノ酸、ケトン体を原料として合成される。グルコースは、解糖されてピルビン酸となり、このピルビン酸を基質としてアセ チルCoAが生成する。脂肪酸は、トリアシルグリセロール(TAG)の形で脂肪細胞に貯蔵されていたものが、分解されて血中に放出され、各組織でβ酸化を受けて多くのアセチルCoAとなる。ケト原性アミノ酸の場合は、アミノ基を転移されて残った炭素骨格からアセチルCoAが合成される。これは主に肝臓で行われる。ケトン体は、飢餓時に肝臓でアセチルCoAから合成され、血中に放出され、各組織に取り込まれて再びアセチルCoAに戻される。 これにより、ケトン体からアセチルCoAが合成される。次に、アセチルCoAを原料として、脂肪酸、ケトン体、コレステロールが合成される。脂肪酸は、エネルギー過剰時にアセチルCoAを原料として肝臓で合成される。ケトン体は、 上記のように飢餓時に肝臓でアセチルCoAから合成される。コレステロールは全身の様々な組織で合成される。最後に、アセチルCoA自体は、TCAサイクルを回ることで、CO2とH2Oに分解され、排出される。(503字)',
          commentary:
            'アセチルCoAは解糖系の最終産物ピルビン酸がミトコンドリアマトリックスへ運ばれて産生される。そのままミトコンドリアマトリックスでTCA回路→酸化的リン酸化でATP合成に利用されるが、ATPが過剰になったりインスリンが分泌されたりするとクエン酸の形で細胞外へ運ばれて脂肪酸合成の基質となる（→クエン酸シャトル）。逆にアセチルCoAが不足したり脂肪酸合成が止まったりすると脂肪酸がミトコンドリアマトリックスへ運ばれてアセチルCoAにβ酸化される（→カルニチンシャトル）。アセチルCoAはそのままではミトコンドリア内膜を通過できないが、肝臓のミトコンドリアでケトン体（アセト酢酸・3-ヒドロキシ酪酸・アセトン）の形に変換されることで細胞質→血液中→肝臓以外の組織へ移動することができ、組織内でアセチルCoAに再変換されてエネルギー源として利用できる。長期の飢餓では脳もグルコースの代わりにケトン体をエネルギー源として利用する。一部のアミノ酸もアセチルCoAへと分解される（→ケト原性アミノ酸）が、これは糖原性アミノ酸とは区別される。アセチルCoAから糖新生を行うことができないからである。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence: 'オートファジーとは何か',
          choices: [],
          answerImg: [],
          answer:
            'オートファジーとは、日本語で言うと自食作用であり、細胞が自己の古くなったオルガネラやタンパク質を分解する作用のことである。この現象は、様々な真核生物種で見られる。ちなみに、東京工業大学の大隈教授は、酵母においてオートファジーに不可欠な遺伝子を突き止め、オートファジー研究を一大分野として押し上げたことで有名である。大隈教授は、オートファジー研究における功績により、本年度のノーベル生理学・医学賞を受賞した。 さて、オートファジーの具体的なメカニズムとは、以下のようなものである。まず、リン脂 質二重膜からなる隔離膜が、細胞質のオルガネラやタンパク質を取り囲む。これにより、オートファゴソームが形成される。この段階ではまだ、内容物は分解されていない。次に、リソソーム(これは、リン脂質一重膜からなる)が、オートファゴソームの外膜と融合し、リソソームの酸性加水分解酵素が内膜と外膜の間に流入する。さらに、酸性加水分解酵素が内膜を加水分解し、リン脂質一重膜からなるファゴリソソームが形成される。このファゴリソソームにおいてはじめて、酸性加水分解酵素による内容物の加水分解が生じる。内容物は、 構成単体であるアミノ酸や単糖にまで加水分解され、有用なものは、膜のトランスポーター によってサイトゾルに輸送される。不要なものは、エキソサイトーシスで細胞外に放出される。 さらに、オートファジーの意義として、自己のオルガネラやタンパクを分解することで栄養分を作り出して飢餓状態に対処すること、折りたたみの適切でないタンパクや古くなったオルガネラを分解することで細胞内のクリーニングを行う、の2点が挙げられる。',
          commentary:
            'ユビキチン-プロテアソーム系とは異なり非選択的に分解する。分解されたアミノ酸はアミノ酸プールとしてタンパク合成の材料やエネルギー源となる。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence: 'エキソンとイントロンについてそれぞれ説明せよ',
          choices: [],
          answerImg: [
            biochemistry2016_5_1,
            biochemistry2016_5_2,
            biochemistry2016_5_3,
          ],
          answer:
            'exonはメッセンジャーRNA前駆体から成熟メッセンジャーRNAに変換される際に、スプライシングを受けて残るメッセンジャーRNA前駆体の領域に相当するDNA上の領域である。一方、intronはexonに挟まれたDNA領域で、スプライシングによって除去されるメッセンジャーRNA 前駆体の領域に相当するDNA上の領域である。',
          commentary:
            '毎年頻出。イントロンの最初と最後には特徴的な配列(Gu-AG)があり、ここを利用してスプライシングが行われる。必ずしもすべてのエキソンがスプライシングで残るわけではないことに注意→選択的スプライシング。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            '（1）カルタヘナ法の目的（2）2016 年奈良医大で起こった遺伝子組み換え大腸菌流出事件の概要を説明（3）もしあなたが学長になったら、今後2のようなことが起こらないようにあなたはどう対策を取るか説明せよ',
          choices: [],
          answerImg: [],
          answer:
            '（1）カルタヘナ法の目的とは、遺伝子組み換え生物等の使用等による生物多様性への悪影響を防ぐことである。（2）この大腸菌事件とは、過去のある 3 年もの期間にわたって、奈良県立医科大学の講師が、実験に使用した遺伝子組み換え大腸菌を、カルタヘナ法で指定されている適切な方法で不活化処理せずに、そのまま下水に流していたことが発覚した、というもの。（3）遺伝子組み換え生物の不活化処理を、できるだけ一人ではなくて複数人で行うなど、ダブルチェックの体制を作らせる。また、実験者への教育を繰り返し行う。',
          commentary:
            '(1)生物多様性への悪影響を防止が必須。(2)はネットニュースでも見てください。(3)は自由に。',
        },
      ],
    },
    {
      groupTag: '実習-基本実習',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'キュベットで吸光度を測定する時と比べて、96穴プレートで吸光度測定を行う際には入れる試料の液量を厳密に調節する必要がある。この理由を説明せよ。',
          answerImg: [cubetAbsorbance, plate96well],
          answer:
            'キュベットの吸光度測定では、光を横から当てて吸光度を測定するため一定の光路長(1cm)が取れていたが、96穴プレートでは、光を上から当てて吸光度を測定するため光路長が入れた溶液の高さに依存してしまうから。',
          commentary:
            '吸光度A = εCL ε:分子吸光係数（物質に固有な定数） C:溶液の濃度(mol/L)　L:光路長(cm)',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1で、ATP溶液の濃度を吸光度から測定した。このとき、259nmにおける吸光度からATP水溶液の濃度を決定したが、この259nmの入射光は主にATPのどの部位に吸収されるか。DNAやRNAも同程度の260nmの光を主に吸収することを参考に、説明せよ。',
          answerImg: [baseAbsorbance],
          answer: '塩基に吸収される。',
          commentary:
            '塩基を含むATP、DNA、RNAは全て同じ260nm付近に吸光度のピークを持つ。厳密には塩基の種類によって微妙に吸収する光の波長が異なっているため、この差を利用して塩基配列の決定を行う手法もある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1で、ATP溶液の濃度を吸光度から測定した。このとき、石英製のキュベットを用いるのはなぜか？',
          answerImg: [cubetAbsorbance],
          answer:
            'プラスチック製のキュベットは可視領域の光は吸収しない（→人間の目には透明に見える）が、紫外領域の光は吸収してしまうため。',
          commentary:
            '話によるとプラスチック製のキュベットは紫外領域(~約350nm)の光をほぼ全て吸収してしまうらしい。可視領域(約350nm~)の光に対する吸光度測定にはプラスチック製のキュベットを使うことができる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2では、Bradford法によりタンパク質と色素を結合させてから道濃度のタンパク質溶液中に含まれるタンパク質の濃度を決定した。実習1のATP溶液ではこのような操作を行わなかったが、なぜこのような操作が必要なのか？',
          answerImg: [],
          answer:
            'タンパク質は種類によって吸収する光の波長帯がバラバラであるから。',
          commentary:
            '塩基が一定の波長の光を吸収するので、ATpやDNAやRNAに対しての吸光度測定に色素を使う必要が無かったが、タンパク質ではそのような性質はないので、色素による染色(Bradford法)が必要となる。この色素はタンパク質と結合することにより595nmの波長の光を吸収するようになるので、この領域の光について吸光度測定することで、タンパク質の濃度を測定することができる。',
        },
        {
          detailInfo: '',
          questionImg: [blankGraph],
          questionSentence:
            '実習2では、Bradford法によりタンパク質と色素を結合させてから道濃度のタンパク質溶液中に含まれるタンパク質の濃度を決定した。グラフ作成の際に測定した吸光度から水だけの時の吸光度（Blank）を引いてグラフを作成したが、なぜこのような操作を行ったのか、説明せよ。',
          answerImg: [],
          answer:
            '溶液以外（主に水とキュベット）の吸光度を結果から取り除く必要があるから。',
          commentary:
            '溶液は溶質 + 水 + キュベット、Blankはこのうちの溶質以外部分の吸光度を測定している。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '実習-核酸',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目、採集した血液1~1.5mLを20mLのTE溶液に加えた。このTE溶液には10mM Tris-HCl(pH 8.0)と1mM EDTAが含まれている。EDTAが入っている理由は？',
          answerImg: [coagulation],
          answer:
            'EDTAはCa²⁺のキレート剤で、血液凝固反応に必須のCa²⁺を除去するはたらきがある。',
          commentary:
            'EDTA(エチレンジアミン四酢酸)のほかにクエン酸ナトリウムもCa²⁺のキレート剤。ワーファリンは肝臓でビタミンKに拮抗することで抗凝固作用を示す。ヘパリンはアンチトロンビンⅢを活性化することで抗凝固作用を示す',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目。遠心後のDNA溶液にProteinase K入りのK bufferを加え、56℃で45分間インキュベートした。この時間に何が起こっているか、なぜ56℃なのか？',
          answerImg: [],
          answer:
            '一般的な酵素は体温前後で活性をもつ事が多く、リソソームに含まれる核酸分解酵素も37℃前後で活性をもつが、Proteinase Kは56℃で活性が最大となり、精製したDNAを分解することなくタンパク質を分解することができる。',
          commentary:
            'Proteinase K関連は頻出。プロテインアーゼKは非特異的にタンパク質を加水分解するため、DNAに結合しているヒストンなどのタンパク質や、リソソーム内の酵素群も分解・失活させることができる。常温で保存可能。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目。56℃で45分間Proteinase Kを活動させた後、DNA溶液を95℃で10分間インキュベートした。この時間に何を行っているか？',
          answerImg: [],
          answer:
            'Proteinase Kを失活させている。活性が残っているとこの後のPCR反応で使う酵素が分解されてしまう。',
          commentary:
            '95℃下ではDNAも熱変性を起こすが、温度を下げれば元に戻る。',
        },
        {
          detailInfo: '課題1',
          questionImg: [],
          questionSentence:
            '真核生物にはどのようなRNA種があるか、それぞれのRNA種の(1)total RNAに占める割合、(2)生合成過程と細胞内局在、(3)構造上の特徴、(4)機能について述べよ。',
          answerImg: [tRNA, snRNA, splicing],
          answer:
            '【リボソーム/rRNA】約80%。核小体でひとつながりの前駆体として転写・切断（真核生物では4種類）され、その後200か所以上の場所で修飾を受ける。リボソームとして粗面小胞体や細胞質に局在する。多数のrRNAとタンパク質が結合してリボソームという顆粒として存在するのが特徴で、翻訳時にアミノ酸がひとつずつ結合していく際のペプチド結合の形成を触媒する作用をもつ。　【転移/tRNA】約15%。一本の前駆体RNAが転写された後、切断され、100種類以上の修飾を受けて完成する。グローバルリーフモデルという二次構造がさらに折りたたまれてL型の構造をとるのが特徴的。翻訳時にリボソームまでアンチコドンに対応するアミノ酸を運ぶ。　【メッセンジャー/mRNA】約5%。RNAポリメラーゼⅡによって核内で生成され、5’末端にキャップ、3’末端にポリアデニル化(polyA鎖)の修飾を受け、核外のリボソームに付着しタンパク合成に関与した後、速やかに分解される。一本鎖構造が特徴的。RNAポリメラーゼによってDNAから転写されたタンパク質の配列情報をコードしている。',
          commentary: '',
        },

        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目。精製したRNAを分光光度計で定量する。260nm付近の波の形を調べるのはなぜか。260nm付近の吸光度でRNA以外に何が測定されうるか？',
          answerImg: [],
          answer:
            'ATP(259nm)、タンパク質(約280nm)が混ざっていないことを調べるため。',
          commentary:
            'DNAは同じ260nmであるため、混ざっていたとしても調べることができない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目、抽出したRNAから逆転写酵素によってcDNAを合成した。このcDNAとは何か。また、なぜRNAはPCRで増幅できないのか。',
          answerImg: [],
          answer:
            'complementary DNA(DNAの相補鎖)。RNAはDNAとは異なり1本鎖であるため。',
          commentary:
            'cDNAはmRNAに対応する塩基配列であるため、イントロンが含まれておらず、転写調節の影響を受ける。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目、抽出したRNAから逆転写酵素によってcDNAを合成した。このときプライマーはどういった種類のものを使ったか、Oligo dT primerとの違いは何か。',
          answerImg: [oligoDTprimer],
          answer:
            'Random primer。ランダムな6個の塩基配列をもったオリゴヌクレオチド。ポリAテールに特異的であるオリゴdTプライマーと違って、mRNAだけでなく様々なRNAの一部分を逆転写することができる。',
          commentary:
            '例えばヒストンタンパク質をコードするmRNAはポリAを持っていない。ランダムプライマーは検出範囲は広いが、RNAに対するプライマーの濃度を厳密に調節しないと狙った結果を出すことが難しい。今回の実験では、RNAに対してプライマーの量が多すぎて、短いcDNAばかりとなり、AST1のcDNAを増幅させて検出することができなかった。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目、抽出したRNAから逆転写酵素によってcDNAを合成した。この逆転写反応では逆転写酵素の他にRNAse inhibitorを加えたが、RNAse inhibitorとは何か。',
          answerImg: [],
          answer:
            'RNA分解酵素阻害剤。鋳型であるRNAを壊さないために加える。RNAseは比較的細胞内のどこにでも存在している。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目。PCRによってinsulin・ribosomal protein S15（とAST1）遺伝子の一部を増幅した。PCRとは何の略称か。また、PCR反応で必要なものは何か。',
          answerImg: [],
          answer:
            'Polymerase Chain Reaction。必要になるのはDNA、プライマー、dNTP混合液、DNAポリメラーゼ。',
          commentary:
            'PCRで増幅することで少ない試料からでも十分量のDNAを得ることができる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目。PCRや逆転写反応で使ったdNTP溶液とは何か',
          answerImg: [DNAsynthesize],
          answer:
            'dATP/dGTP/dCTP/dTTP(TTP)のmix。DNA合成で必要なヌクレオチド + 高エネルギーリン酸結合2個',
          commentary: 'デオキシリボース(d) + 塩基A/T/G/C + リン酸3個(TP)',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目。PCRによってinsulin・ribosomal protein S15（とAST1）遺伝子の一部を増幅した。PCRの仕組みを簡潔に説明せよ。',
          answerImg: [],
          answer:
            '(1)熱変性によって水素結合を壊してDNAを1本鎖にする。(2)1本鎖DNAにプライマーを結合（アニーリング）させる。(3)DNAポリメラーゼによる伸長反応を進める　(4)(1)~(3)を25~30回繰り返す。',
          commentary:
            '高温下でも失活しないDNAポリメラーゼ（高度好熱菌由来）を用いる。通常のDNAポリメラーゼを用いてしまうと1サイクルごとに失活するDNAポリメラーゼを補わなければいけなくなる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習3日目、アガロースゲルで電気泳動を行った。アガロースゲルとは何か。また、アガロースゲルで電気泳動することによってどのようなことがわかるか。',
          answerImg: [electrophoresisDNA],
          answer:
            'アガロースゲルとは寒天（多糖類）のゲルのことで、分子量が大きいほど通り抜けにくくなることを利用して、DNAの分子量の分布を調べることができる。',
          commentary:
            'タンパク質とは異なり、DNAには負電荷を帯びたリン酸基が含まれるため、常に負の電荷を帯びている。よってそのまま電気泳動しても陽極に引き寄せられる。アガロースの濃度を変えることで計測できる分子量の範囲を変えることができる（もっと分子量の大きなものを電気泳動させたいときはアガロースの濃度を下げる）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習3日目、アガロースゲルで電気泳動を行った。電気泳動用のbufferとしてLoading Bufferを加えたが、この目的を2つ挙げよ',
          answerImg: [],
          answer:
            '(1)サンプルに色を付けて確認しやすくする　(2)比重を水より重くしてゲル内に入りやすくする',
          commentary:
            'Loading buf.は分子量が小さく負に帯電しているため、電気泳動を止める時間の目安になる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習3日目、アガロースゲルで電気泳動を行った。このときアガロースゲルにGelRedなどのインカレーターを含めた意義を答えよ。',
          answerImg: [],
          answer:
            'GelRedにはDNAの二重らせん構造に入り込んで紫外線照射で発光する色素が含まれており、これを用いてDNAの分布を調べるため。',
          commentary:
            'Loading buf.はDNAと結合していないため電気泳動結果を調べることができない。色素をアガロースゲルに含めることで電気泳動していない（例えば浮いている）DNAは光らなくなる。',
        },
        {
          detailInfo: '',
          questionImg: [insulinGene],
          questionSentence:
            '実習3日目。アガロースゲルで電気泳動を行った結果、genomic DNAからinsulinに相当するDNAが2本のバンドとして出てきた。これはどういうことなのか、説明せよ。',
          answerImg: [],
          answer:
            'insulin2の遺伝子はイントロンを含んだ配列、insulin1遺伝子はイントロンを含まない配列であり、それぞれ分子量が異なるから。',
          commentary:
            '膵臓cDNAではmRNA成熟過程でスプライシングが行われるため、insulin2由来であったとしてもcDNAの配列にイントロンは含まれない→膵臓cDNAのバンドは1本。',
        },
        {
          detailInfo: '課題3-1',
          questionImg: [insulinGene],
          questionSentence:
            '(1)insulin 遺伝子について、遺伝子重複の過程とその意義を考察せよ。',
          choices: [],
          answerImg: [],
          answer:
            '【過程】遺伝子重複により、偽遺伝子として複数存在する。【意義】インスリンは生命に重要なホルモンである',
          commentary:
            'インスリンは遺伝子領域が2か所存在するが、実験でPCR増幅する部分には片方（type1）しかイントロン領域が存在しないので、シーケンス→電気泳動の結果によって区別できる',
        },
        {
          detailInfo: '課題3-2',
          questionImg: [S15Gene],
          questionSentence:
            '(2)ribosomal protein S15遺伝子について、遺伝子重複の過程とその意義を考察せよ。',
          answerImg: [DNArepair],
          answer:
            '【過程】卵子細胞でmRNAからまれに逆転写され、Processed 偽遺伝子として定着する（生殖細胞として遺伝する）【意義】リボソームRNA遺伝子は通常の生育に常時多量の産物が必要なハウスキーピング遺伝子の一つである。',
          commentary:
            '人体では逆転写はごくまれにしか起こらないが、卵子細胞は存在期間が非常に長いので起こり得る。ribosomal protein S15 遺伝子は卵子細胞でも発現している。偽遺伝子は転写に関わる非翻訳領域をもたないので、通常は役割をもたない。',
        },
        {
          detailInfo: '課題3-3',
          questionImg: [],
          questionSentence:
            '(3)遺伝子重複の過程とその意義について、一般的にどう考えるか、考察せよ。',
          choices: [],
          answerImg: [geneDuplication],
          answer:
            '遺伝子重複は遺伝的組み換えの異常・レトロトランスポゾンの転移・染色体全体の重複などによって遺伝子を含むDNA領域が重複する現象のことである。重複した遺伝子の一方は選択圧から開放されるため、変異が速やかに蓄積され、進化の重要な役割を担っていると考えられている。',
          commentary:
            'そのほか、哺乳動物では遺伝子増幅はいくつかの疾患や薬剤に対する応答としてみられることがある。例えばメトトレキサートに対する薬物耐性を獲得する過程で遺伝子コピー数の増加が確認されている。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '実習-酵素',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence: 'ASTの働きは？',
          choices: [],
          answerImg: [],
          answer:
            '「アスパラギン酸＋αケトグルタル酸←→オキサロ酢酸＋グルタミン酸」の反応の触媒',
          commentary:
            'アミノ基転移反応なので、ピリドキサールリン酸（ビタミンB₆由来）を補酵素として用いている。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence: 'ASTはどこから精製した？',
          choices: [],
          answerImg: [],
          answer: 'ラットの肝臓細胞質（ホモジェネレート）',
          commentary:
            'ミトコンドリア内のASTは細胞分画で除去した（ミトコンドリア内のASTはリンゴ酸-アスパラギン酸シャトルに関与している→NAD⁺/NADHの輸送のため）',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence: 'ピリドキサールリン酸は何のために加えたか？',
          choices: [],
          answerImg: [],
          answer: 'ASTの補酵素',
          commentary:
            'ビタミンB₆由来で、アミノ基転移に関与する補酵素。基本的にアミノ酸の代謝に関与している。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence: '補酵素とは何？',
          choices: [],
          answerImg: [],
          answer: '酵素の働きを補助する有機化合物',
          commentary:
            'Feイオンなどは補因子には含まれるが、有機物ではないので補酵素には含まれない。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence: '熱処理した理由は？',
          choices: [],
          answerImg: [],
          answer:
            'ASTは基質に結合することで（酵素基質複合体になることで）高熱下でも変性しにくくなるため、この差を利用して分画するため',
          commentary:
            '熱変性したタンパク質は沈殿しやすく、遠心分離で除外された。酵素基質複合体は酵素部分も基質部分もコンホメーションが変化している。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            'F1~F5を作製した後、全ての試料に対して透析を行った。透析した理由は？',
          choices: [],
          answerImg: [],
          answer:
            'サンプル内の微細化合物を除去し、混入物濃度を許容範囲内まで低下させるため',
          commentary:
            '除去したい物質のなかには直前の塩析で用いた硫安も含まれる。',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence: '硫安塩析法の原理は？',
          choices: [],
          answerImg: [colloid],
          answer:
            '水和していたタンパク質から水分子が硫安に取られ、タンパク質が互いに疎水性相互作用で結集し沈殿する',
          commentary: '凝析と塩析の違い。',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence: 'Bradford法とは？',
          choices: [],
          answerImg: [],
          answer:
            'CBB G-250 がタンパク質と結合することで最大吸収波長が変化することを利用してその吸光度からタンパク質を定量する',
          commentary:
            '基本実習と同様の手法。ASTだけではなくすべてのタンパク質が結合し、濃度に応じて吸光する。',
        },
        {
          detailInfo: '9',
          questionImg: [],
          questionSentence: 'Lowry 法とは？',
          choices: [],
          answerImg: [],
          answer:
            'ビウレット反応とアミノ酸側鎖の酸化反応を組み合わせたもの。定量感度はBradford法の約三分の一。',
          commentary: '',
        },
        {
          detailInfo: '10',
          questionImg: [],
          questionSentence:
            '実験2日目、ASTの酵素活性について調べた。TCA(trichloroacetic acid)を加えた理由は？',
          choices: [],
          answerImg: [BMTD],
          answer: 'オキサロ酢酸(OAA)とBMTDの反応を止めるため',
          commentary:
            'タンパク質とBMTDの反応を止めることで、存在するタンパク質にBMTDが過剰に反応して色素が生成されるのを防いでいる。沈殿を溶かす役割も。',
        },
        {
          detailInfo: '11',
          questionImg: [],
          questionSentence: 'ホモジェネートとは？',
          choices: [],
          answerImg: [],
          answer:
            '細胞分画の分離を行うため緩衝液や生理的食塩液を用いて生体組織を擦り潰し、得られた懸濁液',
          commentary:
            '中にはRNAseもリソソーム（内の拡散分解酵素）も含まれている→Proteinase Kによる処理が必要',
        },
        {
          detailInfo: '12',
          questionImg: [enzymeReport1],
          questionSentence: '精製度とは？',
          choices: [],
          answerImg: [],
          answer: '混合物から特定の物質をどの程度抽出できたかの割合',
          commentary:
            'F1（粗酵素液）の比活性を1として、精製処理によってどのくらい濃いAST溶液を作製できたかを表す数値。ASTの精製を行う上で重要なことは、ASTがどれだけ大量に精製できたかだけではなく、AST以外のタンパク質をどれだけ除去できたかも重要で、これを比活性（タンパク質全量に占めるASTの割合）として計算している。精製度は比活性の、F1に対する割合。例えば精製度が10であればF1（そのまま）に比べて10倍ASTを濃く抽出できたことになる。',
        },
        {
          detailInfo: '13',
          questionImg: [enzymeReport1],
          questionSentence: '全活性とは？',
          choices: [],
          answerImg: [],
          answer:
            'ある酵素活性に対してその酵素全量の活性 (1unit = 1minあたりの生成OAA量[μmol])',
          commentary:
            'その試料全体からどのくらいのOAA(オキサロ酢酸)が1分あたりに生成されたか。実際は10分間の反応の平均値から計算しており、十分な基質を加えているため反応の初速度を求めたといえる。全活性は試料に含まれるAST量そのものではないが、生成OAA量の初速度[unit]はAST量に依存しているため、試料に含まれるAST量が多いほど全活性は大きくなる。',
        },
        {
          detailInfo: '14',
          questionImg: [enzymeReport1],
          questionSentence: '回収率とは？',
          choices: [],
          answerImg: [],
          answer: '反応前後で目的とする物質がどれだけ回収されたかの割合',
          commentary:
            'F1（粗酵素液）の全活性を100%として、精製後の試料のどこにどれだけの割合のASTが含まれているかを示す。実験手技によって誤差は出るが、理論的にはF2~F4で100%を超えることは無く、かつF3~F5の回収率の合計はF2の回収率と等しくなる。（F2はF1の一部：沈殿を破棄しているが、F3以降の精製過程で破棄した部分は存在しないため）',
        },
        {
          detailInfo: '15',
          questionImg: [enzymeReport1],
          questionSentence: '比活性とは？',
          choices: [],
          answerImg: [],
          answer: '一定量のタンパク質に対して働く酵素量',
          commentary:
            '単位：unit／mg、比活性＝全活性／全タンパク質量。試料に含まれているタンパク質に対してのASTの割合のようなもの。厳密にはunitは生成OAA量の初速度であってASTの量そのものを示しているわけではないが、生成OAA量の初速度[unit]はAST量に依存しているため、試料に含まれているタンパク質に対してASTの割合が大きいほど比活性は大きくなる。全活性は試料中ASTの絶対量にしたがって大きくなるのに対して、比活性は試料中のタンパク質に対するAST量の割合にしたがって大きくなるという点で違う尺度の数値。',
        },
        {
          detailInfo: '16',
          questionImg: [],
          questionSentence: '対照の吸光度を引く理由は？',
          choices: [],
          answerImg: [blankGraph],
          answer: 'タンパク質以外の吸光要因を除くため',
          commentary: '具体的には水・キュベットなど。基本実習も参考に',
        },
        {
          detailInfo: '17',
          questionImg: [],
          questionSentence:
            '実習3日目、AST精製後のF4画分（酵素液）とα-ケトグルタル酸・ピリドキサールリン酸などを用いて反応速度を調べた。得られた結果S（α-ケトグルタル酸濃度）とV（オキサロ酢酸/OAA濃度）からS-V プロットを作製した。ここから分かることは？',
          choices: [],
          answerImg: [],
          answer:
            '基質濃度が高ければ反応速度は早くなるが、次第に反応速度は頭打ちになる。',
          commentary:
            '反応が進むにつれて基質濃度が下がるだけでなく、反応が逆方向にも進むため。ASTは反応を両方向に触媒する。',
        },
        {
          detailInfo: '18',
          questionImg: [],
          questionSentence: 'Km、Vmaxとは何か？',
          choices: [],
          answerImg: [],
          answer:
            'Vmax：最大反応速度、Km：Vmaxの半分の反応速度を与える基質濃度',
          commentary:
            'Kmが小さいほど酵素と基質の親和性が高い。KmはVmaxの半分のVが得られるような基質の濃度を示していて、このようなKmの値が大きい→1/2Vmaxの反応速度を得るために必要な基質が大きい→基質に対する酵素の親和性が低い',
        },
        {
          detailInfo: '19',
          questionImg: [],
          questionSentence:
            '競合阻害によってKmとVmaxの値はどのように変化するか？',
          choices: [],
          answerImg: [EnzymeActivity],
          answer:
            'Km値とは最大反応速度Vmaxの半分の値をとる時の基質濃度に等しく、基質との親和性を表す。競合阻害によって酵素は基質と出会いにくくなりKm値は大きくなる。また、Vmax値は、基質酵素複合体の濃度[ES]に依存するため、十分量の基質が存在する場合、競合阻害薬によって[ES]は変化しないから（無限に濃い濃度の基質存在下では競合阻害剤の存在を無視できるから）、Vmaxは不変。',
          commentary:
            'V-[S]グラフでイメージすると良い。漸近線が変わらず、長期的に見れば同じこと。',
        },
        {
          detailInfo: '20',
          questionImg: [],
          questionSentence:
            '各上清(F1〜F5)はどのような条件か。また、理論上最もAST の比活性が高くなるのはどれか。',
          choices: [],
          answerImg: [F1toF5],
          answer:
            'F1：粗酵素液、F2：熱処理上清、F3：0〜0.5 飽和硫安画分、F4（比活性最大）：0.5〜0.75 飽和硫安画分、F5：0.75~ 飽和硫安画分',
          commentary:
            'この実習の目的はASTの精製なので、F4が精製後ということになる。',
        },
        {
          detailInfo: '21',
          questionImg: [],
          questionSentence: 'この実験(AST 測定)の臨床的意義は？',
          choices: [],
          answerImg: [],
          answer:
            '肝臓などの臓器に何らかの障害があると、血液中にASTが漏れ出るので血中ASTを測定することで障害程度を知ることができる→逸脱酵素',
          commentary:
            '酵素実習ではASTの酵素活性を用いてASTの存在・精製度を間接的に測定したが、イムノブロット実習では塩基配列から（大腸菌が）生成したタンパク質の分子量からASTの存在を確認することになる。',
        },
      ],
    },
    {
      groupTag: '実習-イムノブロット',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'SDS-PAGEとは何か。タンパク質を電気泳動するために何を行っているのか。',
          answerImg: [SDSMicelle],
          answer:
            'SDS-PAGEとは、酸性の界面活性剤であるSDSでタンパク質に一定の負電荷を付加した後で、ゲル電気泳動を行う方法。タンパク質固有の電荷に関係なく分子ふるいの原理に依存したゲル電気泳動を行うことができる。',
          commentary:
            'SDS-PAGE:Sodium Dodecyl Sulfate Polyacrylamide Gel Electrophoresis。タンパク質と異なり核酸（DNA/RNAなど）はそれ自身がもつリン酸基が負の電荷を有しているので、SDSを添加する必要がない。',
        },
        //         {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'ブロッティング(Blotting)とは何か。',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'SDS-PAGEの結果、バンドはどのように出たか。バンドがきれいに出なかった場合、どのような処置を行ったか。',
          answerImg: [],
          answer:
            '暗室で蛍光するバンドをX線フィルムに現像しようとしたが、あまりはっきりと映らなかった。その後免疫染色によって位置関係を確認した。AST1に相当するバンドの他、その2量体や別の長さのバンドも確認できた。',
          commentary:
            '大腸菌を用いて精製したASTとF4画分のSDS-PAGEの結果を比べることで、分子量の観点からASTの存在を確認できる実験。（酵素の実験では活性の観点からASTの存在を確認しようとした）バンドがぼやけるのはモノクローナル抗体を使ったため（ASTのランダムな一部分と配列が同じなら抗体が結合してしまう）。その他、バンドの濃さで絶対量を比べることができる・CBB染色など',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'kDaの読み方と意味は？',
          answerImg: [],
          answer:
            'キロダルトン。タンパク質などの巨大分子で、厳密な分子量が求めにくいものの大きさをいうときの単位で、厳密には分子量ではない（分子量は無名数で単位なし）。',
          commentary:
            'Daは数値的には分子量に等しいが、分子量は1molあたりの相対質量で無名数であるのに対し、ダルトンは「分子1個の質量」を表すのに使う。分子量の概念に当てはまらない染色体・リボソームなどのタンパク質の質量を表すのに用いられる。',
        },
        {
          detailInfo: 'レポート1日目',
          questionImg: [],
          questionSentence:
            '今回使用したプレート上で大腸菌が生育するために必要な遺伝子は何か。また、その理由は何か',
          answerImg: [plasmid],
          answer:
            'ペニシリン系抗生物質の分解酵素β-lactamaseをコードするAmp(R)遺伝子。培地にアンピシリンが含まれていて、通常では増殖することができないため。',
          commentary:
            'プラスミドが導入されていない大腸菌も死滅するわけではないため、導入大腸菌がアンピシリンを分解した後遅れてコロニーを形成することがある。',
        },
        {
          detailInfo: 'レポート1日目',
          questionImg: [],
          questionSentence:
            'プレート上で色の異なる（青色の）コロニーが出現した理由は何か。',
          answerImg: [Xgal, plasmid, lacZ],
          answer:
            '今回導入するpBluescriptSK(-)プラスミドにはlacZ-α断片が、大腸菌にはlacZ-ω断片が含まれている。これら両方がそろうことで活性をもったβガラクトシダーゼが生成され、X-galが分解・酸化縮合し青色色素ブロモクロロインジゴを生成した。一方pBluescriptSK(-)-ASTプラスミドではlacZ-α領域の途中のMCS領域をEcoRIで切断し終止コドンを含むAST1遺伝子をTAクローニング法で導入しているため、lacZ-α断片が完全な形で生成されず、X-galから青色色素を生成しない。',
          commentary:
            'AST1が導入されていると終止コドンによってlacZ-α遺伝子は大部分が翻訳されない。これによって、AST1が導入されたかどうかを視覚的に確認することができる。（アンピシリン耐性遺伝子AmpRとは導入経路が異なるため、どちらも確認する必要がある。）',
        },
        {
          detailInfo: 'レポート1日目',
          questionImg: [],
          questionSentence: 'IPTGが寒天プレートに含まれている理由はなにか。',
          answerImg: [operon],
          answer:
            'プラスミド導入大腸菌はlacリプレッサーを過剰発現しており、ASTの発現が抑制されている。培地に添加されたIPTGがlacリプレッサーと結合することによって、リプレッサーがはずれ、lacオペロンの転写の抑制が解除されるため。',
          commentary:
            'lacZ-α遺伝子は、大腸菌ラクトースオペロンのlacプロモーター由来のプロモーターの支配下にあり、βガラクトシド（およびその誘導体IPTGなど）によって転写活性が上昇する。自然界では、lacオペロンは大腸菌のエネルギー源であるグルコースが存在せず、ラクトースを利用できる場合に産生される。外来遺伝子産物は、宿主の増殖に悪影響を及ぼす恐れがあるため、増殖が十分進むまで発現を制御しておく必要がある。IPTGはアロラクトースの類似体。',
        },
        {
          detailInfo: 'レポート1日目',
          questionImg: [],
          questionSentence:
            'AST1の予想される分子量は何kDa程度か。（アミノ酸の平均分子量は110Daとして計算する）また、その根拠は何か。',
          answerImg: [introducedAST1],
          answer: '約50.6kDa',
          commentary:
            'lacZ由来119bp + TAクローニングによる1bp + AST1の5’非翻訳領域21bp =total141bp →47アミノ酸分だけ野生型ASTに比べて大きくなる。野生型AST1は413アミノ酸なので、大腸菌から生成されるAST1の分子量は合計460アミノ酸→50600Daに相当する。数値的には分子量に等しいが、厳密にはDa(Dalton)は分子量の単位ではない。',
        },
        {
          detailInfo: 'レポート3日目',
          questionImg: [],
          questionSentence:
            'イムノブロットのシグナルが検出されたのはどのサンプルか。また、シグナルの位置・強度にはどのような関係が認められたか。',
          answerImg: [],
          answer:
            '簡略に：F1画分・F2画分ではASTに相当するバンドが薄く出現。F4画分ではバンドが濃く出現し二量体も検出。AST導入大腸菌からは組換えASTに相当するバンドが出現。AST導入してない大腸菌からは該当バンドが出現せず。　※組換えASTのバンドはラットから抽出したASTバンドに比べて約5kDa長い',
          commentary:
            'これによってAST1だと思われる抽出物が、AST1に対応する塩基配列から合成された正真正銘のAST1と同じくらいの分子量であることを確認できた。→酵素実習ではAST1のような作用を持つタンパク質を抽出できただけで、本当にAST1である確認が不十分であった。例えばミトコンドリアには同じ作用をもつが分子量が小さい（約30kDa?）AST2が存在する。',
        },
        {
          detailInfo: 'レポート3日目',
          questionImg: [],
          questionSentence:
            '第1日目に予想したAST1の推定分子量とイムノブロットのシグナルから推定された分子量について比較し、差異がある場合にはその理由を考察しなさい。',
          answerImg: [SDSMicelle],
          answer:
            '※同じくらいの結果が出なかった場合は、(1)SDS-PAGEの性質上電荷を多く含むタンパク質に対して分子量を測定するのが不得意　(2)アミノ酸の平均分子量を110Daとした仮定による誤差　が考えられる。',
          commentary:
            '例えばヒストンタンパク質は、DNAと結合するため強い正電荷を帯びており、これがSDSの負電荷を打ち消すことで、分子量以上に電気泳動で流れにくい→実際より大きな分子量として測定されてしまう。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },

        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '実習-脂質',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence: 'NEFAは何の略？',
          choices: [],
          answerImg: [NEFA],
          answer: 'non-esterified fatty acid',
          commentary:
            '遊離脂肪酸。脂肪酸はグリセロールとエステル結合することでトリアシルグリセロールとなる（→TAGは中性脂肪と呼ばれる）。遊離脂肪酸はエステル化していないのでNEFA。今回の実習では、R-COOHの部分が反応して生成した色素で吸光度測定を行っていたため、TAGは遊離脂肪酸濃度に含まれない。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence: '食後の血中NEFAと血糖値の挙動',
          choices: [],
          answerImg: [afterDiet],
          answer:
            'NEFA：急減し、徐々に回復する。血糖値：上昇し、徐々に低下する。',
          commentary:
            '摂食でグルカゴンの分泌が止まり、TGの分解が停滞するため、血中のNEFAは急減する。数時間経つと、グルカゴン分泌が再開し、血中NEFAが再び合成される。食事で血中のグルコースが増加し、インスリンの働きでグリコーゲンへと変化するため徐々に減少する。',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence: '食後NEFAが下がったのはなぜか。',
          choices: [],
          answerImg: [chyloMicron],
          answer:
            '空腹時、脂肪組織のホルモン感受性リパーゼによって貯蔵TAGが分解され、遊離脂肪酸NEFAやグリセロールの形で血中に放出される。食事後のインスリン分泌により遊離脂肪酸の放出は止まり、血中の遊離脂肪酸は速やかに取り込まれるため、血中の遊離脂肪酸濃度は低下する。一方で摂食時に小腸から吸収された脂質は小腸でTAGの形でキロミクロンを形成し血中に放出され、脂肪組織付近の毛細血管壁のリポタンパク質リパーゼで最終的に脂肪酸とグリセロールに分解され、脂肪酸は脂肪組織へそのまま吸収される。このため血中TAG濃度は上昇する（脂質は消化に時間がかかるため遅れて上昇する）が、食事によって血中遊離脂肪酸濃度が上昇することはない。',
          commentary:
            'キロミクロンは小腸から、VLDLは肝臓から血中へ放出されるリポタンパク質で、いずれもTAGを豊富に含んでいるが、脂肪組織に取り込まれる直前の毛細血管壁までTAGの形で血中を流れているため、遊離脂肪酸濃度の上昇には寄与しない。',
        },
        {
          detailInfo: '4',
          questionSentence: '正常時の血糖値、NEFAはいくつか',
          questionImg: [],
          answerImg: [beforeDiet],
          answer: '血糖値：70〜109mg/dL、NEFA：0.14〜0.85mEq/L',
          commentary: '血糖値は4.5~5.5mMとも表現される。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence: '糖尿病患者の血糖値はどう変化するか',
          choices: [],
          answerImg: [diabetesMellitus],
          answer:
            '食事で血糖値が上昇すると、正常ではインスリンが分泌され、血中へのグルコース放出が抑制されたり脂肪組織・筋肉・肝臓などへグルコースが取り込まれたりすることで血糖値が速やかに正常範囲に戻るが、糖尿病では絶対的あるいは相対的なインスリン分泌不足により血糖値が下がりきらず、高止まりしてしまう。',
          commentary:
            'Ⅰ型（若年性）糖尿病はインスリン分泌に異常があり、Ⅱ型糖尿病はインスリン分泌の相対的不足＆血糖値の高止まり。Ⅱ型ではインスリンが全く分泌されていないわけではないため、糖尿病性ケトアシドーシスにまで至ることは少ない。糖尿病予備軍の状態では高血糖になりがちだが、インスリンは大量に分泌されている。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence: '薄層クロマトグラフィーで脂質を分ける原理',
          choices: [],
          answerImg: [chromatography, chromatographyResult],
          answer:
            '非極性（脂溶性）の強い脂質ほど疎水性の展開溶媒に溶けて移動する原理。実習ではTAGやコレステロールエステルなどが大きく移動した',
          commentary:
            'コレステロールと脂肪酸/TAGを区別するため、実習ではこの後ステロール発色剤（濃硫酸と酢酸の1:1混合液）をスプレーし加熱した。コレステロールとコレステロールエステルが発色する→Liebermann-Burchard 反応',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence: 'コレステロールの役割',
          choices: [],
          answerImg: [cholesterol],
          answer:
            'ステロイドホルモン、（ビタミンD合成）、細胞膜の脂質ラフトの構成、胆汁',
          commentary:
            'コレステロールはエネルギー源としては利用されない。貯蔵は肝臓で行われ、VLDL→LDL中のコレステロールエステルの形で組織（副腎・精巣・卵巣・）に供給され、組織の余分なコレステロールはHDLで回収される。胆汁や胆汁酸/胆汁酸塩生成にもコレステロールが関与している（コレステロールの割合が高すぎると胆石の原因となる）。余剰コレステロールが血中で徐々に酸化され、それを取り込んだ（マクロファージ→）泡沫細胞が血管内皮などに蓄積することでアテローム性動脈硬化の原因となる。このとき、LDLが多いほど/HDLが少ないほど動脈硬化のリスクが高いといわれている。',
        },
      ],
    },
    // {
    //   groupTag: '実習-組替えDNA',
    //   groupContents: [
    //     {
    //       detailInfo: '1',
    //       questionImg: [],
    //       questionSentence:
    //         '実習で使用したプレートで大腸菌が生育するために必要な遺伝子はなにか。',
    //       choices: [],
    //       answerImg: [],
    //       answer: 'AmpR遺伝子（β-ラクタマーゼをコード）',
    //       commentary:
    //         'プレート上のアンピリンが、通常では大腸菌を死滅させるが、AmpR遺伝子を持つ場合、β-ラクタマーゼを合成でき、アンピリンを分解できる。',
    //     },
    //     {
    //       detailInfo: '2',
    //       questionImg: [],
    //       questionSentence: '色の異なる大腸菌が生育した理由は？',
    //       choices: [],
    //       answerImg: [],
    //       answer:
    //         '今回の実習ではβ-Galのαフラグメントを欠落させた大腸菌に、lacZ-α遺伝子を組み込んでβガラクトシターゼ活性を補完した。これはX-Galの分解を可能にし、インドール化合物を寒天上に不溶性色素として沈着させる。ここで、プラスミド内のLacZ-α遺伝子内にラットのAST遺伝子を挿入すると、lacZ-αによるβガラクトシターゼが不完全となり、X-Galの分解ができず、寒天上でインドール化合物の沈着が起こらない。',
    //       commentary: '',
    //     },
    // {
    //   detailInfo: '3',
    //   questionImg: [],
    //   questionSentence: 'IPTGが寒天プレートに含まれている理由は何か。',
    //   choices: [],
    //   answerImg: [],
    //   answer:
    //     'IPTGはlacZ-α遺伝子のリプレッサー活性の抑制を解除することでβガラクトシターゼの転写を亢進する。',
    //   commentary: '',
    // },
    //   ],
    // },

    {
      groupTag: '実習-SNP',
      groupContents: [
        {
          detailInfo: '課題1',
          questionImg: [],
          questionSentence:
            '制限酵素が認識する塩基配列は6~8塩基程度のものが多く、ある制限酵素が発現している細菌自身のDNA鎖の中にもその認識配列は存在する。では、この細菌のDNA鎖が自身の制限酵素で切断・破壊されることはないのだろうか？',
          answerImg: [SAM],
          answer:
            'メチル化などで自身のDNAを修飾することによって、切断を免れている。',
          commentary:
            '例えば大腸菌は自身のDNAをメチル化することによって、外来DNAを区別して分解する。このときのメチル基供与体はS-アデノシルメチオニン(SAM)で、メチオニンとATPから生成され、メチル基転移反応を行った後はN-メチルTHF(葉酸由来)とメチルコバラミン(ビタミンB12由来)によってSAMに再合成されるか、ピリドキシン(ビタミンB₆)などによってシステインへ合成される。',
        },
        {
          detailInfo: '課題2',
          questionImg: [],
          questionSentence:
            '「isoschizomer」とは何だろう？「Bst DEI」「Hpy F31」は「Dde I」のisoschizomerであるが...',
          answerImg: [],
          answer:
            'isoschizomerは同じ配列を認識する制限酵素のことで、同じ形の切断端を作る。',
          commentary: '関連：アイソザイム',
        },
        {
          detailInfo: '課題3',
          questionImg: [],
          questionSentence:
            '核酸の電気泳動ではDNAはどちらに( + OR - )泳動されるだろうか、それはなぜだろうか。また、タンパク質の場合は？',
          answerImg: [],
          answer:
            'タンパク質とは異なり、DNAには負電荷を帯びたリン酸基が含まれるため、常に負の電荷を帯びている。よってそのまま電気泳動しても陽極に引き寄せられる。',
          commentary:
            'タンパク質ではSDSで負電荷を付加して電気泳動を行った→イムノブロット/SDS-PAGE',
        },
        {
          detailInfo: 'レポート3日目',
          questionImg: [],
          questionSentence:
            'PCR産物を制限酵素で切断し電気泳動した結果、写真でバンドが三本(約500bp/約400bp/約100bp)確認された。DNAがX型であれば制限酵素で切断され、R型であれば切断されない。このときの遺伝子型について、説明せよ。',
          answerImg: [restrictionEnzyme],
          answer: 'RX型',
          commentary:
            'A班（前半）の実習では、同時に撮影した12人全員で約500bpのバンドが確認されたが、うち2人は制限酵素で十分に切れていないXX型だった。このときのXX型とXR型では3本のバンドの濃さが少し違っていて、基質の濃度で反応速度が違う...など色々書いた。制限酵素と基質（DNA溶液）が十分に混ざってなかった可能性が一番高いらしい。一番分子量の小さいバンドが薄かった理由は、短いDNAはGelRedの色素が入り込みにくいため',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目。採取した試料（チューブに入った綿棒）を56℃でコロナ不活化を行った後、400μLのdH₂Oを加えた。何の目的で蒸留水(dH₂O)を加えたのか。',
          answerImg: [],
          answer:
            '浸透圧を変え、細胞を破裂させて細胞膜や核膜などに穴を開けるため。',
          commentary: 'DNAを露出させたい',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目。20μLのProteinaseKを加え、さらに400μLのBuffer ALを加えた。このBuffer ALは揺らすと泡が立つような液体であった。これは何の成分によるためか。また、この操作の目的は？',
          answerImg: [],
          answer:
            'このBufferには界面活性剤が含まれており、細胞膜や核膜を破壊するために加えられた。',
          commentary:
            '一つ前の操作で蒸留水を加える操作・この後のエタノールを加える操作と合わせて、核膜に収納されているDNAを外に露出させて、抽出しやすくする。ProteinaseKは至適温度が56度であるため、この段階では無関係。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目。アガロースゲル電気泳動を行った。ゲルにはGelRedというDNA染色液が含まれている。これによってDNAを可視化する仕組みを説明せよ。また、Loading bufferの青色色素との違いは何か。',
          answerImg: [],
          answer:
            'GelRedはDNAの2重らせん構造に入り込み、紫外線照射を受けることで蛍光する。一方でLoading Bufferの色素（グリセロール？）はDNAとは関係なく電気泳動されていくため、DNAの分布を見ることはできない。',
          commentary:
            '今回の写真は紫外線照射下で撮影した。Loading Bufferの色素は分子量としては非常に小さなものであるため、電気泳動を行う時間の目安として使える。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '今回の実習(制限酵素で切れるかどうか)以外の方法で一塩基多型を調べる方法について、述べよ。',
          answerImg: [taqman],
          answer:
            'シークエンスによって塩基配列を特定する方法、対応する配列のプローブに蛍光色素をつけた試薬と一緒にPCRを行って可視化する方法(Taqman法)など',
          commentary:
            '今回のACTN3遺伝子の多型では終止コドンに変わっているため、生成されるアミノ酸の長さでも区別できるかもしれない。詳細は特別講義「個人差の生化学」にて。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'SNPの検査は医療分野でどのように応用されているか。',
          answerImg: [],
          answer:
            '薬剤代謝の程度を調べることができる。SNPを調べることで薬剤の投与量などの調節を行うことができる。',
          commentary:
            '例えばアルコールの代謝速度など。日本人の4割はアセトアルデヒド分解酵素を欠損しており酒に弱い。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '特別講義特集',
      groupContents: [
        {
          detailInfo: '11/14「脂質メディエーターの生化学」',
          questionImg: [],
          questionSentence: '脂質メディエーターとは何か。',
          answerImg: [lipidMediator],
          answer:
            '脂質メディエーターとは、（局所で）細胞間情報伝達などの生理活性をもつ脂質の総称である。',
          commentary:
            'プロスタグランジン(PG)、ロイコトリエン(LT)、血小板活性化因子(PAF)、内因性カンナビノイド、リゾホスファチジン酸、スフィンゴシン1-リン酸などを指す。脂肪酸（アラキドン酸）由来のものが多く、リン脂質由来、コレステロール由来のものも脂質メディエーターに分類される。',
        },
        {
          detailInfo: '11/14「脂質メディエーターの生化学」',
          questionImg: [],
          questionSentence:
            'NSAIDs(Non-Steroidal-Anti-Inflammatory Drugs :非ステロイド性抗炎症薬)の役割を説明せよ。',
          answerImg: [NSAIDs],
          answer:
            'シクロオキシゲナーゼCOXの活性を抑制することで、脂質メディエーター（エイコサノイド）の発熱・痛覚過敏症状などを緩和することができる。',
          commentary:
            '厳密にはCOXは2種類のアイソザイムが存在している。ほとんどの細胞で常に発現しているCOX1を阻害してしまうと胃腸障害などの副作用が生じる。COX2はマクロファージ・線維芽細胞・骨芽細胞などに発現していて炎症時に問題となる。',
        },
        {
          detailInfo: '11/14「脂質メディエーターの生化学」',
          questionImg: [],
          questionSentence:
            '脂質メディエーターの1つ、エンドカンナビノイドについて説明せよ。',
          answerImg: [],
          answer:
            'エンドカンナビノイドは内因性マリファナ様物質ともよばれ、マリファナ（大麻）に含まれるカンナビノイドに類似する物質が生体内で作られている。脂質メディエーターとして、中枢神経系のシナプスの逆行性伝達物質として作用し、シナプス後部から産生・放出されてシナプス前部に受容体を持ち、シナプス前部からの神経伝達物質の放出を抑制すると考えられている。記憶・認知・鎮痛・食欲調節・吐き気抑制・緑内障などに作用をもつ。',
          commentary:
            '日本では医療大麻は一切認められていない。海外では末期AIDS患者や末期がん患者に投与される。',
        },
        {
          detailInfo: '11/14「脂質メディエーターの生化学」',
          questionImg: [],
          questionSentence:
            '脂質メディエーターを同定する上で必要な要素はなにか。',
          answerImg: [],
          answer:
            '物質としての存在、産生/放出機構・代謝過程・不活性過程などの特定',
          commentary:
            '脂質メディエーターは中間代謝物であることも多く、神経伝達物質などと似通った部分も多いため、しっかりと特定しないと脂質メディエーターとして認められない。',
        },
        {
          detailInfo: '11/01「疾患発症に関わる酸性オルガネラの高次機能」',
          questionImg: [],
          questionSentence:
            'V-ATPaseとは何か、どういった細胞内部分にみられるか',
          answerImg: [VATPase],
          answer:
            'V-ATPaseは、ATPをエネルギー源とした回転運動によりプロトンを輸送し、オルガネラ内を酸性化することで、多くの重要な生命活動を支えるタンパク質である。リソソームやエンドソームといった酸性オルガネラ小胞の膜に存在し、小胞内部を酸性化することで、タンパク質の品質管理や神経伝達、免疫反応などを支える重要なプロトンポンプタンパク質である。',
          commentary:
            'ミトコンドリア膜のATPシンターゼ（酸化的リン酸化）の逆の反応を行う酵素で、ATPシンターゼと似た構造をしている。別名、液胞型ATP分解酵素。V-ATPaseの最初の活性を発見したのは大隅教授らしい。',
        },
        {
          detailInfo: '11/01「疾患発症に関わる酸性オルガネラの高次機能」',
          questionImg: [],
          questionSentence:
            'オルガネラとは何か。また、酸性オルガネラとは何か。',
          answerImg: [],
          answer:
            '細胞内にあって、一定の機能を持つようになった小胞体の総称。細胞内小器官のこと。内部が酸性になっているオルガネラを、酸性オルガネラと呼ぶ。',
          commentary:
            '細胞にはゴルジ体・小胞体・ミトコンドリアなど様々な細胞小器官（オルガネラ）が含まれる。例えばリソソームは、含んでいる分解酵素を活性化するために細胞内を酸性(pH 5.0付近)に維持しなければならない。このように内部の酸性環境を形成・維持するために、V-ATPaseは活動する。',
        },
        {
          detailInfo: '11/01「疾患発症に関わる酸性オルガネラの高次機能」',
          questionImg: [],
          questionSentence:
            'V-ATPaseのサブユニットに変異があると、骨形成が一方的に進む大理石病や、遠位尿細管のアシドーシス、感音性の難聴、がん細胞が転移しやすくなったりする。これらがどういった過程で生じるのか、説明せよ。',
          answerImg: [],
          answer:
            'V-ATPaseは破骨細胞の骨分解に関与していたり、集合管上皮細胞によるH⁺分泌に関与していたり、内耳のリンパ液の調節に関与していたり、がん細胞の周りの足場を溶かしたりするので、これに変異があると様々な異常が生じる。',
          commentary:
            'その他糖鎖付加にも関与していて、皮膚が異常に弛緩する常染色体劣性遺伝病（エーラース・ダンロス症候群？）を引き起こす変異もある。',
        },
        {
          detailInfo: '11/01「疾患発症に関わる酸性オルガネラの高次機能」',
          questionImg: [],
          questionSentence:
            'V-ATPのサブユニットを欠損させたマウスは発生初期(E5.5など)で胚性致死に至る。どういった原因でこのようになるのか、説明せよ',
          answerImg: [],
          answer:
            '胚の大きさは野生型に比べてやや小さいが、3つの構成成分への分化は正常に誘導されている。ただし変異型はそれぞれがクラスターのような分布をしており、正常な局在がみられない。',
          commentary:
            '→胚の極性を維持するためにV-ATPaseが必要であると考えられる。',
        },
        {
          detailInfo: '10/31「個人差の生化学」',
          questionImg: [],
          questionSentence: 'SNPとは何か、多型とは何か、説明せよ。',
          answerImg: [SNP],
          answer:
            'SNPはSingle Nucleotide Polymorphism の略で、DNAの塩基配列における1個の塩基が他の塩基に置き換わっているものを指す。1塩基多型。また、集団においてその変異型が1%以上の頻度で出現している時、その塩基配列の違いを多型とよぶ。※1%未満である場合は変異や稀なバリエーションと呼ぶ。',
          commentary: '',
        },
        {
          detailInfo: '10/31「個人差の生化学」',
          questionImg: [],
          questionSentence:
            '日本人の4割以上が酒に弱い遺伝子型である。この遺伝子型はどういったものか、アルコールの代謝と関連付けて説明せよ。',
          answerImg: [alcohol],
          answer:
            '摂取したアルコールは胃から2割、小腸から8割吸収され、その大部分は肝臓で無毒化される。このとき肝臓でアセトアルデヒド→酢酸の反応を触媒する酵素がALDHであり、日本人の4割以上はこの酵素ALDH2が弱いあるいは活性が無い変異を持っている。酢酸への分解が進まないと、二日酔い・頭痛・動悸・発がん性も疑われている有毒物質アセトアルデヒドが蓄積してしまう。',
          commentary:
            'ドイツ・イスラエル・エジプト・ケニア・スウェーデン・フィンランドなどではALDH2遺伝子が弱い変異は存在しない。',
        },
        {
          detailInfo: '10/31「個人差の生化学」',
          questionImg: [],
          questionSentence:
            '従来のキャピラリー電気泳動方式（TaqMan法など）と比べてNGS（次世代シーケンサー）が遺伝子多型の解析に優れている点を挙げよ。',
          answerImg: [taqman, sequencing],
          answer:
            'キャピラリー電気泳動ではスタッター・プルアップなど特有のエラーが起こりやすく、混合試料（特に19対1など少量の混合）との区別が難しいが、NGSは精度が高く、混合試料の解析に有利である。　また、TaqMan法では一度に判別できるSNPの数に限界がある？がNGSでは遺伝子全てを解析し無数のSNPの組み合わせをアレルとして読み取ることができる。　さらにNGSではリード数カウントにより塩基多型の頻度を定量的に判断することもできる。',
          commentary:
            'TaqMan法とは蛍光色素をプローブに付加した試薬（高額らしい）を使ってPCRを行い、PCR中にプライマーより先にDNA配列に結合した場合にのみ蛍光色素が活性化され発色する。発色強度はPCR20回目以上になると検出できるほどの大きさになる。それ以前のSNP検出方法としては、実習でも用いたPCR-RFLP法（制限酵素で切れるかどうかで判断）、Allele-specificPCR法（変異に対応するプライマーを準備してそれぞれPCR→電気泳動で増幅されたか調べる方法）などが挙げられる。高価という点を除けば、現状NGSがほとんどの場合で最適。',
        },
        {
          detailInfo: '10/31「個人差の生化学」',
          questionImg: [],
          questionSentence:
            '震災などのDNA鑑定では、まず出てきた骨が人かどうかを判別することになる。骨の形状以外で、動物種の特定を行うために何を調べるか。',
          answerImg: [mtDNA],
          answer:
            'mtDNA(ミトコンドリアDNA)を調べることで動物種の特定を行うことができる。mtDNAは完全に母系遺伝であるため、母系のすべての祖先と原則的には同じ配列となる。人類はアフリカの1種類の共通女系祖先からmtDNAを受け継いでいるため、その殆どの配列が共通している（突然変異による枝分かれは存在している）。',
          commentary:
            '畑内遺跡で出土した人骨と、発掘した研究員のmtDNAは数か所の配列しか違わなかったといわれている。結局震災では解析データの共有に問題があり民間ではDNA鑑定による身元確認は一度も行われなかった。',
        },

        {
          detailInfo: '10/17「HIV/AIDSの分子生物学」',
          questionImg: [],
          questionSentence: 'HIV/AIDSの感染経路・感染症状について、説明せよ。',
          answerImg: [HIV],
          answer:
            'HIV:human immunodeficiency virus（ヒト免疫不全ウイルス）は、血液・体液を介してCD4/ヘルパーT細胞に感染し、逆転写した二本鎖DNAを宿主の染色体に組み込む。これを転写・翻訳・細胞膜へ輸送することでウイルスが増殖し、体内のCD4細胞が次々と感染していく。このようにして血中CD4細胞が低下すると免疫力が落ちてAIDSを発症することとなる。感染からAIDS期に至るまで数年程度かかるため、気付かず感染を広げてしまう。',
          commentary:
            '人類の死因の約二割が感染症で、途上国ではAIDSが死因一位である。先進国で適切な治療を行えば、AIDSで死に至ることは少なくなっている。HIVは非常に不活化されやすく、空気に触れると数分で感染力を失うが、体液中では安定して存在でき、胎盤・産道・母乳を介して垂直感染する可能性がある。',
        },
        {
          detailInfo: '10/17「HIV/AIDSの分子生物学」',
          questionImg: [],
          questionSentence:
            'HIVは効果的なワクチン開発が難しいとされる。その理由を説明せよ。',
          answerImg: [HIV],
          answer:
            'HIVの逆転写酵素は正確性が低く（10⁵回程度に1回）、患者個人の中でも様々なバリエーションを持っているため。',
          commentary:
            'ワクチンが効きにくいインフルエンザのバリエーションと、個人が持つHIVバリエーションが同じくらいの規模であるといわれている。同様の理由で薬剤耐性ウイルスの出現を防ぐため、一般的に多剤併用療法で治療が行われる。',
        },
        {
          detailInfo: '10/17「HIV/AIDSの分子生物学」',
          questionImg: [],
          questionSentence:
            '既知の薬剤療法ではAIDSの発症を遅らせることはできても完治は望めない。一方で世界にはHIVを完治した症例が数件存在する。HIVを完治する治療法について、またその原理について説明せよ。',
          answerImg: [],
          answer:
            '米国人ティモシー・レイ・ブラウンは1995年にHIV感染が発覚した後、2007年には急性骨髄性白血病と診断された。HIV感染と白血病の両方を治療するために、ベルリンの病院でHIV耐性を持つドナーからの骨髄幹細胞移植を受けた結果、世界で初めてHIV感染を克服することに成功した。同じく骨髄移植によって2例目の完治が、2019年に報告されている。',
          commentary:
            'HIV耐性（CCR5-Δ32）骨髄移植はリスクが高く、一般的には使われていない。ゲノム編集技術によってHIV耐性を獲得し治療できないか、研究が続けられている。',
        },
        {
          detailInfo: '9/27「遺伝子操作技術の変遷」など',
          questionImg: [],
          questionSentence: 'miRNAやsiRNAについて、説明せよ。',
          answerImg: [microRNA],
          answer:
            'miRNA/microRNAとsiRNA/small interfering RNAはともにゲノム上にコードされ、多段階的な生成過程を経て最終的に20~25塩基長となる微小なノンコーディング（タンパク質へ翻訳されない）RNA。siRNAは配列に完全相補的に結合するRNA(ウイルスのRNAやmRNA)を分解することでウイルスの働きを抑制したりmRNAのタンパク質への翻訳を強力に阻害する。一方miRNAはRNAに部分相補的に一致するmRNAのタンパク質への翻訳を物理的に阻害することで、さまざまな遺伝子発現を抑制する。',
          commentary:
            '1990年色素発現遺伝子を強調すると逆に色素を発現しなくなる現象から発見。本来の役割はRNAウイルスからの防御だと考えられている。ヒトのゲノムには約2000種類のmiRNAがコードされており、その約半数の遺伝子がmiRNAによる発現調節を受けている。',
        },
        {
          detailInfo: '9/27「遺伝子操作技術の変遷」など',
          questionImg: [],
          questionSentence: 'ゲノム編集の方法について説明せよ。',
          answerImg: [genomeEditting],
          answer:
            'ゲノム編集には第1世代ZFN、第2世代TALEN、第3世代CRISPR-Cas9の3種類に大別される酵素が使用される。最初に開発された人工エンドヌクレアーゼはZFN(Zinc Finger Nuclease)で、特定の3塩基のDNAを認識し結合するが、隣同士のzinc fingerが干渉するなど様々な問題があった。結合した後はFok1という海藻由来の制限酵素で切断する。第2世代ではZinc fingerの代わりに特定の1塩基ごとに認識することができるTALENが使用され、より扱いやすくなった。CRISPR-Cas9システムは大腸菌の免疫機構（外来生物のゲノム断片を取り込み、二回目以降素早く対応するためのRNA配列をCas9が取り込み対応する配列の遺伝子を切断する機構）をベースに開発された手法で、部位選択の自由度・ヌクレアーゼの構築・ターゲッティング効率・多重化などほとんどの項目で最も優れるが、オフターゲット（誤ってよく似た配列を切断してしまう現象）に関しては他より劣っている。',
          commentary:
            '野生型Cas9は対象の二本鎖DNAの両側を切断してしまうが、ニッカーゼというCas9変異型は片側のみ切れ目(nick)を入れるため、より複雑な処理を行うことができるようになった。この技術は哺乳類ゲノムの編集を容易にし、遺伝子治療の可能性を切り開いた。',
        },
        {
          detailInfo: '9/27「遺伝子操作技術の変遷」など',
          questionImg: [],
          questionSentence:
            '遺伝子治療におけるex vivo法とin vivo法について、説明せよ。',
          answerImg: [geneTherapy],
          answer:
            'ex vivo法ではT細胞や造血幹細胞を患者から採取し、体外で遺伝子導入を行って、遺伝子導入細胞を組織に戻す手法が取られる。一方でin vivo法では遺伝子導入するためのウイルスベクターやプラスミドなどを直接患者に投与し遺伝子改変を狙う。',
          commentary:
            '既知の治療法より効果があり、副作用より効果が明確だと証明されている治療法については遺伝子治療が認められている。血友病・デシェンヌ型筋ジストロフィー・脊髄性筋委縮症(SMA)など。',
        },
        {
          detailInfo: '9/27「遺伝子操作技術の変遷」など',
          questionImg: [],
          questionSentence: '遺伝子導入を行うベクターについて、説明せよ。',
          answerImg: [geneModifyVector],
          answer:
            '遺伝子導入ベクターにはアデノ随伴ウイルス・アデノウイルス・レンチウイルス・レトロウイルスが主に用いられる。それぞれ長所と短所があり、例えばレトロウイルスは核膜孔を通過できないので非分裂細胞へ導入できないし、アデノ随伴ウイルスは長期発現が可能であるが発現させる遺伝子の長さに制限があり、特徴・目的によってそれぞれ選択することになる。',
          commentary:
            '日本ではレトロウイルス・アデノウイルスによる遺伝子治療が多く行われている。その他、DNAワクチン（プラスミドDNA）による遺伝子治療が一時期注目されたが、最近は活発でない。',
        },
        {
          detailInfo: '9/27「遺伝子操作技術の変遷」など',
          questionImg: [],
          questionSentence: 'カルタヘナ法について、説明せよ。',
          answerImg: [],
          answer:
            '遺伝子組み換え生物などが生物の多様性への悪影響を及ぼすことを防ぐための、国際的な罰則付きの取り決め。第一種使用では、遺伝子組み換え生物などの環境放出（一般流通）をともない、予定している使用について生物多様性に影響が生じないかどうかについて審査を受ける必要がある。第二種使用では、遺伝子組み換え生物などを環境への放出が起こらないよう物理的に封じ込める空間「拡散防止措置」で使用することを指し、主に実験室などでの利用が該当する。遺伝子組み換え大腸菌などは必ず滅菌など不活化処置を行ってから廃棄しなければならない。',
          commentary:
            'アメリカはカルタヘナ法を批准していないため、輸入する場合は要注意。遺伝子治療は第一種使用に該当する。',
        },
        {
          detailInfo: '9/20「実験動物を利用した難治性疾患の新規治療法の開発」',
          questionImg: [],
          questionSentence:
            '肝臓は再生能力が高い臓器であるが、肝硬変が進行すると再生しにくい状態となってしまう。これはなぜか。またこれを改善するVA核酸製剤について説明せよ。',
          answerImg: [kidneyTissue],
          answer:
            '肝硬変では肝星細胞の小胞体で過剰なコラーゲン合成が行われ蓄積されることで線維化が起こり、再生されにくい状態となる。肝星細胞のコラーゲン分泌にはHSP47というヒートショックタンパク質がトリガーとなっており、また肝星細胞はビタミンAを貯蔵することから、HSP47を欠損させビタミンAを付与したVA核酸製剤を開発した。これは特異的に肝星細胞に届き、肝臓の線維化を解消させる。',
          commentary: '',
        },
        {
          detailInfo: '9/20「実験動物を利用した難治性疾患の新規治療法の開発」',
          questionImg: [],
          questionSentence:
            '組織の線維化に関わっているタンパク質HSP47が、膵癌の増殖に寄与しているとはどういうことか、説明せよ。',
          answerImg: [kidneyTissue],
          answer:
            '原発性膵癌ではまず線維化により増殖・腫瘍形成の維持を行ってから転移能の増強が行われる。線維化に関わるHSP47はがん遺伝子にも発現していて、これを抑制することで膵癌組織の線維化や癌細胞の増殖が抑制された。また、癌細胞は線維化により抗がん剤抵抗性を得ていたことから、抗がん剤とHSP47を抑制する核酸製剤を組み合わせて投与すると生存率・がん細胞減少率が飛躍的に向上した。',
          commentary:
            'その他HSP47はアクチン・ミオシンを働かせて転移能を増強していたり、小胞体ストレスシグナルを活性化させて癌の腫瘍形成に寄与していたりしたらしく、この核酸製剤は膵癌だけでなく転移能の高い乳がんにも効果があることが判明したとのこと。',
        },
        // {
        //   detailInfo: '9/20「実験動物を利用した難治性疾患の新規治療法の開発」',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '9/20「実験動物を利用した難治性疾患の新規治療法の開発」',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '9/20「実験動物を利用した難治性疾患の新規治療法の開発」',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
