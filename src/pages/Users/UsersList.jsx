import React, { useEffect } from "react";

import { Button } from "@mui/material";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";


// import axios from "axios";
import UserCard from "./UserCard";

 const UsersList = () => {
    const methods = useForm({
        defaultValues: {
          users: []
        }
      })
    
      const { control, handleSubmit, reset } = methods
    
      const { fields } = useFieldArray({
        name: "users",
        control: control,
        shouldUnregister: true
      })
    
      const onSave = (data) => {
        console.log(data)
      }
    
      useEffect(() => {
        const getUsersAsync = async () => {
          // const { data } = await axios.get("http://localhost:3000/users")
          // reset({
          //   users: data
          // })
        }
        getUsersAsync()
      }, [reset])
    
      return (
        <FormProvider {...methods}>
          {fields.map((user, index) => (
            <UserCard key={user.id} user={user} userIndex={index} />
          ))}
          <Button onClick={handleSubmit(onSave)}>Сохранить</Button>
        </FormProvider>
      );
    }

    export default UsersList;