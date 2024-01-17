FROM mcr.microsoft.com/dotnet/sdk:7.0 AS base
WORKDIR /app
EXPOSE 5136

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["nginx-backend.csproj", "."]
RUN dotnet restore "nginx-backend.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "nginx-backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "nginx-backend.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "nginx-backend.dll"]

ENV ASPNETCORE_URLS=http://+:5136
