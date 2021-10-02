import React from "react";
import {makeStyles, TableCell} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import("./TransactionMaterialTable.scss");

function TransactionMaterialTable({array}) {

    console.log(array);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const useStyles = makeStyles({
        table: {
            maxWidth: "710%",
            borderRadius: 8.74,
        },
        sampleContent: {
            borderRadius: 8.74,
            maxWidth: "810%",
            maxHeight: '600px'
        },
        tableHeaderColumns: {
            color: 'white',
            width: '200px',
            fontSize: '10px',
            height: 1
        },
        tableHead: {
            height: 1,
            backgroundColor: 'blue'
        },
        tableBodyColumn: {
            color:'black',
            fontSize:'10px',
            fontColor: 'black'
        }

    });

    const classes = useStyles();
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <div className="transaction-table-container">
                <div className="teacher-table-title-header">
                    <h1 className="transaction-title-header">Course Content</h1>
                </div>
                <TableContainer component={Paper} className={classes.sampleContent}>
                    <Table padding={"none"} className={classes.table} aria-label="simple table">
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Transaction ID</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Date</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Amount</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Description</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Done By</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Type</TableCell>
                                <TableCell align="center" className={classes.tableHeaderColumns}>Course ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {array?.map((row) => (
                                <TableRow>
                                    <TableCell align="center" className={classes.tableHeaderColumns}><div className="transaction-table-column">{row.tid}</div></TableCell>
                                    <TableCell align="center" className={classes.tableHeaderColumns}><div className="transaction-table-column">{row.date}</div></TableCell>
                                    <TableCell align="center" className={classes.tableHeaderColumns}><div className="transaction-table-column">{row.amount}</div></TableCell>
                                    <TableCell align="center" className={classes.tableHeaderColumns}><div className="transaction-table-column">{row.description}</div></TableCell>
                                    <TableCell align="center" className={classes.tableHeaderColumns}><div className="transaction-table-column">{row.doneby}</div></TableCell>
                                    <TableCell align="center" className={classes.tableHeaderColumns}><div className="transaction-table-column">{row.type}</div></TableCell>
                                    <TableCell align="center" className={classes.tableHeaderColumns}><div className="transaction-table-column">{row.courseid}</div></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={5}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    component="div"
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </React.Fragment>
    )
}
export default TransactionMaterialTable;
