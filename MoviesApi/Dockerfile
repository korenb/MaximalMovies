FROM mcr.microsoft.com/dotnet/core/sdk AS build

WORKDIR /app

# copy csproj and restore as distinct layers
# COPY *.sln .
COPY *.csproj .
RUN dotnet restore

# copy everything else and build app
COPY . .
RUN dotnet publish -c Debug -o out

FROM mcr.microsoft.com/dotnet/core/aspnet as runtime
WORKDIR /app
COPY --from=build /app/out ./

ENTRYPOINT [ "dotnet", "MoviesApi.dll" ]