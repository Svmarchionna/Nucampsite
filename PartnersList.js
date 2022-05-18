import { Col, Row, } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = selectAllPartners();
        return (
            <Col  className='mt-4'>
                <Row>
                {partners.map((partner) => {
                return (
                    <div  className='d-flex mb-5' key={Partner.id}>
                        <partner partner={partner} />
                    </div>
                    );
                })}
                </Row>
            </Col>
        );
    };

export default PartnersList; 