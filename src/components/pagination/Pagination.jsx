import { Stack } from "react";
import React from "react";
import '../App.scss'
import { StyledPagination } from "./Pagination.styled";

export const Pagination = () => {
    return (
      <StyledPagination>
          
          <Stack spacing={2}>
            <Pagination count={10}/>
          </Stack>
 
      </StyledPagination>
    )
}