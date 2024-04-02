import type React from 'react';

// import { Container } from './styles';
import { useState,useEffect } from 'react';

const useAppSupplies: React.FC = ({ value }) => {
  const [supplies, setSupplies] = useState<string[] | null>([]);
  const [allSupplies, setAllSupplies] = useState<string[] | null>([]);
  const [suppliesChain, setSuppliesChain] = useState<string | null>("");
  useEffect(() => {
    fetchSupplies(value);
  }, [value]);
 
 const fetchSupplies=(value: any)=>{
    fetch("http://localhost:3000/supplies")
   .then(res=>res.json()).then(res=> 
    
    setSupplies(res)
    setAllSupplies(res)
    )
 }


  return {
     supplies, 
    allSupplies, 
    setSuppliesChain, 
    suppliesChain, 
    fetchSupplies 

  }
};

export default useAppSupplies;