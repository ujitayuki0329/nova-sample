import { Link } from 'react-router-dom'

const companyInfo = [
  { label: '会社名', value: '株式会社NOVA' },
  {
    label: '代表者',
    value: (
      <>
        代表取締役　若佐 陸王
        <br />
        取締役　野村 拓海
      </>
    ),
  },
  { label: '所在地', value: '〒105-0001 東京都港区虎ノ門3-7-8 虎ノ門アネックス 501' },
  { label: '設立', value: '2026年1月' },
  { label: '資本金', value: '5,000,000円' },
  { label: '事業内容', value: 'IT事業 / BPO事業 / 金融事業' },
  { label: '営業時間', value: '平日 10:00 - 18:00' },
  { label: '連絡先', value: 'info@nova.co.jp' },
]

export function CompanyPage() {
  return (
    <div className="company-page">
      <section className="section services-hero company-heading" data-animate="fade">
        <div className="container services-hero-inner company-hero-inner" data-animate="fade-up">
          <p className="services-kicker">Company</p>
          <h1 className="services-title">会社概要</h1>
          <p className="services-lead">企業情報、代表挨拶、アクセス情報を掲載しています。</p>
          <div className="company-hero-meta">
            <span>NOVA CORPORATION</span>
            <span>TOKYO</span>
            <span>SINCE 2026</span>
          </div>
        </div>
      </section>

      <section className="section company-info-section" data-animate="fade">
        <div className="container">
          <p className="eyebrow">Company Information</p>
          <h2>会社情報</h2>
          <div className="company-overview" data-animate="fade-up">
            <aside className="company-overview-logo">
              <img src="/logo-nova.png" alt="NOVA ロゴ" />
              <p>人々の可能性を広げる。AIで業務を再設計し、人が価値を生み出す仕事に集中できる組織をつくります。</p>
            </aside>
            <div className="company-info-table">
              {companyInfo.map((item) => (
                <div key={item.label}>
                  <p>{item.label}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt company-message-section" data-animate="fade">
        <div className="container">
          <p className="eyebrow">Message</p>
          <h2>代表者挨拶</h2>
          <div className="company-message">
            <div className="company-ceo-block" data-animate="fade-right">
              <img
                src="https://images.pexels.com/photos/5439384/pexels-photo-5439384.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="代表者写真"
              />
              <p className="company-ceo-title">代表取締役</p>
              <p className="company-ceo-name">若佐 陸王</p>
            </div>
            <div data-animate="fade-left" data-delay="120">
              <h3>「作業」を減らし、「意思決定」を加速させる。</h3>
              <p>
                経営者として最も悔しいのは、「やりたいことではなく、やらなければならないことに時間を奪われる」瞬間です。
              </p>
              <p>
                私がこれまで経営の現場で見てきたのは、優秀な経営者が、本来使うべき判断や戦略の時間を、請求書の確認、
                日程調整、問い合わせの振り分けといった業務に費やしている現実でした。
              </p>
              <p>
                「作業」を減らし、「意思決定」を加速させる。これが、NOVAが存在する理由です。AIと自動化技術は、今この瞬間も進化しています。
                その力を正しく設計・実装すれば、月160時間以上の業務を削減し、経営者が本来向き合うべき「戦略・人・未来」に時間を取り戻すことができます。
              </p>
              <p>
                私たちは、ツールを売りません。成果が出るまで伴走します。導入して終わりではなく、毎月改善し、
                経営者が「あのとき頼んで良かった」と思い続けられる関係を築くことが、私たちのゴールです。
              </p>
              <p>
                可能性を、解き放て。この言葉を胸に、一社でも多くの企業と、そこで働く人々の未来を変えていきます。
              </p>
              <p className="card-id">代表取締役 若佐 陸王</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section company-access-section" data-animate="fade">
        <div className="container">
          <p className="eyebrow">Access</p>
          <h2>アクセス</h2>
          <div className="company-access">
            <div className="company-map-placeholder" data-animate="fade-right">
              <iframe
                title="NOVA 東京オフィス"
                src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div data-animate="fade-left" data-delay="120">
              <p>
                〒105-0001
                <br />
                東京都港区芝公園4-2-8 東京タワー付近
              </p>
              <p>
                東京メトロ日比谷線「虎ノ門ヒルズ駅」徒歩4分
                <br />
                東京メトロ銀座線「虎ノ門駅」徒歩8分
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-band" data-animate="fade">
        <div className="container contact-band-inner" data-animate="fade-up">
          <p className="contact-band-watermark">CONTACT</p>
          <h2>
            お気軽にお問い合わせください。
            <br />
            ご相談をお待ちしています。
          </h2>
          <Link to="/contact" className="contact-band-link">
            <span>問い合わせる</span>
            <span className="inline-link-icon" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
