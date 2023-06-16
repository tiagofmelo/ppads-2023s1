import {
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Select,
  Switch,
  FormLabel
} from "@chakra-ui/react";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import React, { useState } from "react";
import { SelectorButton } from "./SelectorButton";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { CurrencyInput } from "./CurrencyInput";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { toast } from "react-toastify";
import { categories } from "../utils/categories";
import { Label } from "recharts";

type NewTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Transaction = {
  authorId: string;
  name: string;
  price: number;
  isDeposit: boolean;
  category: string;
  createdAt: Timestamp;
};

export function NewTransactionModal({
  isOpen,
  onClose,
}: NewTransactionModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isDeposit, setIsDeposit] = useState(true);
  const { user } = useFirebaseAuth();
  const formatToNumber = (s: string) => Number(s.replace(",", "."));

  async function handleCreateTransaction() {
    if (!name.trim() || !price) {
      return;
    }

    try {
      await addDoc(collection(db, "transactions"), {
        authorId: user?.id,
        name,
        price: formatToNumber(price),
        isDeposit,
        category: category != "" ? category : "other",
        createdAt: Timestamp.now(),
      } as Transaction);

      setName("");
      setPrice("");
      setIsDeposit(true);
      toast.success("Transação adicionada com sucesso");
    } catch (e) {
      toast.error("Erro ao criar sua transação");
      setName("");
      setPrice("");
      setIsDeposit(true);
    }
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <ModalHeader>
          <Text textAlign="center">Cadastrar Transação</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap="8px">
            <Input
              placeholder="Nome"
              bg="white.200"
              p="24px"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              _focus={{
                borderBottom: "2px solid #DC1637",
              }}
            />
            <CurrencyInput data={price} setData={setPrice} />
            <HStack w="100%">
              <SelectorButton
                color="green.500"
                icon={BsArrowUpCircle}
                label="Entrada"
                isActive={isDeposit}
                onClick={() => setIsDeposit(true)}
              />
              <SelectorButton
                color="red.500"
                icon={BsArrowDownCircle}
                label="Saída"
                isActive={!isDeposit}
                onClick={() => setIsDeposit(false)}
              />
            </HStack>
            <Select
              placeholder="Selecione a categoria"
              data-testid="select"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCategory(e.target.value)
              }
              bg="white.300"
              h="48px"
              value={category}
              _focus={{
                borderBottom: "2px solid #DC1637",
              }}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.label}
                </option>
              ))}
            </Select>
            <HStack w="100%">
              <FormLabel marginTop={'0.5em'}>
                Ativar Notificação
              </FormLabel>
              <Switch size='md' />
            </HStack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            w="100%"
            bg="red.500"
            color="white"
            p="24px"
            _hover={{
              filter: "brightness(0.9)",
            }}
            onClick={handleCreateTransaction}
          >
            Cadastrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
