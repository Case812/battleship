import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button, DialogActions, DialogContentText } from "@mui/material";

export default function EndDialog(params: { open: boolean, onClose: () => void }) {
    return <>
        <Dialog open={params.open} onClose={() => params.onClose()}>
            <DialogTitle>You won</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You successfully won the game.
                    You can start a new game.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => params.onClose()}
                    autoFocus>
                    Start New Game
                </Button>
            </DialogActions>
        </Dialog>
    </>
}