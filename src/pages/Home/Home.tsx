import { Header, TelecomCard } from 'components';
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Colors } from 'utils';
import { CardGrid } from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <CardGrid>
              <TelecomCard title="Numbers Available" value={800} />
              <TelecomCard
                title="Total Budget"
                value={15.6}
                colors={[Colors.green, Colors.primary]}
              />
            </CardGrid>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
