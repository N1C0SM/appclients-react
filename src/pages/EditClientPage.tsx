const { id } =
useParams();
Carga inicial:
useEffect(() => {
loadClient();
}, []);

const data =
await ClientsService
.getClient(
Number(id)
);
await ClientsService
.updateClient(
Number(id),
client
);