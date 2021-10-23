import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';

const ProductDetails = () => {
    return (
        <div className="product-details-container">
            <div className="product-details-card">
                <div className="goback-container">
                    <ArrowIcon />
                    <h2>VOLTAR</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="" />
                        </div>
                        <div className="name-price-container">
                            <h1>Nome do produto</h1>
                            <ProductPrice price={2345.67}/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição do produto</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus at eveniet obcaecati fuga veritatis rerum iusto sit fugiat, perspiciatis ipsum deleniti laborum illo incidunt laudantium velit quisquam quaerat? Fuga, asperiores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
