const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['Food', 'Transport', 'Bills', 'Entertainment', 'Other'], 
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

  const Expense = mongoose.model('Expense',expenseSchema)

  module.exports = Expense