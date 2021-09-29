/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="https://mathlog.info">Mathlogへ</Button>
            <Button href={docUrl("a-introduction.html")}>使い方ガイド</Button>
            <Button href="/blog">開発者ブログ</Button>
            <Button href={docUrl("contact.html")}>お問い合わせ</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        <MarkdownBlock></MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              "To make your landing page more attractive, use illustrations! Check out " +
              "[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. " +
              "The illustrations you see on this page are from unDraw.",
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: "left",
            title: "Wonderful SVG Illustrations",
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              "This is another description of how this project is useful",
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: "right",
            title: "Description",
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              "Each new Docusaurus project has **randomly-generated** theme colors.",
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: "right",
            title: "Randomly Generated Theme Colors",
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: "This is the content of my feature",
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: "top",
            title: "Feature One",
          },
          {
            content: "The content of my second feature",
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: "top",
            title: "Feature Two",
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          {/* <FeatureCallout /> */}
          <Block background="light">
            {[
              {
                content:
                  "Mathlogは数学特化の情報共有サービスで、精錬されたデザインの数学記事を誰でも簡単に作成できます。",
                image: `${baseUrl}img/undraw_Server_push_re_303w.svg`,
                imageAlign: "left",
                title: "Mathlogとは",
              },
            ]}
          </Block>
          <Block>
            {[
              {
                content:
                  "使い方ガイドではMathlogのエディタの使い方やより便利に閲覧できる機能に関する説明をしています。",
                image: `${baseUrl}img/undraw_Documents_re_isxv.svg`,
                imageAlign: "right",
                title: "使い方ガイド",
              },
            ]}
          </Block>
          <Block background="light">
            {[
              {
                content:
                  "Twitter等でもらったよくある質問に対する回答を記載しています。悩み事があったらご活用ください。",
                image: `${baseUrl}img/undraw_Questions_re_1fy7.svg`,
                imageAlign: "left",
                title: "よくある質問",
              },
            ]}
          </Block>
          <Block>
            {[
              {
                content:
                  "開発者ブログでは、Mathlog運営が開催したイベントやアップデート情報等を紹介していきます。",
                image: `${baseUrl}img/undraw_developer_activity_bv83.svg`,
                imageAlign: "right",
                title: "開発者ブログ",
              },
            ]}
          </Block>
        </div>
      </div>
    );
  }
}

module.exports = Index;
