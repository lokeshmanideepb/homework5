import { useState } from "react";
import { FixedSizeList as List } from "react-window";

interface Product
{
  id: number;
  name: string;
  price: number;
  category: string;
}
interface Problem4Props
{
  initialCount?: number;
}

// Generate sample products
const generateProducts = ( count: number ): Product[] =>
{
  const categories = [ "Electronics", "Books", "Clothing", "Home", "Sports" ];
  return Array.from( { length: count }, ( _, index ) => ( {
    id: index,
    name: `Product ${ index }`,
    price: parseFloat( ( Math.random() * 100 ).toFixed( 2 ) ),
    category: categories[ Math.floor( Math.random() * categories.length ) ],
  } ) );
};

export default function Problem4 ( { initialCount = 100000 }: Problem4Props )
{
  const [ products ] = useState( generateProducts( initialCount ) );

  // Hint: Use data-testid={`product-row-${index}`} in each product <div>
  return (
    <div style={{ padding: "20px" }}>
      <h1>Problem 4: List Virtualization</h1>
      <p>
        Rendering a list of 100,000 products without virtualization. Observe the
        performance issues.
      </p>
      <div style={{ marginTop: "20px" }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Notice the lag when rendering a large list.</li>
          <li>Implement list virtualization using react-window.</li>
          <li>Observe the improved performance after optimization.</li>
        </ol>
      </div>
      <List
        height={600}
        itemCount={products.length}
        itemSize={50}
        width={600}
        overscanCount={5}
        itemData={products}>
        {( { index, style } ) =>
        {
          const product = products[ index ];
          return (
            <div
              style={{
                ...style,
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
              data-testid={`product-row-${ index }`}
            >
              <span>{product.name}</span>
              <span>${product.price.toFixed( 2 )}</span>
              <span>{product.category}</span>
            </div>
          );
        }}
      </List>
    </div>
  );
}
