// Dashboard.tsx
import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
} from "@mui/material";

const drawerWidth = 240;

const Dashboard = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        소상공간 관리자 대시보드
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {["홈", "사용자", "거래", "설정"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
                <Toolbar />
                <Container>
                    <Typography paragraph>
                        이곳은 콘텐츠 영역입니다. 여기에 차트, 통계, 최근 활동
                        등 다양한 대시보드 정보를 표시할 수 있습니다.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Dashboard;
