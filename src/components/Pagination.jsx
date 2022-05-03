import { Stack } from "@mui/material";
import React from "react";
import '../App.scss'

export const Pagination = () => {
    return (
        <div className="pagination">
        <Stack spacing={2}>
          <Pagination count={10}/>
        </Stack>
      </div>
    )
}