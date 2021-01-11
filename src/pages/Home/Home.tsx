import React, { useState } from 'react';
import { Header, NumbersTable, SearchNumbers, TelecomCard } from 'components';
import { Col, Row, Container } from 'react-bootstrap';
import { Colors } from 'utils';
import { CardGrid } from './styles';
import { debounce } from 'lodash';
import useTotalSetupPrice from 'hooks/useTotalCount';
import useListNumbersWithPooling from 'hooks/useListNumbersWithPooling';

const Home = () => {
  const totalCount = useTotalSetupPrice();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { numbers } = useListNumbersWithPooling(page, query, 10000);

  const onFiltering = debounce((event: any) => {
    const query = event.target.value || '';
    setQuery(query);
  }, 500);

  return (
    <>
      <Header />
      <Container className="pb-4">
        <Row>
          <Col>
            <CardGrid>
              <TelecomCard
                title="Numbers Available"
                value={totalCount.numbers}
                colors={[Colors.blue, Colors.primary]}
              />
              <TelecomCard
                title="Total Setup Price"
                value={totalCount.setupPrice}
                colors={[Colors.green, Colors.primary]}
              />
              <TelecomCard
                title="Total Monthy Price"
                value={totalCount.monthyPrice}
              />
            </CardGrid>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <SearchNumbers onChange={onFiltering} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NumbersTable
              data={numbers?.data}
              totalRows={numbers?.total}
              handleChangePage={setPage}
              progressPending={numbers?.loading}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
