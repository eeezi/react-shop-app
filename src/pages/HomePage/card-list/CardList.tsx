import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/products/products.slice";
import styles from './CardList.module.scss';
import CardItem from "./card-item/CardItem";
import CardSkeleton from "../card-skeleton/CardSkeleton";

const CardList = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading } = useAppSelector(state => state.products);
    const category = useAppSelector(state => state.category);
    
    useEffect(() => {
        dispatch(fetchProducts(category?.toLowerCase()));
    }, [category])


    if (isLoading) return <CardSkeleton />;

    return (
        <ul className={styles.card_list}> 
            {products.map(product => <CardItem key={product.id} item={product} />)}
        </ul>
    )
}

export default CardList;