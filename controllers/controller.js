import express from "express";
import Service from "../service/service.js";



class Controller{
service = new Service();

getAll=async(req, res) => {
    const data = await this.service.getAll()
    res.status(200).send(data);
  // res.send("controller")
  }

create =async(req, res) => {
    try{
const {nombre } = req.body;
const data = await this.service.create({nombre});   // PASAR LO QUE SE NECESITE, PUEDE SER CATEGORIA
    res.status(200).send(data);
    }catch(error){
        res.status(400).send({ message: error.message });

    }

  // res.send("controller")
  }
};


export default Controller;

