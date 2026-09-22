import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function CartItem({ item, onUpdateQuantity, onRemoveFromCart }) {
  const subtotal = item.price * item.quantity;

  return (
    <TableRow
      sx={{
        '&:hover': { backgroundColor: '#F5F5F5' },
        transition: 'background-color 0.2s',
      }}
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 object-cover rounded-lg border border-gray-100"
          />
          <span className="font-medium text-gray-900">{item.name}</span>
        </div>
      </TableCell>

      <TableCell align="center">
        <span className="text-gray-600 text-sm">₱{item.price.toLocaleString()}</span>
      </TableCell>

      <TableCell align="center">
        <div className="flex items-center justify-center gap-2">
          <IconButton
            size="small"
            onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
            disabled={item.quantity <= 1}
            sx={{ color: '#18181B' }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>

          <span className="font-semibold text-gray-900 w-8 text-center text-sm">
            {item.quantity}
          </span>

          <IconButton
            size="small"
            onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
            sx={{ color: '#18181B' }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </div>
      </TableCell>

      <TableCell align="center">
        <span className="font-semibold text-gray-900">
          ₱{subtotal.toLocaleString()}
        </span>
      </TableCell>

      <TableCell align="center">
        <IconButton
          onClick={() => onRemoveFromCart(item.productId)}
          sx={{ color: '#D32F2F' }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
