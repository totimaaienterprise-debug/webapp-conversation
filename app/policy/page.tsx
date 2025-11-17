import type { FC } from 'react'
import React from 'react'

const PolicyPage: FC = () => {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <div className='mx-auto max-w-3xl px-6 py-16 space-y-12'>
        <header>
          <p className='text-sm font-semibold text-sky-600 uppercase tracking-[0.2em]'>Policy</p>
          <h1 className='mt-2 text-3xl font-bold text-slate-900'>プライバシーポリシー & 利用規約</h1>
          <p className='mt-3 text-base text-slate-600'>このページでは本チャットボットに適用されるプライバシーポリシーと利用規約を掲載しています。</p>
        </header>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-slate-900'>プライバシーポリシー</h2>
          <p className='text-base leading-relaxed text-slate-700'>
            1．個人情報の利用目的
          </p>
          <p className='text-base leading-relaxed text-slate-700'>
            当社は、当社が提供する AI チャットボットサービス「AXISCHAT」（以下「本サービス」といいます）をご利用いただくお客様その他のユーザーの皆さま（以下「ユーザーの皆さま」といいます。）について、個人情報保護法第2条第1項に定める個人情報のうち、氏名、連絡先（電話番号およびメールアドレス）、生年月日のみを、下記の目的の範囲内で利用いたします。          
          </p>
          <p className='text-base leading-relaxed text-slate-700'>
            (1) 当社が提供する本サービスおよび当社が運営するウェブサイトに基づく各種情報をご提供するため
            (2) 当社が提供する仮予約サービスを運営するため（ただし、本サービス上に仮予約機能が実装されている場合に限ります）
            (3) 当社サービスに関するご案内や、各種お問い合わせへの回答・対応を行うため
            (4) ユーザーの皆さまによる本サービスの利用状況等を分析し、本サービスの改善および新たなサービスの企画・開発等を行うため
            (5) 上記各利用目的に付随し、これらと合理的な関連性を有する目的を達成するため
          </p>
          <p className='text-base leading-relaxed text-slate-700'>
            2．個人情報の提供・委託
          </p>
          <p className='text-base leading-relaxed text-slate-700'>
            当社は、ユーザーの皆さまからあらかじめご同意をいただいた場合、または法令により許容される場合を除き、個人情報を第三者に提供いたしません。
            ただし、本サービスの運営に必要な範囲において、当社は個人情報の取扱いを外部の事業者に委託することがあります。
        </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-slate-900'>利用規約</h2>
          <p className='text-base leading-relaxed text-slate-700'>
            3．ユーザーの皆さまにあらかじめご確認いただきたい事項
          </p>
          <p className='text-base leading-relaxed text-slate-700'>
            当社は、ユーザーの皆さまに以下の内容を周知いたします。ユーザーの皆さまは、本サービスをご利用になる前に、下記事項をよくお読みいただき、その内容にご同意いただいたうえで本サービスをご利用ください。
          </p>
          <p className='text-base leading-relaxed text-slate-700'>          
            (1) 本サービスは、AI（人工知能）を用いた自動応答システムを組み込んだサービスであり、当社または提携先事業者のウェブサイト等に掲載された情報に基づき、ユーザーからの一般的なご質問に回答し、または関連情報を提供することを目的としています。なお、回答内容には、当該ウェブサイトの情報に加え、当社または提携先事業者が任意に追加した情報等が含まれる場合があります。
          </p>
          <p className='text-base leading-relaxed text-slate-700'>          
            (2) 本サービスにおける応答内容の生成には、OpenAI, L.L.C. が提供する対話型AI「ChatGPT」（理由のいかんを問わず、当該サービスの名称または内容が変更された場合は、その変更後のサービスを含みます。）を利用しています。このため、当社は、本サービスを通じて提供される回答の正確性・真実性・客観性・有用性等について、いかなる保証も行うものではありません。
          </p>
          <p className='text-base leading-relaxed text-slate-700'>    
            (3) 本サービスは、疾病の診断や健康相談、病気や治療に関する個々のご相談に応じることを目的としたサービスではありません。同様に、法律相談、税務相談等、法律上専門家に独占が認められている業務を提供するサービスでもありません。そのため、ユーザーの皆さまは、健康情報その他の機微な個人情報の入力や、健康状態・病気・治療内容に関する具体的なご相談、ならびに法律相談・税務相談を目的とした投稿を行わないでください（もっとも、本サービス上の仮予約・お問い合わせ機能をご利用いただく際に入力いただく氏名・連絡先等はこの限りではありません）。万一、ユーザーの皆さまがこれらの情報を入力し、その内容に対して本サービスが回答した場合であっても、当社は、当該回答内容の正確性・真実性・客観性・有用性等について、一切の責任を負わないものとします。
          </p>
          <p className='text-base leading-relaxed text-slate-700'>
            本サービスは現状有姿で提供され、当社はその正確性や完全性を保証しません。利用によって生じた損害について、
            当社は直接的・間接的を問わず責任を負わないものとします。
          </p>
        </section>
      </div>
    </main>
  )
}

export default React.memo(PolicyPage)
