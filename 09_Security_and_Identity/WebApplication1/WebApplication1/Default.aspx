<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <% if(Request.IsAuthenticated){ %>
        <div>
            <h1>Claims</h1>
            <div><a  runat="server" href="~/Logout.aspx">Logout</a></div>
            <asp:GridView runat="server" ID="_grid"></asp:GridView>
        </div>
    <% }else{ %>
        <div>Not logged in</div>
        <div><a runat="server" href="~/Login.aspx">Login</a></div>
    <% } %>
    </form>
</body>
</html>
