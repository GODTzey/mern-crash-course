import React, {useEffect} from 'react';
import {Container, Heading, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useProductStore} from "../store/product.js";
import ProductCard from "../components/productCard.jsx";

const HomePage = () => {
    const {fetchProducts, products} = useProductStore();

    useEffect( () => {
        fetchProducts();
    }, [fetchProducts]);
    console.log(products);


    return (
        <Container maxW={"container.xl"} py={12}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Current Products
                </Heading>

                <SimpleGrid
                    columns={{base: 1, md: 2, lg: 3}}
                    spacing={10}
                    w={"full"}
                >
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product}/>
                    ))}
                </SimpleGrid>

                {products.length === 0 && (
                    <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
                        No products found 😥{" "}
                        <Link to={"/create"}>
                            <Text as={"span"} color={"blue.500"} _hover={{ textDecoration: "underline"}}>
                                Create a product
                            </Text>
                        </Link>
                    </Text>
                )}
            </VStack>
        </Container>
    );
};
export default HomePage;
