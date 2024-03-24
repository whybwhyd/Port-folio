import React from 'react';
import * as St from './style';

const AboutMe = () => {
  return (
    <div>
      <St.IdCard>
        <div>Introduce & Experience</div>
        <>Introduce</>
        <div>
          웹 모바일 모두 React 기반으로 만들 수 있는 프론트엔드 엔지니어입니다.
        </div>
        <div>
          반응형 페이지를 구성하여 웹페이지 및 모바일 웹페이지를 구성할 수
          있습니다. 프로젝트 Glog에서 반응형 페이지를 구성하였습니다.
        </div>
        <div>개발 지식 공유 문화를 지향합니다.</div>
        <div>
          프로젝트를 하면서 헷갈리거나 새로 알게 된 기능들을 꾸준하게 velog에
          기록하고 있습니다. 새로운 기능을 익히면서 저 역시도 많은 자료를
          참고했기 때문에 기록을 공유하고자 합니다.
        </div>
        <div>
          협업에서 원활한 소통과 존중의 자세가 가장 중요하다고 생각합니다.
        </div>
        <div>
          4~6명의 인원과 함께 6번의 팀프로젝트를 겪으면서 큰 충돌이 없었기에
          소통이 중요하다고 생각했습니다. 의견을 낼 때 명확한 근거 전달을 하며,
          팀원의 의견을 존중해야 한다고 생각합니다.
        </div>
        <>Experience</>
        <div>사용자 피드백을 반영한 웹페이지 개발</div>
        <div>Three.js 기반의 라이브러리 활용한 웹페이지 개발 </div>
        <div>git, slack, figma 을 통한 협업 경험</div>
      </St.IdCard>
    </div>
  );
};

export default AboutMe;
