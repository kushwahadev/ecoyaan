import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

function SubNavbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // drawer app
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          "Home",
          "About Us",
          "Sell on Ecoyaan",
          "Careers",
          "Privacy Policy",
          "Terms of Use",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                className="bg-green-700 w-full text-white font-medium text-sm rounded-3xl p-2 text-center"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div className="lg:hidden flex flex-wrap gap-5 ">
        <Button onClick={toggleDrawer(true)}>
          <img src="/images/nav.png" alt="logo" />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <h4
            className="col-span-2 text-3xl text-lime-600 transition-all duration-500
         font-extrabold  hover:text-4xl  text-center"
          >
            Ecoyaan
          </h4>
          {DrawerList}
        </Drawer>

        <h4
          className="col-span-2 text-3xl text-lime-600 transition-all duration-500
         font-bold  hover:text-4xl hover:font-extrabold text-left"
        >
          Ecoyaan
        </h4>
      </div>
    </>
  );
}

export default SubNavbar;
