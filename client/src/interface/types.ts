export interface ProductCardProps {
  id: string;
  item_name: string;
  description: string;
  originalPrice: number;
  currency: string;
  discount: number;
  token_id: string;
  blockchain_network: string;
  smart_contract_address: string;
  image_url: string;
  available_quantity: number;
  is_favorite: boolean;
}
