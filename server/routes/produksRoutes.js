import express from 'express';
import { Produk } from '../models/produkModel.js';

const router = express.Router();

// Route for Save a new product
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.nama_produk||
      !request.body.keterangan ||
      !request.body.harga ||
      !request.body.jumlah
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newProduk = {
      nama_produk: request.body.nama_produk,
      keterangan: request.body.keterangan,
      harga: request.body.harga,
      jumlah : request.body.jumlah
    };

    const produk = await Produk.create(newProduk);

    return response.status(201).send(produk);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const produk = await Produk.find({});

    return response.status(200).json({
      count: produk.length,
      data: produk,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Route for Get One Product from the database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const product = await Produk.findById(id); // Fix the variable name

    return response.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});


// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.nama_produk||
      !request.body.keterangan ||
      !request.body.harga ||
      !request.body.jumlah
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Produk.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Produk.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;