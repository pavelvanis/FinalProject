import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/UserAuth";

export default function Logout() {
  const { logout, currentUser } = useAuth();

  const handleAction = async (e) => {
    e.preventDefault();

    if(!currentUser) return;

    try {
        await logout();
        console.log('loged out');
    }catch (error) {
        console.log(error);
    }
  };

  return <Button onClick={handleAction}>logout</Button>;
}
