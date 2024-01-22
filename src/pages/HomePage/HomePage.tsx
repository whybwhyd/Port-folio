import * as St from './style';
import Layout from 'component/Layout/Layout/Layout';

const HomePage = () => {
  return (
    <St.Outer>
      <Layout>
        <St.Home>Home</St.Home>
        <St.Portfolio>portfolio</St.Portfolio>
        <St.AboutMe>about me</St.AboutMe>
        <St.Skills>skills</St.Skills>
        <St.Contact>contact</St.Contact>
      </Layout>
    </St.Outer>
  );
};

export default HomePage;
