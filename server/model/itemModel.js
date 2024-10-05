const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    item_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["ETH", "SOL", "BNB", "USDC", "BTC"],
      required: true,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
    },
    token_id: {
      type: String,
      required: true,
    },
    blockchain_network: {
      type: String,
      enum: ["Ethereum", "Polygon", "Binance Smart Chain", "Solana"],
      required: true,
    },
    smart_contract_address: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    available_quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    is_favorite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
