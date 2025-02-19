import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tabo = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>age </TableCell>
                    <TableCell>place</TableCell>
                    </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>nijitha</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>palakkad</TableCell>
                
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                    <TableCell>divya</TableCell>
                    <TableCell>23</TableCell>
                    <TableCell>palakkad</TableCell>
                
                </TableRow>
            </TableBody>
            
            </Table>
      </TableContainer>
    </div>
  )
}

export default Tabo
