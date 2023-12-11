import * as St from './style';
import gihubMark from '../../../assets/githubMark.png';
import velogLogo from '../../../assets/velogLogo.png';
import notionLogo from '../../../assets/notionLogo.png';

const Footer = () => {
  return (
    <St.FooterWrapper>
      <St.FooterContents>
        <a
          href="https://github.com/whybwhyd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="githubMark" src={gihubMark} />
        </a>
        <a
          href="https://velog.io/@jntantmsemt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="velogLogo" src={velogLogo} />
        </a>
        <a
          href="https://www.notion.so/1a8d8bdc9176467ba0bc3423fa0e91fa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="notionLogo" src={notionLogo} />
        </a>
        {/* 노션은 대체할 링크가 생기면 고치기! */}
      </St.FooterContents>
    </St.FooterWrapper>
  );
};

export default Footer;
