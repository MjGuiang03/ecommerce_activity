import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

function CartPage({ cart, onUpdateQuantity, onRemoveFromCart, cartTotal }) {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 mt-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: '12px',
          border: '1px solid #E5E5E5',
          overflow: 'hidden',
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
              <TableCell sx={{ fontWeight: 600, color: '#171717' }}>
                Product
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, color: '#171717' }}>
                Price
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, color: '#171717' }}>
                Quantity
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, color: '#171717' }}>
                Subtotal
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, color: '#171717' }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <CartItem
                key={item.productId}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CartSummary cartTotal={cartTotal} itemCount={itemCount} />
    </div>
  );
}

CartPage.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  cartTotal: PropTypes.number.isRequired,
};

export default CartPage;
